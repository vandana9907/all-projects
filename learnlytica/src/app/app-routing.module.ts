import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path:'',component:HomeComponent},
  { path: 'list-course',component:ListCourseComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'list-contact', component:ListContactComponent },
  { path: '**' , component:NotFoundComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
