import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/reducer-user';
import albumReducer from './reducers/reducer-album';
import App from './containers/container-app';
import HomePage from './routes/page-home';
import AlbumsPage from './routes/page-albums';

const store = createStore(
    combineReducers({
        users: userReducer,
        albums: albumReducer
    }),
    {},
    applyMiddleware(thunk)
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