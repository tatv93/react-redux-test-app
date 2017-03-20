import fetch from 'isomorphic-fetch';
import {api} from '../urils/util-api';
import {requestFetching} from "./action-app-data";

export const GET_TEST_ALBUM = "GET_TEST_ALBUM";
export const GET_ALBUMS = "GET_ALBUMS";

export const getTestAlbum = () => {
    return {
        type: GET_TEST_ALBUM
    };
};

export const getAlbums = () => {
    return (userId, dispatch) => {
        // dispatch(requestFetching(true));

        fetch(api('/users/' + userId + '/albums')).then((response) => response.json()).then((json) => {
            // dispatch(requestFetching(false));
            dispatch({
                type: GET_ALBUMS,
                payload: json
            });
        });
    }
};