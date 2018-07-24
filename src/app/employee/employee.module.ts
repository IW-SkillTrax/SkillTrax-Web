import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule} from '@angular/router';
import {employeeRoutes} from './employee.routes';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes),
    CoreModule
  ],
  declarations:[
     HomeComponent,
     ProfileComponent
  ],
  
})
export class EmployeeModule { }
