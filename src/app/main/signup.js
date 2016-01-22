System.register(['angular', '../common/services/UserService', '../common/models/User'], function(exports_1) {
    var UserService_1, User_1;
    var SignupController;
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
            SignupController = (function () {
                function SignupController($scope, $log, userService) {
                    this.$scope = $scope;
                    this.$log = $log;
                    this.userService = userService;
                    $log.info('Signup controller');
                }
                SignupController.prototype.signup = function () {
                    this.userService
                        .signup(new User_1.User(this.email, this.password))
                        .then(function (response) {
                    })
                        .catch(function (err) {
                    });
                    // let a = UserService.
                    //.signup()
                };
                SignupController.$inject = ['$scope', '$log', UserService_1.UserService.name];
                return SignupController;
            })();
            exports_1("SignupController", SignupController);
        }
    }
});
//# sourceMappingURL=signup.js.map