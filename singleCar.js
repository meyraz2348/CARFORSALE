import fetchCars from './src/fetchCars.js'
import displayCar from './src/displaySingleCar.js'
const presentCar = async () => {
  const id = localStorage.getItem('car')
  if (!id) {
    window.location.replace('index.html')
  } else {
    const car = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=350`
    displayCar(car)
  }
}
window.addEventListener('DOMContentLoaded', presentCar)
