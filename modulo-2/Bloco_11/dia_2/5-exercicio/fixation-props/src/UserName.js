import React, { Component } from 'react';
import './UserName.css';

class Username extends Component {
    render() {
       const name = this.props.name
        return (
            <div className="name">{name}</div>
        )
    }
}

export default Username
