import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';

import {EmployeeModule} from './employee/employee.module';
import { RouterModule } from '@angular/router';

import { NavComponent } from './Shared/nav/nav.component';
import { appRoutes } from './routes';
import { EmployeeService } from './Shared/services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { SkillService } from './Shared/services/skill.service';
import { CertificationService } from './Shared/services/certification.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleService } from './Shared/services/role.service';
import { FilterService } from './Shared/services/filter.service';
import { AuthCallbackComponent } from './Auth/auth-callback/auth-callback.component';
import { AuthService } from './Auth/auth.service';
import { AuthGuardService } from './Auth/auth-guard.service';
import { AdalService } from 'adal-angular4';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthCallbackComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    EmployeeModule,
    AdminModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [EmployeeService,
    SkillService, 
    CertificationService,
    RoleService,
    FilterService,
    AuthService,
    AuthGuardService,
    AdalService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
