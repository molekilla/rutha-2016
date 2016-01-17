import 'angular';

export default class LoginController {

  constructor($scope: angular.IScope, $log: angular.ILogService ) {
    $log.info('Login controller');
  }
}

