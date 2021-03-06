window.onload = setupBtn

function setupBtn(){
    let aBtn = document.getElementById("accessBtn")
    aBtn.addEventListener("click", setupPage)
}


function setupPage(){
    //remove iframe before accessibility mode gets turned on
    let iframe = document.getElementById("iframe")
    if (iframe !=null){
        iframe.remove()
    }
    let aBtn = document.getElementById("accessBtn")
    if (aBtn != null) {
        aBtn.remove()
    }
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

    let mSImg = document.createElement("object")
    let storingImg = document.createElement("object")
    let newsImg = document.createElement("object")
    let MOImg = document.createElement("object")

    mSImg.classList.add("blockImg")
    storingImg.classList.add("blockImg")
    newsImg.classList.add("blockImg")
    MOImg.classList.add("blockImg")

    mSImg.type = "image/svg+xml"
    mSImg.data = "assets/meterstand.svg"
    storingImg.type = "image/svg+xml"
    storingImg.data = "assets/storing.svg"
    newsImg.type = "image/svg+xml"
    newsImg.data = "assets/nieuws.svg"
    MOImg.type = "image/svg+xml"
    MOImg.data = "assets/account.svg"

    mSBtn.addEventListener("click", setupMeterstandPage)

    mSBtn.classList.add("block")
    storingBtn.classList.add("block")
    newsBtn.classList.add("block")
    MOBtn.classList.add("block")
    mSBtn.appendChild(mSImg)
    storingBtn.appendChild(storingImg)
    newsBtn.appendChild(newsImg)
    MOBtn.appendChild(MOImg)

    mSBtn.innerHTML += "<h2 class='text'>Meterstand <br>doorgeven</h2>"
    storingBtn.innerHTML += "<h2 class='text'>Storingen</h2>"
    newsBtn.innerHTML += "<h2 class='text'>Nieuws</h2>"
    MOBtn.innerHTML += "<h2 class='text'>Mijn Oasen</h2>"

    buttonContainer.appendChild(mSBtn)
    buttonContainer.appendChild(storingBtn)
    buttonContainer.appendChild(newsBtn)
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
    let clickDiv = document.createElement("div")
    let logoImg = document.createElement("object")
    clickDiv.addEventListener("click", returnHome)
    logoImg.classList.add("logoImg")
    header.id = "header"
    let body = document.getElementById("body")
    logoImg.type = "image/svg+xml"
    logoImg.data = "assets/oasen.svg"
    header.appendChild(clickDiv)
    clickDiv.appendChild(logoImg)
    body.appendChild(header)
}

function returnHome(){
    document.getElementsByTagName("body")[0].innerHTML = ""
    setupPage()
}

function setupMeterstandPage(){
    let buttonContainer = document.getElementById("buttonContainer")
    buttonContainer.innerHTML = ""

    let icon = document.createElement("object")
    icon.data = "assets/meterstand-black.svg"
    icon.type = "image/svg+xml"
    icon.classList.add("icon")
    let h1Meterstand = document.createElement("h1")
    h1Meterstand.innerHTML = "Meterstand doorgeven"
    h1Meterstand.id = "h1Meter"

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
    PCInput.classList.add("formInput")

    TGCodeLabel.innerHTML = "Toegangscode"
    TGCodeLabel.for = "tgInput"
    TGCodeLabel.classList.add("formLabel")

    TGCodeInput.type = "number"
    TGCodeInput.id = "tgInput"
    TGCodeInput.value = "0000"
    TGCodeInput.addEventListener("focus", function(){removeText(TGCodeInput)})
    TGCodeInput.classList.add("formInput")

    MSLabel1.innerHTML = "Meterstand"
    MSLabel1.for = "msInput1"
    MSLabel1.classList.add("formLabel")

    MSInput1.type = "number"
    MSInput1.id = "msInput1"
    MSInput1.value = "00000"
    MSInput1.addEventListener("focus", function(){removeText(MSInput1)})
    MSInput1.classList.add("formInput")

    MSLabel2.innerHTML = ","
    MSLabel2.for = "msInput2"
    MSLabel2.classList.add("formLabel")

    MSInput2.type = "text"
    MSInput2.id = "msInput2"
    MSInput2.value = "XXX"
    MSInput2.disabled = true
    MSInput2.classList.add("formInput")

    dateLabel.innerHTML = "Opnamedatum"
    dateLabel.for = "dateInput"
    dateLabel.classList.add("formLabel")

    dateInput.type = "date"
    dateInput.id = "dateInput"
    dateInput.valueAsDate = new Date()
    dateInput.classList.add("formInput")

    let hintContainer = document.createElement("div")
    hintContainer.id = "hintContainer"

    let toegangsHint = document.createElement("div")
    toegangsHint.id = "toegangsHint"
    toegangsHint.innerHTML = "Uw toegangscode vindt u onder andere op het verzoek tot meterstand en op uw jaarfactuur. De toegangscode bestaat uit vier cijfers."

    let meterstandHint = document.createElement("div")
    meterstandHint.id = "meterstandHint"
    meterstandHint.innerHTML = "Noteer alleen de cijfers in het blauwe kader, voor de komma."

    let meterstandHintImg = document.createElement("img")
    meterstandHintImg.id = "meterstandHintImg"
    meterstandHintImg.src = "assets/meterstand.png"
    meterstandHintImg.alt = "uitleg over welke cijfers bedoelt worden op de meter."
    meterstandHintImg.addEventListener("click", enlargeImg)

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
let big = false
function enlargeImg(){
    let image = document.getElementById("meterstandHintImg")
    if (big){
        image.classList.remove("bigImg")
        big = false
    } else {
        image.classList.add("bigImg")
        big = true
    }
}

function page2(){

    let PCInput = document.getElementById("pcInput").value
    let tgInput = document.getElementById("tgInput").value
    let meterInput = document.getElementById("msInput1").value
    let datumInput = document.getElementById("dateInput").value
    console.log(PCInput, tgInput, meterInput, datumInput)

    if (PCInput === "" || tgInput === "" || meterInput === "" || datumInput === ""){
        alert("Een of meer benodigde velden zijn niet ingevuld.")
        return
    }
    //adds stuff to localstorage so you can access them later
    if(document.getElementById("dateInput")){
        localStorage.setItem('postcode', document.getElementById("pcInput").value)
        localStorage.setItem('meterstand', document.getElementById("msInput1").value)
        localStorage.setItem('datum' , document.getElementById("dateInput").value)
    }

    //empty hint and formcontainers for the next form
    let formContainer = document.getElementById("formContainer")
    let hintContainer = document.getElementById("hintContainer")
    let postCode = localStorage.getItem('postcode')
    let meterNummer = 555
    let mSinput1 = localStorage.getItem('meterstand')
    let date = localStorage.getItem('datum')
    let checkMeter = document.createElement("h3")
    let subtext = document.createElement("p")
    let headingText = document.getElementById("h1Meter")
    let topText = document.createElement("h4")
    topText.innerHTML = "Controleer uw gegevens"
    topText.id = "topText"
    headingText.innerHTML = "Meterstand"
    formContainer.innerHTML = ""
    if(hintContainer){
        hintContainer.remove()
    }
    let nextButton = document.createElement("button")
    nextButton.innerHTML = "volgende"
    nextButton.classList.add("volgendeBtn")
    nextButton.addEventListener("click" , page3)

    let prevButton = document.createElement("button")
    prevButton.innerHTML = "vorige"
    prevButton.classList.add("vorigeBtn")
    prevButton.addEventListener("click", setupMeterstandPage)

    let akkoord = null
    let akkoordLabel = document.createElement("label")
    akkoordLabel.for = "akkoord"
    akkoordLabel.innerHTML = "Akkoord"
    let lekkage = null
    let lekkageLabel = document.createElement("label")
    lekkageLabel.for = "lekkage"
    lekkageLabel.innerHTML = "Het hoge waterverbruik is veroorzaakt door een lekkage in de binnenleiding"

    if(mSinput1 > 50000) {
        checkMeter.innerHTML = "Meterstand hoger dan verwacht"
        subtext.innerHTML = "De meterstand is hoger dan verwacht. Wellicht heeft u niet de stand van de watermeter ingevoerd maar bijvoorbeeld de stand van de gasmeter. Wanneer de stand klopt kunt u verder gaan. Anders kunt u terug door op vorige te klikken"
        akkoord = document.createElement("input")
        akkoord.type = "checkbox"
        akkoord.id = "akkoord"
        lekkage = document.createElement("input")
        lekkage.type = "checkbox"
        lekkage.id = "lekkage"
    } else if (mSinput1 < 40000 && mSinput1 >= 10000) {
        checkMeter.innerHTML = "Meterstand lager dan verwacht"
        subtext.innerHTML = "De meterstand is lager dan verwacht. Wellicht heeft u niet de stand van de watermeter ingevoerd maar bijvoorbeeld de stand van de gasmeter. Wanneer de stand klopt kunt u verder gaan. Anders kunt u terug door op vorige te klikken"
        akkoord = document.createElement("input")
        akkoord.type = "checkbox"
        akkoord.id = "akkoord"
    } else if(mSinput1 < 10000) {
        checkMeter.innerHTML = "Negatieve meterstand"
        subtext.innerHTML = "Uw ingevoerde meterstand is lager dan de laatst bekende stand. Controleer uw invoer en pas de meterstand aan door op vorige te klikken"
        nextButton.disabled = true
    } else if(mSinput1 <= 50000 && mSinput1 >= 40000){
        checkMeter.innerHTML = "Correcte meterstand"
        subtext.innerHTML = "Als uw gegevens kloppen kunt u door naar de volgende stap"
    }
    let verbruikadres = document.createElement("div")
    verbruikadres.innerHTML = `<b>Verbruiksadres:</b> ${postCode}`

    let meterNummerDiv = document.createElement("div")
    meterNummerDiv.innerHTML = `<b>Meternummer:</b> ${meterNummer}`

    let meterstandDiv = document.createElement("div")
    meterstandDiv.innerHTML = `<b>Meterstand:</b> ${mSinput1}`

    let OpnamedatumDiv = document.createElement("div")
    OpnamedatumDiv.innerHTML = `<b>Opnamedatum:</b> ${date}`

    formContainer.appendChild(checkMeter)
    formContainer.appendChild(subtext)
    formContainer.appendChild(topText)
    formContainer.appendChild(verbruikadres)
    formContainer.appendChild(meterNummerDiv)
    formContainer.appendChild(meterstandDiv)
    formContainer.appendChild(OpnamedatumDiv)

    if(akkoord != null){
        formContainer.appendChild(akkoord)
    }
    if (lekkage != null){
        formContainer.appendChild(lekkage)
    }
    formContainer.appendChild(prevButton)
    formContainer.appendChild(nextButton)

    //moves stepcounter to 2/4
    let stepCounter = document.getElementById("stepCounter")
    stepCounter.innerHTML = "stap 2/4"
}

function page3(){
    let formContainer =document.getElementById("formContainer")
    formContainer.innerHTML = ""

    let stepCounter = document.getElementById("stepCounter")
    stepCounter.innerHTML = "stap 3/4"

    let topText = document.createElement("h4")
    topText.innerHTML = "Contactgegevens"
    topText.id = "topText"

    let emailLabel = document.createElement("label")
    let email = document.createElement("input")
    let confirmEmailLabel = document.createElement("label")
    let confirmEmail = document.createElement("input")
    let post = document.createElement("input")
    let postLabel = document.createElement("label")
    let mobileLabel = document.createElement("label")
    let mobile = document.createElement("input")
    let phoneLabel = document.createElement("label")
    let phone = document.createElement("input")

    let nextButton = document.createElement("button")
    nextButton.innerHTML = "volgende"
    nextButton.classList.add("volgendeBtn")
    nextButton.addEventListener("click" , page4)

    let prevButton = document.createElement("button")
    prevButton.innerHTML = "vorige"
    prevButton.classList.add("vorigeBtn")
    prevButton.addEventListener("click", page2)

    emailLabel.innerHTML = "E-mailadres"
    emailLabel.for = "email"
    emailLabel.classList.add("formLabel")

    email.type = "text"
    email.id = "email"
    email.value = "typen..."
    email.addEventListener("focus", function(){removeText(email)})
    email.classList.add("formInput")

    confirmEmailLabel.innerHTML = "Bevestig e-mailadres"
    confirmEmailLabel.for = "confirmEmail"
    confirmEmailLabel.classList.add("formLabel")

    confirmEmail.type = "text"
    confirmEmail.id = "confirmEmail"
    confirmEmail.value = "typen..."
    confirmEmail.addEventListener("focus", function(){removeText(confirmEmail)})
    confirmEmail.classList.add("formInput")

    post.type = "checkbox"
    post.id = "post"

    postLabel.innerHTML = "Ik wil de post van Oasen per e-mail ontvangen"
    postLabel.for = "post"

    mobileLabel.innerHTML = "Nummer mobiel"
    mobileLabel.for = "mobile"
    mobileLabel.classList.add("formLabel")

    mobile.type = "text"
    mobile.id = "mobile"
    mobile.value = "typen..."
    mobile.addEventListener("focus", function(){removeText(mobile)})
    mobile.classList.add("formInput")

    phoneLabel.innerHTML = "Nummer vast"
    phoneLabel.for = "phone"
    phoneLabel.classList.add("formLabel")

    phone.type = "text"
    phone.id = "phone"
    phone.value = "typen..."
    phone.addEventListener("focus", function(){removeText(phone)})
    phone.classList.add("formInput")

    formContainer.appendChild(topText)
    formContainer.appendChild(emailLabel)
    formContainer.appendChild(email)
    formContainer.appendChild(confirmEmailLabel)
    formContainer.appendChild(confirmEmail)
    formContainer.appendChild(post)
    formContainer.appendChild(postLabel)
    formContainer.appendChild(mobileLabel)
    formContainer.appendChild(mobile)
    formContainer.appendChild(phoneLabel)
    formContainer.appendChild(phone)
    formContainer.appendChild(prevButton)
    formContainer.appendChild(nextButton)
}

function page4(){
    if (document.getElementById("email").value === "" || document.getElementById("confirmEmail") === ""){
        alert("Een of meer benodigde velden zijn niet ingevuld.")
        return
    }
    let stepCounter = document.getElementById("stepCounter")
    stepCounter.innerHTML = "stap 4/4"
    let formContainer = document.getElementById("formContainer")
    formContainer.innerHTML = ""

    let topText = document.createElement("h4")
    topText.innerHTML = "Uw gegevens zijn doorgevoerd, u kunt de pagina sluiten"
    topText.id = "topText"

    formContainer.appendChild(topText)
}
function removeText(element){
    if (element.value === "typen..." || element.value === "0000" || element.value === "00000"){
        element.value = ""
    }
}