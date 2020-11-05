import React, { useState } from 'react'
import bg from '../fixtures/joker1.jpg'
import Slide from '../components/silde/Slide'
import getVisibleItem from '../selectors/video'
import { connect } from 'react-redux'
import Player from '../components/Player'
 
const Browse = (props) => {
    const [play, setPlay] = useState('close')

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
                setPlay={setPlay}
            />
        ))
    }

    const openPlayer = () => {
        console.log('Play')
        setPlay('open')
    }

    const style1 = {
        background: `url(${bg})`
    }

    return (
        <div className="page__container">
            <div style={style1} className="page__banner-section">
                <div className="page__banner-section__content">
                    <h1>Watch Joker Now</h1>
                    <p>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as 
                    he walks the streets of Gotham City. Arthur wears two masks -- the one he 
                    paints for his day job as a clown, and ...
                    </p>
                    <button onClick={openPlayer}>Play</button>
                </div>
            </div>
            <div className="sildes-section">
                {renderBrowse()}
            </div>
            <div className="video-player__popup">
                <Player play={play} setPlay={setPlay}/>
            </div>
        </div> 
    )
}

const mapStateToProps = ({films, series, filters}) => ({
    videos: getVisibleItem(films, series, filters),
    videoType: filters.videoType
})

export default connect(mapStateToProps)(Browse) 