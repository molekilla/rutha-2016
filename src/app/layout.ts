import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {IndexComponent}   from './main/index';
import {SignupComponent}     from './main/signup';
import {LoginComponent}     from './main/login';
import {DashboardComponent}     from './main/dashboard';
import {HTTP_PROVIDERS}    from '@angular/http';
import {USER_SERVICE_PROVIDER}       from './common/services/UserServiceProvider';
import {UserActions} from './common/actions/users';
import {UserService2} from './common/services/UserService2';

@Component({
    selector: 'app-boot',
    template:
    `<div class="container">
         <router-outlet></router-outlet>
    </div>

    <div class="footer">
        <div class="container">
            <p class="text-muted">Rutha / MIT Licensed / Made in Panama.</p>
        </div>
    </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        UserActions,
        UserService2,
        HTTP_PROVIDERS,
        USER_SERVICE_PROVIDER
    ]
})
@RouteConfig([
    { path: '/', name: '_Index', component: IndexComponent },
    { path: '/main', name: 'Index', component: IndexComponent },
    { path: '/login/:action', name: 'Login', component: LoginComponent },
    { path: '/signup', name: 'Signup', component: SignupComponent },
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent }
])
export class LayoutComponent implements OnInit {
    constructor(private _router: Router) {
    }
    ngOnInit() {
       // this._router.navigate(['Index']);
    }
}