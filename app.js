import presentCars from './src/presentCars.js'
import './src/search-form.js'
const URL = 'https://api.pexels.com/v1/search/?per_page=50&query=mustang'
const carDetailsURL = 'https://61e4f981595afe00176e5244.mockapi.io/users'
window.addEventListener('DOMContentLoaded', () => {
  presentCars(URL, carDetailsURL)
})
