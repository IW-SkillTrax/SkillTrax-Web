import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

export const employeeRoutes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent}
]