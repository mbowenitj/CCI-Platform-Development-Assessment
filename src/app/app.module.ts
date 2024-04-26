import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
