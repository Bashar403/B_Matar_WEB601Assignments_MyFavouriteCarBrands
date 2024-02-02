// content-card.component.ts
import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content!: Content;
  @Input() isFirst: boolean = false;

  onClickImage() {
    console.log(`ID: ${this.content.id}, Title: ${this.content.title}`);
  }
}
