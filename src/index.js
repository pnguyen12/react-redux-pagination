import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers/index';
import {Provider} from 'react-redux';
import './styles/main.css';
import {browswerHistory, Router, Route, IndexRoute, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import Home from './pages/Home';
import UserEdit from './pages/UserEdit';
import NotFound from './pages/NotFound';
import { createBrowserHistory } from 'history';

let users = [];

for (var i = 0; i < 10; i++) {
    users.push({
        id: i + 1,
        username: 'John' + i,
        job: 'Employee' + i
    });
}

// create initial state 
const initial_state = {
    users: {
        list: users,   
    }
}

let middleware = applyMiddleware(routerMiddleware(browswerHistory));
const store = createStore(reducers, initial_state, middleware);
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
            <Route path="/user-edit/" component={UserEdit} />
            <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>, document.getElementById('root')
);
