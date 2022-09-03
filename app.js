// SuperHero Api Link
//https://superheroapi.com/api.php/10223569763528853/245 
// Cat Facts
// https://catfact.ninja/fact
// Gender Predictor Api
// https://api.genderize.io?name=sucdi
// Accepted Date format in js `YYYY-MM-DDTHH:mm:ss.sssZ`

const SUPERHERO_TOKEN = '1488957751542023'
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const getNewHeroBtn = document.getElementById('getNewHero')
const heroImageDiv = document.getElementById('heroImageDiv')
const inputSearch = document.getElementById('inputSearch')
const searchBtn = document.getElementById('search')
const time = document.getElementById('time')
// gets the generated superhero image
const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
   .then(response => response.json())
   .then(json => {
     console.log(json.powerstats)
     getStatsHTML(json)
     const name = `<h2>Name: ${json.name}</h2>`
     const powerStats = `<ol><b>PowerStats</b><li>Intelligence: ${json.powerstats.intelligence}</li><li>Power: ${json.powerstats.power}</li><li>Speed: ${json.powerstats.speed}</li><li>Strength: ${json.powerstats.strength}</li><li>Combat: ${json.powerstats.combat}</li><li>Durability: ${json.powerstats.durability}</li></ol>`
     heroImageDiv.innerHTML = `${name}${powerStats}<img src="${json.image.url}" height=400 width=600/>`
     console.log(json)
   })
   

}

// gets the searched superhero image
const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
   .then(response => response.json())
   .then(json => {
     const hero = json.results[0]
     heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=400 width=600/>`
     console.log(json)
   })
}

// calling getSuperHero function after clicking Get New Hero Button
getNewHeroBtn.onclick = () => {
  const randomId = Math.floor(Math.random()  * 731) + 1
  getSuperHero(randomId)
  console.log({randomId})
}

// calling getSearchSuperHero function after clicking Get Search Button
searchBtn.onclick = () => getSearchSuperHero(inputSearch.value)

getStatsHTML = (character) =>{
  for(stat in character.powerstats){
    console.log(stat)
  }
}

function myTimer() {
  const date = new Date();
  time.style.fontSize='30px';
  time.style.color='#AF00BC';
  time.style.marginLeft = '85%'
  time.innerHTML = `Time: ${date.toLocaleTimeString()}`;
}

setInterval(myTimer, 1000);