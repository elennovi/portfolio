import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) icon!: string;
}
