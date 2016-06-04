
import { createAction, handleAction, handleActions } from 'redux-actions';
import {Inject, Injectable} from '@angular/core';

@Injectable()
export class ListActions {
    constructor() {

    }

    list(item) {
        debugger
        var t = { type: 'ADD_ITEM', payload: item };
        return t;
    }
}