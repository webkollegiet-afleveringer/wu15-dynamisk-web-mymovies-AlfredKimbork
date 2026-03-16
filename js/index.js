import { formatPlaying } from "./formats/formatPlaying.js"
import { formatPopular } from "./formats/formatPopular.js"
import { menu } from "./icons.js";

const body = document.querySelector("body")

body.innerHTML = ` 
    <header class="header --flex">
        <button class="__menu">${menu}</button>
        <h1 class="__heading --merriweather">MyMovies</h1>
        <label class="__switch --pill">
            <input class="__toggle --hidden" type="checkbox">
            <div class="__center"></div>
        </label>
    </header>
    <main>
        <section class="showing">
            <header class="__header --flex">
                <h2 class="--merriweather">Now Showing</h2>
                <a href="" class="__more --pill --grey-border --light">See more</a>
            </header>
            <ul class="__showing-list --no-dot --grid">
                ${await formatPlaying("https://api.themoviedb.org/3/movie/now_playing")}
            </ul>
        </section>
        <section class="popular">
            <header class="__header --flex">
                <h2 class="--merriweather">Popular</h2>
                <a href="" class="__more --pill --grey-border --light">See more</a>
            </header>
            <ul class="__popular-list --no-dot --flex">
                ${await formatPopular("https://api.themoviedb.org/3/trending/movie/day")}
            </ul>
        </section>
    </main>
`;



document.querySelector(".__toggle").addEventListener("click", () => {
    body.classList.toggle("dark-mode")
})


