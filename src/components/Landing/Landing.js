import React, { Component } from 'react'
import './landing.css'

export default class Landing extends Component {
    state = {
        usernameInput: '',
        emailInput: '',
        passwordInput: ''
    }
    render() {
        return (
            <div className='landing' >
                Landing
            </div>
        )
    }
}
