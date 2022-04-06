import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { Login1Component } from './login1/login1.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListComponent } from './list/list.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { ParentListComponent } from './parent-list/parent-list.component';
// import { ChildItemComponent } from './child-item/child-item.component';
// import { ContactListComponent } from './contact-list/contact-list.component';
// import { ContactComponent } from './contact/contact.component';
import { ChildComponent } from './child/child.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProListComponent } from './pro-list/pro-list.component';
import { ProComponent } from './pro/pro.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobComponent } from './job/job.component';
//import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // Login1Component,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RegistrationComponent,
    ListComponent,
    IfComponent,
    SwitchComponent,
    ParentListComponent,
    // ChildItemComponent,
    // ContactListComponent,
    // ContactComponent,
    ChildComponent,
    ProfileListComponent,
    ProListComponent,
    ProComponent,
    JobListComponent,
    JobComponent,
   // ProfileComponent ,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
