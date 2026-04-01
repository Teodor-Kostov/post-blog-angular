import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ThemeListComponent } from './theme/theme-list/theme-list.component';
import { NewThemeComponent } from './theme/new-theme/new-theme.component';
import { MainComponent } from './main/main.component';
import { CurentThemeComponent } from './theme/curent-theme/curent-theme.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'theme-list',
         children:[
            {path: '', component: MainComponent},
            {path: ':themeId', component: CurentThemeComponent}
         ] },
    {path: 'user-profile', component: ProfileComponent, canActivate: [AuthGuard]},
    { path: 'new-theme', component: NewThemeComponent, canActivate: [AuthGuard] },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];
