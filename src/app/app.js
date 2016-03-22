// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
System.register(['angular', '_', 'restangular', 'angular-route', 'angular-ui-router', 'angular-messages', './uiRouteConfig', './profile/UserListCtrl', './common/directives/Counter', './common/components/Counter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var uiRouteConfig_1, UserListCtrl_1, Counter_1, Counter_2;
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
            }],
        execute: function() {
            RestangularConfig.$inject = ['RestangularProvider'];
            appModule = angular.module('app', ['ngRoute', 'ngMessages',
                'ui.router', 'restangular', 'app.services.UserService']);
            appModule
                .directive('counter', Counter_1.Counter.factory())
                .component('counterComp', Counter_2.Counter)
                .controller('UserListCtrl', UserListCtrl_1.UserListCtrl)
                .config(RestangularConfig)
                .config(uiRouteConfig_1.UIRouteConfig)
                .config(['$httpProvider', function ($httpProvider) {
                    $httpProvider.defaults.withCredentials = true;
                }]);
            angular.bootstrap(document, ['app'], {
                strictDi: true
            });
        }
    }
});
//# sourceMappingURL=app.js.map