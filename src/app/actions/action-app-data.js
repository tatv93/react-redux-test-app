export const REQUEST_FETCHING = "REQUEST_FETCHING";

export const requestFetching = (payload) => {
    return {
        type: REQUEST_FETCHING,
        payload
    }
};
