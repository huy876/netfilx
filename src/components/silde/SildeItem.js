import React from 'react'
import { connect } from 'react-redux'

const SlideItem = (props) => {
    const slicedDescription = props.description.slice(0, 99) + '...'

    const onClick = () => {
        props.setShowTitle(props.title)
        props.setShowDesc(props.description)
        props.setShowMaturity(props.maturity)
        props.setShowSlug(props.slug)
        props.setSlideShowClass('slide__show slide__show-display')
    }
 
    return (
        <div className="slide__item" onClick={onClick}>
            <div className="slide__item__hidden">
            </div>
            <div className="slide__item__visible">
                <div className="slide__item__img-wr">
                    <img
                        className="slide__item__img" 
                        src={`/images/${props.videoType}/${props.genre}/${props.slug}/small.jpg`} 
                        alt={props.title}
                    /> 
                </div>
                <div className="slide__item__info-wr">
                    <h4 className="slide__item__title">{props.title}</h4>
                    <p className="slide__item__description">{slicedDescription}</p>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    videoType: state.filters.videoType
})

export default connect(mapStateToProps)(SlideItem)