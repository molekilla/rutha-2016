import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Control} from '@angular/common';

@Component({
    selector: 'confirm-password',
    template: `
<div class="form-group">
                <label>{{ labels.password }}</label>
                <input required [(ngFormControl)]="passwordCtrl" 
                type="password" class="form-control" #password="ngForm">
                <div [hidden]="password.valid || password.pristine" class="has-error">
                    <div class="help-block">Password is missing</div>
                </div>
            </div>
            <div class="form-group">
                <label>{{ labels.confirmation }}</label>
                <input type="password" #passwordConfirmation="ngForm"
                required class="form-control" [(ngFormControl)]="passwordConfirmationCtrl" ng-minlength="5"
                (change)="passwordMatch(passwordCtrl.value, passwordConfirmationCtrl.value)">

                <div class="has-error" [hidden]="isValidPassword">
                    <div class="help-block">Password does not match</div>
                </div>
                <div class="has-error" [hidden]="minLen(passwordConfirmationCtrl.value, 5)">;
                    <div class="help-block">Must be 5 chars or more</div>
                </div>
                <div class="has-error" [hidden]="passwordConfirmation.valid || passwordConfirmation.pristine">
                    <div class="help-block">Password confirmation is missing</div>
                </div>
            </div>
`})
export class ConfirmPasswordComponent {
    isValidPassword: boolean;
    passwordConfirmationCtrl: Control = new Control('');
    passwordCtrl: Control = new Control('');
    @Input() labels: any;

    @Output() passwordChange = new EventEmitter();

    minLen(val: string, min: number) {
        if (val && val.length < min) {
            return false;
        } else {
            return true;
        }
    }
    passwordMatch(password: string, passwordConfirmation: string) {
        this.isValidPassword = true;
        if (password !== passwordConfirmation) {
            this.isValidPassword = false;
        }
        this.passwordChange.emit(passwordConfirmation);
    };
}