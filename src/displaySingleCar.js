import { hideLoading } from './toggleLoading.js'
import get from './getElement.js'
const displayCar = (
  car,
  vehicleModel,
  vehicleManufacturer,
  vehicleColor,
  vehicleType
) => {
  hideLoading()
  const img = get('.car-img')
  const details = get('.car-details')
  img.src = car
  const carDetails = `<li><i class="far fa-check-square"></i>${vehicleModel.replace(
    /"/g,
    ''
  )}</li>
    <li><i class="far fa-check-square"></i>${vehicleManufacturer.replace(
      /"/g,
      ''
    )}</li>
    <li><i class="far fa-check-square"></i>${vehicleColor.replace(
      /"/g,
      ''
    )}</li>
    <li><i class="far fa-check-square"></i>${vehicleType.replace(
      /"/g,
      ''
    )}</li>`
  details.innerHTML = carDetails
}
export default displayCar
