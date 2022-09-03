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
const todaysDate = document.getElementById('currentDateTime')
const time = document.getElementById('time')
const getSuperHero = (id, name) => {
   fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      heroImageDiv.innerHTML = `<img src="${json.image.url}" height=400 width=600/>`
      console.log(json)
    })
    

}

getNewHeroBtn.onclick = () => {
  const randomId = Math.floor(Math.random()  * 731) + 1
  getSuperHero(randomId)
  console.log({randomId})
}


const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const days = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]
const d = new Date()
const year = d.getFullYear()
const monthIndex = d.getMonth()
const monthName = months[monthIndex]
const month = d.getMonth()+1 < 10 ? `0${d.getMonth()+1}` : d.getMonth()
  const date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
const dayName = days[d.getDay()]
const hours = d.getHours()
const minutes = d.getMinutes()
const seconds = d.getSeconds()
// todaysDate.innerText = `${dayName}-${date}-${monthName}-${year}, ${hours}:${minutes}:${seconds}`
const getTime = () => {
  todaysDate.style.fontSize='30px';
  todaysDate.style.color='#0030c0';
  todaysDate.innerHTML = `${month}/${date}/${year} - `
}
setInterval(getTime(),1000);

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  time.style.fontSize='30px';
  time.style.color='#0030c0';
  time.innerHTML = date.toLocaleTimeString();
}