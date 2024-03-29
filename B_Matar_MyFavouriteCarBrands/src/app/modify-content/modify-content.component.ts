import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CarService } from '../helper-files/car.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, AddContentDialogComponent  ], // Ensure CommonModule and FormsModule are imported
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

  constructor(
    private carService: CarService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {}


    openAddContentDialog(): void {
      const dialogRef = this.dialog.open(AddContentDialogComponent, {
        width: '250px',
        data: { ...this.newContent }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Assuming you want to replace newContent with the result and then add it.
          this.newContent = result;
          this.addContent(); // This should add the content using your service
        }
      });
    }

    showSuccessMessage(): void {
      this.snackBar.open('Content added successfully!', 'Close', {
        duration: 2000,
      });
    }



    

  addContent(): void {
    // Assuming addContent in CarService is implemented to handle 'id' properly
    this.carService.addContent(this.newContent as Content).subscribe(
      (content) => {
        this.contentAdded.emit(content);
        this.showSuccessMessage();
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
