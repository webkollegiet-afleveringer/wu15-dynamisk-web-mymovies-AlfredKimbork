import { star } from "../icons.js";
import { useFetch } from "../useFetch.js"

export const formatPlaying = async movies => {
    const moviesData = await Promise.all(movies.map(movie => useFetch(`https://api.themoviedb.org/3/movie/${movie.id}`)))
    const formatted = moviesData.map(movieData=> {
        const [title, rating, poster] = [movieData.title, movieData.vote_average.toFixed(1), movieData.poster_path]
        return `
            <li class="__item --grid">
                <img class="__poster" src="https://image.tmdb.org/t/p/w500${poster}" alt="${title} poster">
                <div>
                    <h3 class="__title">${title}</h3>
                    <p class="__rating">${star} ${rating}/10 IMDb</p>
                </div>
            </li>   
        `;
    }).join("");
    return formatted
}