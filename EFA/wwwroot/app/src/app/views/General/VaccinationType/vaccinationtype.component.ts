import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { VaccinationTypeService } from './vaccinationtype.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { VaccinationTypeDialogComponent } from './vaccinationtype-dialog.component';
import { QueryInfo, Pager } from '../../../shared/query-info';
import { TranslateService } from '@ngx-translate/core';
import { environment } from "environments/environment";
import { ComfirmDialogComponent } from "../../../shared/components/comfirm/comfirm.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationService } from '../../../shared/services/navigation.service'



@Component({
    selector: 'vaccinationtype-table',
    templateUrl: './vaccinationtype.component.html',
    styleUrls: ['./vaccinationtype.component.scss']
})
export class VaccinationTypeComponent implements OnInit {

    queryInfo: QueryInfo;
    showSpinner: boolean = false;
    displayedColumns: string[] = [];
    dataSource: any;
    filter: VaccinationTypeFilter;
    pageEvent: PageEvent;


    constructor(private vaccinationTypeService: VaccinationTypeService,
        public dialog: MatDialog,
        public translate: TranslateService,
        private snackbar: MatSnackBar,
        private navigationService: NavigationService) { }

    ngOnInit() {

        this.filter = new VaccinationTypeFilter();
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
        this.filter = new VaccinationTypeFilter();
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
                    localText: this.translate.instant('VACCINATIONTYPE.' + x.translate)
                }));

        }


        this.vaccinationTypeService.getData(this.filter, this.queryInfo, columnInfo, isExport)
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

        let emptyData = new VaccinationTypeData();

        emptyData.typeId = 0;
        emptyData.name = '';
        emptyData.status = false;
        emptyData.periodicDay = 0;
        emptyData.createdDate = new Date();
        emptyData.createdUser = 0;
        emptyData.updatedDate = new Date();
        emptyData.updatedUser = 0;

        this.openDialog(emptyData, true);
    }

    editItemDialog(row: VaccinationTypeData) {
        this.openDialog(row, false);
    }

    openDialog(row: VaccinationTypeData, isNew: boolean) {

        this.dialog.open(VaccinationTypeDialogComponent, {
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


    delete(data: VaccinationTypeData) {

        let deleteRow = data;
        this.dialog.open(ComfirmDialogComponent, {
            hasBackdrop: true
        }).afterClosed()
            .subscribe(response => {
                if (response.comfirm == true) {
                    this.vaccinationTypeService.delete(deleteRow).subscribe((response: any) => {
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
                prop: 'typeId',
                translate: 'TYPEID',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'name',
                translate: 'NAME',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'status',
                translate: 'STATUS',
                showColumn: true,
                isExport: true,
                localText: ''
            },
            {
                prop: 'periodicDay',
                translate: 'PERIODICDAY',
                showColumn: true,
                isExport: true,
                localText: ''
            }
            ,
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



export class VaccinationTypeData {

    typeId: number;
    name: string;
    status: boolean;
    periodicDay: number;

    createdDate: Date;
    createdUser: number;
    createdUserText: string;
    updatedDate: Date;
    updatedUser: number;
    updatedUserText: string;

    constructor() {

    }
}

export class VaccinationTypeFilter {

    typeId: number;
    name: string;
    status: boolean;
    periodicDay: number;
    createdDate: Date;
    createdDate2: Date;
    createdUser: number;
    updatedDate: Date;
    updatedDate2: Date;
    updatedUser: number;

    constructor() {

    }
}


