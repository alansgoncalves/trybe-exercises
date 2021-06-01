import React, { Component } from 'react';

class UserOtherInfo extends Component {
    render() {
        const { email, id } = this.props
        return (
            <div>
                {email}
                {id}
            </div>
        )
    }
}

export default UserOtherInfo
