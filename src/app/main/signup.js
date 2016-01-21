System.register(['angular', '../common/services/UserService'], function(exports_1) {
    var UserService_1;
    var SignupController;
    return {
        setters:[
            function (_1) {},
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            }],
        execute: function() {
            SignupController = (function () {
                function SignupController($scope, $log) {
                    $log.info('Signup controller');
                }
                SignupController.prototype.signup = function () {
                };
                SignupController.$inject = ['$scope', '$log', UserService_1.UserService.name];
                return SignupController;
            })();
            exports_1("SignupController", SignupController);
        }
    }
});
//# sourceMappingURL=signup.js.map