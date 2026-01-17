import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { MainBanner } from './components/main-banner/main-banner';
import { SkillsBanner } from './components/skills-banner/skills-banner';
import { MilestonesBanner } from './components/milestones-banner/milestones-banner';
import { SoftSkillsBanner } from './components/soft-skills-banner/soft-skills-banner';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, MainBanner, SkillsBanner, MilestonesBanner, SoftSkillsBanner, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
