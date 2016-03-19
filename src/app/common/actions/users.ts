import {ADD_USER, REMOVE_USER, LIST_USERS} from '../constants/users'
import { createAction, handleAction, handleActions } from 'redux-actions';
import {UserService2} from '../services/UserService2';
import {Inject, Injectable} from 'angular2/core';

@Injectable()
export class UserActions {
    constructor(
        private userService: UserService2
    ) {

    }

   // thunkify
    list = createAction(LIST_USERS,
        () => {
            return this.userService.list();
        });
}
