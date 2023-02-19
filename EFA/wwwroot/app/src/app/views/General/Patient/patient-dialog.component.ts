import { MatDialogRef } from "@angular/material/dialog";
import { PatientData } from "./patient.component";
import { Component, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { PatientService } from './patient.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from '../../../shared/services/navigation.service'
import { CustomerData } from "../Customer/customer.component";

@Component({
    selector: "patient-dialog",
    templateUrl: "./patient-dialog.component.html"
})
export class PatientDialogComponent {
    row: PatientData;
    customer: CustomerData;
    isNew: boolean;

    constructor(
        public dialogRef: MatDialogRef<PatientDialogComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: any,
        private patientService: PatientService,
        private translate: TranslateService,
        private navigationService: NavigationService,
        private snackbar: MatSnackBar) {
        this.row = data.row;
        this.customer = data.customer;
        this.isNew = data.isNew;
    }

    ngOnInit() {
        if (this.isNew && this.customer) {
            this.row.customerId = this.customer.customerId;
        }
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
        this.patientService.save(this.row).subscribe((response: any) => {
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