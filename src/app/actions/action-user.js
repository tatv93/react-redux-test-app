import fetch from 'isomorphic-fetch';

const api = (url) => 'https://jsonplaceholder.typicode.com' + url;

export const getTestUser = () => {
    return {
        type: "GET_TEST_USER"
    };
};

export const getUsers = () => {
    return (dispatch) => {
        fetch(api('/users')).then((response) => response.json()).then((json) => {
            dispatch({
                type: "GET_USERS",
                payload: json
            })
        });
    }
};