const seriesReducer = (state=[], action) => {
    switch(action.type) {
        case 'SET_SERIES':
            return action.series
        default:
            return state
    }
}

export default seriesReducer