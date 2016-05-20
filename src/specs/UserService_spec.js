"use strict";
// From https://developers.livechatinc.com/blog/testing-angular-2-apps-routeroutlet-and-http/
var testing_1 = require('@angular/core/testing');
var core_1 = require('@angular/core');
var UserService_1 = require('../app/common/services/UserService');
require('rxjs/Rx');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
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
exports.main = main;
//# sourceMappingURL=UserService_spec.js.map