System.register(['angular'], function(exports_1) {
    var LoginController;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            LoginController = (function () {
                function LoginController($scope, $log, $state) {
                    this.$scope = $scope;
                    this.$log = $log;
                    this.$state = $state;
                    $log.info('Login controller');
                    this.title = 'Login';
                    this.canReset = true;
                }
                LoginController.prototype.linkReset = function () {
                    this.$state.go('login.forgot');
                };
                LoginController.$inject = ['$scope', '$log', '$state'];
                return LoginController;
            })();
            exports_1("LoginController", LoginController);
        }
    }
});
// angular
//     .module('app.controllers')
//     .service('LoginController', LoginController); 
//# sourceMappingURL=login.js.map