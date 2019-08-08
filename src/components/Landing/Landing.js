import React, { Component } from 'react'
import './landing.css'
import axios from 'axios'
import {setUser} from '../../ducks/reducer'
import {connect}from 'react-redux' 


class Landing extends Component {
    state = {
        usernameInput: '',
        emailInput: '',
        passwordInput: ''
    }

registerUser = () => {
    const {usernameInput: username, emailInput: email, passwordInput: password} = this.state
    console.log(username, email, password)
    axios.post('/auth/register', {username, email, password}).then(res => {
        const {username, email} = res.data.user
        // console.log(username,email)
        this.props.setUser({username, email})
        this.props.history.push('/dashboard')
    })
    .catch(err =>
        {
            alert("email in use")
        })
}
handleChange(e, key){
    this.setState({
        [key]: e.target.value
    })
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
                <input onChange={e => this.handleChange(e, "usernameInput")} placeholder='username' type="text"/>
                <input onChange={e => this.handleChange(e, "emailInput")} placeholder='email' type="text"/>
                <input onChange={e => this.handleChange(e, "passwordInput")} placeholder='password' type="password"/>
                <button onClick={this.registerUser} >Register</button>
                <button>Login</button>
            </div>
                </div>
            </div>
        )
    }

}

export default connect(null,{setUser})(Landing)
