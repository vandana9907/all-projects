import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MycourseComponent } from './components/mycourse/mycourse.component';
// import { ListcoursesComponent } from './components/listcourses/listcourses.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MaincontainerComponent } from './components/maincontainer/maincontainer.component';
// import { ServicesComponent } from './components/services/services.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    MycourseComponent,
    // ListcoursesComponent,
    LoginComponent,
    CategoriesComponent,
    MaincontainerComponent,
    // ServicesComponent,
    
  
    
    
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
