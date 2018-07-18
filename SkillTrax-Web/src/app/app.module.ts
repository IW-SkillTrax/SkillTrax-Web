import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';

import { NavbarComponent } from './nav/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeListService } from './employees/services/employee-list.service';
import { ProfileComponent } from './profile/profile.component';
import { SkillListComponent } from './profile/skill-list/skill-list.component';
import { SkillService } from './employees/services/skill.service';
import { CertListComponent } from './profile/cert-list/cert-list.component';
import { ProfileEmployeeDetailComponent } from './profile/employee-detail/employee-detail.component';
import { SelectedSkillListComponent } from './profile/selected-skill-list/selected-skill-list.component';
import { AuthService } from './auth/services/auth.service';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { AuthCallbackComponent } from './auth/auth-callback/auth-callback.component';
import { AdalService } from 'adal-angular4';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    ProfileComponent,
    SkillListComponent,
    CertListComponent,
    ProfileEmployeeDetailComponent,
    SelectedSkillListComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeListService, SkillService, AuthService, AuthGuardService, AdalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
