import React from 'react'
import bg from '../fixtures/joker1.jpg'

const Browse = () => {
    const style1 = {
        background: `url(${bg})`
    }
    return (
        <div>
            <div style={style1} className="page__banner-section">
                <h1>Hi world!</h1>
            </div>
            <div style={{height: '100vh'}}>
                <h1>Demo</h1>
            </div>
        </div>
    )
}

export default Browse 