import 'angular';

export var Counter: ng.IComponentOptions = {

    bindings: {
        count: '<'
    },

    controller() {
        function increment() {
            this.count++;
        }
        function decrement() {
            this.count--;
        }
        this.increment = increment;
        this.decrement = decrement;
    },

    template: `
      <div class="todo">
        <input type="text" ng-model="$ctrl.count">
        <button type="button" ng-click="$ctrl.decrement();">-</button>
        <button type="button" ng-click="$ctrl.increment();">+</button>
      </div>   
   `;
};
