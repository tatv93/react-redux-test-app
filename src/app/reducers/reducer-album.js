const userReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_TEST_ALBUM":
            state = [
                {id: 1, title: "album"}
            ];
            break;

        case "GET_ALBUMS":
            state = action.payload;
            break;
    }
    return state;
};

export default userReducer;