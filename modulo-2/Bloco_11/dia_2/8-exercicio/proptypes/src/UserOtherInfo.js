import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

UserOtherInfo.propTypes = {
    email: PropTypes.string,
    id: PropTypes.number.isRequired 
}

export default UserOtherInfo
