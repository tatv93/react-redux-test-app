import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/reducer-user';
import App from './containers/container-app';
import Home from './routes/home';

const store = createStore(
    combineReducers({
        users: userReducer
    }),
    {},
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>,
    window.document.getElementById('root')
);