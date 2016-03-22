System.register(['./main/index', './main/login', './main/signup', './main/index.html!text', './main/login.html!text', './main/signup.html!text'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, login_1, signup_1, index_html_text_1, login_html_text_1, signup_html_text_1;
    function RouteConfig($routeProvider) {
        $routeProvider.
            when('/signup', {
            template: signup_html_text_1.default,
            controllerAs: 'vm',
            controller: signup_1.SignupController
        }).
            when('/login/:action', {
            template: login_html_text_1.default,
            controllerAs: 'vm',
            controller: login_1.LoginController
        }).
            otherwise({
            controller: index_1.TestController,
            controllerAs: 'vm',
            template: index_html_text_1.default
        });
    }
    exports_1("RouteConfig", RouteConfig);
    return {
        setters:[
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
            RouteConfig.$inject = ['$routeProvider'];
        }
    }
});
//# sourceMappingURL=routeConfig.js.map