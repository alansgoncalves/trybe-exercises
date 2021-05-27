import PropTypes from 'prop-types';
import React from 'react';

class Pokemon extends React.Component {
  render() { 
      const { name, type, averageWeight, image } = this.props   //this é mesma coisa se colocassemos Pokemon
      return (
        <ul>
          <li>{name}</li>
          <li>{type}</li>
          <li>{averageWeight}</li>
          <img src={image} alt=""></img>
        </ul>
      );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.string,
  image: PropTypes.string,
}

export default Pokemon;