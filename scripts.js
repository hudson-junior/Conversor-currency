const convertButton = document.getElementById("convert-button")
const currencyOrigin = document.querySelector(".currency-origin")
const currencyFinal = document.querySelector(".currency-final")


let taxas = {}; // Guarda as taxas para usar na conversão

async function buscarTaxas() {
  const resposta = await fetch("https://api.apilayer.com/exchangerates_data/latest?base=BRL", {
    method: "GET",
    headers: {
      "apikey": "lTJksyN6ENvtXTzlx78yO221dsAIcS2q"
    }
  });

  const dados = await resposta.json();
  console.log("Resposta completa da API:", dados);

  if (!dados.rates) {
    throw new Error("API retornou sem 'rates'");
  }

  taxas = {
    usd: dados.rates.USD,
    eur: dados.rates.EUR,
    btc: dados.rates.BTC,
    jpy: dados.rates.JPY,
    cny: dados.rates.CNY,
    gbp: dados.rates.GBP,
    mxn: dados.rates.MXN
  };
  console.log("Taxas carregadas:", taxas);
}

function convertCurrency() {
  const inputToConvert = document.querySelector(".value-to-convert").value
  const toConverted = document.querySelector(".to-convert")
  const valueConverted = document.querySelector(".converted")
  const currencyOrigin = document.querySelector(".currency-origin").value
  const currencyFinal = document.querySelector(".currency-final").value


  if (currencyOrigin == "brl") {
    toConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputToConvert)
    if (currencyFinal == "usd") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputToConvert * taxas.usd)
    } else if (currencyFinal == "eur") {
      valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputToConvert * taxas.eur)
    } else if (currencyFinal == "brl") {
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(inputToConvert)
    } else if (currencyFinal == "btc") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        maximumFractionDigits: 8
      }).format(inputToConvert * taxas.btc)
    } else if (currencyFinal == "jpy") {
      valueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
      }).format(inputToConvert * taxas.jpy)
    } else if (currencyFinal == "cny") {
      valueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
        style: "currency",
        currency: "CNY"
      }).format(inputToConvert * taxas.cny)
    } else if (currencyFinal == "gbp") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
      }).format(inputToConvert * taxas.gbp)
    } else if (currencyFinal == "mxn") {
      valueConverted.innerHTML = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
      }).format(inputToConvert * taxas.mxn)
    }
  } else if (currencyOrigin == "usd") {
    toConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputToConvert)
    if (currencyFinal == "usd") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputToConvert)
    } else if (currencyFinal == "eur") {
      valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputToConvert * (taxas.eur / taxas.usd))
    } else if (currencyFinal == "brl") {
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(inputToConvert / taxas.usd)
    } else if (currencyFinal == "btc") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        maximumFractionDigits: 8
      }).format(inputToConvert * (taxas.btc / taxas.usd))
    } else if (currencyFinal == "jpy") {
      valueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
      }).format(inputToConvert * (taxas.jpy / taxas.usd))
    } else if (currencyFinal == "cny") {
      valueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
        style: "currency",
        currency: "CNY"
      }).format(inputToConvert * (taxas.cny / taxas.usd))
    } else if (currencyFinal == "gbp") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
      }).format(inputToConvert * (taxas.gbp / taxas.usd))
    } else if (currencyFinal == "mxn") {
      valueConverted.innerHTML = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
      }).format(inputToConvert * (taxas.mxn / taxas.usd))
    }
  } else if (currencyOrigin == "eur") {
    toConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputToConvert)
    if (currencyFinal == "usd") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputToConvert * (taxas.usd / taxas.eur))
    } else if (currencyFinal == "eur") {
      valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputToConvert)
    } else if (currencyFinal == "brl") {
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(inputToConvert / taxas.eur)
    } else if (currencyFinal == "btc") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        maximumFractionDigits: 8
      }).format(inputToConvert * (taxas.btc / taxas.eur))
    } else if (currencyFinal == "jpy") {
      valueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
      }).format(inputToConvert * (taxas.jpy / taxas.eur))
    } else if (currencyFinal == "cny") {
      valueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
        style: "currency",
        currency: "CNY"
      }).format(inputToConvert * (taxas.cny / taxas.eur))
    } else if (currencyFinal == "gbp") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
      }).format(inputToConvert * (taxas.gbp / taxas.eur))
    } else if (currencyFinal == "mxn") {
      valueConverted.innerHTML = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
      }).format(inputToConvert * (taxas.mxn / taxas.eur))
    }
  } else if (currencyOrigin == "btc") {
    toConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(inputToConvert)
    if (currencyFinal == "usd") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputToConvert * (taxas.usd / taxas.btc))
    } else if (currencyFinal == "eur") {
      valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputToConvert * (taxas.eur / taxas.btc))
    } else if (currencyFinal == "brl") {
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(inputToConvert / taxas.btc)
    } else if (currencyFinal == "btc") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        maximumFractionDigits: 8
      }).format(inputToConvert)
    } else if (currencyFinal == "jpy") {
      valueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
      }).format(inputToConvert * (taxas.jpy / taxas.btc))
    } else if (currencyFinal == "cny") {
      valueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
        style: "currency",
        currency: "CNY"
      }).format(inputToConvert * (taxas.cny / taxas.btc))
    } else if (currencyFinal == "gbp") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
      }).format(inputToConvert * (taxas.gbp / taxas.btc))
    } else if (currencyFinal == "mxn") {
      valueConverted.innerHTML = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
      }).format(inputToConvert * (taxas.mxn / taxas.btc))
    }
  } else if (currencyOrigin == "jpy") {
    toConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY"
    }).format(inputToConvert)
    if (currencyFinal == "usd") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputToConvert * (taxas.usd / taxas.jpy))
    } else if (currencyFinal == "eur") {
      valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputToConvert * (taxas.eur / taxas.jpy))
    } else if (currencyFinal == "brl") {
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(inputToConvert / taxas.jpy)
    } else if (currencyFinal == "btc") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        maximumFractionDigits: 8
      }).format(inputToConvert * (taxas.btc / taxas.jpy))
    } else if (currencyFinal == "jpy") {
      valueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
      }).format(inputToConvert)
    } else if (currencyFinal == "cny") {
      valueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
        style: "currency",
        currency: "CNY"
      }).format(inputToConvert * (taxas.cny / taxas.jpy))
    } else if (currencyFinal == "gbp") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
      }).format(inputToConvert * (taxas.gbp / taxas.jpy))
    } else if (currencyFinal == "mxn") {
      valueConverted.innerHTML = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
      }).format(inputToConvert * (taxas.mxn / taxas.jpy))
    }
  } else if (currencyOrigin == "cny") {
    toConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY"
    }).format(inputToConvert)
    if (currencyFinal == "usd") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputToConvert * (taxas.usd / taxas.cny))
    } else if (currencyFinal == "eur") {
      valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputToConvert * (taxas.eur / taxas.cny))
    } else if (currencyFinal == "brl") {
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(inputToConvert / taxas.cny)
    } else if (currencyFinal == "btc") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        maximumFractionDigits: 8
      }).format(inputToConvert * (taxas.btc / taxas.cny))
    } else if (currencyFinal == "jpy") {
      valueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
      }).format(inputToConvert * (taxas.jpy / taxas.cny))
    } else if (currencyFinal == "cny") {
      valueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
        style: "currency",
        currency: "CNY"
      }).format(inputToConvert)
    } else if (currencyFinal == "gbp") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
      }).format(inputToConvert * (taxas.gbp / taxas.cny))
    } else if (currencyFinal == "mxn") {
      valueConverted.innerHTML = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
      }).format(inputToConvert * (taxas.mxn / taxas.cny))
    }
  } else if (currencyOrigin == "gbp") {
    toConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputToConvert)
    if (currencyFinal == "usd") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputToConvert * (taxas.usd / taxas.gbp))
    } else if (currencyFinal == "eur") {
      valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputToConvert * (taxas.eur / taxas.gbp))
    } else if (currencyFinal == "brl") {
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(inputToConvert / taxas.gbp)
    } else if (currencyFinal == "btc") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        maximumFractionDigits: 8
      }).format(inputToConvert * (taxas.btc / taxas.gbp))
    } else if (currencyFinal == "jpy") {
      valueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
      }).format(inputToConvert * (taxas.jpy / taxas.gbp))
    } else if (currencyFinal == "cny") {
      valueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
        style: "currency",
        currency: "CNY"
      }).format(inputToConvert * (taxas.cny / taxas.gbp))
    } else if (currencyFinal == "gbp") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
      }).format(inputToConvert)
    } else if (currencyFinal == "mxn") {
      valueConverted.innerHTML = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
      }).format(inputToConvert * (taxas.mxn / taxas.gbp))
    }
  } else if (currencyOrigin == "mxn") {
    toConverted.innerHTML = new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN"
    }).format(inputToConvert)
    if (currencyFinal == "usd") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputToConvert * (taxas.usd / taxas.mxn))
    } else if (currencyFinal == "eur") {
      valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(inputToConvert * (taxas.eur / taxas.mxn))
    } else if (currencyFinal == "brl") {
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(inputToConvert / taxas.mxn)
    } else if (currencyFinal == "btc") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        maximumFractionDigits: 8
      }).format(inputToConvert * (taxas.btc / taxas.mxn))
    } else if (currencyFinal == "jpy") {
      valueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
      }).format(inputToConvert * (taxas.jpy / taxas.mxn))
    } else if (currencyFinal == "cny") {
      valueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
        style: "currency",
        currency: "CNY"
      }).format(inputToConvert * (taxas.cny / taxas.mxn))
    } else if (currencyFinal == "gbp") {
      valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
      }).format(inputToConvert * (taxas.gbp / taxas.mxn))
    } else if (currencyFinal == "mxn") {
      valueConverted.innerHTML = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
      }).format(inputToConvert)
    }
  }
}

function changeOrigin () {
  const currencyOrigin = document.querySelector(".currency-origin").value
  const originName = document.querySelector(".origin")
  const originImg = document.querySelector(".origin-img")
  const input = document.querySelector(".value-to-convert")

  if (currencyOrigin == "brl") {
    originName.innerHTML = "Real brasileiro"
    originImg.src = "./assets/real.png"
    input.placeholder = "Valor em reais (R$)"
  } else if (currencyOrigin == "usd") {
    originName.innerHTML = "Dólar Americano"
    originImg.src = "./assets/dolar.png"
    input.placeholder = "Valor em dólares ($)"
  } else if (currencyOrigin == "eur") {
    originName.innerHTML = "Euro"
    originImg.src = "./assets/euro.png"
    input.placeholder = "Valor em euros (€)"
  } else if (currencyOrigin == "btc") {
    originName.innerHTML = "BitCoin"
    originImg.src = "./assets/bitcoin.png"
    input.placeholder = "Valor em bitcoin (₿)"
  } else if (currencyOrigin == "jpy") {
    originName.innerHTML = "Iene Japonês"
    originImg.src = "./assets/japao.png"
    input.placeholder = "Valor em ienes (¥)"
  } else if (currencyOrigin == "cny") {
    originName.innerHTML = "Yuan Chinês"
    originImg.src = "./assets/china.png"
    input.placeholder = "Valor em yuan (¥)"
  } else if (currencyOrigin == "gbp") {
    originName.innerHTML = "Libras Esterlinas"
    originImg.src = "./assets/libra.png"
    input.placeholder = "Valor em libras esterlinas (£)"
  } else if (currencyOrigin == "mxn") {
    originName.innerHTML = "Peso Mexicano"
    originImg.src = "./assets/mexico.png"
    input.placeholder = "Valor em pesos mexicanos ($)"
  }
  convertCurrency()
}

function changeFinal () {
  const currencyFinal = document.querySelector(".currency-final").value
  const finalName = document.querySelector(".final")
  const finalImg = document.querySelector(".final-img")

  if (currencyFinal == "brl") {
    finalName.innerHTML = "Real brasileiro"
    finalImg.src = "./assets/real.png"
  } else if (currencyFinal == "usd") {
    finalName.innerHTML = "Dólar Americano"
    finalImg.src = "./assets/dolar.png"
  } else if (currencyFinal == "eur") {
    finalName.innerHTML = "Euro"
    finalImg.src = "./assets/euro.png"
  } else if (currencyFinal == "btc") {
    finalName.innerHTML = "BitCoin"
    finalImg.src = "./assets/bitcoin.png"
  } else if (currencyFinal == "jpy") {
    finalName.innerHTML = "Iene Japonês"
    finalImg.src = "./assets/japao.png"
  } else if (currencyFinal == "cny") {
    finalName.innerHTML = "Yuan Chinês"
    finalImg.src = "./assets/china.png"
  } else if (currencyFinal == "gbp") {
    finalName.innerHTML = "Libras Esterlinas"
    finalImg.src = "./assets/libra.png"
  } else if (currencyFinal == "mxn") {
    finalName.innerHTML = "Peso Mexicano"
    finalImg.src = "./assets/mexico.png"
  }
  convertCurrency()
}

currencyOrigin.addEventListener("change", changeOrigin)
currencyFinal.addEventListener("change", changeFinal)
convertButton.addEventListener("click", convertCurrency)
window.addEventListener("load", buscarTaxas);