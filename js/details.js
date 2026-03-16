import { formatDetailed } from "./formats/formatDetailed.js";
import { back } from "./icons.js";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

// console.log(await formatDetailed(params.get("id")));
const body = document.querySelector("body")
body.innerHTML = `
    <header class="header --flex">
        <a href="index.html" class="__menu">${back}</a>
        <label class="__switch --pill">
            <input class="__toggle --hidden" type="checkbox">
            <div class="__center"></div>
        </label>
    </header>   
    ${await formatDetailed(params.get("id"))}`;

document.querySelector(".__toggle").addEventListener("click", () => {
    body.classList.toggle("dark-mode")
})