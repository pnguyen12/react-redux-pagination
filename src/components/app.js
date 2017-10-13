import React from 'react';
import UserList from './UserList';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const users = [];

        for (var i = 0; i < 10; i++) {
            users.push({
                id: i + 1,
                username: 'John' + i,
                job: 'Employee' + i
            });
        }

        this.state = {
            users: users,
        }
    }
    render() {

        return (
            <div>
               <UserList users={this.state.users}/>
            </div>
        )
    }
}