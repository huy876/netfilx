import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routers/AppRouter'
import { Provider } from 'react-redux'
import store from './store/configStore'
import { firebase } from './firebase/firebase'
import { login, logout } from './store/actions/auth'
import { startSetFilms } from './store/actions/films'
import { startSetSeries } from './store/actions/series'
import Loading from './pages/Loading'

import './firebase/firebase'

import './styles/style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

let hasRendered = false

const renderApp = () => {
    const jsx = (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'))
    }
    hasRendered = true   
}

ReactDOM.render(<Loading />, document.getElementById('root'))

firebase.auth().onAuthStateChanged(async (user) => {
    if(user) {
        console.log('Logged in as', user.email, '====', user.displayName)
        await store.dispatch(login(user.uid, user.displayName))
        await store.dispatch(startSetFilms())
        await store.dispatch(startSetSeries())
        renderApp()
        if(history.location.pathname === '/sign-up' || history.location.pathname === '/sign-in') {
            history.push('/browse')
        }
    } else {
        renderApp()
        await store.dispatch(logout())
        console.log('Logged out')
    }
})


