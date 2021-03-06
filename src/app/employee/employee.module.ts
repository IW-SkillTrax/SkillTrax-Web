import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule} from '@angular/router';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListItemComponent } from './home/employee-list-item/employee-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutes } from './employee.routes';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutes,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
   
   
  ],
  declarations:[
     HomeComponent,
     ProfileComponent,
     EmployeeListItemComponent,
    
  ],
  providers:[]
  
})
export class EmployeeModule { }
