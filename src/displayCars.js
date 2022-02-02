import get from './getElement.js'
import { hideLoading } from './toggleLoading.js'
const displayCars = (carImages, carDetails) => {
  const img = carImages.map((img) => {
    const { src, id } = img
    return src.medium
  })
  const imageId = carImages.map((img) => {
    const { src, id } = img
    return id
  })
  const vehicleData = carDetails.map((data) => {
    const { vehicles } = data
    return vehicles
  })
  const vehicleName = vehicleData.map((data) => {
    const { vehicleName } = data[0]
    return vehicleName
  })
  const vehicleColor = vehicleData.map((data) => {
    const { vehicleColor } = data[0]
    return vehicleColor
  })
  const vehicleType = vehicleData.map((data) => {
    const { vehicleType } = data[0]
    return vehicleType
  })
  const vehicleModel = vehicleData.map((data) => {
    const { vehicleModel } = data[0]
    return vehicleModel
  })
  const vehicleManufacturer = vehicleData.map((data) => {
    const { vehicleManufacturer } = data[0]
    return vehicleManufacturer
  })
  const section = get('.section-center')
  const title = get('.title')
  if (!carImages || !carDetails) {
    hideLoading()
    title.textContent = 'sorry, no cars matched your search'
    section.innerHTML = null
    return
  } else {
    for (let i = 0; i < 15; i++) {
      section.innerHTML += ` 
          <div class="cards">
          <div class="card">
            <a href="car.html" class="car">
              <article data-id="${imageId[i]}">
                <img
                  src="${img[i]}"
                />
              </article>
            </a>
            <a href="car.html">
              <aside class="card-content">
                <h2>${vehicleName[i]}</h2>
              </aside>
            </a>
            <div class="card-info">
              <aside>
                <ul >
                  <li class = 'listOne'>${vehicleColor[i]}</li>
                  <li>${vehicleType[i]}</li>
                </ul>
              </aside>
              <aside>
                <ul >
                  <li class = 'listTwo'>${vehicleModel[i]}</li>
                  <li>${vehicleManufacturer[i]}</li>
                </ul>
              </aside>
            </div>
          </div>
        </div>`
    }
    hideLoading()
    title.textContent = ''
    return section
  }
}
export default displayCars
