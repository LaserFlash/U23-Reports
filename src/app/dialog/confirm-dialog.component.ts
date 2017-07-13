import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    template: `
        <h1 md-dialog-title>{{ title }}</h1>
        <md-dialog-content>{{ message }}</md-dialog-content>
        <md-dialog-actions>
        <span style='flex: 1 1 auto;'></span>
          <button md-button (click)="dialogRef.close()">Cancel</button>
          <button md-button color="warn" (click)="dialogRef.close(true)">Remove</button>
        </md-dialog-actions>
    `,
})
export class ConfirmDialog {

    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

    }
}