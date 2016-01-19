import 'angular';

export class TestController {
  message: String;

  constructor($scope: angular.IScope) {
    $scope.message = 'Hello World';
  }
}

