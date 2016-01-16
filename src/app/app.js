// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
System.register(['angular', 'restangular', 'angular-route', './main/index', './main/index!ng-template'], function(exports_1) {
    var index_1, index_ng_template_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_ng_template_1_1) {
                index_ng_template_1 = index_ng_template_1_1;
            }],
        execute: function() {
            angular.module('app-controllers', []);
            angular.module('app-services', []);
            angular.module('app-templates', []);
            angular.module('app-directives', []);
            angular.module('app-auth', []);
            angular.module('app', ['ngRoute', 'restangular'])
                .config(function (RestangularProvider) {
                RestangularProvider.setFullResponse(true);
                RestangularProvider.setBaseUrl('/api');
            })
                .config(function ($routeProvider) {
                // main/login
                // main/logout
                $routeProvider.
                    when('/signup', {
                    templateUrl: 'app/main/signup.html',
                    controllerAs: 'signup',
                    controller: 'SignupController'
                }).
                    when('/login', {
                    templateUrl: 'app/main/login.html',
                    controllerAs: 'login',
                    controller: 'LoginController'
                }).
                    otherwise({
                    controller: index_1.default,
                    controllerAs: 'main',
                    template: index_ng_template_1.default.templateUrl
                });
            });
            angular.bootstrap(document, ['app']);
        }
    }
});
//# sourceMappingURL=app.js.map