import React from 'react';
import {Button} from 'react-bootstrap';

export default class UserListElement extends React.Component {
    render() {

        const user = this.props.user;

        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td><a href={'/users-edit/' + user.id}><Button className="btn btn-xs">Edit</Button></a></td>
                <td><Button className="btn-danger btn-xs" data-id={user.id} data-username={user.username}>Delete</Button></td>
            </tr>
        )
    }
}

UserListElement.propTypes = {
    user: React.PropTypes.object.isRequired
}