import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../Auth/auth-guard.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes = [
    {path: 'Admin', component: AdminComponent, canActivate:[AuthGuardService]}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AdminRoutes{}