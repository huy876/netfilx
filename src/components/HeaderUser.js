import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { startLogout } from '../store/actions/auth'

const HeaderUser = (props) => {
    const [dropClass, setDropClass] = useState('header__user__dropbox')

    const toogleDropbox = () => {
        setDropClass(' header__user__dropbox header__user__dropbox-expand')
    }

    const stopCall = (e) => e.stopPropagation()

    useEffect(() => {
        const closeDrop = () => {
            setDropClass(' header__user__dropbox ')
        }
        window.addEventListener('click', closeDrop)
        
        return () => closeDrop()
    }, [])

    return (
        <div className="header__user" onClick={stopCall}>
            <div onClick={toogleDropbox} className="header__user__avatar-wr">
                <img  className="header__user__avatar" src="/images/users/1.png" alt="user avatar"></img>
            </div>
            <div className={dropClass}>
                <div className="header__user__info-wr">
                    <img  className="header__user__avatar" src="/images/users/1.png" alt="user avatar"></img>
                    <span className="header__user__name">{props.username}</span>
                </div>
                <div>
                    <button onClick={props.startLogout}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    username: state.auth.name
})

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUser)