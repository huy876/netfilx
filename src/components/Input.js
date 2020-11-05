import React, {useState} from 'react'

const Input = (props) => {
    const [inputClass, setClass] = useState(
        props.value ? 'input-cont input-cont-focused' : 'input-cont'
    )

    const onFocus = () => setClass('input-cont input-cont-focused')

    const onBlur = (e) => !e.target.value && setClass('input-cont')

    return (
        <div className={inputClass}>
            <div className="input-wr">
                <label className="input__label">{props.label}</label>
                
                <input
                    className="input"
                    type="text"
                    value={props.value}
                    onChange={props.handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
            {props.error && <p className="input__error">{props.error}</p>}
        </div>
    )
}

export default Input