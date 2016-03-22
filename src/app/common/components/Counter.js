System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Counter;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            exports_1("Counter", Counter = {
                bindings: {
                    count: '<'
                },
                controller: function () {
                    function increment() {
                        this.count++;
                    }
                    function decrement() {
                        this.count--;
                    }
                    this.increment = increment;
                    this.decrement = decrement;
                },
                template: "\n      <div class=\"todo\">\n        <input type=\"text\" ng-model=\"$ctrl.count\">\n        <button type=\"button\" ng-click=\"$ctrl.decrement();\">-</button>\n        <button type=\"button\" ng-click=\"$ctrl.increment();\">+</button>\n      </div>   \n   "
            });
        }
    }
});
//# sourceMappingURL=Counter.js.map