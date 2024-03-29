import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemoryDataService } from './memory-data.service';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


// Import other components

@NgModule({
  declarations: [
    AppComponent,
    AddContentDialogComponent,
    ModifyContentComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryDataService, { dataEncapsulation: false }),
    MatDialogModule,
    AddContentDialogComponent,
    ModifyContentComponent,
    MatSnackBarModule,
    MatSlideToggleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
