import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material-module.module';
import { RdbmsComponent } from './rdbms/rdbms.component';
import { SalesComponent } from './sales/sales.component';
import { ExcelComponent } from './excel/excel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExportTemplateComponent } from './export-template/export-template.component';
import { NsvComponent } from './nsv/nsv.component';
import { NsvtwoComponent } from './nsvtwo/nsvtwo.component';
import { ImportTemplateComponent } from './import-template/import-template.component';
import { ConvertTemplateComponent } from './convert-template/convert-template.component';
import { SideNavComponent } from './side-nav/side-nav.component'
import {RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { DataflowComponent } from './dataflow/dataflow.component';


@NgModule({
  declarations: [
    AppComponent,
    RdbmsComponent,
    SalesComponent,
    ExcelComponent,
    ExportTemplateComponent,
    ImportTemplateComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ConvertTemplateComponent,
    NsvComponent,
    NsvtwoComponent,
    MainComponent,
    DataflowComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
  
      
      {
        path:'import-template',
        component:ImportTemplateComponent,
      },
    

       {
          path:'export-template',
          component:ExportTemplateComponent,
       },


       {
        path:'convert-template',
        component:ConvertTemplateComponent,
     },

     {
      path:'nsv',
      component:NsvComponent,
   },
   {
    path:'nsvtwo',
    component:NsvtwoComponent,
 },
 {
  path:'rdbms',
  component:RdbmsComponent,
},
{
  path:'sales',
  component:SalesComponent,
},
{
  path:'excel',
  component:ExcelComponent,
},
{
path:'side-nav',
component:SideNavComponent,
},

{
  path:'dataflow',
  component:DataflowComponent,
}

       
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
