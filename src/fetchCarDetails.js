const fetchCarDetails = async (URL) => {
  // const response = await fetch(URL, {
  //   method: 'GET',
  //   headers: {
  //     'x-rapidapi-host': 'car-data.p.rapidapi.com',
  //     'x-rapidapi-key': 'd90113dbf8mshd9a823a59fa3ae4p17bdd8jsn8158ab599c35',
  //   },
  // })
  const response = await fetch(URL)
  const data = await response.json()
  return data
}
export default fetchCarDetails
