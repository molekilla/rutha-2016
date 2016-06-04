import {Component, Inject, OnInit, OnDestroy} from '@angular/core';
import {ListActions} from '../common/actions/ListActions';

@Component({
    template:
    `<div class="page-header">
        <h1>Hello Hejsan Hola rutha 2016!</h1>
    </div>
    <p class="lead"><input #itemTxt type="text" value=""><button (click)="addText(itemTxt.value)">Add</button></p>
    <div>
    <div *ngFor="let item of items">
    {{ item }}
    </div>
    </div>`,
    providers: [ListActions]
})
export class IndexComponent implements OnInit, OnDestroy {
    public message: string = "hello world";
    unsubscribe: any = null;
    items: [string];
    
    constructor(
        @Inject('AppStore') private appStore: any,
        private actions: ListActions) {
    }
    
    addText(val) {
        debugger
        this.appStore.dispatch(
            this.actions.list(val)
        );        
    }

    ngOnInit() {
        this.unsubscribe = this.appStore.subscribe(() => {
            let state = this.appStore.getState();
            debugger
            this.items = state.items;
        });
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}