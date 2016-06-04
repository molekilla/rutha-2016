"use strict";
var initialState = {
    items: []
};
function ListReducers(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'ADD_ITEM':
            var items = {
                items: state.items.concat([action.payload])
            };
            return Object.assign({}, state, items);
        default:
            return state;
    }
}
exports.ListReducers = ListReducers;
;
//# sourceMappingURL=ListReducers.js.map