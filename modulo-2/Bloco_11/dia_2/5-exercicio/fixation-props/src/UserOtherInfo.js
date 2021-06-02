import React, { Component } from 'react';

class UserOtherInfo extends Component {
    render() {
        const { name, email, id } = this.props
        return (
            <div>
                {name}
                {email}
                {id}
            </div>
        )
    }
}

export default UserOtherInfo
