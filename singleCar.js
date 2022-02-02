import fetchCars from './src/fetchCars.js'
import displayCar from './src/displaySingleCar.js'
const presentCar = async () => {
  const id = localStorage.getItem('car')
  console.log(id)
  const model = localStorage.getItem('vehicleModel')
  const manufacturer = localStorage.getItem('vehicleManufacturer')
  const color = localStorage.getItem('vehicleColor')
  const type = localStorage.getItem('vehicleType')
  if (!id) {
    window.location.replace('index.html')
  } else {
    const car = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=350`
    displayCar(car, model, manufacturer, color, type)
  }
}
window.addEventListener('DOMContentLoaded', presentCar)
