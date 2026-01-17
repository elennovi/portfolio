import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { MainBanner } from './components/main-banner/main-banner';
import { SkillsBanner } from "./components/skills-banner/skills-banner";
import { MilestonesBanner } from './components/milestones-banner/milestones-banner';

@Component({
  selector: 'app-root',
  imports: [Header, MainBanner, SkillsBanner, MilestonesBanner],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
