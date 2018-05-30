import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material-module.module';
import { ImportComponent } from './import/import.component';
import { NextComponent } from './next/next.component';
import { ConvertComponent } from './convert/convert.component';
import { WebqueryComponent } from './webquery/webquery.component';
import { ExportComponent } from './export/export.component';
import { ReviewComponent } from './review/review.component';
import { UploadComponent } from './upload/upload.component';
import { CsvconComponent } from './csvcon/csvcon.component';
import { CsvdataComponent } from './csvdata/csvdata.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ImportComponent,
    NextComponent,
    ConvertComponent,
    WebqueryComponent,
    ExportComponent,
    ReviewComponent,
    UploadComponent,
    CsvconComponent,
    CsvdataComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
