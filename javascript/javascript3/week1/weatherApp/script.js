// @ts-nocheck
window.addEventListener('load', () => {
  let lat;
  let long;
  let geoBtn = document.querySelector('.geoBtn');
  geoBtn.addEventListener('click', function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude.toFixed(2); //to fixed is decimal
        let long = position.coords.longitude.toFixed(2);
        const text = document.querySelector('.lat');
        text.innerHTML = `Latitude is ${lat}`;
        const text2 = document.querySelector('.long');
        text2.innerHTML = `Longitude is ${long}`;
      });
    } else {
      alert('Cannot access your location');
    }
  });

  const button = document.querySelector('.searchBtn');
  const inputText = document.getElementById('inputText');
  const locationPlace = document.querySelector('.location-place');
  const icon = document.querySelector('.icon');
  const description = document.querySelector('.temperature-description');
  const humidityTemp = document.querySelector('.description-humidity');
  const wind = document.querySelector('.description-wind');
  const pressure = document.querySelector('.description-pressure');
  const coordLat = document.querySelector('.lat');
  const coordLong = document.querySelector('.long');

  button.addEventListener('click', () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        inputText.value +
        '&appid=99f4e75ba68210ceb835bd5467615b98'
    )
      .then((response) => response.json())
      .then((data) => {
        const weatherData = data;
        const location = data.name;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const coordinateLat = data.coord.lat;
        const coordinateLong = data.coord.lon;
        const windSpeed = data.wind.speed;
        const weather = data.weather;
        const iconId = data.weather[0].icon;
        const weatherDescription = data.weather[0].description;
        const pressureTemp = data.main.pressure;

        //Temperature output
        const temperatureDegree = document.querySelector('.temperature-degree');
        temperatureDegree.innerHTML = Math.floor(temperature - 273.15);

        //Weather description
        description.innerHTML = weatherDescription;

        //Weather icon
        const iconIdImg = 'http://openweathermap.org/img/w/' + iconId + '.png';
        icon.src = iconIdImg;
        console.log(iconIdImg);

        //coordination
        coordLat.innerHTML = coordinateLat;
        coordLong.innerHTML = coordinateLong;

        //Humidity
        humidityTemp.innerHTML = humidity;

        //Wind speed
        wind.innerHTML = windSpeed;

        //Pressure
        pressure.innerHTML = pressureTemp;

        console.log(pressureTemp);
        console.log(weatherData);
        console.log(location);
        console.log(temperature);
        console.log(humidity);
        console.log(windSpeed);
        console.log(weather);
        console.log(weatherDescription);
        console.log(iconId);
        if (inputText.value.toLowerCase()) {
          locationPlace.innerHTML = location;
        }
      });
    if (inputText.value === '') {
      alert('Please insert your city');
    }
  });
});
// date output
const date = document.querySelector('.dateNow');
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const day = new Date();
date.innerHTML = day.toLocaleDateString('en-US', options);

// Time output
const timeNow = document.querySelector('.timeNow');
const time = day.getHours();
timeNow.innerHTML = time;
