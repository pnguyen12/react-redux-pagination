import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

class UserDelete extends React.Component {
    constructor(props) {
        super(props);

        this.modalHide = this.modalHide.bind(this);
        this.userDelete = this.userDelete.bind(this);
        
    }

    modalHide(event) {
        this.props.dispatch({
            type: 'users.modalHide'
        });
    }

    userDelete(event) {
        // delete the modal
        this.props.dispatch({
            type: 'users.delete',
            id: this.props.modal_delete.id
        })
        // hide the modal
         this.props.dispatch({
            type: 'users.modalHide'
        });
    }
    
    render() {
        return (
            <Modal show={this.props.modal_delete.show}>
                <Modal.Header>
                    <Modal.Title>
                        Are you sure you want to delete <span>{this.props.modal_delete.username}</span>?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.userDelete}>Yes</Button>
                    <Button onClick={this.modalHide}>No</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    let modal_delete;

    if(state.users.modal && state.users.modal.list_delete) {
        modal_delete = state.users.modal.list_delete
    } else {
        modal_delete = {
            show: false,
            id: 0,
            username: ''
        }
    }

    return {
        modal_delete: modal_delete,
    }
}

export default connect(mapStateToProps)(UserDelete);