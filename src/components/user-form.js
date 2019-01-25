import React, {Component} from 'react';

class UserForm extends Component {


    state = {
        username: ''
    }

    render() {
        return (
            <div>
                Username:
                <input value = {this.state.username} onChange={this.handleUserChange}/>

            </div>
        );
    }

    handleUserChange = ev => {
        this.setState({
            username: ev.target.value
        })
    }
}

export default UserForm;