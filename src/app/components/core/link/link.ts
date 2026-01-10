import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.html',
  styleUrl: './link.scss',
})
export class Link {
  @Input({ required: true }) label!: string;

  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  protected onClick(): void {
    this.clicked.emit();
  }
}
