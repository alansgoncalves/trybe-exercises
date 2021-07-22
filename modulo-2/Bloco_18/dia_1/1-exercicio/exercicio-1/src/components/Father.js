import React from 'react'
import Daugther from './Daugther'

class Father extends React.Component {

  render() {
    return (
      <div>
        <h3>Eu sou o Pai</h3>
        <Daugther />
      </div>
    )
  }
}

export default Father;
