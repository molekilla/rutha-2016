"use strict";
var users_1 = require('../constants/users');
var initialState = {
    users: new Array()
};
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
exports.UserReducer = UserReducer;
;
//# sourceMappingURL=users.js.map