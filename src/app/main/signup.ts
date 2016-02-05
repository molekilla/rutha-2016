import 'angular';

export class SignupController {

  static $inject = ['$scope', '$log'];
  constructor($scope: angular.IScope, $log: angular.ILogService ) {
    $log.info('Signup controller');
  }
}
