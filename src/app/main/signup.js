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
                function SignupController($scope, $log, $state, userService, errorLabel, register) {
                    if (register === void 0) { register = {}; }
                    this.$scope = $scope;
                    this.$log = $log;
                    this.$state = $state;
                    this.userService = userService;
                    this.errorLabel = errorLabel;
                    this.register = register;
                    $log.info('Signup controller');
                }
                SignupController.prototype.signup = function () {
                    var _this = this;
                    this.userService
                        .signup({ username: this.register.email, password: this.register.password })
                        .then(function (response) {
                        _this.errorLabel = null;
                        _this.$state.go('login.main');
                    })
                        .catch(function (response) {
                        _this.errorLabel = response.err || "An error ocurred";
                    });
                };
                SignupController.$inject = ['$scope', '$log', '$state', UserService_1.UserService.name];
                return SignupController;
            })();
            exports_1("SignupController", SignupController);
        }
    }
});
//# sourceMappingURL=signup.js.map