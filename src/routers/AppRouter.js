import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Browse from '../pages/Browse'
import NotFound from '../pages/NotFound'
import Footer from '../components/Footer'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const AppRouter = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <PublicRoute path="/" component={Home} exact={true} />
                    <PublicRoute path="/sign-in" component={Signin} />
                    <PublicRoute path="/sign-up" component={Signup} />
                    <PrivateRoute path="/browse" component={Browse} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default AppRouter