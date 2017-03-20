import {REQUEST_FETCHING} from "../actions/action-app-data";

let initialState = {
    is_fetching: false
};

const appDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FETCHING:
            state.is_fetching = action.payload;
            break;
    }
    return state;
};

export default appDataReducer;