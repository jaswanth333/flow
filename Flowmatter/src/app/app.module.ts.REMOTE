import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material-module.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExportTemplateComponent } from './export-template/export-template.component';
import { ImportTemplateComponent } from './import-template/import-template.component';
import { ConvertTemplateComponent } from './convert-template/convert-template.component';
import { SideNavComponent } from './side-nav/side-nav.component'
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExportTemplateComponent,
    ImportTemplateComponent,
    ConvertTemplateComponent,
    SideNavComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
  
      {
        path: '', redirectTo:'header ', pathMatch: 'full',
       
      },

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
       
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
