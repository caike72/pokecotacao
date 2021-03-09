{
  window.onload = function () {
      let usdUrl = `https://openexchangerates.org/api/latest.json?app_id=e6e3471af7ca424a875d5a4ef71f2f59`
      fetch(usdUrl)
        .then(response => response.json())
        .then(function (usdData) {
            var usdValue = Math.round(usdData.rates.BRL * 100)
            document.getElementById('usdValue').innerText = `US$ 1 = R$${(parseFloat(usdData.rates.BRL).toFixed(2))}`

            let value_timestamp = usdData.timestamp
            var date = new Date(value_timestamp * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var seconds = "0" + date.getSeconds();


            document.getElementById('updateTime').innerText = hours + ':' + minutes.substr(-2) + ' BRT';

            let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${usdValue}`
            fetch(pokeUrl)
              .then(response => response.json())
              .then(function (pokeData) {
                document.getElementById('pokeName').innerText = pokeData.name
                document.getElementById('pokeName').href = `https://pokemondb.net/pokedex/${pokeData.name}`

                if (pokeData.id == 586) {
                  let sawsbuck = Math.floor(Math.random() * 4)
                  switch (sawsbuck) {
                    case 0:
                      document.getElementById('pokeSprite').src = `https://pokeres.bastionbot.org/images/pokemon/586-spring.png`
                      break;
                    case 1:
                      document.getElementById('pokeSprite').src = `https://pokeres.bastionbot.org/images/pokemon/586-summer.png`
                      break;
                    case 2:
                      document.getElementById('pokeSprite').src = `https://pokeres.bastionbot.org/images/pokemon/586-autumn.png`
                      break;
                    case 3:
                      document.getElementById('pokeSprite').src = `https://pokeres.bastionbot.org/images/pokemon/586-winter.png`
                      break;
                  }
                } else {
                  document.getElementById('pokeSprite').src = `https://pokeres.bastionbot.org/images/pokemon/${pokeData.id}.png`
                }
                document.getElementById('pokeId').innerText = `#${pokeData.id}`
              })
          }
        )}
      }