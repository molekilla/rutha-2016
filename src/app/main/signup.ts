
(function () {
    'use strict';

    SignupController.$inject = ['$scope', '$log'];

    function SignupController($scope, $state) {
        var vm = this;
        $log.info('Signup controller');
    }
    
    angular
        .module('app.controllers')
        .controller('SignupController', SignupController);

})();