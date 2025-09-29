import { tmdbApi } from './BaseApi'

// popular series
export async function GetPopSeries(page = 1, language = "fr-FR") {
    const response = await tmdbApi.get('/tv/popular',
        { params: { page, language } }
    )
    return response
}

/// top series
export async function GetTopRatedSeries(page = 1, language = "fr-FR") {
    const response = await tmdbApi.get('/tv/top_rated', {
        params: { page, language }
    })
    return response
}

/// serie details
export async function GetSerieById(id, language = "fr-FR") {
    const response = await tmdbApi.get(`/tv/${id}`,
        { params: { language } }
    )
    return response
}

// all series
export async function GetAllSeries(page = 1, language = "fr-FR") {
    const response = await tmdbApi.get('/discover/tv',
        { params: { page, language } }
    )
    return response
}

/// search series
export async function GetSerieBySearch(query, language = "fr-FR") {
    const response = await tmdbApi.get('search/tv',
        { params: { query, language } }
    )
    return response
}