
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-software-preview-modal',
  templateUrl: './software-preview-modal.component.html',
  styleUrls: ['./software-preview-modal.component.scss']
})
export class SoftwarePreviewModalComponent {
  constructor(
    private ref: MatDialogRef<SoftwarePreviewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close() {
    this.ref.close();
  }
}

