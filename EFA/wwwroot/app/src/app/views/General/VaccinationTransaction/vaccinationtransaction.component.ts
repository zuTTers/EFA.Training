import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { VaccinationTransactionService } from './vaccinationtransaction.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { VaccinationTransactionDialogComponent } from './vaccinationtransaction-dialog.component';
import { QueryInfo, Pager } from '../../../shared/query-info';
import { TranslateService } from '@ngx-translate/core';
import { environment } from "environments/environment";
import { ComfirmDialogComponent } from "../../../shared/components/comfirm/comfirm.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationService } from '../../../shared/services/navigation.service'
import { PatientData } from '../Patient/patient.component';
import { CustomerData } from '../Customer/customer.component';

@Component({
    selector: 'vaccinationtransaction-table',
    templateUrl: './vaccinationtransaction.component.html',
    styleUrls: ['./vaccinationtransaction.component.scss']
})

export class VaccinationTransactionComponent implements OnInit {
    queryInfo: QueryInfo;
    showSpinner: boolean = false;
    displayedColumns: string[] = [];
    dataSource: any;
    filter: VaccinationTransactionFilter;
    pageEvent: PageEvent;

    constructor(private vaccinationTransactionService: VaccinationTransactionService,
        public dialog: MatDialog,
        public translate: TranslateService,
        private snackbar: MatSnackBar,
        private navigationService: NavigationService) { }

    ngOnInit() {
        this.filter = new VaccinationTransactionFilter();
        this.queryInfo = new QueryInfo();
        this.queryInfo.pager = new Pager();
        this.queryInfo.pager.currentPage = 0;
        this.queryInfo.pager.pageSize = 10;
        this.queryInfo.pager.totalCount = 0;

        this.displayedColumns = this.getDataConf().filter((x) => x.showColumn == true).map((c) => c.prop)
        this.getData(false);
    }

    ngAfterViewInit() {

    }

    clearFilter() {
        this.filter = new VaccinationTransactionFilter();
    }

    filterData() {
        this.queryInfo.pager.currentPage = 0;
        this.getData(false);
    }

    downloadData() {
        this.getData(true);
    }

    sortData($event) {
        this.queryInfo.orderby = $event.active;
        if ($event.direction == 'desc') this.queryInfo.orderby = '-' + this.queryInfo.orderby;
        this.queryInfo.pager.currentPage = 0;
        this.getData(false);
    }

    onPaginateChange(event: PageEvent) {
        this.queryInfo.pager.currentPage = event.pageIndex;
        this.queryInfo.pager.pageSize = event.pageSize;
        this.getData(false);
    }

    getData(isExport: boolean) {
        this.showSpinner = true;
        let columnInfo = null;
        if (isExport) {
            columnInfo = this.getDataConf().filter(x => x.isExport == true)
                .map((x) => ({
                    prop: x.prop,
                    localText: this.translate.instant('VACCINATIONTRANSACTION.' + x.translate)
                }));
        }

        this.vaccinationTransactionService.getData(this.filter, this.queryInfo, columnInfo, isExport)
            .subscribe((response: any) => {
                this.navigationService.sessionControl(response);
                this.showSpinner = false;
                if (response.isSuccess) {
                    if (isExport) {
                        window.open(environment.apiURL + "/Download/FromCacheByKey?key=" + response.key, '_blank');
                    }
                    else {

                        this.queryInfo.pager.totalCount = response.totalCount;
                        this.dataSource = new MatTableDataSource(response.data);
                    }
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

    newItemDialog() {
        let emptyData = new VaccinationTransactionDataNew();
        let customerData = new CustomerData();
        let patientData: PatientData[];

        emptyData.vaccinationId = 0;
        emptyData.vetId = 0;
        emptyData.statusId = 0;
        emptyData.vaccinationType = 0;
        emptyData.vaccinationDate = new Date();
        emptyData.description = '';

        emptyData.customerData = customerData;
        emptyData.patientDataList = patientData;

        emptyData.createdUser = 0;
        emptyData.createdDate = new Date();
        emptyData.updatedUser = 0;
        emptyData.updatedDate = new Date();

        this.openDialogNewTransaction(emptyData);
    }

    editItemDialog(row: VaccinationTransactionData) {
        this.openDialogEditTransaction(row);
    }

    openDialogEditTransaction(row: VaccinationTransactionData) {
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
                if (response.operation == "cancel") {
                    this.getData(false);
                }
                else if (response.operation == "delete") {
                    this.delete(response.data);
                }
                else if (response.operation == "save") {
                    this.getData(false);
                }
            });
    }

    openDialogNewTransaction(row: VaccinationTransactionDataNew) {
        this.dialog.open(VaccinationTransactionDialogComponent, {
            width: '100%',
            hasBackdrop: true,
            disableClose: true,
            data: {
                row: row,
                isNew: true
            }
        }).afterClosed()
            .subscribe(response => {
                if (response.operation == "cancel") {
                    this.getData(false);
                }
                else if (response.operation == "delete") {
                    this.delete(response.data);
                }
                else if (response.operation == "save") {
                    this.getData(false);
                }
            });
    }


    delete(data: VaccinationTransactionData) {
        let deleteRow = data;
        this.dialog.open(ComfirmDialogComponent, {
            hasBackdrop: true
        }).afterClosed()
            .subscribe(response => {
                if (response.comfirm == true) {
                    this.vaccinationTransactionService.delete(deleteRow).subscribe((response: any) => {
                        this.navigationService.sessionControl(response);
                        if (response.isSuccess) {
                            this.snackbar.open(this.translate.instant("GENERAL.SUCCESS"),
                                this.translate.instant(response.message), {
                                horizontalPosition: 'start',
                                verticalPosition: 'bottom',
                                duration: 2000
                            });
                            this.getData(false);
                        }
                        else if (!response.isSuccess) {
                            this.snackbar.open(this.translate.instant("GENERAL.ERROR"),
                                response.errorMessage, {
                                horizontalPosition: 'start',
                                verticalPosition: 'bottom',
                                duration: 2000
                            });
                        }
                    },
                        (error) => {

                            this.showSpinner = false;

                            this.snackbar.open(this.translate.instant("GENERAL.ERROR"),
                                error, {
                                horizontalPosition: 'start',
                                verticalPosition: 'bottom',
                                duration: 2000
                            });

                        });
                }
                else {
                    this.snackbar.open(this.translate.instant("GENERAL.CANCELED"), "", {
                        horizontalPosition: 'start',
                        verticalPosition: 'bottom',
                        duration: 2000
                    });
                }
            });
    }

    getDataConf() {
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
                prop: 'customerId',
                translate: 'CUSTOMERID',
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
            },
            {
                prop: 'createdDate',
                translate: 'CREATEDDATE',
                showColumn: false,
                isExport: true,
                localText: ''
            },
            {
                prop: 'createdUser',
                translate: 'CREATEDUSER',
                showColumn: false,
                isExport: true,
                localText: ''
            },
            {
                prop: 'createdUserText',
                translate: 'CREATEDUSERTEXT',
                showColumn: false,
                isExport: true,
                localText: ''
            }
            ,
            {
                prop: 'updatedDate',
                translate: 'UPDATEDDATE',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'updatedUser',
                translate: 'UPDATEDUSER',
                showColumn: false,
                isExport: true,
                localText: ''
            },
            {
                prop: 'updatedUserText',
                translate: 'UPDATEDUSERTEXT',
                showColumn: true,
                isExport: true,
                localText: ''
            }
        ];
    }
}



export class VaccinationTransactionData {
    vaccinationId: number;
    customerId: number;
    customerName: string;
    patientId: number;
    patientName: string;
    vetId: number;
    vetName: string;
    statusId: number;
    statusName: string;
    vaccinationType: number;
    vaccinationDate: Date;
    description: string;
    createdDate: Date;
    createdUser: number;
    createdUserText: string;
    updatedDate: Date;
    updatedUser: number;
    updatedUserText: string;

    constructor() {

    }
}

export class VaccinationTransactionDataNew {
    vaccinationId: number;
    vetId: number;
    statusId: number;
    vaccinationType: number;
    vaccinationDate: Date;
    description: string;
    customerId: number;
    patientId: number;

    patientDataList: PatientDTO[];
    customerData: CustomerDTO;

    createdDate: Date;
    createdUser: number;
    createdUserText: string;
    updatedDate: Date;
    updatedUser: number;
    updatedUserText: string;

    constructor() {

    }
}

export class VaccinationTransactionFilter {
    vaccinationId: number;
    customerId: number;
    patientId: number;
    vetId: number;
    statusId: number;
    vaccinationType: number;
    vaccinationDate: Date;
    vaccinationDate2: Date
    description: string;
    createdDate: Date;
    createdDate2: Date;
    createdUser: number;
    updatedDate: Date;
    updatedDate2: Date;
    updatedUser: number;

    constructor() {

    }
}

export class CustomerDTO {
    customerId: number;
    identityNumber: string;
    fullName: string;
    phoneNumber: string;
    address: string;
    createdDate: Date;
    createdUser: number;
    createdUserText: string;
    updatedDate: Date;
    updatedUser: number;
    updatedUserText: string;

    constructor() {

    }
}

export class PatientDTO {
    patientId: number;
    customerId: number;
    customerName: string;
    fullName: string;
    gender: boolean;
    age: number;
    genuId: number;
    genuName: string;
    createdDate: Date;
    createdUser: number;
    createdUserText: string;
    updatedDate: Date;
    updatedUser: number;
    updatedUserText: string;

    constructor() {

    }
}


