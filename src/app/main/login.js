System.register(['angular', '../common/services/UserService', '../common/models/User'], function(exports_1) {
    var UserService_1, User_1;
    var LoginController;
    return {
        setters:[
            function (_1) {},
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            }],
        execute: function() {
            LoginController = (function () {
                function LoginController($scope, $log, $state, $window, userService, errorLabel, credentials) {
                    if (credentials === void 0) { credentials = {}; }
                    this.$scope = $scope;
                    this.$log = $log;
                    this.$state = $state;
                    this.$window = $window;
                    this.userService = userService;
                    this.errorLabel = errorLabel;
                    this.credentials = credentials;
                    $log.info('Login controller');
                    this.title = 'Login';
                    this.canReset = true;
                }
                LoginController.prototype.login = function () {
                    var _this = this;
                    this.userService
                        .login(new User_1.User(this.credentials.email, this.credentials.password))
                        .then(function (response) {
                        _this.errorLabel = null;
                        _this.$window.location.href = '/profile';
                    })
                        .catch(function (response) {
                        _this.errorLabel = response.err || "An error ocurred";
                    });
                };
                LoginController.prototype.linkReset = function () {
                    this.$state.go('login.forgot');
                };
                LoginController.$inject = ['$scope', '$log', '$state', '$window', UserService_1.UserService.name];
                return LoginController;
            })();
            exports_1("LoginController", LoginController);
        }
    }
});
//# sourceMappingURL=login.js.map