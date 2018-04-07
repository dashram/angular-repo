import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './omsComponents/home/index';
import { LoginComponent } from './omsComponents/login/index';
import { RegisterComponent } from './omsComponents/register/index';
import { OMSAuthGuard } from './_guards/index';
import { HomeLayoutComponent, LoginLayoutComponent } from './omsComponents/layouts/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [OMSAuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);