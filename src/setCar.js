const setCar = (section) => {
  section.addEventListener('click', function (e) {
    // e.preventDefault()
    const cardDiv = e.target.parentElement.parentElement.parentElement
    const title = cardDiv.querySelector('h2').textContent
    console.log(title)
    const color = cardDiv.querySelector('.listOne')
    const vehicleColor = color.textContent
    console.log(vehicleColor)
    const vehicleType = color.nextElementSibling.textContent
    console.log(vehicleType)
    const model = cardDiv.querySelector('.listTwo')
    const vehicleModel = model.textContent
    console.log(vehicleModel)
    const vehicleManufacturer = model.nextElementSibling.textContent
    console.log(vehicleManufacturer)
    const id = e.target.parentElement.dataset.id
    localStorage.setItem('car', id)
    localStorage.setItem('vehicleModel', JSON.stringify(`${vehicleModel}`))
    localStorage.setItem(
      'vehicleManufacturer',
      JSON.stringify(`${vehicleManufacturer}`)
    )
    localStorage.setItem('vehicleColor', JSON.stringify(`${vehicleColor}`))
    localStorage.setItem('vehicleType', JSON.stringify(`${vehicleType}`))
  })
}
export default setCar
