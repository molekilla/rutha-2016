import {UserActions} from '../actions/users';
import {ADD_USER, REMOVE_USER, LIST_USERS} from '../constants/users'
import {User} from '../models/User';
import { createAction, handleAction, handleActions } from 'redux-actions';

const initialState = {
    users: new Array<User>()
}

export function UserReducer(state = initialState, action) {

    switch (action.type) {
        case LIST_USERS:
            return {
                users: action.payload.map(u => u)
            };
        default:
            return state;
    }
};
