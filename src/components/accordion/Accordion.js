import React, { useState } from 'react'
import AccordionItem from './AccordionItem'
import faqs from '../../fixtures/faqs.json'

const Accordion = () => {
    const [displayId, setDisplayId] = useState('')

    const handleDisplay = (id) => {
        if(displayId === id) {
            return setDisplayId('')
        }
        setDisplayId(id)
    }

    return (
        <div className="accordion">
            {faqs.map(faq => (
                <AccordionItem 
                    key={faq.id} 
                    {...faq}
                    displayId={displayId}
                    handleDisplay={handleDisplay}
                />
            ))}
        </div>
    )
}

export default Accordion