import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material/material.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { EmployeeService, VisitorsService } from './services';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddVisitorComponent,
    EmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    LayoutModule,
    OverlayModule,
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  entryComponents: [AddVisitorComponent],
  providers: [EmployeeService, VisitorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
