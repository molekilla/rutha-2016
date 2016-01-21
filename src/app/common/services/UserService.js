System.register(['angular'], function(exports_1) {
    var UserService;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            UserService = (function () {
                function UserService($q, $http) {
                    this._$q = $q;
                    this._$http = $http;
                }
                UserService.prototype.signup = function (user) {
                    var deferred = this._$q.defer();
                    this._$http
                        .post('/auth/signup', {
                        email: user.username,
                        password: user.password
                    })
                        .success(function (response, status, headers) {
                        if (status === 201) {
                            deferred.resolve({ err: null, data: true });
                        }
                        else {
                            deferred.reject({ err: response.message });
                        }
                    })
                        .error(function (response, status) {
                        deferred.reject({ err: response.message });
                    });
                    return deferred.promise;
                };
                UserService.prototype.login = function (user) {
                    var deferred = this._$q.defer();
                    this._$http
                        .post('/auth/login', {
                        email: user.username,
                        password: user.password
                    })
                        .success(function (response, status, headers) {
                        if (status === 201) {
                            deferred.resolve({ err: null, data: true });
                        }
                        else {
                            deferred.reject({ err: response.message });
                        }
                    })
                        .error(function (response, status) {
                        deferred.reject({ err: response.message });
                    });
                    return deferred.promise;
                };
                UserService.$inject = ['$q'];
                UserService.name = typeof UserService;
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=UserService.js.map