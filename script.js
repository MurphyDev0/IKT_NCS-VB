let currentImageIndex = 0
let currentCarImages = []

const carImages = {
    gastra: ['images/gastra1.jpg', 'images/gastra2.jpg', 'images/gastra3.jpg', 'images/gastra4.jpg', 'images/gastra5.jpg'],
    focus: ['images/focus1.jpg', 'images/focus2.jpg', 'images/focus3.jpg', 'images/focus4.jpg', 'images/focus5.jpg'],
    cmax: ['images/cmax1.jpg', 'images/cmax2.jpg', 'images/cmax3.jpg', 'images/cmax4.jpg', 'images/cmax5.jpg'],
}

function openModal(car) {
    currentCarImages = carImages[car]
    currentImageIndex = 0
    updateSlide()
    document.getElementById('modal').style.display = 'flex'
}

function closeModal() {
    document.getElementById('modal').style.display = 'none'
}

function changeSlide(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = currentCarImages.length - 1;
    } else if (currentImageIndex >= currentCarImages.length) {
        currentImageIndex = 0
    }
    updateSlide()
}

function updateSlide() {
    document.getElementById('currentSlide').src = currentCarImages[currentImageIndex]
    console.log(currentCarImages[currentImageIndex])
}

function kuldes() {
    const nev = document.getElementById('nev').value.trim()
    const email = document.getElementById('email').value.trim()
    const uzenet = document.getElementById('uzenet').value.trim()
    const popup = document.getElementById('popup')

    if (nev.length !== 0 && email.length !== 0 && uzenet.length !== 0) {
        popup.innerHTML = `&check; Sikeres küldés!`
        popup.classList.add('success')
    } else {
        popup.innerHTML = `&times; Hiba! Minden mezőt ki kell tölteni!`
        popup.classList.add('error')
    }

    popup.style.display = 'block'

    setTimeout(() => {
        popup.style.display = 'none'
    }, 3000)
}