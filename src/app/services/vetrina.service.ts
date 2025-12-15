
import { Injectable } from '@angular/core';

export interface SoftwareItem {
  id: string;
  title: string;
  description: string;
  image: string;
  externalUrl: string;
  screenshots?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class VetrinaService {

  // ⭐ ARRAY STATICO — NON SERVE BACKEND
  private softwareList: SoftwareItem[] = [
    {
      id: 'logo-editor',
      title: 'Logo Designer — SVG Editor',
      description: 'Editor professionale per creare loghi in SVG con livelli, gradienti, testo, trasformazioni e export PNG/JPG/WebP.',
      image: '/assets/vetrina/logo-editor-thumb.png',
      externalUrl: 'https://loghi-fe.onrender.com',

      screenshots: [
        '/assets/vetrina/logo-editor-1.png',
        '/assets/vetrina/logo-editor-2.png',
        '/assets/vetrina/logo-editor-3.png'
      ]
    }
  ];

  getSoftware() {
    return this.softwareList;
  }

  getOne(id: string) {
    return this.softwareList.find(s => s.id === id);
  }
}

