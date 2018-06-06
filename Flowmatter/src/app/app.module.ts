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
import {RouterModule,Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { DataflowComponent } from './dataflow/dataflow.component';
import { FormsModule } from '@angular/forms';
import { RdbComponent } from './rdb/rdb.component';
import { SaleHomeComponent } from './sale-home/sale-home.component';
import { ExcelHomeComponent } from './excel-home/excel-home.component';
import { ImportComponent } from './import/import.component';
import { NextComponent } from './next/next.component';
import { ConvertComponent } from './convert/convert.component';
import { WebqueryComponent } from './webquery/webquery.component';
import { ExportComponent } from './export/export.component';
import { ReviewComponent } from './review/review.component';
import { UploadComponent } from './upload/upload.component';
import { CsvconComponent } from './csvcon/csvcon.component';
import { CsvdataComponent } from './csvdata/csvdata.component'
const router: Routes = [

  {path: 'main', component: MainComponent },
  {path:'dataflow',component:DataflowComponent},
  {path:'import-template',component:ImportTemplateComponent},
  {path:'export-template',component:ExportTemplateComponent},
  {path:'convert-template',component:ConvertTemplateComponent},
  {path: 'side-nav', component: SideNavComponent, children: 
      [ 
        {path:'rdb',component:RdbComponent},
        {path:'sale-home',component:SaleHomeComponent},
        {path:'excel-home',component:ExcelHomeComponent},
        { path: 'nsv' ,  component: NsvComponent,   },
          { path: 'rdbms', component: RdbmsComponent, },
          { path: 'sales', component: SalesComponent, },
          { path: 'excel', component: ExcelComponent, },
          { path: 'nsvtwo', component: NsvtwoComponent} ,
          { path: 'export-template', component: ExportTemplateComponent}  
     ]
  },
 
];

/*const links=[
      
  {
    
    path:'import-template',
    component:ImportTemplateComponent,
  },

  {path: '',   redirectTo: '/main', pathMatch: 'full'},

   {
      path:'export-template',
      component:ExportTemplateComponent,
   },

   {
     path:'main',
     component:MainComponent,
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

path:'side-nav',
component:SideNavComponent,
},
{
path:'dataflow',
component:DataflowComponent,
},

   
]

import { FormsModule } from '@angular/forms';


const childlinks:Routes = [
  {
    path: 'side-nav',            //<---- parent component declared here
    component: SideNavComponent,
    children: [                          //<---- child components declared here
        {
            path:'rdbms',
            component: RdbmsComponent
        },
        {
            path:'sales',
            component: SalesComponent
        },
        {
            path:'excel',
            component: ExcelComponent
        },
     
          
      ]
  },
]
*/
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
    RdbComponent,
    SaleHomeComponent,
    ExcelHomeComponent,
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
    BrowserModule,FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
RouterModule.forRoot(router),
    FormsModule

  ],

exports:[
  RouterModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
