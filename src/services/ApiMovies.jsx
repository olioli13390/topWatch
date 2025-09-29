import { tmdbApi } from "./BaseApi";

// tous les films populaires
export async function GetPopMovies(page = 1, language = "fr-FR") {
    const response = await tmdbApi.get("/movie/popular", {
        params: { page, language }
    })
    return response.data
}

// tous les films top rated
export async function GetTopRatedMovies(page = 1, language = "fr-FR") {
    const response = await tmdbApi.get("/movie/top_rated", {
        params: { page, language }
    })
    return response.data
}

// film par id
export async function GetMovieById(id, language = "fr-FR") {
    const response = await tmdbApi.get(`/movie/${id}`,
        { params: { language } })
    return response.data

}

// trailer du film
export async function GetMovieTrailer(id, language = "fr-FR") {
    const response = await tmdbApi.get(`/movie/${id}/videos`,
        { params: { language } })
    return response.data.results
}

// search a movie
export async function GetMovieBySearch(query, language = "fr-FR") {
    const response = await tmdbApi.get("/search/movie", {
        params: { query, language }
    })
    return response.data.results
}

// authentification
export async function GetToken() {
    const response = await tmdbApi.get("https://api.themoviedb.org/3/authentication/token/new")
    return response.data
}

/// tous les films dans search
export async function GetAllMovies(page = 1, language = "fr-FR") {
    const response = await tmdbApi.get('/discover/movie', {
        params: { page, language }
    })
    return response
}