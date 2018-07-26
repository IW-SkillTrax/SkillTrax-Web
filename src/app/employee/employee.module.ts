import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule} from '@angular/router';
import {employeeRoutes} from './employee.routes';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListItemComponent } from './home/employee-list-item/employee-list-item.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes),
    NgbModule
   
  ],
  declarations:[
     HomeComponent,
     ProfileComponent,
     EmployeeListItemComponent,
    
  ],
  providers:[]
  
})
export class EmployeeModule { }
