import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/materials/materials.module';
import { FlightsComponent } from './components/flights/flights.component';
import { Flights1Component } from './components/flights1/flights1.component';
import { Flights2Component } from './components/flights2/flights2.component';
import { Flights3Component } from './components/flights3/flights3.component';
import { Flights4Component } from './components/flights4/flights4.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    Flights1Component,
    Flights2Component,
    Flights3Component,
    Flights4Component,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
