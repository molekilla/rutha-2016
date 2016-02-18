System.register(['./UserService', 'angular2/core'], function(exports_1) {
    var UserService_1, core_1;
    var USER_SERVICE_PROVIDER;
    return {
        setters:[
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("USER_SERVICE_PROVIDER", USER_SERVICE_PROVIDER = core_1.provide(UserService_1.UserService, { useClass: UserService_1.UserService }));
        }
    }
});
//# sourceMappingURL=UserServiceProvider.js.map