let ploufPloufNames = [];


const nameNotFound = () => {
    myInputValue = document.querySelector('.inputName').value;
    ploufPloufNames.push(myInputValue);
    console.log(ploufPloufNames)
    displayNamesPut()
    return false
}

const displayNamesPut = () => {
    displayedNameContainer = document.querySelector('.displayedNameContainer')
    displayedNameContainer.innerHTML = ""
    ploufPloufNames.forEach(name => {
        displayedNameContainer.innerHTML += `<span class="nameItem">${name.split(',')}<span>`
    })
}

const getRandom = () => {
    const randomName = ploufPloufNames[Math.floor(Math.random() * ploufPloufNames.length)];
    document.querySelector(".randomContainer").style.background = "#fe2726"
    setTimeout(() => {
        document.querySelector(".randomContainer").style.background = "#FFFFFF"
        displayedRandomName = document.querySelector('.displayedRandomName')
        displayedRandomName.innerHTML = `<span class="randomName">${randomName}<span>`
    }, 500);
    return
}




