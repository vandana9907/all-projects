import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { ListProfilsComponent } from './components/list-profils/list-profils.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ServicesComponent } from './components/services/services.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path:'',component:HomeComponent},
  { path:'list-course',component:ListCourseComponent},
  { path:'services', component: ServicesComponent },
  { path:'list-contact', component:ListContactComponent },

  { path:'login',component:LoginComponent},
  { path:'registration',component:RegistrationComponent},
  { path : 'profiles',component:ListProfilsComponent},
  { path : 'rxjs',component:RegistrationComponent},
  { path : 'template-form',component:TemplateFormComponent},
  { path:'**' , component:NotFoundComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
