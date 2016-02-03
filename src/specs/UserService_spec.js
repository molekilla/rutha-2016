System.register(['angular', 'angular-mocks', '../app/common/services/UserService'], function(exports_1) {
    var UserService_1;
    //import {describe, expect, it} from 'jasmine';
    function main() {
        var userService;
        beforeEach(angular.mock.module('app'));
        beforeEach(angular.mock.inject(function (_UserService_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            userService = _UserService_;
        }));
        describe('UserService', function () {
            it('should do something with the provided $log mock', function () {
                expect(UserService_1.UserService).toBe(1);
            });
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=UserService_spec.js.map