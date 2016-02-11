System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent() {
                    console.log('Signup controller');
                }
                SignupComponent = __decorate([
                    core_1.Component({
                        template: "<div class=\"container\">\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <h1>Signup</h1>\n \n    <form action=\"/auth/signup\" method=\"post\">\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-warning btn-lg\">Signup</button>\n    </form>\n\n    <hr>\n\n    <p>Already have an account ? <a href=\"#login\">Login</a></p>\n\n  </div>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SignupComponent);
                return SignupComponent;
            })();
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.js.map