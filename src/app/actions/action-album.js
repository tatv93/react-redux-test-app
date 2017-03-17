import fetch from 'isomorphic-fetch';

const api = (url) => 'https://jsonplaceholder.typicode.com' + url;

export const getTestAlbum = () => {
    return {
        type: "GET_TEST_ALBUM"
    };
};

export const getAlbums = () => {
    return (userId, dispatch) => {
        fetch(api('/users/' + userId + '/albums')).then((response) => response.json()).then((json) => {
            dispatch({
                type: "GET_ALBUMS",
                payload: json
            });
        });
    }
};