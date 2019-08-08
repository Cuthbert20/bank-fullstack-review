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
                <div className='left' >
                    <div className="logo">
                        <div>$</div>
                    </div>
                </div>
                <div className='right' >
            <div className="inputs-container">
                <input placeholder='username' type="text"/>
                <input placeholder='email' type="text"/>
                <input placeholder='password' type="password"/>
                <button>Register</button>
                <button>Login</button>
            </div>
                </div>
            </div>
        )
    }
}
