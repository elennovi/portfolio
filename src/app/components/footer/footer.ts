import { Component } from '@angular/core';
import { Link } from '../core/link/link';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-footer',
  imports: [Link, LottieComponent],
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
