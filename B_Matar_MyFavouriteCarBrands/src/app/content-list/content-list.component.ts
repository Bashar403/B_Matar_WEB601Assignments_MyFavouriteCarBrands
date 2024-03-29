import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypeFilterPipe } from '../type-filter.pipe';
import { FormsModule } from '@angular/forms';
import { CarService } from '../helper-files/car.service'; // Update the path as necessary
import { ModifyContentComponent } from '../modify-content/modify-content.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypeFilterPipe, FormsModule, ModifyContentComponent, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentList: Content[] = [];
  searchTitle: string = '';
  searchResult: string = '';
  searchResultColor: string = '';

  constructor(private carService: CarService) {}
  contentAdded(newContent: Content): void {
    // Assuming you want to add the new content to the list displayed by this component
    this.contentList.push(newContent);
      //refresh the list from the server if needed
      this.getContentList();
  }

  ngOnInit() {
    this.getContentList();
  }

  getContentList(): void {
    this.carService.getContent().subscribe(contentList => this.contentList = contentList);
  }

  searchContent() {
    const found = this.contentList.some(content => content.title === this.searchTitle);
    this.searchResult = found ? 'Content item exists' : 'Content item does not exist';
    this.searchResultColor = found ? 'green' : 'red';
  }
}
