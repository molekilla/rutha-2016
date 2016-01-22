System.register(['angular'], function(exports_1) {
    var UserService;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            UserService = (function () {
                function UserService($q, $http) {
                    this.$q = $q;
                    this.$http = $http;
                }
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
                UserService.name = typeof UserService;
                return UserService;
            })();
            exports_1("UserService", UserService);
            angular.module('app.services.UserService', [])
                .service('UserService', UserService);
        }
    }
});
//# sourceMappingURL=UserService.js.map