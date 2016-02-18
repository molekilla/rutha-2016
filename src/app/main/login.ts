import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {UserService2} from '../common/services/UserService2';
import {User} from '../common/models/User';

@Component({
    styles: [
        `.ng-valid[required] {
            border-left: 5px solid #42A948; /* green */
        }`,
        `.ng-invalid {
            border-left: 5px solid #a94442; /* red */
        }`
    ],
    templateUrl: 'public/app/main/login.html'
})
export class LoginComponent implements OnInit {
    canReset: boolean;
    title: string;
    errorLabel: string;
    user = new User();

    constructor(private userService: UserService2,
        private _routeParams: RouteParams) {
        console.log('Login controller');
        this.canReset = true;
        this.title = 'Login';
    }

    ngOnInit() {
        if (this._routeParams.get('action') === 'forgot') {
            this.canReset = false;
            this.title = 'Reset';
        }
    }

    login() {
        this.userService
            .login(this.user)
            .then(
            resp  => {
                console.log('Logged');
                this.errorLabel = null;
                window.location.href = '/profile';
            },
            error =>
                this.errorLabel = error.message || "An error ocurred");
    }
}