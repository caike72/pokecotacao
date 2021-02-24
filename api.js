{
  window.onload = function () {
    let usdUrl = `https://api.exchangeratesapi.io/latest?base=USD`
    fetch(usdUrl)
      .then(response => response.json())
      .then(function (usdData) {
        var usdValue = Math.round(usdData.rates.BRL * 100)
        document.getElementById('usdValue').innerText = `U$D 1 = R$${(usdData.rates.BRL)}`
      })
  }

  window.onload = function () {
    let pokeUrl = `https://pokeapi.co/api/v2/pokemon/700`
    fetch(pokeUrl)
      .then(response => response.json())
      .then(function (pokeData) {
        document.getElementById('pokeName').innerText = pokeData.name
        document.getElementById('pokeSprite').src = `https://pokeres.bastionbot.org/images/pokemon/${pokeData.id}.png`
        document.getElementById('pokeId').innerText = `#${pokeData.id}`
      })

  }
}