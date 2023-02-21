import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CustomerService } from './customer.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { CustomerDialogComponent } from './customer-dialog.component';
import { QueryInfo, Pager } from '../../../shared/query-info';
import { TranslateService } from '@ngx-translate/core';
import { environment } from "environments/environment";
import { ComfirmDialogComponent } from "../../../shared/components/comfirm/comfirm.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationService } from '../../../shared/services/navigation.service'



@Component({
    selector: 'customer-search',
    templateUrl: './customer-search.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerSearchComponent implements OnInit {
    queryInfo: QueryInfo;
    showSpinner: boolean = false;
    displayedColumns: string[] = [];
    dataSource: any;
    filter: CustomerFilter;
    pageEvent: PageEvent;
    searchCustomerId: number;
    customerFilter: CustomerFilter;
    searchCustomerData: CustomerData;

    constructor(private customerService: CustomerService,
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
        this.filter = new CustomerFilter();
    }

    filterData() {
        this.queryInfo.pager.currentPage = 0;
    }

    onChange($event) {
        this.searchCustomerId = $event;
        this.getCustomerData();
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

    
}



export class CustomerData {

    customerId: number;
    customerType: boolean;
    identityNumber: string;
    fullName: string;
    phoneNumber: string;
    age: number;
    gender: boolean;
    address: string;
    identityCode: string;
    firstStartDate: Date;
    workingStartDate: Date;
    workingEndDate: Date;
    isPaid: boolean;

    createdDate: Date;
    createdUser: number;
    createdUserText: string;
    updatedDate: Date;
    updatedUser: number;
    updatedUserText: string;

    constructor() {

    }
}

export class CustomerFilter {

    customerId: number;
    customerType: number;
    identityNumber: string;
    fullName: string;
    phoneNumber: string;
    address: string;
    createdDate: Date;
    createdDate2: Date;
    createdUser: number;
    updatedDate: Date;
    updatedDate2: Date;
    updatedUser: number;

    constructor() {

    }
}


