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

const router: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: MainComponent },
  {path:'dashboard',component:DataflowComponent},
  {path:'import-template',component:ImportTemplateComponent},
  {path:'export-template',component:ExportTemplateComponent},
  {path:'convert-template',component:ConvertTemplateComponent},
  {path: 'side-nav', component: SideNavComponent, children: 
      [   { path: 'nsv' ,  component: NsvComponent,   },
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
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
RouterModule.forRoot(router),

  ],

exports:[
  RouterModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
