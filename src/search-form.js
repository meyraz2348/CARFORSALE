import presentCars from './presentCars.js'
import get from './getElement.js'
const baseURL = 'https://api.pexels.com/v1/search?query='
const form = get('.search-form')
const input = get('[name="car"]')

form.addEventListener('keyup', function (e) {
  e.preventDefault()
  if (!input.value) return
  presentCars(`${baseURL}${input.value}`)
  console.log(input.value)
})
