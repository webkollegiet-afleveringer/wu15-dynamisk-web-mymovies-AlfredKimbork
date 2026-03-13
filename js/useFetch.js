export const useFetch = async url => {
    const data = await fetch(url, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGU5YjZmYjBjYzYzYTc3NTU3ZjQ0ZDk0NGJjY2ZjNCIsIm5iZiI6MTc3MzIyNDExMS4xNzkwMDAxLCJzdWIiOiI2OWIxNDBhZjQ1MjIyZmM1NzgwOTQyODIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uTndF08_gAU7PP7HJ2QLDAXvM81W_iwGw-HVGDQocdQ',
            accept: 'application/json'
        }
    }).then(response => response.json())
    return data
}