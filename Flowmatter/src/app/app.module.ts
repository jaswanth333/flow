import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material-module.module';
import { ImportComponent } from './import/import.component';
import { NextComponent } from './next/next.component';
import { ConvertComponent } from './convert/convert.component';
import { WebqueryComponent } from './webquery/webquery.component'

@NgModule({
  declarations: [
    AppComponent,
    ImportComponent,
    NextComponent,
    ConvertComponent,
    WebqueryComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
