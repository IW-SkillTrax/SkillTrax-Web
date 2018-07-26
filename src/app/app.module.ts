import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import {EmployeeModule} from './employee/employee.module';
import { RouterModule } from '@angular/router';

import { NavComponent } from './Shared/nav/nav.component';
import { appRoutes } from './routes';
import { EmployeeService } from './Shared/services/employee.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { SkillService } from './Shared/services/skill.service';
import { CertificationService } from './Shared/services/certification.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleService } from './Shared/services/role.service';
import { FilterService } from './Shared/services/filter.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    EmployeeModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [EmployeeService, SkillService, CertificationService, RoleService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
