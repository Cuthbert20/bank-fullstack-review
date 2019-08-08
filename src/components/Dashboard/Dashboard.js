import React, { Component } from 'react'
import './dashboard.css'
import Transaction from '../Transaction/Transaction'

export default class Dashboard extends Component{
    render(){
        return(
            <div className='dashboard' >
                Dashboard
                <Transaction />
            </div>
        )
    }
}