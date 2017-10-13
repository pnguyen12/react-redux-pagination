import React from 'react';

export default class UserListElement extends React.Component {
    render() {

        const user = this.props.user

        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td><a href={'/users-edit/' + user.id}>Edit</a></td>
                <td><button data-id={user.id}>Delete</button></td>
            </tr>
        )
    }
}

UserListElement.propTypes = {
    user: React.PropTypes.object.isRequired
}