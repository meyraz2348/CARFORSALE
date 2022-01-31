import fetchCars from './fetchCars.js'
import displayCars from './displayCars.js'
import setCar from './setCar.js'
const presentCars = async (url) => {
  const data = await fetchCars(url)
  const section = await displayCars(data)
  if (section) {
    setCar(section)
  }
}
export default presentCars
