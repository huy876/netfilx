import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'

const BasicRoute = (props) => (
    <div>
        <Header />
        <Route {...props} />
    </div>
)

export default BasicRoute