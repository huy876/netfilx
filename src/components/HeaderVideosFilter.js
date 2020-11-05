import React from 'react'
import { connect } from 'react-redux'
import { setTypeFilter } from '../store/actions/filters'

const HeaderVideosFilter = (props) => {
    const handleSetFilmsFilter = () => {
        props.setTypeFilter('films')
    }

    const handleSetSeriesFilter = () => {
        props.setTypeFilter('series')
    }

    return (
        <div className="header__videos-filter">
            <span onClick={handleSetFilmsFilter}> Films </span>
            <span>|</span>
            <span onClick={handleSetSeriesFilter}> Series </span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setTypeFilter: (videoType) => dispatch(setTypeFilter(videoType))
})

export default connect(undefined, mapDispatchToProps)(HeaderVideosFilter)