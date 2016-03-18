import {ADD_USER, REMOVE_USER, LIST_USERS} from '../constants/users'
import { createAction, handleAction, handleActions } from 'redux-actions';
import {UserService2} from '../services/UserService2';
import {Inject} from 'angular2/core';


export class UserActions {
    @Inject('UserService2') private userService: UserService2;

    list = createAction(LIST_USERS, this.userService.list);
}
