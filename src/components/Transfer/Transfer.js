import React, { Component } from 'react'
import './transfer.css'

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
            </div>
        )
    }
}
