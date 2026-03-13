const url = new URL(window.location.href);
export const params = new URLSearchParams(url.search);

const id = params.get("id")
console.log(id);
