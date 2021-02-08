// display variables
var todaysDate = '';
var iconURL = '';
var currentTemp = '';
var currentHumidity = '';
var uvData = '';
var currentWindSpeed = '';
// search variables
var searchButton = document.getElementById("search-button");
console.log(searchButton);
var searchList = document.querySelector('ul');
var searchHistory = JSON.parse(window.localStorage.getItem('Search History')) || [];

// city variables
var cityName = 'Denver';
// var cityName = document.getElementById('city-name');

// page opens to last searched city

// calls api for cityName 
getWeather(cityName);

// fetch from openweather API
function getWeather(cityName) {
  var cityURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=49007e1734cfd0ecf0b4c3ad67f3f238';
  fetch(cityURL)
    .then(response => response.json())
    .then(data => {
      // save lat and long variables

      var lat = data.city.coord.lat;
      var lon = data.city.coord.lon;
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=49007e1734cfd0ecf0b4c3ad67f3f238')
        .then(response => response.json())
        .then(uvData => {
          if (data) {
            displayCurrent(data, uvData);
            displayForecast(data);
          }
        })
    })
    .finally(() => { renderCityList() });
}
// display current weather
function displayCurrent(weatherData, uvData) {
  //City Name
  var cityName = weatherData.city.name;
  // todays date
  var todaysDate = moment().format('MM/DD/YYYY')
  document.getElementById('city-name').textContent = cityName + ' (' + todaysDate + ')'
  // Icon
  var iconURL = 'https://openweathermap.org/img/wn/' + weatherData.list[0].weather[0].icon + '.png';
  document.getElementById('current-icon').src = iconURL
  // Temperature
  var currentTemp = weatherData.list[0].main.temp;
  document.getElementById('temperature').textContent = currentTemp + ' ºF';
  // Humidity
  var currentHumidity = weatherData.list[0].main.humidity;
  document.getElementById('humidity').textContent = currentHumidity + '%';
  // Wind Speed
  var currentWindSpeed = weatherData.list[0].wind.speed;
  document.getElementById('wind-speed').textContent = currentWindSpeed + ' MPH';
  // uv index
  var uvIndex = uvData.daily[0].uvi;
  if (uvIndex <= 2.99) {
    $('#uv-index').addClass('low')
  }
  else if (uvIndex >= 3 && uvIndex <= 5.99) {
    $('#uv-index').addClass('medium')
  }
  else {
    $('#uv-index').addClass('high')
  };
  document.getElementById('uv-index').textContent = uvIndex;
}
// display 5 day forecast
function displayForecast(weatherData) {

  //day 1
  var forecastDate1 = moment().add(1, 'days').format('MM/DD/YYYY')
  document.getElementById('forecast-date').textContent = forecastDate1
  // Icon
  var iconURL1 = 'https://openweathermap.org/img/wn/' + weatherData.list[7].weather[0].icon + '.png';
  document.getElementById('forecast-icon').src = iconURL1
  // Temperature
  var currentTemp1 = weatherData.list[7].main.temp;
  document.getElementById('forecast-temp').textContent = currentTemp1 + ' ºF';
  // Humidity
  var currentHumidity1 = weatherData.list[7].main.humidity;
  document.getElementById('forecast-humidity').textContent = currentHumidity1 + '%';

  //day 2
  var forecastDate2 = moment().add(2, 'days').format('MM/DD/YYYY')
  document.getElementById('forecast-date2').textContent = forecastDate2
  // Icon
  var iconURL2 = 'https://openweathermap.org/img/wn/' + weatherData.list[14].weather[0].icon + '.png';
  document.getElementById('forecast-icon2').src = iconURL2
  // Temperature
  var currentTemp2 = weatherData.list[14].main.temp;
  document.getElementById('forecast-temp2').textContent = currentTemp2 + ' ºF';
  // Humidity
  var currentHumidity2 = weatherData.list[14].main.humidity;
  document.getElementById('forecast-humidity2').textContent = currentHumidity2 + '%';

  //day 3
  var forecastDate3 = moment().add(3, 'days').format('MM/DD/YYYY')
  document.getElementById('forecast-date3').textContent = forecastDate3
  // Icon
  var iconURL3 = 'https://openweathermap.org/img/wn/' + weatherData.list[22].weather[0].icon + '.png';
  document.getElementById('forecast-icon3').src = iconURL3
  // Temperature
  var currentTemp3 = weatherData.list[22].main.temp;
  document.getElementById('forecast-temp3').textContent = currentTemp3 + ' ºF';
  // Humidity
  var currentHumidity3 = weatherData.list[22].main.humidity;
  document.getElementById('forecast-humidity3').textContent = currentHumidity3 + '%';

  //day 4
  var forecastDate4 = moment().add(4, 'days').format('MM/DD/YYYY')
  document.getElementById('forecast-date4').textContent = forecastDate4
  // Icon
  var iconURL4 = 'https://openweathermap.org/img/wn/' + weatherData.list[34].weather[0].icon + '.png';
  document.getElementById('forecast-icon4').src = iconURL4
  // Temperature
  var currentTemp4 = weatherData.list[34].main.temp;
  document.getElementById('forecast-temp4').textContent = currentTemp4 + ' ºF';
  // Humidity
  var currentHumidity4 = weatherData.list[34].main.humidity;
  document.getElementById('forecast-humidity4').textContent = currentHumidity4 + '%';

  //day 5
  var forecastDate5 = moment().add(5, 'days').format('MM/DD/YYYY')
  document.getElementById('forecast-date5').textContent = forecastDate5
  // Icon
  var iconURL5 = 'https://openweathermap.org/img/wn/' + weatherData.list[39].weather[0].icon + '.png';
  document.getElementById('forecast-icon5').src = iconURL5
  // Temperature
  var currentTemp5 = weatherData.list[39].main.temp;
  document.getElementById('forecast-temp5').textContent = currentTemp5 + ' ºF';
  // Humidity
  var currentHumidity5 = weatherData.list[39].main.humidity;
  document.getElementById('forecast-humidity5').textContent = currentHumidity5 + '%';

}

// send city name to local storage
function startSearch() {
  cityName = document.getElementById('search-input').value;
  console.log(cityName);
  searchHistory.push(cityName);
  localStorage.setItem('Search History', JSON.stringify(searchHistory));
  getWeather(cityName);
}

function renderCityList() {
  // clear searchList before rendering new city
  searchList.textContent = "";
  // add new city names to the top of the city list
  for (var i = 0; i < searchHistory.length; i++) {
    var newCity = document.createElement('li');
    newCity.textContent = searchHistory[i].toUpperCase();
    searchList.prepend(newCity);
  }
}

function getLocalStorage() {
  // populate a local array
  if (searchHistory.length > 0) {
    renderCityList();
  };
}


searchButton.addEventListener('click', startSearch)
//Get new city on enter keystroke
// var input = document.getElementById('search-input');
// input.addEventListener("keyup", function (event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     startSearch();
//   }
// });


// show weather for city clicked in city list
function clickCity(evt) {
  // e.target refers to the clicked <li> element
  // This is different than e.currentTarget, which would refer to the parent <ul> in this context
  cityName = evt.target.textContent;
  getWeather(cityName);
}

searchList.addEventListener('click', clickCity, false);

