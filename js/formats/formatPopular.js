import { clock, star } from "../icons.js"
import { useFetch } from "../useFetch.js"

const formatTime = total => {
    const hours = Math.floor(total / 60)
    const minutes = Math.round((total / 60 - hours) * 60)
    return `${hours}h ${minutes}m`
}
export const formatPopular = async url => {
    const data = await useFetch(url)
    const movieIDs = data.results.map(movie => { return movie.id})
    
    

    const moviesData = await Promise.all(movieIDs.map(id => useFetch(`https://api.themoviedb.org/3/movie/${id}`)))
    console.log(moviesData);
    
    const formatted = moviesData.map(movieData=> {
        const [id, title, rating, genres, runtime, poster] = [movieData.id, movieData.title, movieData.vote_average.toFixed(1), movieData.genres, formatTime(movieData.runtime), movieData.poster_path];
        return `
            <li>
                <a href="details.html?id=${id}" class="__movie --grid">
                    <img class="__poster" src="https://image.tmdb.org/t/p/w500${poster}" alt="${title} poster">
                    <h3 class="__title">${title}</h3>
                    <p class="__rating --flex">${star} ${rating}/10 IMDb</p>
                    <ul class="__genre-list --no-dot --flex">
                        ${genres.map(genre => { return `<li class="__genre --pill --blue">${genre.name}</li>` }).join("")}
                    </ul>
                    <p class="__duration --flex">${clock} ${runtime}</p>
                </a>
            </li>   
        `;
    }).join("");
    return formatted
}