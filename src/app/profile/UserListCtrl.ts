import 'angular';
import {IUserService, UserService} from '../common/services/UserService';
import {User} from '../common/models/User';

export class UserListCtrl {

    canReset: boolean;
    title: string;

    static $inject = ['$scope', '$log', '$state', '$window', UserService.name];
    constructor(private $scope: angular.IScope,
        private $log: angular.ILogService,
        private $state: angular.ui.IStateService,
        private $window: angular.IWindowService,
        private userService: IUserService,
        public errorLabel: string,
        public users: any[]) {
        $log.info('Profile controller');

        this.list();
    }

    list() {
        this.userService
            .list()
            .then(response => {
                this.users = response;
            })
            .catch(response => {
                this.errorLabel = response.data.err || "An error ocurred";
            });
    }

}
