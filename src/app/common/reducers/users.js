System.register(['../constants/users'], function(exports_1) {
    var users_1;
    var initialState;
    function UserReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case users_1.ADD_USER:
                return {
                    users: state.users.concat(action.payload),
                    currentFilter: state.currentFilter
                };
            case users_1.LIST_USERS:
                debugger;
                return {
                    users: state.users.map(function (u) { return u; }),
                    currentFilter: state.currentFilter
                };
            // case REMOVE_USER:
            //     return {
            //         users: state.users.filter(todo => todo.id != action.id),
            //         currentFilter: state.currentFilter
            //     };
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
                users: new Array(),
                currentFilter: 'SHOW_ALL'
            };
            ;
        }
    }
});
//# sourceMappingURL=users.js.map