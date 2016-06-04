
const initialState = {
    items: []
}

export function ListReducers(state = initialState, action) {

    switch (action.type) {
        case 'ADD_ITEM':
            var items = {
                items: [...state.items, action.payload]
            };
            debugger;
            return Object.assign({}, state, items);
        default:
            return state;
    }
};