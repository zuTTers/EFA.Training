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
import { PatientFilter } from "../Patient/patient.component";
import { CustomerFilter } from "../Customer/customer.component";

@Component({
    selector: "vaccinationtransaction-datedialog",
    templateUrl: "./vaccinationtransaction-datedialog.component.html"
})

export class VaccinationTransactionDateDialogComponent {
    queryInfo: QueryInfo;
    row: VaccinationTransactionData;
    patientFilter: PatientFilter;
    customerFilter: CustomerFilter;
    isNew: boolean;
    step: number = 0;
    panelOpenState = false;

    constructor(
        public dialogRef: MatDialogRef<VaccinationTransactionDateDialogComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: any,
        private vaccinationTransactionService: VaccinationTransactionService,
        private translate: TranslateService,
        private navigationService: NavigationService,
        private snackbar: MatSnackBar) {
        this.row = data.row;
        this.isNew = data.isNew;
    }

    ngOnInit() {

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
        this.vaccinationTransactionService.save(this.row, false).subscribe((response: any) => {
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

    onChange($event, row, field) {
        row[field] = $event;
    }

}