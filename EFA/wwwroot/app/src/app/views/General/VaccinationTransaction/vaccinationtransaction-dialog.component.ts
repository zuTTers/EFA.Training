import { MatDialogRef } from "@angular/material/dialog";
import { CustomerDTO, PatientDTO, VaccinationTransactionData, VaccinationTransactionDataNew } from "./vaccinationtransaction.component";
import { Component, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { VaccinationTransactionService } from './vaccinationtransaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from '../../../shared/services/navigation.service'
import { Pager, QueryInfo } from "app/shared/query-info";
import { PatientService } from "../Patient/patient.service";
import { PatientFilter } from "../Patient/patient.component";
import { CustomerFilter } from "../Customer/customer.component";
import { CustomerService } from "../Customer/customer.service";

@Component({
    selector: "vaccinationtransaction-dialog",
    templateUrl: "./vaccinationtransaction-dialog.component.html"
})

export class VaccinationTransactionDialogComponent {
    queryInfo: QueryInfo;
    row: VaccinationTransactionData;
    newRow: VaccinationTransactionDataNew;
    patientFilter: PatientFilter;
    customerFilter: CustomerFilter;
    isNew: boolean;
    step: number = 0;
    panelOpenState = false;

    constructor(
        public dialogRef: MatDialogRef<VaccinationTransactionDialogComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: any,
        private vaccinationTransactionService: VaccinationTransactionService,
        private patientService: PatientService,
        private customerService: CustomerService,
        private translate: TranslateService,
        private navigationService: NavigationService,
        private snackbar: MatSnackBar) {
        this.row = data.row;
        this.newRow = data.row;
        this.isNew = data.isNew;
    }

    ngOnInit() {
        this.queryInfo = new QueryInfo();
        this.queryInfo.pager = new Pager();
        this.queryInfo.pager.currentPage = 0;
        this.queryInfo.pager.pageSize = 10;
        this.queryInfo.pager.totalCount = 0;
        this.patientFilter = new PatientFilter();
        this.customerFilter = new CustomerFilter();
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    rebuildForm() {

    }

    close() {
        this.dialogRef.close({ data: this.row, operation: "cancel" });
    }

    delete() {
        this.dialogRef.close({ data: this.row, operation: "delete" });
    }

    save() {
        this.vaccinationTransactionService.save(this.newRow, this.isNew).subscribe((response: any) => {
            this.navigationService.sessionControl(response);
            if (response.isSuccess) {
                this.snackbar.open(this.translate.instant("GENERAL.SUCCESS"),
                    this.translate.instant(response.message),
                    {
                        horizontalPosition: 'start',
                        verticalPosition: 'bottom',
                        duration: 1000
                    });
                this.dialogRef.close({ data: this.row, operation: "save" });
            }
            else {
                this.snackbar.open(this.translate.instant("GENERAL.ERROR"),
                    this.translate.instant(response.errorMessage),
                    {
                        horizontalPosition: 'start',
                        verticalPosition: 'bottom',
                        duration: 1000
                    });
            }
        }, (error) => {
            this.snackbar.open(this.translate.instant("GENERAL.ERROR"),
                this.translate.instant(error), {
                horizontalPosition: 'start',
                verticalPosition: 'bottom',
                duration: 2000
            });
        });
    }

    getPatientData() {
        let columnInfo = null;
        this.patientFilter.customerId = this.newRow.customerData.customerId;

        this.patientService.getData(this.patientFilter, this.queryInfo, columnInfo, false)
            .subscribe((response: any) => {
                this.navigationService.sessionControl(response);
                if (response.isSuccess) {
                    this.queryInfo.pager.totalCount = response.totalCount;
                    this.newRow.patientDataList = response.data;
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
                this.snackbar.open(this.translate.instant("GENERAL.ERROR"),
                    this.translate.instant(error), {
                    horizontalPosition: 'start',
                    verticalPosition: 'bottom',
                    duration: 2000
                });
            });
    }

    getCustomerData(selectedCustomerId:number) {
        let columnInfo = null;
        this.customerFilter.customerId = selectedCustomerId;
        this.customerService.getData(this.customerFilter, this.queryInfo, columnInfo, false)
            .subscribe((response: any) => {
                this.navigationService.sessionControl(response);
                if (response.isSuccess) {
                    this.newRow.customerData = response.data[0];
                    this.getPatientData();
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
                this.snackbar.open(this.translate.instant("GENERAL.ERROR"),
                    this.translate.instant(error), {
                    horizontalPosition: 'start',
                    verticalPosition: 'bottom',
                    duration: 2000
                });
            });
    }

    onChange($event, row, field) {
        row[field] = $event;
    }

    onCustomerChange($event, row, field) {
        row[field] = $event;
        this.newRow.customerId = $event;
        this.getCustomerData($event);
    }

    onPatientChange($event, row, field) {
        row[field] = $event;
        this.newRow.patientId = $event;
    }

}