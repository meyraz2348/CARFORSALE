import { showLoading } from './toggleLoading.js'
const fetchCars = async (url) => {
  try {
    showLoading()
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization:
          '563492ad6f91700001000001b43a921394f2491eaf3af888e1266566',
      },
    })
    const data = await response.json()
    return data.photos
  } catch (error) {
    console.log(error)
  }
}
export default fetchCars
