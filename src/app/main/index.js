System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TestController;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            TestController = (function () {
                function TestController($scope) {
                    this.message = 'Hello World';
                }
                TestController.$inject = ['$scope'];
                return TestController;
            }());
            exports_1("TestController", TestController);
        }
    }
});
//# sourceMappingURL=index.js.map