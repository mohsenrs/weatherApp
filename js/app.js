const cityForm = document.querySelector('.change-location')
cityForm.addEventListener('submit', e => {
    e.preventDefault()
    const city = cityForm.city.value.trim()
    cityForm.reset()
})