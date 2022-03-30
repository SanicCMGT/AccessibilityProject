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

    //adds the four buttons in the middle of the screen
    let buttonContainer = document.createElement("div")
    buttonContainer.id = "buttonContainer"
    let body = document.getElementById("body")
    body.appendChild(buttonContainer)

    let mSBtn = document.createElement("div")
    let storingBtn = document.createElement("div")
    let newsBtn = document.createElement("div")
    let MOBtn = document.createElement("div")

    let mSImg = document.createElement("img")
    let storingImg = document.createElement("img")
    let newsImg = document.createElement("img")
    let MOImg = document.createElement("img")

    mSImg.classList.add("blockImg")
    storingImg.classList.add("blockImg")
    newsImg.classList.add("blockImg")
    MOImg.classList.add("blockImg")

    mSImg.src = "/assets/meter-white.png"
    mSImg.alt = "meter icon"
    storingImg.src = "/assets/pipe.png"
    storingImg.alt = "Storing icon"
    newsImg.src = "/assets/news.png"
    newsImg.alt = "news icon"
    MOImg.src = "/assets/account.png"
    MOImg.alt = "account icon"

    mSBtn.addEventListener("click", setupMeterstandPage)

    mSBtn.classList.add("block")
    storingBtn.classList.add("block")
    newsBtn.classList.add("block")
    MOBtn.classList.add("block")

    mSBtn.innerHTML = "Meterstand doorgeven"
    storingBtn.innerHTML = "Storingen"
    newsBtn.innerHTML = "Nieuws"
    MOBtn.innerHTML = "Mijn Oasen"

    buttonContainer.appendChild(mSImg)
    buttonContainer.appendChild(mSBtn)
    buttonContainer.appendChild(storingImg)
    buttonContainer.appendChild(storingBtn)
    buttonContainer.appendChild(newsImg)
    buttonContainer.appendChild(newsBtn)
    buttonContainer.appendChild(MOImg)
    buttonContainer.appendChild(MOBtn)


    //addfooter
    addFooter()
}

function addFooter() {
    let footer = document.createElement("footer")
    footer.id = "footer"
    let body = document.getElementById("body")

    let adres = document.createElement("div")
    adres.classList.add("footer_item")
    let email = document.createElement("div")
    email.classList.add("footer_item")
    let telephone = document.createElement("div")
    telephone.classList.add("footer_item")

    adres.innerHTML = "Oasen N.V. Nieuwe Gouwe O.Z. 3, 2801 SB Gouda"
    email.innerHTML = "info@oasen.nl"
    telephone.innerHTML = "0182 - 59 35 30"

    footer.innerHTML += 
      "<h2>Contact</h2><br>"
    
      body.appendChild(footer)
      footer.appendChild(adres)
      footer.appendChild(email)
      footer.appendChild(telephone)

}

function addHeader() {
    let header = document.createElement("header")
    header.id = "header"
    let body = document.getElementById("body")
    header.innerHTML += 
    "<object data='happy.svg' width='300' height='300'> </object>";
    body.appendChild(header)

}

function setupMeterstandPage(){
    let buttonContainer = document.getElementById("buttonContainer")
    let blocks = document.getElementsByClassName("block")
    let blockImgs = document.getElementsByClassName("blockImg")
    let length = blocks.length
    for(let i = 0; i<length; i++){
        blocks[0].remove()
        blockImgs[0].remove()
    }

    let icon = document.createElement("img")
    icon.src = "/assets/meter.png"
    icon.alt = "meter icon"
    let h1Meterstand = document.createElement("h1")
    h1Meterstand.innerHTML = "Meterstand doorgeven"

    let stepCounter = document.createElement("h3")
    stepCounter.id = "stepCounter"
    stepCounter.innerHTML = "stap 1/4"

    let volgende = document.createElement("button")
    volgende.classList.add("volgendeBtn")
    volgende.innerHTML = "Volgende"
    volgende.addEventListener("click", page2)

    let formContainer = document.createElement("div")
    formContainer.id = "formContainer"

    //creates all the labels and inputs so we can append them in the last step
    let PCLabel = document.createElement("label")
    let PCInput = document.createElement("input")
    let TGCodeLabel = document.createElement("label")
    let TGCodeInput = document.createElement("input")
    let MSLabel1 = document.createElement("label")
    let MSInput1 = document.createElement("input")
    let MSLabel2 = document.createElement("label")
    let MSInput2 = document.createElement("input")
    let dateLabel = document.createElement("label")
    let dateInput = document.createElement("input")

    PCLabel.innerHTML = "Postcode"
    PCLabel.for = "pcInput"
    PCLabel.classList.add("formLabel")

    PCInput.type = "text"
    PCInput.id = "pcInput"
    PCInput.value = "typen..."
    PCInput.addEventListener("focus", function(){removeText(PCInput)})

    TGCodeLabel.innerHTML = "Toegangscode"
    TGCodeLabel.for = "tgInput"
    TGCodeLabel.classList.add("formLabel")

    TGCodeInput.type = "number"
    TGCodeInput.id = "tgInput"
    TGCodeInput.value = "0000"
    TGCodeInput.addEventListener("focus", function(){removeText(TGCodeInput)})

    MSLabel1.innerHTML = "Meterstand"
    MSLabel1.for = "msInput1"
    MSLabel1.classList.add("formLabel")

    MSInput1.type = "number"
    MSInput1.id = "msInput1"
    MSInput1.value = "00000"
    MSInput1.addEventListener("focus", function(){removeText(MSInput1)})

    MSLabel2.innerHTML = ","
    MSLabel2.for = "msInput2"
    MSLabel2.classList.add("formLabel")

    MSInput2.type = "text"
    MSInput2.id = "msInput2"
    MSInput2.value = "XXX"
    MSInput2.disabled = true

    dateLabel.innerHTML = "Opnamedatum"
    dateLabel.for = "dateInput"
    dateLabel.classList.add("formLabel")

    dateInput.type = "date"
    dateInput.id = "dateInput"
    dateInput.valueAsDate = new Date()

    let hintContainer = document.createElement("div")
    hintContainer.id = "hintContainer"

    let toegangsHint = document.createElement("div")
    toegangsHint.id = "toegangsHint"
    toegangsHint.innerHTML = "Uw toegangscode vindt u onder andere op het verzoek tot meterstand en op uw jaarfactuur. De toegangscode bestaat uit vier cijfers."

    let meterstandHint = document.createElement("div")
    meterstandHint.id = "meterstandHint"
    meterstandHint.innerHTML = "Noteer alleen de cijfers in het blauwe kader, voor de komma."

    let meterstandHintImg = document.createElement("img")
    meterstandHintImg.src = "/assets/meterstand.png"
    meterstandHintImg.alt = "uitleg over welke cijfers bedoelt worden op de meter."

    //build page with appends
    buttonContainer.appendChild(icon)
    buttonContainer.appendChild(h1Meterstand)
    buttonContainer.appendChild(stepCounter)
    buttonContainer.appendChild(formContainer)
    buttonContainer.appendChild(hintContainer)
    hintContainer.appendChild(toegangsHint)
    hintContainer.appendChild(meterstandHint)
    meterstandHint.appendChild(meterstandHintImg)
    formContainer.appendChild(PCLabel)
    formContainer.appendChild(PCInput)
    formContainer.appendChild(TGCodeLabel)
    formContainer.appendChild(TGCodeInput)
    formContainer.appendChild(MSLabel1)
    formContainer.appendChild(MSInput1)
    formContainer.appendChild(MSLabel2)
    formContainer.appendChild(MSInput2)
    formContainer.appendChild(dateLabel)
    formContainer.appendChild(dateInput)
    formContainer.appendChild(volgende)

}

function page2(){
    //empty hint and formcontainers for the next form
    let formContainer = document.getElementById("formContainer")
    let hintContainer = document.getElementById("hintContainer")
    formContainer.innerHTML = ""
    hintContainer.remove()

    //moves stepcounter to 2/4
    let stepCounter = document.getElementById("stepCounter")
    stepCounter.innerHTML = "stap 2/4"


}

function removeText(element){
    if (element.value === "typen..." || element.value === "0000" || element.value === "00000"){
        element.value = ""
    }
}