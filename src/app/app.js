// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
System.register(['angular', '_', 'restangular', 'angular-route', './main/index', './main/login', './main/signup', './main/index.html!text', './main/login.html!text', './main/signup.html!text'], function(exports_1) {
    var index_1, login_1, signup_1, index_html_text_1, login_html_text_1, signup_html_text_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (signup_1_1) {
                signup_1 = signup_1_1;
            },
            function (index_html_text_1_1) {
                index_html_text_1 = index_html_text_1_1;
            },
            function (login_html_text_1_1) {
                login_html_text_1 = login_html_text_1_1;
            },
            function (signup_html_text_1_1) {
                signup_html_text_1 = signup_html_text_1_1;
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
                    template: signup_html_text_1.default,
                    controllerAs: 'signup',
                    controller: signup_1.default
                }).
                    when('/login', {
                    template: login_html_text_1.default,
                    controllerAs: 'login',
                    controller: login_1.default
                }).
                    otherwise({
                    controller: index_1.default,
                    controllerAs: 'main',
                    template: index_html_text_1.default
                });
            });
            angular.bootstrap(document, ['app']);
        }
    }
});
//# sourceMappingURL=app.js.map