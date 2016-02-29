System.register(['angular2/router', 'angular2/core', '../common/services/UserService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, UserService_1;
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
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(router, userService) {
                    this.router = router;
                    this.userService = userService;
                    this.message = "hello world";
                    this.users = new Array();
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService
                        .list()
                        .subscribe(function (resp) {
                        _this.users = resp.data;
                        _this.errorLabel = null;
                    }, function (error) {
                        return _this.errorLabel = error.message || "An error ocurred";
                    });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        template: "<div class=\"toolbar-spacer\">\n    <div class=\"alert alert-danger\" *ngIf=\"errorLabel\" role=\"alert\">{{ errorLabel }}</div>\n    <table class=\"table\">\n    <thead><tr><th>Username</th></tr></thead>\n    <tbody>\n      <tr *ngFor=\"#item of users\">\n      <td>{{ item.username }}</td>\n      </tr>\n      </tbody>\n    </table>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, UserService_1.UserService])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.js.map