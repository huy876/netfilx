import React, { useState } from 'react'
import SlideItem from './SildeItem'
import Slider from 'react-slick'

const Slide = (props) => {
    const rawTitle = props.title
    const title = rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1)

    const [showTitle, setShowTitle] = useState('')
    const [showDesc, setShowDesc] = useState('')
    const [showMaturity, setShowMaturity] = useState('')
    const [showSlug, setShowSlug] = useState('')

    const [slideShowClass, setSlideShowClass] = useState('slide__show')

    const slideSetting = {
        infinite: false,
        speed: 500,
        slidesToShow: 4.2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                slidesToShow: 3.2,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2.1,
                slidesToScroll: 1,
                initialSlide: 2,
                arrows: false
                }
            }
        ]
    }

    const onCloseShow = () => setSlideShowClass('slide__show')
    
    

    return (
        <div className="slide" >
            <h3 className="slide__title">{title}</h3>
            <div className="slide__items-wr">
                <Slider {...slideSetting}>
                    {props.videos.map(video => (
                        <SlideItem
                            key={video.id} 
                            {...video}
                            setShowTitle={setShowTitle}
                            setShowDesc={setShowDesc}
                            setShowMaturity={setShowMaturity}
                            setShowSlug={setShowSlug}
                            setSlideShowClass={setSlideShowClass}
                        />
                    ))}
                </Slider>
            </div>
            <div className={slideShowClass}>
                <div className="slide__show__bg">
                    <img 
                        src={`/images/${props.videoType}/${props.title}/${showSlug}/large.jpg`} 
                        alt=""
                    />
                </div>
                <div className="slide__show__info">
                    <h4 className="slide__show__title">{showTitle}</h4>
                    <p className="slide__show__desc">{showDesc}</p>
                    <div className="slide__show__more-info">
                        <p className="slide__show__maturity">{showMaturity}</p>
                        <p className="slide__show__genre">{title}</p>
                    </div>
                    <div className="slide__show__play-wr">
                        <button>PLAY</button>
                        <span onClick={onCloseShow}>Close</span>
                    </div>
                </div>   
            </div>          
        </div>
    )
}

export default Slide