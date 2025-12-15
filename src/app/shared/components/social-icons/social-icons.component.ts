
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent {

  @Input() github?: string;
  @Input() linkedin?: string;
  @Input() instagram?: string;
  @Input() facebook?: string;
  @Input() whatsapp?: string;
  @Input() email?: string;
  @Input() phone?: string;

}

