import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";



@Component({
    selector: 'comfirm-dialog',
    templateUrl: 'comfirm.component.html',
})
export class ComfirmDialogComponent {


    constructor(public dialogRef: MatDialogRef<ComfirmDialogComponent>) {


    }

    comfirmDelete(comfirm: boolean) {
        this.dialogRef.close({ comfirm: comfirm });
    }

}