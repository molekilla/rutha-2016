System.register(['angular2/testing', 'angular2/core', '../app/common/services/UserService', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1) {
    var testing_1, core_1, UserService_1, Observable_1;
    var MockTestService;
    function main() {
        testing_1.beforeEachProviders(function () { return [
            core_1.provide(UserService_1.UserService, { useClass: MockTestService })
        ]; });
        testing_1.describe('UserService', function () {
            testing_1.it('should load service', testing_1.inject([UserService_1.UserService], function (userService) {
                testing_1.expect(UserService_1.UserService).toBeAnInstanceOf(MockTestService);
            }));
            // describe('UserService.Login', () => {
            //     it('should login OK', () => {
            //         $httpBackend.expectPOST('/auth/login');
            //         userService
            //             .login({
            //                 username: 'mike',
            //                 password: 'qwerty'
            //             })
            //             .then(function(response) {
            //                 expect(response.data).toBe(true);
            //             });
            //         $httpBackend.flush();
            //     })
            // })
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            MockTestService = (function () {
                function MockTestService() {
                }
                MockTestService.prototype.login = function () {
                    return Observable_1.Observable.empty();
                };
                MockTestService.prototype.signup = function () {
                    return Observable_1.Observable.empty();
                };
                return MockTestService;
            })();
        }
    }
});
//# sourceMappingURL=UserService_spec.js.map