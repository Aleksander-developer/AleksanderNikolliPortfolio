
// src/app/shared/projects/project-tile/project-tile.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent {

  @Input() title!: string;
  @Input() image!: string;

  @Input() demoUrl?: string;
  @Input() contactUrl?: string;

  @Input() logoSize: 'sm' | 'md' | 'lg' = 'md';

}

