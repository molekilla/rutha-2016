import 'angular';
import {UserService} from '../common/services/UserService';
import {User} from '../common/models/User';

export class SignupController {

  static $inject = ['$scope', '$log', UserService.name];
  
  constructor(private $scope: angular.IScope, 
  private $log: angular.ILogService,
  private userService: UserService,
  public email: string,
  public password: string) {
    $log.info('Signup controller');
  }
  
  signup() {
      this.userService
      .signup(new User(this.email, this.password))
      .then(response => {
          
      })
      .catch(err => {
          
      });
      // let a = UserService.
      //.signup()
  }
}
