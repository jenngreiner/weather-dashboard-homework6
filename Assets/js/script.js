
var searchBtn = document.getElementById('search-button');
var cityName = 'santa fe';
var searchList = document.querySelector('ul');
// var cityName = document.getElementById('city-search');
// console.log(cityName);
var cityURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=49007e1734cfd0ecf0b4c3ad67f3f238';
var todaysDate = '';
var iconURL = '';
var currentTemp = '';
var currentHumidity = '';
var uvData = '';
var currentWindSpeed = '';


// page opens to last searched city
getWeather(cityName);
// get local storage when page loads

// fetch from openweather API
function getWeather(cityName) {
  fetch(cityURL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // save lat and long variables

      var lat = data.city.coord.lat;
      var lon = data.city.coord.lon;
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=49007e1734cfd0ecf0b4c3ad67f3f238')
        .then(response => response.json())
        .then(uvData => {
          console.log(uvData);
          console.log(uvData.daily[0].uvi);
          if (data) {
            displayCurrent(data, uvData);
            displayForecast(data);
          }
        })
    })
}
// getCity()


function displayCurrent(weatherData, uvData) {
  //City Name
  var cityName = weatherData.city.name;
  console.log(cityName);
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
  console.log('uvi value: ' + uvIndex);
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
  var iconURL1 = 'https://openweathermap.org/img/wn/' + weatherData.list[8].weather[0].icon + '.png';
  document.getElementById('forecast-icon').src = iconURL1
  // Temperature
  var currentTemp1 = weatherData.list[8].main.temp;
  document.getElementById('forecast-temp').textContent = currentTemp1 + ' ºF';
  // Humidity
  var currentHumidity1 = weatherData.list[8].main.humidity;
  document.getElementById('forecast-humidity').textContent = currentHumidity1 + '%';

  //day 2
  var forecastDate2 = moment().add(2, 'days').format('MM/DD/YYYY')
  document.getElementById('forecast-date2').textContent = forecastDate2
  // Icon
  var iconURL2 = 'https://openweathermap.org/img/wn/' + weatherData.list[16].weather[0].icon + '.png';
  document.getElementById('forecast-icon2').src = iconURL2
  // Temperature
  var currentTemp2 = weatherData.list[16].main.temp;
  document.getElementById('forecast-temp2').textContent = currentTemp2 + ' ºF';
  // Humidity
  var currentHumidity2 = weatherData.list[16].main.humidity;
  document.getElementById('forecast-humidity2').textContent = currentHumidity2 + '%';

  //day 3
  var forecastDate3 = moment().add(3, 'days').format('MM/DD/YYYY')
  document.getElementById('forecast-date3').textContent = forecastDate3
  // Icon
  var iconURL3 = 'https://openweathermap.org/img/wn/' + weatherData.list[24].weather[0].icon + '.png';
  document.getElementById('forecast-icon3').src = iconURL3
  // Temperature
  var currentTemp3 = weatherData.list[24].main.temp;
  document.getElementById('forecast-temp3').textContent = currentTemp3 + ' ºF';
  // Humidity
  var currentHumidity3 = weatherData.list[24].main.humidity;
  document.getElementById('forecast-humidity3').textContent = currentHumidity3 + '%';

  //day 4
  var forecastDate4 = moment().add(4, 'days').format('MM/DD/YYYY')
  document.getElementById('forecast-date4').textContent = forecastDate4
  // Icon
  var iconURL4 = 'https://openweathermap.org/img/wn/' + weatherData.list[36].weather[0].icon + '.png';
  document.getElementById('forecast-icon4').src = iconURL4
  // Temperature
  var currentTemp4 = weatherData.list[36].main.temp;
  document.getElementById('forecast-temp4').textContent = currentTemp4 + ' ºF';
  // Humidity
  var currentHumidity4 = weatherData.list[36].main.humidity;
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

// function startSearch() {
//   searchHistory.push(cityName.value)
//   localStorage.setItem('Search History', JSON.stringify(searchHistory));
//   getWeather(cityName.value);
// }

// function renderCityList() {
//   // get info from local storage when the page loads
//   for (var i = 0; i < searchHistory.length; i++) {
//     var newCity = document.createElement('li');
//     newCity.textContent = searchHistory[i];
//     console.log(newCity.textContent);
//     newCity.classList.add('cities');
//     searchList.prepend(newCity);
//     console.log(newCity);
//     // add new city names to the top of the list when search button is clicked
//   }
// }

// function getLocalStorage() {
//   var searchHistory = JSON.parse(window.localStorage.getItem('Search History')) || [];
//   if (searchHistory) {
//     renderCityList()
//   }
// }
// get localstorage to check if city already exists when you save a new city
// if city doesnt exist, set it to localstorage, then get localstorage again to display on the page. 
// saveBtn.on('click', function () {
//   // var time = $(this).parent().attr('id');
//   // var value = $(this).siblings('.task').val();
//   // localStorage.setItem(time, value)
//   var localTimeEvents = {},
//     lsTimeEvents;
//   if (localStorage.getItem('timeEvents')) {
//     lsTimeEvents = JSON.parse(localStorage.getItem('timeEvents'));
//     lsTimeEvents[$(this).parent().attr('id')] = $(this).siblings('.task').val();
//     localStorage.setItem('timeEvents', JSON.stringify(lsTimeEvents));
//   } else {
//     localTimeEvents[$(this).parent().attr('id')] = $(this).siblings('.task').val();
//     localStorage.setItem('timeEvents', JSON.stringify(localTimeEvents));
//   }

// })
// // get localstorage, look for the object. 
// // if there is not object, create a new one
// // if there is an object, JSONparse it to turn it back into an object
// var displayTimeEvents;
// if (localStorage.getItem('timeEvents')) {
//   displayTimeEvents = JSON.parse(localStorage.getItem('timeEvents'));
//   for (x in displayTimeEvents) {
//     $('#' + x).find('.task').val(displayTimeEvents[x]);
//   }
// }

// function getCity() {
//   var cityList = document.querySelector('ul');
//   var listItem = document.createElement('li');
//   listItem.textContent = cityName.value;
//   listItem.classList.add('list-item');
//   cityList.appendChild(listItem);
//   console.log(cityURL);
// }
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