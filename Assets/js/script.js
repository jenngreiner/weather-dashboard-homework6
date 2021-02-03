// declare variables
var temperature = [];
var humidity = [];
var windSpeed
var uvIndex

var searchBtn = document.getElementById('search-button');
var cityName = 'denver';
// console.log(cityName);
var cityURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=49007e1734cfd0ecf0b4c3ad67f3f238';
// page opens to last searched city

// array for forecast days
var forecastDay = [0, 8, 16, 24, 36, 44];


// fetch from openweather API
fetch(cityURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //City Name
    console.log(data.city.name);
    cityName = data.city.name;
    // todays date
    console.log(data.list[0].dt_txt);
    var todaysDate = data.list[0].dt_txt
    // Icon
    console.log('Todays icon: ' + 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '.png');
    var iconURL = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '.png';
    // Temperature
    console.log('Todays Temp: ' + data.list[0].main.temp)
    var currentTemp = data.list[0].main.temp;
    // Humidity
    console.log('Todays Humidity: ' + data.list[0].main.humidity)
    var currentHumidity = data.list[0].main.humidity;
    // Wind Speed
    console.log('Todays Wind Speed: ' + data.list[0].wind.speed)
    var currentWindSpeed = data.list[0].wind.speed;
    // UV Index
    // console.log('Todays UV Index: ' + data.list[0].main.humidity)
  });

function getCity(cityURL) {
  var cityList = document.querySelector('ul');
  var listItem = document.createElement('li');
  listItem.textContent = cityName.value;
  listItem.classList.add('list-item');
  cityList.appendChild(listItem);



  console.log(cityURL);
}
// searchBtn.on('click', getCity())
// search button searches for input
// dynamically take user input and provide it as a parameter in the open weather api call
// city = $('#search-input').val();
// searchBtn.on('click', function () {
//   console.log(city);
// });
// add search to local storage

// local storage persists reload

// click on a city in the search history to view current and future conditions for that city

// display city name, the date, an icon representation of weather conditions, 


//   // create new div for each stat

    // The UV index color  indicates whether the conditions are favorable, moderate, or severe
        // if (uv > x) { addClass(high)} else if uv < x && uv > y { addClass(mid)} else {addClass(low)}

// 5 day forcast
// fetch from openweather api

    // display date, icon, temperature, and humidity