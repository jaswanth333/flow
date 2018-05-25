import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material-module.module';
import { RdbmsComponent } from './rdbms/rdbms.component';
import { SalesComponent } from './sales/sales.component';
import { ExcelComponent } from './excel/excel.component';
import { SchedulingComponent } from './scheduling/scheduling.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExportTemplateComponent } from './export-template/export-template.component';
import { NsvComponent } from './nsv/nsv.component';
import { NsvtwoComponent } from './nsvtwo/nsvtwo.component';
import { ImportTemplateComponent } from './import-template/import-template.component';
import { ConvertTemplateComponent } from './convert-template/convert-template.component';
import { SideNavComponent } from './side-nav/side-nav.component'
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    RdbmsComponent,
    SalesComponent,
    ExcelComponent,
    SchedulingComponent,
    ExportTemplateComponent,
    ImportTemplateComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ConvertTemplateComponent,
    NsvComponent,
    NsvtwoComponent,
    
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

       
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
