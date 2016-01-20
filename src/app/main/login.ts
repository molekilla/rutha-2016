import 'angular';


export class LoginController {

    canReset: boolean;
    title: string;

    constructor($scope: angular.IScope, $log: angular.ILogService, $route: angular.route.IRouteService) {
        $log.info('Login controller');
        
        this.canReset = true;
        this.title = 'Login';
        if ($route.current.params.action === 'forgot') {
            this.canReset = false;
            this.title = 'Reset';
        }
    }
}

// angular
//     .module('app.controllers')
//     .service('LoginController', LoginController);