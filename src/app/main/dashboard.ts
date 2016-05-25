import {Router, RouteParams} from '@angular/router-deprecated';
import {Component, OnInit} from '@angular/core';
import {UserService} from '../common/services/UserService';
import {User} from '../common/models/User';
import {MomentPipe} from '../common/pipes/MomentPipe';

@Component({
    template:
    `<div class="toolbar-spacer">
    <div class="alert alert-danger" *ngIf="errorLabel" role="alert">{{ errorLabel }}</div>
    <table class="table">
    <thead>
    <tr><th>Id</th>
    <th>Username</th>
    <th>Created</th></tr>
    </thead>
    <tbody>
      <tr *ngFor="#item of users">
      <td>{{ item.id }}</td>
      <td>{{ item.username }}</td>
      <td>{{ item.created | momentDate: 'dddd, MMMM Do YYYY' }}</td>
      </tr>
      </tbody>
    </table>
    </div>`,
  pipes: [MomentPipe]
    
})
export class DashboardComponent implements OnInit {
    message: string = "hello world";
    errorLabel: string;
    users: Array<User>;

    constructor(private router: Router, private userService: UserService) {
        this.users = new Array<User>();
    }

    ngOnInit() {
        this.userService
            .list()
            .subscribe(
            resp  => {
                this.users = resp.data;
                this.errorLabel = null;
            },
            error =>
                this.errorLabel = error.message || "An error ocurred");
    }
}