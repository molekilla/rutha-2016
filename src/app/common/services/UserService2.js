"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var UserService2 = (function () {
    function UserService2(http) {
        this.http = http;
    }
    UserService2.prototype.login = function (user) {
        var body = JSON.stringify({
            email: user.username,
            password: user.password
        });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http
            .post('/auth/login', body, options)
            .toPromise()
            .catch(this.handleError)
            .then(function (res) {
            if (res.status === 201) {
                return { err: null, data: true };
            }
            else {
                return { err: res.json() };
            }
        });
    };
    UserService2.prototype.signup = function (user) {
        var body = JSON.stringify({
            email: user.username,
            password: user.password
        });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http
            .post('/auth/signup', body, options)
            .toPromise()
            .catch(this.handleError)
            .then(function (res) {
            if (res.status === 201) {
                return { err: null, data: true };
            }
            else {
                return { err: res.json() };
            }
        });
    };
    UserService2.prototype.handleError = function (error) {
        console.error(error);
        return Promise.reject(error.json() || 'Server error');
    };
    UserService2 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService2);
    return UserService2;
}());
exports.UserService2 = UserService2;
//# sourceMappingURL=UserService2.js.map