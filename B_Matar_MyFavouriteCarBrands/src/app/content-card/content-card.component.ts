// content-card.component.ts
import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { HoveraffectDirective } from '../hover-affect.directive';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule,HoveraffectDirective, MatCardModule,
    MatChipsModule, MatIconModule, MatButtonModule],
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
