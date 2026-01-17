import { Component } from '@angular/core';
import { Card } from '../core/card/card';
import { Tag } from '../core/tag/tag';

@Component({
  selector: 'app-soft-skills-banner',
  imports: [ Tag],
  templateUrl: './soft-skills-banner.html',
  styleUrl: './soft-skills-banner.scss',
})
export class SoftSkillsBanner {
}
