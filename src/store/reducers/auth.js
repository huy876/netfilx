const authReducer = (state={}, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return {
                uid: action.uid,
                name: action.name
            }
        case 'SIGN_OUT':
            return {}
        default:
            return state
    }
}

export default authReducer