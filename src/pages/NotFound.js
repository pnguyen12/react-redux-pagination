import React from 'react';

export default class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h4> page not found </h4>
                {this.props.children}
            </div>
        )
    }
}