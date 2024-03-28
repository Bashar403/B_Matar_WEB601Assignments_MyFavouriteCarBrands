import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CarService } from '../helper-files/car.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ensure CommonModule and FormsModule are imported
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent  {
  newContent: Omit<Content, 'id'> = {
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: []
  };

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private carService: CarService) {}

  addContent(): void {
    // Assuming addContent in CarService is implemented to handle 'id' properly
    this.carService.addContent(this.newContent as Content).subscribe(
      (content) => {
        this.contentAdded.emit(content);
        // Reset the form
        this.newContent = {
          title: '',
          description: '',
          creator: '',
          imgURL: '',
          type: '',
          tags: []
        };
      }
    );
  }
}
