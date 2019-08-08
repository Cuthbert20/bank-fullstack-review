import React, { Component } from 'react'
import './transfer.css'
import {Link} from 'react-router-dom'

export default class Transfer extends Component {
    state = {
        account: '',
        ammount: '',
        transactionType: ''
    }
    render() {
        return (
            <div className='transfer' >
                Transfer
               <Link to='/dashboard'><button>Cancel</button></Link> 
               <button>Submit</button>
            </div>
        )
    }
}
