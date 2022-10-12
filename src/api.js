const API_KEY = '166126da2ada1c4f9b0d0d682350475b'
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'language=en-US'

export async function fetchTrendingMovies() {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`)
    if (response.ok) {
        const data = await response.json()
        return data.results
    }
    return new Error()
}  

export async function fetchMovieById(id) {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    if (response.ok) {
        const data = await response.json()
        return data
    }
    return new Error()
}  