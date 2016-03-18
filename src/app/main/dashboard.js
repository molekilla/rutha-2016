System.register(['angular2/router', 'angular2/core', '../common/services/UserService', '../common/actions/users'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var router_1, core_1, UserService_1, users_1;
    var DashboardComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(appStore, router, actions, userService) {
                    this.appStore = appStore;
                    this.router = router;
                    this.actions = actions;
                    this.userService = userService;
                    this.message = "hello world";
                    this.users = new Array();
                }
                DashboardComponent.prototype.ngOnDestroy = function () {
                    //remove listener
                    this.unsubscribe();
                };
                DashboardComponent.prototype.ngOnInit = function () {
                    //subscribe listener to state changes
                    this.appStore.dispatch(this.actions.list());
                    this.unsubscribe = this.appStore.subscribe(function listener() {
                        var state = this.appStore.getState();
                        this.users = state.users;
                        debugger;
                    });
                    // this.userService
                    //     .list()
                    //     .subscribe(
                    //     resp  => {
                    //         this.users = resp.data;
                    //         this.errorLabel = null;
                    //     },
                    //     error =>
                    //         this.errorLabel = error.message || "An error ocurred");
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        template: "<div class=\"toolbar-spacer\">\n    <div class=\"alert alert-danger\" *ngIf=\"errorLabel\" role=\"alert\">{{ errorLabel }}</div>\n    <table class=\"table\">\n    <thead><tr><th>Username</th></tr></thead>\n    <tbody>\n      <tr *ngFor=\"#item of users\">\n      <td>{{ item.username }}</td>\n      </tr>\n      </tbody>\n    </table>\n    </div>"
                    }),
                    __param(0, core_1.Inject('AppStore')), 
                    __metadata('design:paramtypes', [Object, router_1.Router, users_1.UserActions, UserService_1.UserService])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.js.map