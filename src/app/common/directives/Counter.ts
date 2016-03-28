import 'angular';

export class Counter implements ng.IDirective {
    increment: any;
    decrement: any;
    
    bindToController = {
        count: '='
    };
    controllerAs = 'vm';
    scope = {
    };

    controller() {
        function increment() {
            this.count++;
        }
        function decrement() {
            this.count--;
        }
        this.increment = increment;
        this.decrement = decrement;
    }

    constructor() {
    }

    static factory(): ng.IDirectiveFactory {
        let directive = () => new Counter();
        return directive;
    }

    template = `
      <div class="todo">
        <input type="text" ng-model="vm.count">
        <button type="button" ng-click="vm.decrement();">-</button>
        <button type="button" ng-click="vm.increment();">+</button>
      </div>   
   `;
}
