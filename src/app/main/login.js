(function () {
    'use strict';
    LoginController.$inject = ['$scope', '$log'];
    function LoginController($scope, $log) {
        var vm = this;
        $log.info('Login controller');
    }
    angular
        .module('app.controllers')
        .controller('LoginController', LoginController);
})();
//# sourceMappingURL=login.js.map