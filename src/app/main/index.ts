import 'angular';

export default class TestController {
  hello: String;

  constructor($scope: angular.IScope) {
    this.hello = 'home';
  }
}

