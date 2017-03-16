import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './containers/container-app';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    window.document.getElementById('root')
);