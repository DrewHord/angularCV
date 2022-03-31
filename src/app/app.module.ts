import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkexperienceComponent,
    EducationComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
