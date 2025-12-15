
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftwareItem } from '../../services/vetrina.service';
import { MatDialog } from '@angular/material/dialog';
import { SoftwarePreviewModalComponent } from '../../shared/components/software-preview-modal/software-preview-modal.component';

@Component({
  selector: 'app-vetrina',
  templateUrl: './vetrina.component.html',
  styleUrls: ['./vetrina.component.scss']
})
export class VetrinaComponent implements OnInit {

  software: SoftwareItem[] = [];

  // 🎯 Ora la vetrina prende dati SOLO dal frontend
  ngOnInit(): void {
    this.software = [
      {
        id: "logo-editor",
        title: "Logo Designer — SVG Editor",
        description: "Potentissimo editor per creare loghi SVG con livelli, gradienti, testi avanzati, trasformazioni e export PNG/SVG.",
        image: "/assets/software/logo-editor-preview.png",
        externalUrl: "https://loghi-fe.onrender.com",
        screenshots: [
          "/assets/software/logo-editor-1.png",
          "/assets/software/logo-editor-2.png",
          "/assets/software/logo-editor-3.png"
        ]
      }
    ];
  }

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {}

  openPreview(item: SoftwareItem) {
    this.dialog.open(SoftwarePreviewModalComponent, {
      width: '760px',
      panelClass: 'cyberpunk-dialog',
      data: item
    });
  }

  contatta(id: string) {
    this.router.navigate(['/contatti'], { queryParams: { software: id } });
  }
}

