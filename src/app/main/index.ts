import 'angular';

export class TestController {
  message: String;

  static $inject = ['$scope'];
  constructor($scope: angular.IScope) {
    this.message = 'Hello World';
  }
}