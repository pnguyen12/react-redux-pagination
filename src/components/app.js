import React from 'react';
import UserList from './UserList';
import Menu from './menu';


export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Menu />
                </div>
                <div className="row">
               {this.props.children}
               </div>
            </div>
        )
    }
}