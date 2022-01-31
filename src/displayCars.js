import get from './getElement.js'
import { hideLoading } from './toggleLoading.js'
const displayCars = (cars) => {
  const section = get('.section-center')
  const title = get('.title')
  if (!cars) {
    hideLoading()
    title.textContent = 'sorry, no cars matched your search'
    section.innerHTML = null
    return
  } else {
    const newCars = cars
      .map((car) => {
        const { src, id } = car
        return ` <a href="car.html">
            <article class="car" data-id="${id}">
              <img
                src="${src.original}"
                alt="Car"
              />
            </article>
          </a>`
      })
      .join('')
    hideLoading()
    title.textContent = ''
    section.innerHTML = newCars
    return section
  }
}
export default displayCars
