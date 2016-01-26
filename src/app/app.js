// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
System.register(['angular', '_', 'restangular', 'angular-route', 'angular-ui-router', './uiRouteConfig', './profile/UserListCtrl'], function(exports_1) {
    var uiRouteConfig_1, UserListCtrl_1;
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
            function (uiRouteConfig_1_1) {
                uiRouteConfig_1 = uiRouteConfig_1_1;
            },
            function (UserListCtrl_1_1) {
                UserListCtrl_1 = UserListCtrl_1_1;
            }],
        execute: function() {
            RestangularConfig.$inject = ['RestangularProvider'];
            appModule = angular.module('app', ['ngRoute',
                'ui.router', 'restangular', 'app.services.UserService']);
            appModule
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