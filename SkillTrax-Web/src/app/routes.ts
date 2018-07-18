import { Routes } from '@angular/router'
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { AuthCallbackComponent } from './auth/auth-callback/auth-callback.component';


export const appRoutes:Routes = [
    {path: 'employees', component: EmployeeListComponent, canActivate:[AuthGuardService]},
    {path: '', redirectTo: '/employees', pathMatch: 'full'},
    {path: 'profile/:id', component: ProfileComponent, canActivate:[AuthGuardService]},  
    {path: 'auth-callback', component: AuthCallbackComponent}   
]