import { createStore, combineReducers, applyMiddleware, compose } from '@reduxjs/toolkit'
import authReducer from './reducers/auth'
import filmsReducer from './reducers/films'
import seriesReducer from './reducers/series'
import filtersReducer from './reducers/filers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
        auth: authReducer,
        films: filmsReducer,
        series: seriesReducer,
        filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
)

export default store