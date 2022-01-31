const setCar = (section) => {
  section.addEventListener('click', function (e) {
    // e.preventDefault()
    const id = e.target.parentElement.dataset.id
    localStorage.setItem('car', id)
  })
}
export default setCar
