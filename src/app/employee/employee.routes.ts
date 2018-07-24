import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

export const employeeRoutes = [
    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},
    {path: 'Profile', component: ProfileComponent}
]
