import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcoursesComponent } from './components/listcourses/listcourses.component';

const routes: Routes = [
  {path:'mycourse', component : ListcoursesComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
