import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule} from '@angular/router';
import {employeeRoutes} from './employee.routes';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes)],
  declarations:[
     HomeComponent,
     ProfileComponent
  ],
  
})
export class EmployeeModule { }
