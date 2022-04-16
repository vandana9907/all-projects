import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  // {path:'mycourse', component : ListcoursesComponent},
  // {path:'services', component : ServicesComponent},
  { path: 'login',component: LoginComponent},
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
