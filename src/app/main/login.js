System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LoginController;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            LoginController = (function () {
                function LoginController($scope, $log, $route) {
                    $log.info('Login controller');
                    this.canReset = true;
                    this.title = 'Login';
                    if ($route.current.params.action === 'forgot') {
                        this.canReset = false;
                        this.title = 'Reset';
                    }
                }
                LoginController.$inject = ['$scope', '$log', '$route'];
                return LoginController;
            }());
            exports_1("LoginController", LoginController);
        }
    }
});
// angular
//     .module('app.controllers')
//     .service('LoginController', LoginController); 
//# sourceMappingURL=login.js.map