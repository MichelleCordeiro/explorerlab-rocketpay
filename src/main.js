import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")
const ccButton = document.querySelector("form button")

//console.log(ccBgColor01)
//console.log(ccLogo)
console.log(ccButton)

function setCardType(type) {
  const colors = {
    visa: ["#2D57F2", "#436D99"],
    mastercard: ["#DF6F29", "#C69347"],
    americanExpress: ["#0077A6", "#A5B4C5"],
    elo: ["#EF4123", "#rgba(255, 203, 5, 0.3)"],
    rocketseat: ["#8257E6", "#bbb4cc"],
    default: ["black", "gray"]
  }

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
  ccButton.style.backgroundColor = colors[type][0]
  //ccButton.style.setProperty("red", colors[type][1])
}

//setCardType("mastercard")  // assim executa a função
globalThis.setCardType = setCardType
