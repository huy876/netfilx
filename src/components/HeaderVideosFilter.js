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
            <span 
                onClick={handleSetFilmsFilter}
                style={(
                    props.videoType === 'films' ?
                    {color: 'white', fontWeight: '600'} : 
                    {}
                )}
            > Films </span>
            <span>|</span>
            <span 
                onClick={handleSetSeriesFilter}
                style={(
                    props.videoType === 'series' ?
                    {color: 'white', fontWeight: '600'} : 
                    {}
                )}
            > Series </span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    videoType: state.filters.videoType
})

const mapDispatchToProps = (dispatch) => ({
    setTypeFilter: (videoType) => dispatch(setTypeFilter(videoType))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderVideosFilter)