const convertButton = document.getElementById("convert-button")
const currencyOrigin = document.querySelector(".currency-origin")
const currencyFinal = document.querySelector(".currency-final")
let taxas {}

async function buscarCotacoes() {
  const resposta = await fetch("https://api.exchangerate.host/latest?base=BRL")
  const dados = await resposta.json()

  taxas = {
    usd: dados.rates.USD,
    eur: dados.rates.EUR,
    btc: dados.rates.BTC,
    jpy: dados.rates.JPY,
    cny: dados.rates.CNY,
  }
}
console.log()

function convertCurrency() {
  const inputToConvert = document.querySelector(".value-to-convert").value
  const toConverted = document.querySelector(".to-convert")
  const valueConverted = document.querySelector(".converted")
  const currencyOrigin = document.querySelector(".currency-origin").value
  const currencyFinal = document.querySelector(".currency-final").value

  const dolarReal = taxas.usd
  const euroReal = taxas.eur
  const dolarEuro = 1.13


  if (currencyOrigin == "real") {
    toConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputToConvert)
    if (currencyFinal == "dolar") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputToConvert / dolarReal)
    } else if (currencyFinal == "euro") {
      valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputToConvert / euroReal)
    } else if (currencyFinal == "real") {
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(inputToConvert)
    }
  } else if (currencyOrigin == "dolar") {
    toConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputToConvert)
    if (currencyFinal == "dolar") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputToConvert)
    } else if (currencyFinal == "euro") {
      valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputToConvert / dolarEuro)
    } else if (currencyFinal == "real") {
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(inputToConvert * euroReal)
    }
  } else if (currencyOrigin == "euro") {
    toConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputToConvert)
    if (currencyFinal == "dolar") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputToConvert * dolarEuro)
    } else if (currencyFinal == "euro") {
      valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputToConvert)
    } else if (currencyFinal == "real") {
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(inputToConvert * euroReal)
    }
  }
}

function changeOrigin () {
  const currencyOrigin = document.querySelector(".currency-origin").value
  const originName = document.querySelector(".origin")
  const originImg = document.querySelector(".origin-img")
  const input = document.querySelector(".value-to-convert")

  if (currencyOrigin == "real") {
    originName.innerHTML = "Real brasileiro"
    originImg.src = "./assets/real.png"
    input.placeholder = "Valor em reais (R$)"
  } else if (currencyOrigin == "dolar") {
    originName.innerHTML = "Dólar Americano"
    originImg.src = "./assets/dolar.png"
    input.placeholder = "Valor em dólares ($)"
  } else if (currencyOrigin == "euro") {
    originName.innerHTML = "Euro"
    originImg.src = "./assets/euro.png"
    input.placeholder = "Valor em euros (€)"
  }
  convertCurrency()
}

function changeFinal () {
  const currencyFinal = document.querySelector(".currency-final").value
  const finalName = document.querySelector(".final")
  const finalImg = document.querySelector(".final-img")

  if (currencyFinal == "real") {
    finalName.innerHTML = "Real brasileiro"
    finalImg.src = "./assets/real.png"
  }
  if (currencyFinal == "dolar") {
    finalName.innerHTML = "Dólar Americano"
    finalImg.src = "./assets/dolar.png"
  }
  if (currencyFinal == "euro") {
    finalName.innerHTML = "Euro"
    finalImg.src = "./assets/euro.png"
  }
  convertCurrency()
}

currencyOrigin.addEventListener("change", changeOrigin)
currencyFinal.addEventListener("change", changeFinal)
convertButton.addEventListener("click", convertCurrency)
window.addEventListener("load", async () => {
  await buscarCotacoes();
});