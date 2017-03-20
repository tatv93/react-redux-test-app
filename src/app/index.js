import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import appDataReducer from './reducers/reducer-app-data';
import userReducer from './reducers/reducer-user';
import albumReducer from './reducers/reducer-album';
import App from './containers/container-app';
import HomePage from './routes/page-home';
import AlbumsPage from './routes/page-albums';

const store = createStore(
    combineReducers({
        app_data: appDataReducer,
        users: userReducer,
        albums: albumReducer
    }),
    {},
    applyMiddleware(thunk, createLogger())
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="users/:id/albums" components={AlbumsPage}/>
            </Route>
        </Router>
    </Provider>,
    window.document.getElementById('root')
);