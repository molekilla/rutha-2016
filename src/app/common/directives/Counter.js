System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Counter;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            Counter = (function () {
                function Counter() {
                    this.bindToController = {
                        count: '='
                    };
                    this.controllerAs = 'vm';
                    this.scope = {};
                    this.template = "\n      <div class=\"todo\">\n        <input type=\"text\" ng-model=\"vm.count\">\n        <button type=\"button\" ng-click=\"vm.decrement();\">-</button>\n        <button type=\"button\" ng-click=\"vm.increment();\">+</button>\n      </div>   \n   ";
                }
                Counter.prototype.controller = function () {
                    debugger;
                    function increment() {
                        this.count++;
                    }
                    function decrement() {
                        this.count--;
                    }
                    this.increment = increment;
                    this.decrement = decrement;
                };
                Counter.factory = function () {
                    var directive = function () { return new Counter(); };
                    return directive;
                };
                return Counter;
            }());
            exports_1("Counter", Counter);
        }
    }
});
//# sourceMappingURL=Counter.js.map