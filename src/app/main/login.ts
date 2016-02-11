import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

@Component({
    template:
`<div class="container">
  <div class="col-sm-6 col-sm-offset-3">
    <h1>{{ title }}</h1>
    <form action="/auth/login" method="post">
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" name="email">
      </div>
      <div class="form-group" ng-if="canReset">
        <label>Password</label>
        <input type="password" class="form-control" name="password">
      </div>
      <button type="submit" class="btn btn-warning btn-lg">Login</button>
    </form>

    <hr ng-if="canReset">

    <p ng-if="canReset">Forgot password? <a href="#login/forgot">Reset login</a></p>

  </div>
</div>`

})
export class LoginComponent implements OnInit {
    canReset: boolean;
    title: string;

    constructor(private _routeParams: RouteParams) {
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
}