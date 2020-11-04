import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Header from '../components/Header'
import { connect } from 'react-redux'

const PublicRoute = (props) => {

    const {uid, component, ...rest} = props
    if(uid) {
        return (
            <Route {...rest}>
                <Redirect to='/browse'></Redirect>
            </Route>
        )
    }
    return (
        <div>
            <Header  route="public"/>
            <Route {...props} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    uid: state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)