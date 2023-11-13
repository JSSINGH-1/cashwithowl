import {Component} from 'react'

import './index.css'

import DenominationList from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updateButton = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="name-container">
          <div className="name-Symble">
            <p>S</p>
          </div>
          <h1 className="main-heading">Sarah Williams</h1>
        </div>
        <div className="balance-container">
          <p className="balance">Your Balance</p>
          <div>
            <p>{amount}</p>
            <span>In Rupees</span>
          </div>
        </div>
        <div>
          <p>Withdraw </p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <div>
            {denominationsList.map(eachDestination => (
              <DenominationList
                key={eachDestination.id}
                eachItem={eachDestination}
                updateButton={this.updateButton}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
