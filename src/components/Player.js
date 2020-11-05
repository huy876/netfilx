import React from 'react'

const Player = (props) => {
    const videoRef = React.createRef()

    const closeVideoPlayer = () => {
        videoRef.current.pause()
        props.setPlay('close')
    }

    return (
        <div className={
            props.play === 'close' ?
            'video-player-wr video-player-wr__hidden' :
            'video-player-wr'
        }>
            <div className="video-player">
                <video controls autoPlay={true} ref={videoRef}>
                    <source src="/videos/bunny.mp4" type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
                <p 
                    className="video-player__close-btn" 
                    onClick={closeVideoPlayer}
                > Close </p>
            </div>
        </div>
    )
}

export default Player