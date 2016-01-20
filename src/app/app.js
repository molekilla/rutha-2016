// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
System.register(['angular', '_', 'restangular', 'angular-route', 'angular-ui-router', './uiRouteConfig'], function(exports_1) {
    var uiRouteConfig_1;
    function RestangularConfig(RestangularProvider) {
        RestangularProvider.setFullResponse(true);
        RestangularProvider.setBaseUrl('/api');
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
            }],
        execute: function() {
            RestangularConfig.$inject = ['RestangularProvider'];
            angular.module('app', ['ngRoute', 'ui.router', 'restangular'])
                .config(RestangularConfig)
                .config(uiRouteConfig_1.UIRouteConfig);
            angular.bootstrap(document, ['app'], {
                strictDi: true
            });
        }
    }
});
//# sourceMappingURL=app.js.map