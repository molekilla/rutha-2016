import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {IndexComponent}   from './main/index';
import {SignupComponent}     from './main/signup';
import {LoginComponent}     from './main/login';

@Component({
    selector: 'app-boot',
    template:
    `<div>
         <router-outlet></router-outlet>
    </div>

    <div class="footer">
        <div class="container">
            <p class="text-muted">Rutha / MIT Licensed / Made in Panama.</p>
        </div>
    </div>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/main', name: 'Index', component: IndexComponent },
    { path: '/login/:action', name: 'Login', component: LoginComponent },
    { path: '/signup', name: 'Signup', component: SignupComponent }
])
export class LayoutComponent implements OnInit {
    constructor(private _router: Router) {
    }
    ngOnInit() {
        this._router.navigate(['Index']);
    }
}