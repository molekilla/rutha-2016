import {Router} from '@angular/router-deprecated';
import {Component} from '@angular/core';
import {UserService} from '../common/services/UserService';
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
    templateUrl: 'public/app/main/signup.html'
})
export class SignupComponent {
    errorLabel: string;
    isValidPassword = true;
    user = new User();

    constructor(private userService: UserService,
     private router: Router) {
        console.log('Signup controller');
    }

    minLen(val: string, min: number) {
        if (val && val.length < min) {
            return false;
        } else {
            return true;
        }
    }
    passwordMatch(password: string, passwordConfirmation: string) {
        this.isValidPassword = true;
        if (password !== passwordConfirmation) {
            this.isValidPassword = false;
        }
    };

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