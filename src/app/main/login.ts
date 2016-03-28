import 'angular';
import {IUserService, UserService} from '../common/services/UserService';
import {User} from '../common/models/User';

export class LoginController {

    canReset: boolean;
    title: string;

    static $inject = ['$scope', '$log', '$state', '$window', 'UserService'];
    constructor(private $scope: angular.IScope,
        private $log: angular.ILogService,
        private $state: angular.ui.IStateService,
        private $window: angular.IWindowService,
        private userService: IUserService,
        public errorLabel: string,
        public credentials: any = {}) {
        $log.info('Login controller');

        this.title = 'Login';
        this.canReset = true;
    }

    login(form: angular.IFormController) {
        if (form.$valid) {
            this.userService
                .login(new User(this.credentials.email, this.credentials.password))
                .then(response => {
                    this.errorLabel = null;
                    this.$window.location.href = '/profile';
                })
                .catch(response => {
                    this.errorLabel = response.err || "An error ocurred";
                });
        }
    }

    linkReset() {
        this.$state.go('login.forgot');
    }
}
