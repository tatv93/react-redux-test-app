import fetch from 'isomorphic-fetch';
import {api} from '../urils/util-api';
import {requestFetching} from './action-app-data';

export const GET_TEST_USER = "GET_TEST_USER";
export const GET_USERS = "GET_USERS";
export const FILTER_USERS = "FILTER_USERS";

export const getTestUser = () => {
    return {
        type: GET_TEST_USER
    };
};

export const getUsers = () => {
    return (dispatch) => {
        // dispatch(requestFetching(true));

        fetch(api('/users')).then((response) => response.json()).then((json) => {
            // dispatch(requestFetching(false));
            dispatch({
                type: GET_USERS,
                payload: json
            });
        });
    }
};

export const filterUsers = (text) => {
    return {
        type: FILTER_USERS,
        payload: text
    }
};