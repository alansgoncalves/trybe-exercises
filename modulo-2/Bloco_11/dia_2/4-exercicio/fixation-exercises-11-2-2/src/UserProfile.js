// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        {/* this.props para conseguirmos acessar as infos das propriedades do componente App.js (variaves João e Amelia */}
        <p> {this.props.user.email} </p>    
        <p> {this.props.user.name} </p> 
        {/* UserProfile tem Image como filho */}
        {/* que passa para seu componente filho Image a origem de uma imagem */}
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;