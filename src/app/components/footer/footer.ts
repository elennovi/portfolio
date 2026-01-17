import { Component } from '@angular/core';
import { Link } from '../core/link/link';

@Component({
  selector: 'app-footer',
  imports: [Link],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  onLinkedInClicked(): void {
    window.open('https://es.linkedin.com/in/elena-novillo-luceno', '_blank', 'noopener,noreferrer');
  }

  onMailClicked(): void {
    window.open('mailto:elenanovilloluceno@gmail.com');
  }
}
