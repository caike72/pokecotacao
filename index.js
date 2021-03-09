{
  window.onload = function () {
    let usdUrl = `https://openexchangerates.org/api/latest.json?app_id=e6e3471af7ca424a875d5a4ef71f2f59`
    fetch(usdUrl)
      .then(response => response.json())
      .then(function (usdData) {
        var usdValue = Math.round(usdData.rates.BRL * 100)
        document.getElementById('usdValue').innerText = `US$ 1 = R$${(parseFloat(usdData.rates.BRL).toFixed(2))}`

            let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${usdValue}`
            fetch(pokeUrl)
              .then(response => response.json())
              .then(function (pokeData) {
                document.getElementById('pokeName').innerText = pokeData.name
                document.getElementById('pokeName').href = `https://pokemondb.net/pokedex/${pokeData.name}`
                if (pokeData.id == 586) {
                  var sawsbuck = Math.floor(Math.random() * 4)
                  console.log(sawsbuck)
                  if (sawsbuck == 0) {
                    document.getElementById('pokeSprite').src = `https://pokeres.bastionbot.org/images/pokemon/586-spring.png`
                  } else if (sawsbuck == 1) {
                    document.getElementById('pokeSprite').src = `https://pokeres.bastionbot.org/images/pokemon/586-summer.png`
                  } else if (sawsbuck == 2) {
                    document.getElementById('pokeSprite').src = `https://pokeres.bastionbot.org/images/pokemon/586-autumn.png`
                  } else {
                    document.getElementById('pokeSprite').src = `https://pokeres.bastionbot.org/images/pokemon/586-winter.png`
                  }
                } else {
                  document.getElementById('pokeSprite').src = `https://pokeres.bastionbot.org/images/pokemon/${pokeData.id}.png`
                }
                document.getElementById('pokeId').innerText = `#${pokeData.id}`
              })
          })
  }
}