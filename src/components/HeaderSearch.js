import React, { useState } from 'react'

const HeaderSearch = () => {
    const [inputClass, setInputClass] = useState('header__search-input-wr header__search-input-wr-minus')

    const handleClick = () => {
        setInputClass('header__search-input-wr header__search-input-wr-expand')
    }

    const onBlur = (e) => {
        if(!e.target.value) {
            setInputClass('header__search-input-wr header__search-input-wr-minus')
        }
    }

    return (
        <div className="header__search-wr">
            <img onClick={handleClick} className="header__search-icon" src="/svg/normal-search.svg" alt="header search icon"/>
            <div className={inputClass}>
                <input className="header__search-input" onBlur={onBlur}/>
            </div>
        </div>
    )
}

export default HeaderSearch