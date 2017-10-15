import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { createStore } from 'redux';
import { reducers } from './reducers/index';
import {Provider} from 'react-redux';
import './styles/main.css';

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

// create redux store
const store = createStore(reducers, initial_state);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);