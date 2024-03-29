// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { CommonModule } from '@angular/common';
import { Content } from './helper-files/content-interface';
import { CarService } from './helper-files/car.service'; // Adjust path as necessary
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentListComponent, CommonModule, ContentCardComponent, AddContentDialogComponent, MatSnackBarModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'B_Matar_MyFavouriteCarBrands';
  selectedContent?: Content;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.getContentById(1); // For example, fetch the content with ID 1.
  }

  getContentById(id: number): void {
    this.carService.getContentById(id).subscribe(content => this.selectedContent = content);
  }
}
