System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(username, password) {
                    this.username = username;
                    this.password = password;
                }
                User.name = typeof User;
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=User.js.map