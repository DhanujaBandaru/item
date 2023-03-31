// Write your code here
import {Component} from 'react'

import TransactionItem from '../TransactionItem'

import './index.css'

class MoneyDetails extends Component {
  render() {
    const {transactionsList} = this.props

    return (
      <div className="details-container">
        <div className="header-container">
          <h1 className="details-heading">Your Transactions</h1>
          <p className="total-amount">
            Total Amount: $
            {transactionsList.reduce(
              (total, transaction) =>
                transaction.transactionType === 'INCOME'
                  ? total + transaction.amount
                  : total - transaction.amount,
              0,
            )}
          </p>
        </div>
        <ul className="transactions-list">
          {transactionsList.map(transaction => (
            <TransactionItem
              key={transaction.id}
              transactionDetails={transaction}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default MoneyDetails
