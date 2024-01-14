const API_KEY = '25803b30d68738b5daf05b883e47b5d5'
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

export const fetchedData = () => fetch(API_URL)
  .then(res => {
    if (!res.ok) {
      throw new Error('Request failed! No Data')
    }
    return res.json()
  })
  .catch(err => console.error(err.message))

export const fetchedMovie = (movieId) => fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
  .then(res => {
    if (!res.ok) {
      throw new Error('Request failed! No Data')
    }
    return res.json()
  })
  .catch(err => console.error(err.message))
