import { hideLoading } from './toggleLoading.js'
import get from './getElement.js'
const displayCar = (car) => {
  hideLoading()
  const img = get('.car-img')
  const carName = get('.car-name')
  const description = get('.car-desc')
  const ingredients = get('.car-ingredients')
  img.src = car
  const carDetails = `<li><i class="far fa-check-square"></i>98000</li>
    <li><i class="far fa-check-square"></i>Coupe</li>
    <li><i class="far fa-check-square"></i>Automatic</li>
    <li><i class="far fa-check-square"></i>4 cyl 1.8l Turbo Petrol</li>`
  ingredients.innerHTML = carDetails
}
export default displayCar
