import fetchCars from './fetchCars.js'
import fetchCarDetails from './fetchCarDetails.js'
import displayCars from './displayCars.js'
import setCar from './setCar.js'
const presentCars = async (url, carDetailsURL) => {
  const data = await fetchCars(url)
  const carDetailsData = await fetchCarDetails(carDetailsURL)
  const section = await displayCars(data, carDetailsData)
  if (section) {
    setCar(section)
  }
}
export default presentCars
