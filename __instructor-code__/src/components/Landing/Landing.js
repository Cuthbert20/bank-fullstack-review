import React, {Component} from 'react'
import './Landing.css'

export default class Landing extends Component {
  state = {
    usernameInput: '',
    emailInput: '',
    passwordInput: ''
  }
  render() {
    return (
      <div className='Landing'>
        <div className="left">
          <div className="logo">
            <div>$</div>
          </div>
        </div>
        <div className="right">
          <div className="inputs-container">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    )
  }
}
