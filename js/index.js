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
    footer.innerHTML += 
      "<h3>Contact</h3><br>"
      "<p><b>Adres</b></p>"
      "<p>Oasen N.V.</p>"
      "<p>Nieuwe Gouwe O.Z. 3</p>"
      "<p>2801 SB Gouda</p></p>"
      "<p><b>Telefoonnummer</b></p>"
      "<p>0182 - 59 35 30</p>";

    body.appendChild(footer)

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