System.register(['../constants/users'], function(exports_1) {
    var users_1;
    var initialState;
    function UserReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case users_1.LIST_USERS:
                return {
                    users: action.payload.map(function (u) { return u; })
                };
            default:
                return state;
        }
    }
    exports_1("UserReducer", UserReducer);
    return {
        setters:[
            function (users_1_1) {
                users_1 = users_1_1;
            }],
        execute: function() {
            initialState = {
                users: new Array()
            };
            ;
        }
    }
});
//# sourceMappingURL=users.js.map