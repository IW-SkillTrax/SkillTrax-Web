import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule} from '@angular/router';
import {employeeRoutes} from './employee.routes';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './Home/Employee-List/employee-list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes),
    NgbModule
   
  ],
  declarations:[
     HomeComponent,
     ProfileComponent,
     EmployeeListComponent
  ],
  providers:[]
  
})
export class EmployeeModule { }
