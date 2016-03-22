System.register(['angular', 'restangular', 'underscore', 'angular-mocks', '../app/common/services/UserService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserService_1;
    function main() {
        var userService, $httpBackend, handler;
        beforeEach(angular.mock.module('restangular'));
        beforeEach(angular.mock.module('app.services.UserService'));
        beforeEach(angular.mock.inject(function (_UserService_, _Restangular_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            userService = _UserService_;
            var RestangularProvider = _Restangular_;
            RestangularProvider.setFullResponse(true);
            RestangularProvider.setBaseUrl('/');
        }));
        beforeEach(angular.mock.inject(function (_$httpBackend_) {
            $httpBackend = _$httpBackend_;
            // POST
            handler = $httpBackend
                .when('POST', '/auth/login')
                .respond(201, {
                response: {
                    status: 201
                }
            }, {
                'Location': 'http://localhost/profile'
            });
        }));
        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
        describe('UserService', function () {
            it('should load service', function () {
                expect(UserService_1.UserService).toBeDefined();
            });
        });
        describe('UserService.Login', function () {
            it('should login OK', function () {
                $httpBackend.expectPOST('/auth/login');
                userService
                    .login({
                    username: 'mike',
                    password: 'qwerty'
                })
                    .then(function (response) {
                    expect(response.data).toBe(true);
                });
                $httpBackend.flush();
            });
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=UserService_spec.js.map