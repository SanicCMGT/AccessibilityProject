window.onload = setupBtn

function setupBtn(){
    let aBtn = document.getElementById("accessBtn")
    aBtn.addEventListener("click", setupPage)
}


function setupPage(){
    //remove iframe before accessibility mode gets turned on
    let iframe = document.getElementById("iframe")
    iframe.remove()
    let aBtn = document.getElementById("accessBtn")
    aBtn.remove()

    //addheader
    addHeader()

    let buttonContainer = document.createElement("div")
    buttonContainer.id = "buttonContainer"
    let body = document.getElementById("body")
    body.appendChild(buttonContainer)

    let mSBtn = document.createElement("div")
    let storingBtn = document.createElement("div")
    let newsBtn = document.createElement("div")
    let MOBtn = document.createElement("div")

    mSBtn.addEventListener("click", setupMeterstandPage)

    mSBtn.classList.add("block")
    storingBtn.classList.add("block")
    newsBtn.classList.add("block")
    MOBtn.classList.add("block")

    mSBtn.innerHTML = "Meterstand doorgeven"
    storingBtn.innerHTML = "Storingen"
    newsBtn.innerHTML = "Nieuws"
    MOBtn.innerHTML = "Mijn Oasen"

    buttonContainer.appendChild(mSBtn)
    buttonContainer.appendChild(storingBtn)
    buttonContainer.appendChild(newsBtn)
    buttonContainer.appendChild(MOBtn)


    //addfooter
    addFooter()
}

function addFooter() {
    let footer = document.createElement("footer")
    let body = document.getElementById("body")

    let adres = document.createElement("div")
    let email = document.createElement("div")
    let telephone = document.createElement("div")

    adres.innerHTML = "Oasen N.V. Nieuwe Gouwe O.Z. 3, 2801 SB Gouda"
    email.innerHTML = "info@oasen.nl"
    telephone.innerHTML = "0182 - 59 35 30"

    footer.innerHTML += 
      "<h3>Contact</h3><br>"
    
      body.appendChild(footer)
      footer.appendChild(adres)
      footer.appendChild(email)
      footer.appendChild(telephone)

}

function addHeader() {
    let header = document.createElement("header")
    let body = document.getElementById("body")
    header.innerHTML += 
      "<h1>Oasen</h1><br>";
    
    body.appendChild(header)
}

function setupMeterstandPage(){
    let buttonContainer = document.getElementById("buttonContainer")
    let blocks = document.getElementsByClassName("block")
    let length = blocks.length
    for(let i = 0; i<length; i++){
        blocks[0].remove()
    }

    let icon = document.createElement("svg")
    let h1Meterstand = document.createElement("h1")

    h1Meterstand.innerHTML = "Meterstand doorgeven"

    

}