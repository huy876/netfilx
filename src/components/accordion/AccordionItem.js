import React from 'react'

const AccordionItem = (props) => {
    const toggleBody = () => {
        props.handleDisplay(props.id)
    }

    const className = (
        props.displayId === props.id ?
        'accor-item accor-item-display' :
        'accor-item accor-item-hidden'
    )
    return (
        <div className={className}>
            <div className="accor-item__header" onClick={toggleBody}>
                <p>{props.header}</p>
                <button>+</button>
            </div>
            <div className="accor-item__body">
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default AccordionItem