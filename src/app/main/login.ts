import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {IUserService, UserService} from '../common/services/UserService';
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

    constructor(private userService: UserService,
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
            .subscribe(
            resp  => {
                console.log('Logged');
                this.errorLabel = null;
                //this.router.navigate(['Login', { action: 'main' }]);
            },
            error =>
                this.errorLabel = error.message || "An error ocurred");
    }
}