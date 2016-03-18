import {UserActions} from '../actions/users';
import {ADD_USER, REMOVE_USER, LIST_USERS} from '../constants/users'
import {User} from '../models/User';
import { createAction, handleAction, handleActions } from 'redux-actions';

const initialState = {
    users: new Array<User>(),
    currentFilter: 'SHOW_ALL'
}

export function UserReducer(state = initialState, action) {
    
    switch (action.type) {
        case ADD_USER:
            return {
                users: state.users.concat(action.payload),
                currentFilter: state.currentFilter
            };
        case LIST_USERS:
        debugger
            return {
                users: state.users.map(u => u),
                currentFilter: state.currentFilter
            };
        // case REMOVE_USER:
        //     return {
        //         users: state.users.filter(todo => todo.id != action.id),
        //         currentFilter: state.currentFilter
        //     };
        default:
            return state;
    }
};
