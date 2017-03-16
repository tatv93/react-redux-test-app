const userReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_TEST_USER":
            state = [
                {id: 1, name: "text"}
            ];
            break;

        case "GET_USERS":
            state = action.payload;
            break;
    }
    return state;
};

export default userReducer;