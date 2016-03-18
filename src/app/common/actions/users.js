System.register(['../constants/users', 'redux-actions', '../services/UserService2', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var users_1, redux_actions_1, UserService2_1, core_1;
    var UserActions;
    return {
        setters:[
            function (users_1_1) {
                users_1 = users_1_1;
            },
            function (redux_actions_1_1) {
                redux_actions_1 = redux_actions_1_1;
            },
            function (UserService2_1_1) {
                UserService2_1 = UserService2_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserActions = (function () {
                function UserActions() {
                    this.list = redux_actions_1.createAction(users_1.LIST_USERS, this.userService.list);
                }
                __decorate([
                    core_1.Inject('UserService2'), 
                    __metadata('design:type', UserService2_1.UserService2)
                ], UserActions.prototype, "userService", void 0);
                return UserActions;
            })();
            exports_1("UserActions", UserActions);
        }
    }
});
//# sourceMappingURL=users.js.map