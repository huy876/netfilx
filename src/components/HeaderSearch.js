import React, { useState } from 'react'
import { setTextFilter } from '../store/actions/filters'
import { connect } from 'react-redux'

const HeaderSearch = (props) => {
    const [inputClass, setInputClass] = useState('header__search-input-wr header__search-input-wr-minus')

    const handleClick = () => {
        setInputClass('header__search-input-wr header__search-input-wr-expand')
    }

    const onBlur = (e) => {
        if(!e.target.value) {
            setInputClass('header__search-input-wr header__search-input-wr-minus')
        }
    }

    const onSearch = (e) => {
        props.setTextFilter(e.target.value)
    }

    return (
        <div className="header__search-wr">
            <img onClick={handleClick} className="header__search-icon" src="/svg/normal-search.svg" alt="header search icon"/>
            <div className={inputClass}>
                <input
                    className="header__search-input" 
                    onBlur={onBlur}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)) 
})

export default connect(undefined, mapDispatchToProps)(HeaderSearch)