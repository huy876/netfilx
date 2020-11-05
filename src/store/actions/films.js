import database from '../../firebase/firebase'

export const setFilms = (films) => ({
    type: 'SET_FILMS',
    films
})

export const startSetFilms = () => {
    return async (dispatch) => {
        const filmsSnap = await database.ref('films').once('value')
        const filmsIDs = Object.keys(filmsSnap.val())
        const films = filmsIDs.map(id => ({
            id,
            ...filmsSnap.val()[id]
        }))

        dispatch(setFilms(films))
        
    }
}