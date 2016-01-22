import 'angular';
import {IUserService, UserService} from '../common/services/UserService';
import {User} from '../common/models/User';

export class SignupController {

    static $inject = ['$scope', '$log', '$state', UserService.name];

    constructor(private $scope: angular.IScope,
        private $log: angular.ILogService,
        private $state: angular.ui.IStateService,
        private userService: IUserService,
        public errorLabel: string,
        public register: any = {},
        public email: string,
        public password: string) {
        $log.info('Signup controller');
    }

    signup() {
        this.userService
            .signup({ username: this.register.email, password: this.register.password })
            .then(response => {
                this.errorLabel = null;
                this.$state.go('login.main');
            })
            .catch(response => {
                this.errorLabel = response.err || "An error ocurred";
            });
    }
}
