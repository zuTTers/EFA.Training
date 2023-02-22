import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DashboardDialogComponent } from './dashboard-dialog.component';
import { QueryInfo, Pager } from '../../../shared/query-info';
import { TranslateService } from '@ngx-translate/core';
import { environment } from "environments/environment";
import { ComfirmDialogComponent } from "../../../shared/components/comfirm/comfirm.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationService } from '../../../shared/services/navigation.service'
import { CustomerData, CustomerFilter } from '../Customer/customer.component';
import { CustomerService } from '../Customer/customer.service';
import { CustomerDialogComponent } from '../Customer/customer-dialog.component';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'dashboard-table',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    queryInfo: QueryInfo;
    showSpinner: boolean = false;
    displayedColumnsPatient: string[] = [];
    displayedColumnsVaccination: string[] = [];
    patientDataSource: any;
    vaccinationDataSource: any;
    pageEvent: PageEvent;
    searchCustomerId: number;
    customerFilter: CustomerFilter;
    searchCustomerData: CustomerData;

    //QR CODE DECLARE
    availableDevices: MediaDeviceInfo[];
    currentDevice: MediaDeviceInfo = null;
    formatsEnabled: BarcodeFormat[] = [
        BarcodeFormat.CODE_128,
        BarcodeFormat.DATA_MATRIX,
        BarcodeFormat.EAN_13,
        BarcodeFormat.QR_CODE,
    ];
    hasDevices: boolean;
    hasPermission: boolean;
    qrResultString: string;
    torchEnabled = false;
    torchAvailable$ = new BehaviorSubject<boolean>(false);
    tryHarder = false;

    constructor(
        private dashboardService: DashboardService,
        private customerService: CustomerService,
        public dialog: MatDialog,
        public translate: TranslateService,
        private snackbar: MatSnackBar,
        private navigationService: NavigationService) { }

    ngOnInit() {
        this.queryInfo = new QueryInfo();
        this.queryInfo.pager = new Pager();
        this.queryInfo.pager.currentPage = 0;
        this.queryInfo.pager.pageSize = 10;
        this.queryInfo.pager.totalCount = 0;
        this.customerFilter = new CustomerFilter();
    }

    ngAfterViewInit() {

    }

    clearFilter() {
        this.customerFilter = new CustomerFilter();
    }

    filterData() {
        this.queryInfo.pager.currentPage = 0;
    }

    getCustomerData() {
        this.showSpinner = true;
        let columnInfo = null;
        this.customerFilter.customerId = this.searchCustomerId;
        this.customerService.getData(this.customerFilter, this.queryInfo, columnInfo, false)
            .subscribe((response: any) => {
                this.navigationService.sessionControl(response);
                this.showSpinner = false;
                if (response.isSuccess) {
                    this.searchCustomerData = response.data[0];
                }
                else {
                    this.snackbar.open(this.translate.instant("GENERAL.ERROR"),
                        this.translate.instant(response.error), {
                        horizontalPosition: 'start',
                        verticalPosition: 'bottom',
                        duration: 2000
                    });
                }
            }, (error) => {
                this.showSpinner = false;
                this.snackbar.open(this.translate.instant("GENERAL.ERROR"),
                    this.translate.instant(error), {
                    horizontalPosition: 'start',
                    verticalPosition: 'bottom',
                    duration: 2000
                });
            });
    }


    onChange($event) {
        this.searchCustomerId = $event;
        this.getCustomerData();
    }

    newCustomerDialog() {
        let emptyData = new CustomerData();

        emptyData.customerId = 0;
        emptyData.identityNumber = '';
        emptyData.fullName = '';
        emptyData.phoneNumber = '';
        emptyData.address = '';
        emptyData.createdUser = 0;
        emptyData.createdDate = new Date();
        emptyData.updatedUser = 0;
        emptyData.updatedDate = new Date();

        this.openCustomerDialog(emptyData, true);
    }

    editCustomerDialog(row: CustomerData) {
        this.openCustomerDialog(row, false);
    }

    openCustomerDialog(row: CustomerData, isNew: boolean) {
        this.dialog.open(CustomerDialogComponent, {
            width: '100%',
            hasBackdrop: true,
            disableClose: true,
            data: {
                row: row,
                isNew: isNew
            }
        }).afterClosed()
            .subscribe(response => {
                if (response.operation == "save") {
                    this.getCustomerData();
                }
            });
    }

    //QR CODE METHODS
    clearResult(): void {
        this.qrResultString = null;
    }

    onCamerasFound(devices: MediaDeviceInfo[]): void {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
    }

    onCodeResult(resultString: string) {
        this.qrResultString = resultString;
    }

    onDeviceSelectChange(selected: string) {
        const device = this.availableDevices.find(x => x.deviceId === selected);
        this.currentDevice = device || null;
    }

    onHasPermission(has: boolean) {
        this.hasPermission = has;
    }

    onTorchCompatible(isCompatible: boolean): void {
        this.torchAvailable$.next(isCompatible || false);
    }

    toggleTorch(): void {
        this.torchEnabled = !this.torchEnabled;
    }

    toggleTryHarder(): void {
        this.tryHarder = !this.tryHarder;
    }

}