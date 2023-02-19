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
import { PatientService } from '../Patient/patient.service';
import { PatientData, PatientFilter } from '../Patient/patient.component';
import { CustomerData, CustomerFilter } from '../Customer/customer.component';
import { CustomerService } from '../Customer/customer.service';
import { VaccinationTransactionService } from '../VaccinationTransaction/vaccinationtransaction.service';
import { CustomerDTO, VaccinationTransactionData, VaccinationTransactionDataNew, VaccinationTransactionFilter } from '../VaccinationTransaction/vaccinationtransaction.component';
import { VaccinationTransactionDialogComponent } from '../VaccinationTransaction/vaccinationtransaction-dialog.component';
import { CustomerDialogComponent } from '../Customer/customer-dialog.component';
import { PatientDialogComponent } from '../Patient/patient-dialog.component';
import { VaccinationTransactionDateDialogComponent } from '../VaccinationTransaction/vaccinationtransaction-datedialog.component';

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
    patientFilter: PatientFilter;
    customerFilter: CustomerFilter;
    vaccinationFilter: VaccinationTransactionFilter;
    searchCustomerData: CustomerData;

    constructor(
        private dashboardService: DashboardService,
        private patientService: PatientService,
        private customerService: CustomerService,
        private vaccinationTransactionService: VaccinationTransactionService,
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
        this.patientFilter = new PatientFilter();
        this.vaccinationFilter = new VaccinationTransactionFilter();
    }

    ngAfterViewInit() {

    }

    clearFilter() {
        this.customerFilter = new CustomerFilter();
        this.patientFilter = new PatientFilter();
        this.vaccinationFilter = new VaccinationTransactionFilter();
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
                    this.getPatientData();
                    this.getVaccinationData();
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

    getPatientData() {
        this.showSpinner = true;
        let columnInfo = null;

        this.displayedColumnsPatient = this.getPatientDataConf().filter((x) => x.showColumn == true).map((c) => c.prop);
        this.patientFilter.customerId = this.searchCustomerId;

        this.patientService.getData(this.patientFilter, this.queryInfo, columnInfo, false)
            .subscribe((response: any) => {
                this.navigationService.sessionControl(response);
                this.showSpinner = false;
                if (response.isSuccess) {
                    this.queryInfo.pager.totalCount = response.totalCount;
                    this.patientDataSource = new MatTableDataSource(response.data);
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

    getVaccinationData() {
        this.showSpinner = true;
        let columnInfo = null;

        this.displayedColumnsVaccination = this.getVaccinationDataConf().filter((x) => x.showColumn == true).map((c) => c.prop);
        this.vaccinationFilter.customerId = this.searchCustomerId;

        this.vaccinationTransactionService.getData(this.vaccinationFilter, this.queryInfo, columnInfo, false)
            .subscribe((response: any) => {
                this.navigationService.sessionControl(response);
                this.showSpinner = false;
                if (response.isSuccess) {
                    this.queryInfo.pager.totalCount = response.totalCount;
                    this.vaccinationDataSource = new MatTableDataSource(response.data);
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

    getPatientDataConf() {
        return [
            {
                prop: 'Actions',
                translate: 'ACTIONS',
                showColumn: true,
                isExport: false,
                localText: ''
            },
            {
                prop: 'patientId',
                translate: 'PATIENTID',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'fullName',
                translate: 'FULLNAME',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'gender',
                translate: 'GENDER',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'genuId',
                translate: 'GENUID',
                showColumn: true,
                isExport: true,
                localText: ''
            }
        ];
    }

    getVaccinationDataConf() {
        return [

            {
                prop: 'Actions',
                translate: 'ACTIONS',
                showColumn: true,
                isExport: false,
                localText: ''
            },
            {
                prop: 'vaccinationId',
                translate: 'VACCINATIONID',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'patientId',
                translate: 'PATIENTID',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'vetId',
                translate: 'VETID',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'statusId',
                translate: 'STATUSID',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'vaccinationType',
                translate: 'VACCINATIONTYPE',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'vaccinationDate',
                translate: 'VACCINATIONDATE',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'description',
                translate: 'DESCRIPTION',
                showColumn: true,
                isExport: true,
                localText: ''
            }
        ];
    }

    onChange($event) {
        this.searchCustomerId = $event;
        this.getCustomerData();
    }

    sortPatientData($event) {
        this.queryInfo.orderby = $event.active;
        if ($event.direction == 'desc') this.queryInfo.orderby = '-' + this.queryInfo.orderby;
        this.queryInfo.pager.currentPage = 0;
        this.getPatientData();
    }

    onPatientPaginateChange(event: PageEvent) {
        this.queryInfo.pager.currentPage = event.pageIndex;
        this.queryInfo.pager.pageSize = event.pageSize;
        this.getPatientData();
    }

    sortVaccinationData($event) {
        this.queryInfo.orderby = $event.active;
        if ($event.direction == 'desc') this.queryInfo.orderby = '-' + this.queryInfo.orderby;
        this.queryInfo.pager.currentPage = 0;
        this.getVaccinationData();
    }

    onVaccinationPaginateChange(event: PageEvent) {
        this.queryInfo.pager.currentPage = event.pageIndex;
        this.queryInfo.pager.pageSize = event.pageSize;
        this.getVaccinationData();
    }

    newVaccinationDialog(selectedPatientId:number) {
        let emptyData = new VaccinationTransactionData();
        // let emptyData = new VaccinationTransactionDataNew();
        // let customerData = new CustomerData();
        // let patientData: PatientData[];

        emptyData.vaccinationId = 0;
        emptyData.customerId = this.searchCustomerId;
        emptyData.patientId = selectedPatientId;
        emptyData.vetId = 1;
        emptyData.statusId = 1;
        emptyData.description = '';
        emptyData.vaccinationType = 0;
        emptyData.vaccinationDate = new Date();

        // emptyData.customerData = customerData;
        // emptyData.patientDataList = patientData;

        emptyData.createdUser = 0;
        emptyData.createdDate = new Date();
        emptyData.updatedUser = 0;
        emptyData.updatedDate = new Date();

        this.openNewVaccinationDialog(emptyData);
    }

    openNewVaccinationDialog(row: VaccinationTransactionData) {
        this.dialog.open(VaccinationTransactionDateDialogComponent, {
            width: '50%',
            hasBackdrop: true,
            disableClose: true,
            data: {
                row: row,
                isNew: true
            }
        }).afterClosed()
            .subscribe(response => {
                if (response.operation == "save") {
                    this.getCustomerData();
                }
            });
    }

    editVaccinationDialog(row: VaccinationTransactionData) {
        this.openVaccinationDialog(row);
    }

    openVaccinationDialog(row: VaccinationTransactionData) {
        this.dialog.open(VaccinationTransactionDialogComponent, {
            width: '100%',
            hasBackdrop: true,
            disableClose: true,
            data: {
                row: row,
                isNew: false
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

    newPatientDialog() {
        let emptyData = new PatientData();

        emptyData.patientId = 0;
        emptyData.customerId = 0;
        emptyData.fullName = '';
        emptyData.gender = false;
        emptyData.age = 0;
        emptyData.genuId = 0;
        emptyData.createdUser = 0;
        emptyData.createdDate = new Date();
        emptyData.updatedUser = 0;
        emptyData.updatedDate = new Date();

        this.openPatientDialog(emptyData, true);
    }

    editPatientDialog(row: PatientData) {
        this.openPatientDialog(row, false);
    }

    openPatientDialog(row: PatientData, isNew: boolean) {
        this.dialog.open(PatientDialogComponent, {
            width: '50%',
            hasBackdrop: true,
            disableClose: true,
            data: {
                row: row,
                isNew: isNew,
                customer: this.searchCustomerData
            }
        }).afterClosed()
            .subscribe(response => {
                if (response.operation == "save") {
                    this.getCustomerData();
                }
            });
    }

}