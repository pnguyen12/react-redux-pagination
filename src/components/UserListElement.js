import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

class UserListElement extends React.Component {
    constructor(props) {
        super(props);

        this.modalDeleteShow = this.modalDeleteShow.bind(this);
    }
    
    modalDeleteShow(event) {
        const user_id = Number(event.target.dataset.id);
        const username = event.target.dataset.username;

        this.props.dispatch({
            type: 'users.modalDeleteShow',
            id: user_id,
            username: username
        });
    }
   
    render() {

        const user = this.props.user;

        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td><a href={'/users-edit/' + user.id}><Button className="btn btn-xs glyphicon glyphicon-edit">Edit</Button></a></td>
                <td><Button onClick={this.modalDeleteShow} className="btn-danger btn-xs glyphicon glyphicon-remove-sign" data-id={user.id} data-username={user.username}>Delete</Button></td>
            </tr>
        )
    }
}

UserListElement.propTypes = {
    user: React.PropTypes.object.isRequired
}

export default connect()(UserListElement);