import { Component } from '@angular/core';
import { Link } from '../core/link/link';

@Component({
  selector: 'app-header',
  imports: [Link],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  onSkillsClicked(): void {
    console.log('Skills!');
  }
  onMilestonesClicked(): void {
    console.log('Milestones!');
  }
  onSoftSkillsClicked(): void {
    console.log('Soft Skills!');
  }
  onTrajectoryClicked(): void {
    console.log('Trajectory!');
  }
  onContactClicked(): void {
    console.log('Contact!');
  }
}
