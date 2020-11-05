import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { history } from '../routers/AppRouter'
import HeaderUser from './HeaderUser'
import HeaderSearch from './HeaderSearch'
import HeaderVideosFilter from './HeaderVideosFilter'
 
const Header = (props) => {
    const [headerClass, setHeaderClass] = useState('header')

    window.onscroll = () => {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            return setHeaderClass('header header-minus')
        }
        const headerElm = document.getElementsByTagName('header')[0]
        if(headerElm.offsetTop === 0) {
            return setHeaderClass('header')
        }
    }

    const renderHeader = () => {
        if(props.route === 'public') {
            if(history.location.pathname !== '/sign-in') {
                return (
                    <Link to="/sign-in">
                        <button className="header__sign-in-btn">Sign In</button>
                    </Link>
                )
            }
        } else if (props.route === 'private') {
            return (
                <div className="header__private-cont">
                    {history.location.pathname === '/browse' && (
                        <HeaderVideosFilter />
                    )}
                    <div className="header__private-wr">
                        <HeaderSearch />
                        <HeaderUser />
                    </div>
                </div>
            )
        }
    } 

    return (
        <header className={headerClass}>
            <div className="header__content">
                <div className="header__logo-wr">
                    <Link to='/'>
                        <img className="header__logo" src="/svg/logo.svg" alt="logo"/>
                    </Link>
                </div>
                <div className="header__button-wr">
                    {renderHeader()}
                </div>
            </div>
        </header>
    )
}

export default Header 