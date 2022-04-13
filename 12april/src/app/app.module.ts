import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MycourseComponent } from './components/mycourse/mycourse.component';
import { ListcoursesComponent } from './components/listcourses/listcourses.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    MycourseComponent,
    ListcoursesComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
