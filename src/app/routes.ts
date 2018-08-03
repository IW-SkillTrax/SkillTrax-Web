import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AuthCallbackComponent } from './Auth/auth-callback/auth-callback.component';


export const appRoutes:Routes = [
    //{path:'Home', loadChildren: 'app/employee/employee.module#EmployeeModule'},
    //{path:'Profile', loadChildren: ''}
    {path:'auth-callback', component: AuthCallbackComponent}
]




