import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {UserService} from '../common/services/UserService';
import {User} from '../common/models/User';
import {FormBuilder, Validators, Control, ControlGroup} from '@angular/common';

@Component({
    styles: [
        `.ng-valid[required] {
            border-left: 5px solid #42A948; /* green */
        }`,
        `.ng-invalid {
            border-left: 5px solid #a94442; /* red */
        }`
    ],
    templateUrl: 'app/main/login.html'
})
export class LoginComponent implements OnInit {
    canReset: boolean;
    title: string;
    errorLabel: string;

    password: Control;
    email: Control;
    loginFormModel: ControlGroup;
    user = new User();

    constructor(private userService: UserService,
        private _routeParams: RouteParams,
        private formBuilder: FormBuilder) {
        console.log('Login controller');
        this.canReset = true;
        this.title = 'Login';

        this.password = new Control("", Validators.compose([Validators.required, Validators.minLength(5)]));
        this.email = new Control("", Validators.compose([Validators.required, this.checkEmail]));
        this.loginFormModel = formBuilder.group({
            email: this.email,
            password: this.password
        });
    }

    ngOnInit() {
        if (this._routeParams.get('action') === 'forgot') {
            this.canReset = false;
            this.title = 'Reset';
        }
    }

    checkEmail(field: Control) {
        if (field.value && field.value.toString().indexOf('@') > 0) {
            return null;
        } else {
            return { invalidEmail: true };
        }
    }

    login() {
        this.userService
            .login(this.user)
            .subscribe(
            resp  => {
                console.log('Logged');
                this.errorLabel = null;
                window.location.href = '/profile#dashboard';
            },
            error =>
                this.errorLabel = error.message || "An error ocurred");
    }
}