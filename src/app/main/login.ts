import 'angular';


export class LoginController {

    canReset: boolean;
    title: string;
    _$state: angular.ui.IStateService;
    
    static $inject = ['$scope', '$log', '$state'];
    constructor($scope: angular.IScope, $log: angular.ILogService, $state: angular.ui.IStateService) {
        $log.info('Login controller');
        
        this._$state = $state;
        this.title = 'Login';
        this.canReset = true;
    }

    linkReset() {
        this._$state.go('login.forgot');
    }
}

// angular
//     .module('app.controllers')
//     .service('LoginController', LoginController);