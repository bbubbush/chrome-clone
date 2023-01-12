document.addEventListener("DOMContentLoaded", function(){
  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude
    const long = position.coords.longitude
    const API_KEY = ''
    const weaterInfo = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`)
      .then((response) => response.json());
    console.log(weaterInfo);
    console.log('City :: ', weaterInfo.name)
    console.log('Weather :: ', weaterInfo.weather[0].main)
    console.log('Temp :: ', weaterInfo.main.temp)
    
  },
  (error) => {
    alert("Can't find you.");
  })

})