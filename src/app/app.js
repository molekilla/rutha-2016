System.register(['angular', '_', 'restangular', 'angular-route', 'angular-ui-router', 'angular-messages', './common/services/UserService', './uiRouteConfig', './profile/UserListCtrl', './common/directives/Counter', './common/components/Counter', './upgradeAdapter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserService_1, uiRouteConfig_1, UserListCtrl_1, Counter_1, Counter_2, upgradeAdapter_1;
    var appModule;
    function RestangularConfig(RestangularProvider) {
        RestangularProvider.setFullResponse(true);
        RestangularProvider.setBaseUrl('/');
    }
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (uiRouteConfig_1_1) {
                uiRouteConfig_1 = uiRouteConfig_1_1;
            },
            function (UserListCtrl_1_1) {
                UserListCtrl_1 = UserListCtrl_1_1;
            },
            function (Counter_1_1) {
                Counter_1 = Counter_1_1;
            },
            function (Counter_2_1) {
                Counter_2 = Counter_2_1;
            },
            function (upgradeAdapter_1_1) {
                upgradeAdapter_1 = upgradeAdapter_1_1;
            }],
        execute: function() {
            RestangularConfig.$inject = ['RestangularProvider'];
            appModule = angular.module('app', ['ngRoute', 'ngMessages',
                'ui.router', 'restangular']);
            appModule
                .service('UserService', UserService_1.UserService2)
                .directive('counter', Counter_1.Counter.factory())
                .component('counterComp', Counter_2.Counter)
                .controller('UserListCtrl', UserListCtrl_1.UserListCtrl)
                .config(RestangularConfig)
                .config(uiRouteConfig_1.UIRouteConfig)
                .config(['$httpProvider', function ($httpProvider) {
                    $httpProvider.defaults.withCredentials = true;
                }]);
            upgradeAdapter_1.upgradeAdapter.bootstrap(document.body, ['app'], { strictDi: true });
        }
    }
});
//# sourceMappingURL=app.js.map