import React, {Component} from 'react'
import './Transfer.css'
import {Link} from 'react-router-dom'

export default class Transfer extends Component {
  state = {
    account: '',
    amount: '',
    transactionType: ''
  }
  render() {
    return (
      <div className='Transfer'>
        Transfer
        <Link to='/dashboard'>
          <button>Cancel</button>
        </Link>
        <button>Submit</button>
      </div>
    )
  }
}
