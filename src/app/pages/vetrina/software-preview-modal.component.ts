
/*
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SoftwareItem } from '../../services/vetrina.service';

@Component({
  selector: 'app-software-preview-modal',
  templateUrl: './software-preview-modal.component.html',
  styleUrls: ['./software-preview-modal.component.scss']
})
export class SoftwarePreviewModalComponent {
  currentIndex = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SoftwareItem,
    private router: Router,
    private dialogRef: MatDialogRef<SoftwarePreviewModalComponent>
  ) {}

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.data.screenshots!.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.data.screenshots!.length) %
      this.data.screenshots!.length;
  }

  contatta() {
    this.dialogRef.close();
    this.router.navigate(['/contatti'], { queryParams: { software: this.data.id } });
  }
}

*/