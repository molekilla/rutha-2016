import {Component} from 'angular2/core';
import {IUserService, UserService} from '../common/services/UserService';
import {User} from '../common/models/User';

@Component({
    template:
    `<div class="container">
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Signup</h1>
    <div class="alert alert-danger" *ngIf="errorLabel" role="alert">{{ errorLabel }}</div>
    <form>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" name="email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" name="password">
      </div>
      <button (click)="signup()" type="submit" class="btn btn-warning btn-lg">Signup</button>
    </form>

    <hr>

    <p>Already have an account ? <a href="#login">Login</a></p>

  </div>
</div>`
})
export class SignupComponent {
    errorLabel: string;

    constructor(private userService: UserService) {
        console.log('Signup controller');
    }

    signup() {
        this.userService
            .signup({ username: 'pending@', password: 'password' })
            .subscribe(
            resp  => {
                this.errorLabel = null;
                //this.$state.go('login.main');
            },
            error =>
                this.errorLabel = error.message || "An error ocurred");
    }
}