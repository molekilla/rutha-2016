System.register(['./main/index', './main/login', './main/signup', './main/index.html!text', './main/login.html!text', './main/forgot.html!text', './main/signup.html!text'], function(exports_1) {
    var index_1, login_1, signup_1, index_html_text_1, login_html_text_1, forgot_html_text_1, signup_html_text_1;
    function UIRouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.
            state('main', {
            url: '/',
            controller: index_1.TestController,
            controllerAs: 'vm',
            template: index_html_text_1.default
        }).
            state('signup', {
            url: '/signup',
            template: signup_html_text_1.default,
            controllerAs: 'vm',
            controller: signup_1.SignupController
        }).
            state('login', {
            abstract: true,
            url: '/login',
            template: "<ui-view />"
        })
            .state('login.main', {
            url: '/main',
            template: login_html_text_1.default,
            controllerAs: 'vm',
            controller: login_1.LoginController
        })
            .state('login.forgot', {
            url: '/forgot',
            template: forgot_html_text_1.default,
            controllerAs: 'vm',
            controller: login_1.LoginController
        });
        otherwise.$inject = ['$injector', '$location'];
        function otherwise($injector, $location) {
            $location.path('/');
        }
        $urlRouterProvider.otherwise(otherwise);
    }
    exports_1("UIRouteConfig", UIRouteConfig);
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
            function (forgot_html_text_1_1) {
                forgot_html_text_1 = forgot_html_text_1_1;
            },
            function (signup_html_text_1_1) {
                signup_html_text_1 = signup_html_text_1_1;
            }],
        execute: function() {
            UIRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
        }
    }
});
//# sourceMappingURL=uiRouteConfig.js.map