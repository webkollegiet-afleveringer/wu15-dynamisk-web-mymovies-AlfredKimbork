import { useFetch } from "./useFetch.js"
import { formatMovies } from "./useFormat.js"

const body = document.querySelector("body")

let url = "https://api.themoviedb.org/3/trending/movie/day"

const data = await useFetch(url)
const res = data.results

body.innerHTML = ` 
    <main>
        <ul>
            ${await formatMovies(res)}
        </ul>
    </main>
`;


