import React, { useState } from 'react'
import validator from 'validator'
import { startSignup } from '../store/actions/auth'
import { connect } from 'react-redux'
import background from '../fixtures/home-bg.jpg'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import { history } from '../routers/AppRouter'

const Signup = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState(
        history.location.state ? history.location.state.email : ''
    )
    const [password, setPassword] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const onNameChange = (e) => setName(e.target.value)

    const onEmailChange = (e) => setEmail(e.target.value)

    const onPasswordChange = (e) => setPassword(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        let validName , validEmail, validPassword

        if(!name) {
            setNameError('Please enter your name')
            validName = false
        } else {
            setNameError('')
            validName = true
        }

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

        if(validName && validEmail && validPassword) {
            props.startSignup(email, password, name).catch(e => setEmailError(e.message))
        }    
    } 

    const signUpStyle = {
        background: `url(${background})`
    }

    return (
        <div className="sign-wr" style={signUpStyle}>
            <div className="sign">
                <h1>Sign Up</h1>
                <form onSubmit={onSubmit}>
                    <Input 
                        label="Name"
                        value={name} 
                        handleChange={onNameChange} 
                        error={nameError}
                    />
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
                        <button className="sign__btn">Sign Up</button>
                    </div>
                    <p>
                        Already a user? 
                        <Link to='/sign-in'> Sign in now</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startSignup: (email, password, name) => dispatch(startSignup(email, password, name))
})

export default connect(undefined, mapDispatchToProps)(Signup) 