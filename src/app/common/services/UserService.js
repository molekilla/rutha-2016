System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx', '../models/User'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, http_2, User_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (User_1_1) {
                User_1 = User_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                    // https://github.com/angular/http/issues/65
                    // TODO: Use official Angular2 CORS support when merged (https://github.com/angular/angular/issues/4231).
                    var _build = http._backend._browserXHR.build;
                    http._backend._browserXHR.build = function () {
                        var _xhr = _build();
                        _xhr.withCredentials = true;
                        return _xhr;
                    };
                }
                UserService.prototype.list = function () {
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http
                        .get('/users', options)
                        .catch(this.handleError)
                        .map(function (res) {
                        if (res.status === 200) {
                            return { err: null, data: res.json().map(function (i) {
                                    return new User_1.User(i.email);
                                }) };
                        }
                        else {
                            return { err: res.json() };
                        }
                    });
                };
                UserService.prototype.login = function (user) {
                    var body = JSON.stringify({
                        email: user.username,
                        password: user.password
                    });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http
                        .post('/auth/login', body, options)
                        .catch(this.handleError)
                        .map(function (res) {
                        if (res.status === 201) {
                            return { err: null, data: true };
                        }
                        else {
                            return { err: res.json() };
                        }
                    });
                };
                UserService.prototype.signup = function (user) {
                    var body = JSON.stringify({
                        email: user.username,
                        password: user.password
                    });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http
                        .post('/auth/signup', body, options)
                        .catch(this.handleError)
                        .map(function (res) {
                        if (res.status === 201) {
                            return { err: null, data: true };
                        }
                        else {
                            return { err: res.json() };
                        }
                    });
                };
                UserService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json() || 'Server error');
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=UserService.js.map