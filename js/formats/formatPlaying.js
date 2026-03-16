import { star } from "../icons.js";
import { useFetch } from "../useFetch.js"

export const formatPlaying = async url => {
    const data = await useFetch(url)
    const movies = data.results

    const moviesData = await Promise.all(movies.map(movie => useFetch(`https://api.themoviedb.org/3/movie/${movie.id}`)))
    const formatted = moviesData.map(movieData=> {
        
        const [id, title, rating, poster] = [movieData.id, movieData.title, movieData.vote_average.toFixed(1), movieData.poster_path]
        return `
        <li class="__movie --grid">
        <a href="details.html?id=${id}" class="__movie --grid">
        <img class="__poster" src="https://image.tmdb.org/t/p/w500${poster}" alt="${title} poster">
        <h3 class="__title">${title}</h3>
        <p class="__rating --flex">${star} ${rating}/10 IMDb</p>
        </a>
        </li>   
        `;
    }).join("");
    return formatted
}