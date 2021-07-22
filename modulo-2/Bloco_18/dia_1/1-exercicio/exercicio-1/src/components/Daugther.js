import React from 'react'
import MyContext from './MyContext'

class Daugther extends React.Component {

  render() {
    return (
      <div>
        <h4>Eu sou a Filha</h4>
        <MyContext.Consumer>
          { 
            value => (
              <div>
                <p>{`Eu tenho ${value.money} pra gastar!!`}</p>
                <button onClick={value.spendMoney}>PEDIR LANCHES</button> 
              </div>
            )
          }
        </MyContext.Consumer>
        {/* <p>{`Eu tenho ${this.props.money} pra gastar!!`}</p>
        <button onClick={this.props.spendMoney}>PEDIR LANCHES</button> */}
      </div>
    )
  }
}

export default Daugther;
