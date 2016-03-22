System.register(['angular', '../common/services/UserService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserService_1;
    var UserListCtrl;
    return {
        setters:[
            function (_1) {},
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            }],
        execute: function() {
            UserListCtrl = (function () {
                function UserListCtrl($scope, $log, $state, $window, userService, errorLabel, users) {
                    this.$scope = $scope;
                    this.$log = $log;
                    this.$state = $state;
                    this.$window = $window;
                    this.userService = userService;
                    this.errorLabel = errorLabel;
                    this.users = users;
                    $log.info('Profile controller');
                    this.list();
                }
                UserListCtrl.prototype.list = function () {
                    var _this = this;
                    this.userService
                        .list()
                        .then(function (response) {
                        _this.users = response;
                    })
                        .catch(function (response) {
                        _this.errorLabel = response.data.err || "An error ocurred";
                    });
                };
                UserListCtrl.$inject = ['$scope', '$log', '$state', '$window', UserService_1.UserService.name];
                return UserListCtrl;
            }());
            exports_1("UserListCtrl", UserListCtrl);
        }
    }
});
//# sourceMappingURL=UserListCtrl.js.map