import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CarService } from '../helper-files/car.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
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

  // Inside ModifyContentComponent
addContent(): void {
  this.carService.addContent(this.newContent as Content).subscribe(
    (content) => {
      this.contentAdded.emit(content); // Make sure this line is executed
      this.resetForm();
    },
    error => console.error('Error adding content:', error)
  );
}


  resetForm(): void {
    this.newContent = {
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    };
  }
}
