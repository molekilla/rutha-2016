import {Component} from 'angular2/core';

@Component({
    template:
    `<div class="container">
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Signup</h1>
 
    <form action="/auth/signup" method="post">
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" name="email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" name="password">
      </div>
      <button type="submit" class="btn btn-warning btn-lg">Signup</button>
    </form>

    <hr>

    <p>Already have an account ? <a href="#login">Login</a></p>

  </div>
</div>`
})
export class SignupComponent {
  constructor() {
    console.log('Signup controller');
  }
}