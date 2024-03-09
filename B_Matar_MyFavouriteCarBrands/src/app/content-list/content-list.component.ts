import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypeFilterPipe } from '../type-filter.pipe';
import { FormsModule } from '@angular/forms';
import { CarService } from '../helper-files/car.service'; // Update the path as necessary

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypeFilterPipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'] // Notice the correction here from 'styleUrl' to 'styleUrls'
})
export class ContentListComponent implements OnInit {
  contentList: Content[] = [];
  searchTitle: string = '';
  searchResult: string = '';
  searchResultColor: string = '';

  constructor(private carService: CarService) {}

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
