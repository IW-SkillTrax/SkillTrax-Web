import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuardService} from '../Auth/auth-guard.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes = [
    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent, canActivate:[AuthGuardService]},
    {path: 'Profile/:id', component: ProfileComponent, canActivate:[AuthGuardService]}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class EmployeeRoutes{}
