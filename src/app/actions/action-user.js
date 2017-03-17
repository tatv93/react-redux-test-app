import fetch from 'isomorphic-fetch';

const api = (url) => 'https://jsonplaceholder.typicode.com' + url;

export const getTestUser = () => {
    return {
        type: "GET_TEST_USER"
    };
};

export const getUsers = (cb) => {
    return (dispatch) => {
        fetch(api('/users')).then((response) => response.json()).then((json) => {
            dispatch({
                type: "GET_USERS",
                payload: json
            });
            typeof cb === 'function' && cb(json);
        });
    }
};

export const filterUsers = (text) => {
    return {
        type: "FILTER_USERS",
        payload: text
    }
};