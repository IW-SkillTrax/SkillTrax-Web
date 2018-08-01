import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuardService} from '../Auth/auth-guard.service';


export const employeeRoutes = [
    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},
    {path: 'Profile/:id', component: ProfileComponent}
]
