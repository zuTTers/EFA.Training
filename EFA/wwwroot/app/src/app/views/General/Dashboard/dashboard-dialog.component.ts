import { MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from '../../../shared/services/navigation.service'
import { number } from "ngx-custom-validators/src/app/number/validator";

@Component({
    selector: "dashboard-dialog",
    templateUrl: "./dashboard-dialog.component.html"
})
export class DashboardDialogComponent {

    isNew: boolean;
    constructor(public dialogRef: MatDialogRef<DashboardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dashboardService: DashboardService,
        private translate: TranslateService,
        private navigationService: NavigationService,
        private snackbar: MatSnackBar) {
        this.isNew = data.isNew;
    }

    ngOnInit() {
        
    }

    rebuildForm() {

    }
    
}