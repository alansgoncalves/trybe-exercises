import React from 'react'
import Grandmother from './Grandmother'
import MyContext from './MyContext'

class GreatGranmother extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      money: 1000000
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney() {
    this.setState((previousState) => ({
      money: previousState.money - 100
    }))
  }

  render() {
    const contexValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney
    }

    return (
      <MyContext.Provider value={contexValue}>
        <div>
          <h1>Eu sou Bisavó</h1>
          <Grandmother />
        </div>
      </MyContext.Provider>
    )
  }
}

export default GreatGranmother
