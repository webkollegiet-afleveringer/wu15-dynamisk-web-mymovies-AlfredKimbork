import { clock } from "../icons.js"
import { useFetch } from "../useFetch.js"

const formatTime = total => {
    const hours = Math.floor(total / 60)
    const minutes = Math.round((total / 60 - hours) * 60)
    return `${hours}h ${minutes}m`
}
export const formatPopular = async movies => {
    const moviesData = await Promise.all(movies.map(movie => useFetch(`https://api.themoviedb.org/3/movie/${movie.id}`)))
    const formatted = moviesData.map(movieData=> {
        const [title, rating, genres, runtime, poster] = [movieData.title, movieData.vote_average.toFixed(1), movieData.genres, formatTime(movieData.runtime), movieData.poster_path]
        return `
            <li class="__item --grid">
                <img class="__poster" src="https://image.tmdb.org/t/p/w500${poster}" alt="${title} poster">
                <h3 class="__title">${title}</h3>
                <p class="__rating">${star} ${rating}/10 IMDb</p>
                <ul class="__genre-list --flex">
                    ${genres.map(genre => { return `<li class="__item">${genre.name}</li>` }).join("")}
                </ul>
                <p class="__duration">${clock} ${runtime}</p>
            </li>   
            `;
    }).join("");
    return formatted
}