import React from 'react'
import bg from '../fixtures/joker1.jpg'
import Slide from '../components/silde/Slide'
import getVisibleItem from '../selectors/video'
import { connect } from 'react-redux'

const Browse = (props) => {
    const style1 = {
        background: `url(${bg})`
    }

    const renderBrowse = () => {
        const genreListWithDuplicate = props.videos.map(video => video.genre)
        const genreList = Array.from(new Set(genreListWithDuplicate))

        const genreObject = {}
        for(const key of genreList) {
            genreObject[key] = props.videos.filter(video => video.genre === key)
        }
        
        return genreList.map((genre, i) => (
            <Slide 
                key={i}
                title={genre}
                videos={genreObject[genre]}
                videoType={props.videoType}
            />
        ))
    }

    return (
        <div className="page__container">
            <div style={style1} className="page__banner-section">
                <h1>Hi world!</h1>
            </div>
            <div className="sildes-section">
                {renderBrowse()}
            </div>
        </div> 
    )
}

const mapStateToProps = ({films, series, filters}) => ({
    videos: getVisibleItem(films, series, filters),
    videoType: filters.videoType
})

export default connect(mapStateToProps)(Browse) 