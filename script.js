let currentImageIndex = 0
let currentCarImages = []

const carImages = {
    gastra: ['images/gastra1.jpg', 'images/gastra2.jpg', 'images/gastra3.jpg', 'images/gastra4.jpg', 'images/gastra5.jpg'],
    focus: ['images/focus1.jpg', 'images/focus2.jpg', 'images/focus3.jpg', 'images/focus4.jpg', 'images/focus5.jpg'],
    cmax: ['images/cmax1.jpg', 'images/cmax2.jpg', 'images/cmax3.jpg', 'images/cmax4.jpg', 'images/cmax5.jpg'],
    a6avant: ['images/a61.jpg', 'images/a62.jpg', 'images/a63.jpg', 'images/a64.jpg', 'images/a65.jpg'],
    f150: ['images/f1501.jpg', 'images/f1502.jpg', 'images/f1503.jpg'],
    gle: ['images/gle1.jpg', 'images/gle2.jpg', 'images/gle3.jpg', 'images/gle4.jpg', 'images/gle5.jpg'],
    cayman: ['images/cayman1.jpg', 'images/cayman2.jpg', 'images/cayman3.jpg', 'images/cayman4.jpg', 'images/cayman5.jpg'],
    stinger: ['images/stinger1.jpg', 'images/stinger2.jpg', 'images/stinger3.jpg', 'images/stinger4.jpg', 'images/stinger5.jpg'],
    caravelle: ['images/caravelle1.jpg', 'images/caravelle2.jpg', 'images/caravelle3.jpg', 'images/caravelle4.jpg', 'images/caravelle5.jpg'],
    ram: ['images/ram1.jpg', 'images/ram2.jpg', 'images/ram3.jpg', 'images/ram4.jpg', 'images/ram5.jpg'],
    a5: ['images/a51.jpg', 'images/a52.jpg', 'images/a53.jpg', 'images/a54.jpg', 'images/a55.jpg']
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
}

function kuldes() {
    
    const nev = document.getElementById('nev').value.trim()
    const email = document.getElementById('email').value.trim()
    const uzenet = document.getElementById('uzenet').value.trim()
    const popup = document.getElementById('popup')

    popup.classList.remove("error");

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

function loading(){
    const loader = document.getElementById('loader')
    loader.style.display = 'flex'

    let files = 63;
    let filesSec = 10000/files;
    let loadedFiles = 0;

    document.getElementById('allFiles').innerHTML = files;
    setTimeout(() => {
        for(let i = 0; i < files; i++){
            setTimeout(() => {
                loadedFiles++;
                document.getElementById("loadedFiles").innerHTML = loadedFiles;
            }, filesSec * i)
        }
        document.getElementById("loadedFiles").innerHTML = loadedFiles;
    }, filesSec)

    setTimeout(() => {
        window.location.href = "https://murphydev0.github.io/IKT_NCS-VB/fooldal.html"
    }, 10000)
}