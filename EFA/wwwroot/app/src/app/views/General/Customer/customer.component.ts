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
    selector: 'customer-table',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

    queryInfo: QueryInfo;
    showSpinner: boolean = false;
    displayedColumns: string[] = [];
    dataSource: any;
    filter: CustomerFilter;
    pageEvent: PageEvent;


    constructor(private customerService: CustomerService,
        public dialog: MatDialog,
        public translate: TranslateService,
        private snackbar: MatSnackBar,
        private navigationService: NavigationService) { }

    ngOnInit() {

        this.filter = new CustomerFilter();
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
        this.filter = new CustomerFilter();
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
                    localText: this.translate.instant('CUSTOMER.' + x.translate)
                }));

        }


        this.customerService.getData(this.filter, this.queryInfo, columnInfo, isExport)
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
            },
                (error) => {

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

        let emptyData = new CustomerData();

        emptyData.customerId = 0;
        emptyData.customerType = false;
        emptyData.identityNumber = '';
        emptyData.fullName = '';
        emptyData.phoneNumber = '';
        emptyData.address = '';
        emptyData.identityCode = '';
        emptyData.age = 0;
        emptyData.gender = false;
        emptyData.firstStartDate = new Date();
        emptyData.workingStartDate = new Date();
        emptyData.workingEndDate = new Date();
        emptyData.isPaid = false;
        emptyData.createdUser = 0;
        emptyData.createdDate = new Date();
        emptyData.updatedUser = 0;
        emptyData.updatedDate = new Date();

        this.openDialog(emptyData, true);
    }

    editItemDialog(row: CustomerData) {
        this.openDialog(row, false);
    }

    openDialog(row: CustomerData, isNew: boolean) {

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


    delete(data: CustomerData) {

        let deleteRow = data;
        this.dialog.open(ComfirmDialogComponent, {
            hasBackdrop: true
        }).afterClosed()
            .subscribe(response => {
                if (response.comfirm == true) {
                    this.customerService.delete(deleteRow).subscribe((response: any) => {
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
                prop: 'customerId',
                translate: 'CUSTOMERID',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'identityNumber',
                translate: 'IDENTITYNUMBER',
                showColumn: false,
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
                prop: 'phoneNumber',
                translate: 'PHONENUMBER',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'customerType',
                translate: 'CUSTOMERTYPE',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'age',
                translate: 'AGE',
                showColumn: false,
                isExport: true,
                localText: ''
            },
            {
                prop: 'gender',
                translate: 'GENDER',
                showColumn: false,
                isExport: true,
                localText: ''
            },
            {
                prop: 'address',
                translate: 'ADDRESS',
                showColumn: false,
                isExport: true,
                localText: ''
            },
            {
                prop: 'identityCode',
                translate: 'IDENTITYCODE',
                showColumn: false,
                isExport: true,
                localText: ''
            },
            {
                prop: 'workingStartDate',
                translate: 'WORKINGSTARTDATE',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'workingEndDate',
                translate: 'WORKINGENDDATE',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'isPaid',
                translate: 'ISPAID',
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
            },
            {
                prop: 'updatedDate',
                translate: 'UPDATEDDATE',
                showColumn: false,
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
                showColumn: false,
                isExport: true,
                localText: ''
            }
        ];
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
    identityCode: string;
    createdDate: Date;
    createdDate2: Date;
    createdUser: number;
    updatedDate: Date;
    updatedDate2: Date;
    updatedUser: number;

    constructor() {

    }
}


