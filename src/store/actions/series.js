import database from '../../firebase/firebase'

export const setSeries = (series) => ({
    type: 'SET_SERIES',
    series
})

export const startSetSeries = () => {
    return async (dispatch) => {
        const seriesSnap = await database.ref('series').once('value')
        const seriesIDs = Object.keys(seriesSnap.val())
        const series = seriesIDs.map(id => ({
            id,
            ...seriesSnap.val()[id]
        }))

        dispatch(setSeries(series))
        
    }
}