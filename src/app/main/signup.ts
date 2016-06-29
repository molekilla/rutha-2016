
import {FORM_DIRECTIVES} from '@angular/common';
import {Router} from '@angular/router-deprecated';
import {Component} from '@angular/core';
import {UserService} from '../common/services/UserService';
import {User} from '../common/models/User';
import {ConfirmPasswordComponent} from '../common/components/confirm-password';

@Component({
    styles: [
        `.ng-valid[required] {
  border-left: 5px solid #42A948; /* green */
}`,
        `.ng-invalid {
  border-left: 5px solid #a94442; /* red */
}`
    ],
    templateUrl: 'public/app/main/signup.html',
    directives: [ConfirmPasswordComponent, FORM_DIRECTIVES]
})
export class SignupComponent {
    errorLabel: string;
    user = new User();
    labels: any = {
        password: 'Password',
        confirmation: 'Confirm'
    }
    constructor(private userService: UserService,
     private router: Router) {
        console.log('Signup controller');
    }
    
    onPasswordChange(password: string) {
        this.user.password = password;
    }

    signup() {
        this.userService
            .signup(this.user)
            .subscribe(
            resp  => {
                this.errorLabel = null;
                this.router.navigate(['Login', { action: 'main' }]);
            },
            error =>
                this.errorLabel = error.message || "An error ocurred");
    }
}