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

const nev = document.getElementById('nev').value.trim()
const email = document.getElementById('email').value.trim()
const uzenet = document.getElementById('uzenet').value.trim()
const popup = document.getElementById('popup')

function validateEmail(email) {
    if (email.length == 0) {
        return false;
    }

    email = email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@_]{2,}$/;

    if (!emailRegex.test(email)) {
        return false;
    }

    const [localPart, domain] = email.split('@');

    if (localPart.length > 64 || domain.length > 255) {
        return false;
    }

    if (localPart.length < 6){
        return false;
    }

    const localPartRegex = /^[a-zA-Z]+$/;
    if (localPart.length > 6 && !localPartRegex.test(localPart[0])){
        return false;
    }
    
    if (localPart[0] == "." || localPart[localPart.length - 1] == "."){
        return false;
    }

    const validExtensions = [
        '.com', '.org', '.net', '.edu', '.gov', '.mil', '.int', 
        '.info', '.biz', '.name', '.pro', '.mobi', '.aero', '.asia',
        '.io', '.dev', '.app', '.tech', '.online', 
        '.blog', '.club', '.xyz', '.global', 
        '.hu', '.us', '.uk', '.de', '.fr', '.eu', '.ro'
    ];

    let extensionCount = 0;

    for (let i = 0; i <= validExtensions.length; i++) {
        if (domain.includes(validExtensions[i])) {
            extensionCount++;
            console.log(validExtensions[i]);
        }
    }       

    console.log(extensionCount);
    if (extensionCount == 0 || extensionCount > 1) {
        return false;
    }

    const mainDomainRegex = /^(gmail\.com|outlook\.com|yahoo\.com|hotmail\.com|protonmail\.com|icloud\.com)$/i;

    if(!mainDomainRegex.test(domain)){
        return false;
    }

    const forbiddenChars = /[()[\]\\,;:&#|$/<>]/;
    if (forbiddenChars.test(email)) {
        return false;
    }

    if (/\.{2,}/.test(email)) {
        return false;
    }

    return true;
}

function kuldes() {
    const nev = document.getElementById('nev').value.trim();
    const email = document.getElementById('email').value.trim();
    const uzenet = document.getElementById('uzenet').value.trim();
    const popup = document.getElementById('popup');

    popup.classList.remove("error");

    if (nev.length !== 0 && email.length !== 0 && uzenet.length !== 0) {
        if (validateEmail(email)) {
            console.log("Sikeres küldés!");
            popup.innerHTML = `&check; Sikeres küldés!`;
            popup.classList.add('success');
        } else {
            console.log("Hiba: Hibás email cím!");
            popup.innerHTML = `&times; Hiba! Hibás email cím!`;
            popup.classList.add('error');
        }
    } else {
        console.log("Hiba: Minden mezőt ki kell tölteni!");
        popup.innerHTML = `&times; Hiba! Minden mezőt ki kell tölteni!`;
        popup.classList.add('error');
    }

    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
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