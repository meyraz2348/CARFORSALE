import presentCars from './src/presentCars.js'
import './src/search-form.js'
const URL = 'https://api.pexels.com/v1/search?query=mustang'
window.addEventListener('DOMContentLoaded', () => {
  presentCars(URL)
})
