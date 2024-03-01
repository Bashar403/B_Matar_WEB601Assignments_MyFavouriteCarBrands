import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface'; // Adjust the path as needed
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  // Form model properties initialized
  id: number | null = null;
  title: string = '';
  description: string = '';
  creator: string = '';
  imgURL: string = '';
  type: string = '';
  tags: string = '';

  @Output() insertContentEvent = new EventEmitter<Content>();

  insert() {
    if (this.id !== null) { // Ensure there's an ID before inserting
      const item: Content = {
        id: this.id,
        title: this.title,
        description: this.description,
        creator: this.creator,
        imgURL: this.imgURL,
        type: this.type,
        tags: this.tags.split(",").map(tag => tag.trim())
      };
      this.insertContentEvent.emit(item);

      // Reset form fields
      this.id = null;
      this.title = '';
      this.description = '';
      this.creator = '';
      this.imgURL = '';
      this.type = '';
      this.tags = '';
    }
  }
}