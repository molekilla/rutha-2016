import 'angular';


export class LoginController {

    canReset: boolean;
    title: string;
    
    static $inject = ['$scope', '$log', '$state'];
    constructor(private $scope: angular.IScope, private $log: angular.ILogService, private $state: angular.ui.IStateService) {
        $log.info('Login controller');
        
        this.title = 'Login';
        this.canReset = true;
    }

    linkReset() {
        this.$state.go('login.forgot');
    }
}

// angular
//     .module('app.controllers')
//     .service('LoginController', LoginController);