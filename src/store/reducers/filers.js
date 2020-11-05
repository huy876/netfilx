const filtersReducerDefaultState = {
    text: '',
    videoType: 'films',
    slideShowClass: 'slide__show'
}

const filtersReducer = (state=filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_TYPE_FILTER':
            return {
                ...state,
                videoType: action.videoType
            }
        default:
            return state
    }
}

export default filtersReducer