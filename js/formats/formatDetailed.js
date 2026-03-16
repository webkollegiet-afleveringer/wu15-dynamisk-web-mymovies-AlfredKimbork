import { star } from "../icons.js"
import { useFetch } from "../useFetch.js"

const formatTime = total => {
    const hours = Math.floor(total / 60)
    const minutes = Math.round((total / 60 - hours) * 60)
    return `${hours}h ${minutes}m`
}

export const formatDetailed = async id => {
    const movieData = await useFetch(`https://api.themoviedb.org/3/movie/${id}`)
    console.log(movieData)
    const [banner, title, rating, genres, duration, languages, desc] = [movieData.backdrop_path,movieData.title, movieData.vote_average.toFixed(1), movieData.genres, formatTime(movieData.runtime), movieData.spoken_languages, movieData.overview];
    return `
        <img class="__poster" src="https://image.tmdb.org/t/p/w500${banner}" alt="${title} banner">
        <h1>${title}</h1>
        <p class="__rating --flex">${star} ${rating}/10 IMDb</p>
        <ul class="__genre-list --no-dot --flex">
            ${genres.map(genre => { return `<li class="__genre --pill --blue">${genre.name}</li>` }).join("")}
        </ul>
        <table>
            <thead>
                <trow>
                    <td>Length</td>
                    <td>Language</td>
                    <td>Rating</td>
                </trow
            </thead>
            <tbody>
                <trow>
                    <td>${duration}</td>
                    <td>
                        <ul>
                            ${languages.map(language => {
                                return `
                                    <li>${language.name}</li>
                                `;
                            })}
                        </ul>
                    </td>
                    <td>who knows</td>
                </trow
            </tbody>
        </thead>
        <p>${desc}</p>
    `;
}