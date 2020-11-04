import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Header from '../components/Header'
import { connect } from 'react-redux'

const PrivateRoute = (props) => {

    const {uid, component, ...rest} = props
    if(!uid) {
        return (
            <Route {...rest}>
                <Redirect to='/sign-in'></Redirect>
            </Route>
        )
    }
    return (
        <div>
            <Header  route="private"/>
            <Route {...props} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    uid: state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)