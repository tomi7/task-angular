import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent, PhonePipe } from './app.component';
import { FreelancerParentComponent } from './freelancer-parent/freelancer-parent.component';
import { FreelancerChildComponent } from './freelancer-child/freelancer-child.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FreelancerDetailComponent } from './freelancer-detail/freelancer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FreelancerParentComponent,
    FreelancerChildComponent,
    PhonePipe,
    DashboardComponent,
    FreelancerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }