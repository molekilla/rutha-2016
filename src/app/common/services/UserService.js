System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserService2, UserService;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            UserService2 = (function () {
                function UserService2($q, restangular) {
                    this.$q = $q;
                    this.restangular = restangular;
                }
                UserService2.prototype.list = function () {
                    var deferred = this.$q.defer();
                    this.restangular
                        .one('/users')
                        .get()
                        .then(function (response) {
                        if (response.status === 200) {
                            deferred.resolve(response.data);
                        }
                        else {
                            deferred.reject({ err: response.data.message });
                        }
                    }, function (response) {
                        deferred.reject({ err: response.data.message });
                    });
                    return deferred.promise;
                };
                UserService2.prototype.signup = function (user) {
                    var deferred = this.$q.defer();
                    var data = {
                        email: user.username,
                        password: user.password
                    };
                    this.restangular
                        .all('/auth/signup')
                        .post(data)
                        .then(function (response) {
                        if (response.status === 201) {
                            deferred.resolve({ err: null, data: true });
                        }
                        else {
                            deferred.reject({ err: response.data.message });
                        }
                    }, function (response) {
                        deferred.reject({ err: response.data.message });
                    });
                    return deferred.promise;
                };
                UserService2.prototype.login = function (user) {
                    var deferred = this.$q.defer();
                    var data = {
                        email: user.username,
                        password: user.password
                    };
                    this.restangular
                        .all('/auth/login')
                        .post(data)
                        .then(function (response) {
                        if (response.status === 201) {
                            deferred.resolve({ err: null, data: true });
                        }
                        else {
                            deferred.reject({ err: response.data.message });
                        }
                    }, function (response) {
                        deferred.reject({ err: response.data.message });
                    });
                    return deferred.promise;
                };
                UserService2.$inject = ['$q', 'Restangular'];
                return UserService2;
            }());
            exports_1("UserService2", UserService2);
            UserService = (function () {
                function UserService($q, $http) {
                    this.$q = $q;
                    this.$http = $http;
                }
                UserService.prototype.list = function () {
                    return null;
                };
                UserService.prototype.signup = function (user) {
                    var deferred = this.$q.defer();
                    this.$http
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
                    var deferred = this.$q.defer();
                    this.$http
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
                UserService.$inject = ['$q', '$http'];
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=UserService.js.map