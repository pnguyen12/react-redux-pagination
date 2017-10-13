import React from 'react';

export default class App extends React.Component {
    render() {
        const users = [];

        for(var i = 0; i < 10; i++) {
            users.push({
                id: i + 1,
                username: 'John' + i + 1,
                job: 'Employee' + i + 1
            });
        }
        return (
          <div>
              <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Job</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.job}</td>
                                <td><a href={'/users-edit/' + user.id }>Edit</a></td>
                                <td><button data-id={user.id}>Delete</button></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
          </div>
        )
    }
}