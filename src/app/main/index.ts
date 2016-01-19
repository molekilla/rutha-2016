

(function () {
    'use strict';

    TestController.$inject = ['$scope'];

    function TestController($scope) {
        var vm = this;
        vm.message = 'Hello World';
    }

    angular
        .module('app.controllers')
        .controller('TestController', TestController);

})();