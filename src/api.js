const API_KEY = '166126da2ada1c4f9b0d0d682350475b'
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'en-US'

export async function fetchTrendingMovies() {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=${LANGUAGE}`)
    if (response.ok) {
        const data = await response.json()
        return data.results
    }
    return new Error()
}  

export async function fetchMovieById(id) {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${LANGUAGE}`)
    if (response.ok) {
        const data = await response.json()
        return data
    }
    return new Error()
}  

export async function fetchCast(id) {
     const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=${LANGUAGE}`)
    if (response.ok) {
        const data = await response.json()
        return data.cast
    }
    return new Error()
}

export async function fetchReviews(id) {
     const response = await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=${LANGUAGE}&page=1`)
    if (response.ok) {
        const data = await response.json()
        return data.results
    }
    return new Error()
}

export async function fetchMoviesByQuery(query) {
     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&page=1&query=${query}`)
    if (response.ok) {
        const data = await response.json()
        return data.results
    }
    return new Error()
}