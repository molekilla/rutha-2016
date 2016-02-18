System.register(['./UserService2', 'angular2/core'], function(exports_1) {
    var UserService2_1, core_1;
    var USER_SERVICE_PROVIDER;
    return {
        setters:[
            function (UserService2_1_1) {
                UserService2_1 = UserService2_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("USER_SERVICE_PROVIDER", USER_SERVICE_PROVIDER = core_1.provide(UserService2_1.UserService2, { useClass: UserService2_1.UserService2 }));
        }
    }
});
//# sourceMappingURL=UserServiceProvider.js.map