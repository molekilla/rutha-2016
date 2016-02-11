import {Component} from 'angular2/core';

@Component({
    template:
    `<div class="page-header">
        <h1>Hello Hejsan Hola rutha 2016!</h1>
    </div>
    <p class="lead">{{ message }} !!!</p>`
})
export class IndexComponent {
    public message: string = "hello world";
}