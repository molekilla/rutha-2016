import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {UserService} from '../common/services/UserService';
import {User} from '../common/models/User';

@Component({

    template:
    `<div class="toolbar-spacer">
    <div class="alert alert-danger" *ngIf="errorLabel" role="alert">{{ errorLabel }}</div>
    <table class="table">
    <thead><tr><th>Username</th></tr></thead>
    <tbody>
      <tr *ngFor="#item of users">
      <td>{{ item.username }}</td>
      </tr>
      </tbody>
    </table>
    </div>`
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