
const getData = () => {
    const options = {
  method: 'GET',
  url: 'https://advanced-movie-search.p.rapidapi.com/search/movie',
  params: {query: 'kong', page: '1'},
  headers: {
    'X-RapidAPI-Key': 'a8f2b62e17msh90d15266ff2a529p1bcec6jsn22365b29d2fc',
    'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
  }
}
//return JSON.parse(options)
}


module.exports = {getData}
