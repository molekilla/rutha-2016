import {Router, RouteParams} from '@angular/router-deprecated';
import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {UserService} from '../common/services/UserService';
import {User} from '../common/models/User';
import {UserActions} from '../common/actions/users';

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
export class DashboardComponent implements OnInit, OnDestroy {
    message: string = "hello world";
    errorLabel: string;
    users: Array<User>;
    unsubscribe: any;

    constructor(
        @Inject('AppStore') private appStore: any,
        private router: Router,
        private actions: UserActions,
        private userService: UserService) {
        this.users = new Array<User>();
    }

    ngOnDestroy() {
        //remove listener
        this.unsubscribe();
    }

    ngOnInit() {
        //subscribe listener to state changes

        this.unsubscribe = this.appStore.subscribe(() => {
            let state = this.appStore.getState();
            this.users = state.users;
        });

        this.appStore.dispatch(
            this.actions.list()
        );        
        // this.userService
        //     .list()
        //     .subscribe(
        //     resp  => {
        //         this.users = resp.data;
        //         this.errorLabel = null;
        //     },
        //     error =>
        //         this.errorLabel = error.message || "An error ocurred");
    }
}