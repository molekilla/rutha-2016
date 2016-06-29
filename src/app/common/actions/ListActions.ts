
import { createAction, handleAction, handleActions } from 'redux-actions';
import {Inject, Injectable} from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class ListActions {
    constructor() {

    }

    // With Rx
    list(item) {
        debugger

        return (actions, store) => (
            Rx.Observable.of({ type: 'ADD_ITEM', payload: item }).delay(1000)
        );
    }

    // With Promise
    list2(item) {
        debugger

        return (actions, store) => (
            Promise.resolve({ type: 'ADD_ITEM', payload: item })
        );
    }    
}