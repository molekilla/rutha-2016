System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SignupController;
    return {
        setters:[
            function (_1) {}],
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
                SignupController.prototype.passwordMatch = function (form) {
                    var passwordConfirmation = form.passwordConfirmation;
                    var password = form.password;
                    if (password.$viewValue !== passwordConfirmation.$viewValue) {
                        passwordConfirmation.$error.nomatch = true;
                        passwordConfirmation.$setValidity(passwordConfirmation.$name, false);
                    }
                    else {
                        passwordConfirmation.$error.nomatch = false;
                        passwordConfirmation.$setValidity(passwordConfirmation.$name, true);
                    }
                };
                ;
                SignupController.prototype.signup = function (form) {
                    var _this = this;
                    if (form.$valid) {
                        this.userService
                            .signup({ username: this.register.email, password: this.register.password })
                            .then(function (response) {
                            _this.errorLabel = null;
                            _this.$state.go('login.main');
                        })
                            .catch(function (response) {
                            _this.errorLabel = response.err || "An error ocurred";
                        });
                    }
                };
                SignupController.$inject = ['$scope', '$log', '$state', 'UserService'];
                return SignupController;
            }());
            exports_1("SignupController", SignupController);
        }
    }
});
//# sourceMappingURL=signup.js.map