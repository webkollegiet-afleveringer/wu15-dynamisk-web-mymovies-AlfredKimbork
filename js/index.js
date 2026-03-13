import { useFetch } from "./useFetch.js"
import { formatPlaying } from "./formats/formatPlaying.js"

const body = document.querySelector("body")

let url = "https://api.themoviedb.org/3/movie/now_playing"

const data = await useFetch(url)
const res = data.results

body.innerHTML = ` 
    <header>
        <h1>MyMovies</h1>
        <label class="__switch --pill">
            <input class="__toggle --hidden" type="checkbox">
            <div class="__center"></div>
        </label>
    </header>
    <main>
        <section class="now-playing">
            <header class="--flex">
                <h2>Now Showing</h2>
            </header>
            <ul class="__showing-list --no-dot --grid">
                ${await formatPlaying(res)}
            </ul>
        </section>
    </main>
`;



document.querySelector(".__toggle").addEventListener("click", () => {
    body.classList.toggle("dark-mode")
})


