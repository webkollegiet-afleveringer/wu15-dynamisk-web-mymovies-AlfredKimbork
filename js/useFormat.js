import { useFetch } from "./useFetch.js"

const formatTime = total => {
    const hours = Math.floor(total / 60)
    const minutes = Math.round((total / 60 - hours) * 60)
    return `${hours}h ${minutes}m`
}
export const formatMovies = async movies => {
    const moviesData = await Promise.all(movies.map(movie => useFetch(`https://api.themoviedb.org/3/movie/${movie.id}`)))
    
    const formatted = moviesData.map(movieData=> {
        console.log(movieData);
        const [title, rating, genres, runtime, poster] = [movieData.title, movieData.vote_average.toFixed(1), movieData.genres, formatTime(movieData.runtime), movieData.poster_path]
        return `
            <li>
                <img src="https://image.tmdb.org/t/p/w500${poster}" alt="${title} poster">
                <h2>${title}</h2>
                <p>${rating}</p>
                <ul>
                    ${genres.map(genre => { return `<li>${genre.name}</li>` }).join("")}
                </ul>
                <p>${runtime}</p>
            </li>   
        `;
    }).join("");
    return formatted
}