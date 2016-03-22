System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SignupController;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            SignupController = (function () {
                function SignupController($scope, $log) {
                    $log.info('Signup controller');
                }
                SignupController.$inject = ['$scope', '$log'];
                return SignupController;
            }());
            exports_1("SignupController", SignupController);
        }
    }
});
//# sourceMappingURL=signup.js.map