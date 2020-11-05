const getVisibleItem = (films, series, filters) => {
    if(filters.videoType === 'films') {
        return films.filter(film => {
            const titleMatch = (
                filters.text ? 
                film.title.toLowerCase().search(filters.text.toLowerCase()) >= 0 :
                true
            )
            const descriptionMatch = (
                filters.text ? 
                film.description.toLowerCase().search(filters.text.toLowerCase()) >= 0 :
                true
            )

            return titleMatch || descriptionMatch
        })
    } else if(filters.videoType === 'series') {
        return series.filter(serie => {
            const titleMatch = (
                filters.text ? 
                serie.title.toLowerCase().search(filters.text.toLowerCase()) >= 0 :
                true
            )
            const descriptionMatch = (
                filters.text ? 
                serie.description.toLowerCase().search(filters.text.toLowerCase()) >= 0 :
                true
            )

            return titleMatch || descriptionMatch
        })
    }
}

export default getVisibleItem