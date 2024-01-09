const API_KEY = '25803b30d68738b5daf05b883e47b5d5'
const API_URL = `https://api.themoviedb.org/3/movie/157336?api_key=${API_KEY}`

export const fetchedData = () => fetch(API_URL)
  .then(res => {
    if (!res.ok) {
      throw new Error('Request failed! No Data')
    }
    return res.json()
  })
  .catch(err => console.error(err.message))
