import { Component, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-add-content-dialog',
  standalone: true,
  imports: [ CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSlideToggleModule  ],
  templateUrl: './add-content-dialog.component.html',
  styleUrl: './add-content-dialog.component.scss'
})
export class AddContentDialogComponent {
  public newContent: Partial<Content> = {};

  constructor(
    public dialogRef: MatDialogRef<AddContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Initialize newContent with data if it exists
    if (data) {
      this.newContent = { ...data };
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Close the dialog and pass back the newContent
    this.dialogRef.close(this.newContent);
  }
}
