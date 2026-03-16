import { play, star } from "../icons.js"
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
        <figure class="poster">
            <img class="__img" src="https://image.tmdb.org/t/p/w500${banner}" alt="${title} banner">
            <figcaption class="__play --flex">
                ${play}
                Play Trailer
            </figcaption>
        </figure>
        <article class="__content --flex">
            <h1>${title}</h1>
            <p class="__rating --flex">${star} ${rating}/10 IMDb</p>
            <ul class="__genre-list --no-dot --flex">
            ${genres.map(genre => { return `<li class="__genre --pill --blue">${genre.name}</li>` }).join("")}
            </ul>
            <table>
                <thead>
                    <tr>
                        <td class="__data-name --light">Length</td>
                        <td class="__data-name --light">Language</td>
                        <td class="__data-name --light">Rating</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="__data">${duration}</td>
                        <td class="__data">
                            <ul class="--no-dot">
                                ${languages.map(language => {
                                    return `
                                        <li>${language.english_name}</li>
                                    `;
                                }).join("")}
                            </ul>
                        </td>
                        <td class="__data">undefined</td>
                    </tr>
                </tbody>
            </table>
            <h2 class="--merriweather">Description</h2>
            <p class="__desc --light">${desc}</p>
            <section class="cast">
            <header class="__header --flex --space-between">
            <h2 class="--merriweather">Cast</h2>
            <a href="" class="__more --pill --grey-border --light">See more</a>
            </header
            <p>undefined</p>
            </section>
        </article>
    `;
}