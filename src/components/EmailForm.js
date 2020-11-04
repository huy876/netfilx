import React, { useState } from 'react'
import validator from 'validator'

const EmailForm = (props) => {
    const [className, setClassName] = useState('email-form-cont')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const emailInput = React.createRef()

    const onFocus = () => {
        setClassName('email-form-cont email-form-cont-focused')
    }

    const onBlur = (e) => {
        if(!e.target.value) {
            setClassName('email-form-cont  ')
        }
    }

    const onChange = (e) => setEmail(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!email) {
            emailInput.current.focus()
            return setError('Please enter your email address')
        }
        if(!validator.isEmail(email)) {
            emailInput.current.focus()
            return setError('Please enter an valid email address')
        }
    }

    return (
        <div className={className}>
            {props.top && <p className="email-form__top">{props.top}</p>}
            <form className="email-form" onSubmit={onSubmit}>
                <div className="email-input-cont">
                    <div className="email-input-wr">
                        <label className="email-input__label" htmlFor="email-input">Email Address</label>
                        <input
                            ref={emailInput} 
                            id="email-input" 
                            type="text"
                            onFocus={onFocus}
                            onBlur={onBlur}
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    {error && <p className="email-form__error">{error}</p>}
                </div>
                <div className="email-form__btn-wr">
                    <button className="email-form__btn" type="submit">TRY IT NOW</button>
                </div>
            </form>
            
            {props.bot && <p className="email-form__bot">{props.bot}</p>}
        </div>
    )
}

export default EmailForm