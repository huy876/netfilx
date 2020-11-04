import React from 'react'

const Jumbotron = (props) => {
    const contClass = (
        props.direction === 'row' ? 'jumbo__cont' : 'jumbo__cont jumbo__cont-reverse'
    )
    return (
        <div className="jumbo">
            <div className={contClass}>
                <div className="jumbo__col jumbo__col-1">
                    <h3 className="jumbo__title">{props.title}</h3>
                    <p className="jumbo__sub-title"> {props.subTitle}</p>
                </div>
                <div className="jumbo__col jumbo__col-2">
                    <img className="jumbo__img" src={props.image} alt={props.alt} />
                </div>
            </div>            
        </div>
    )
}

export default Jumbotron