import 'angular';
import {UserService} from '../common/services/UserService';

export class SignupController {

  
  static $inject = ['$scope', '$log', UserService.name];
  constructor($scope: angular.IScope, $log: angular.ILogService) {
    $log.info('Signup controller');
  }
  
  signup() {
  }
}
