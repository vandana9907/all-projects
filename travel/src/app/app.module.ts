import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { FlightsComponent } from './flights/flights.component';
import { TrainComponent } from './train/train.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RegistrationComponent,
    FlightsComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
