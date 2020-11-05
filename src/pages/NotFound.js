import React from 'react'
import bg from '../fixtures/home-bg.jpg'

const NotFound = () => {
    const style = {
        background: `url(${bg})`,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    }
    return (
        <div style={style}>
            <h1>Page is under maintenance</h1>
        </div>
    )
}

export default NotFound 