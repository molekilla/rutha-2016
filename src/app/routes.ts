import { provideRouter, RouterConfig }  from '@angular/router';
import {IndexComponent}   from './main/index';
import {SignupComponent}     from './main/signup';
import {LoginComponent}     from './main/login';
import {DashboardComponent}     from './main/dashboard';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/main',
        terminal: true
    },

    { path: 'main', component: IndexComponent },
    { path: 'login/:action', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
