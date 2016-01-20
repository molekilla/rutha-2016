import 'angular';

export class TestController {
  message: String;

  constructor($scope: angular.IScope) {
    this.message = 'Hello World';
  }
}

