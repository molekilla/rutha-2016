System.register(['angular2/testing', 'angular2/core', '../app/common/services/UserService', 'rxjs/Rx', 'angular2/http', 'angular2/http/testing'], function(exports_1) {
    var testing_1, core_1, UserService_1, http_1, testing_2;
    function main() {
        testing_1.beforeEachProviders(function () { return [
            UserService_1.UserService,
            http_1.BaseRequestOptions,
            testing_2.MockBackend,
            core_1.provide(http_1.Http, {
                useFactory: function (backend, defaultOptions) {
                    return new http_1.Http(backend, defaultOptions);
                },
                deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
            })
        ]; });
        testing_1.beforeEach(testing_1.inject([testing_2.MockBackend], function (backend) {
            var baseResponse = new http_1.Response(new http_1.ResponseOptions({ body: 'got response' }));
            backend.connections.subscribe(function (c) { return c.mockRespond(baseResponse); });
        }));
        testing_1.describe('UserService', function () {
            testing_1.it('should load service', testing_1.inject([UserService_1.UserService], function (userService) {
                testing_1.expect(userService).toBeAnInstanceOf(UserService_1.UserService);
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
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=UserService_spec.js.map