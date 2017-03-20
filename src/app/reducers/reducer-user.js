import {GET_TEST_USER, GET_USERS, FILTER_USERS} from "../actions/action-user";

const userReducer = (state = [], action) => {
    switch (action.type) {
        case GET_TEST_USER:
            state = [
                {id: 1, name: "text"}
            ];
            break;

        case GET_USERS:
            state = action.payload;
            break;

        case FILTER_USERS:
            state = state.filter((item) => {
                return item.name.indexOf(action.payload) > -1;
            });
            break;
    }
    return state;
};

export default userReducer;