import React, { useState } from 'react'
import validator from 'validator'
import { startLogin } from '../store/actions/auth'
import { connect } from 'react-redux'
import background from '../fixtures/home-bg.jpg'
import Input from '../components/Input'
import { Link } from 'react-router-dom'

const Signin = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loginError, setLoginError] = useState('')

    const onEmailChange = (e) => setEmail(e.target.value)

    const onPasswordChange = (e) => setPassword(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        let validEmail, validPassword

        if(!email || !validator.isEmail(email)) {
            setEmailError('Please enter a valid email address')
            validEmail = false
        } else {
            setEmailError('')
            validEmail = true
        }

        if(!password || password.length < 8) {
            setPasswordError('Password must have at least 8 characters')
            validPassword = false
        } else {
            setPasswordError('')
            validPassword = true
        }

        if(validEmail && validPassword) {
            props.startLogin(email, password).catch(e => setLoginError(e.message))
        }    
    } 

    const signInStyle = {
        background: `url(${background})`
    }

    return (
        <div className="sign-wr" style={signInStyle}>
            <div className="sign">
                <h1>Sign In</h1>
                {loginError && <p className="sign__error">{loginError}</p>}
                <form onSubmit={onSubmit}>
                    <Input 
                        label="Email"
                        value={email} 
                        handleChange={onEmailChange} 
                        error={emailError}
                    />
                    <Input 
                        label="Password"
                        value={password} 
                        handleChange={onPasswordChange} 
                        error={passwordError}
                    />
                    <div>
                        <button className="sign__btn">Sign In</button>
                    </div>
                    <p>
                        New to Netflix? 
                        <Link to='/sign-up'> Sign up now</Link>
                    </p>
                </form>
                <p className='provider-login-wr' onClick={() => props.startLogin()}>
                    <img src="/svg/search.svg" alt="google search icon"/>
                    <span>Login with <em>Google</em></span>
                </p>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (email, password) => dispatch(startLogin(email, password))
})

export default connect(undefined, mapDispatchToProps)(Signin) 