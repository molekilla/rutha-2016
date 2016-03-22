System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            User = (function () {
                function User(username, password) {
                    this.username = username;
                    this.password = password;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=User.js.map