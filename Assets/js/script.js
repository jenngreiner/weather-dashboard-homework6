
var searchBtn = document.getElementById('search-button');
var cityName = 'denver';
// console.log(cityName);
var cityURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=49007e1734cfd0ecf0b4c3ad67f3f238';
var todaysDate = '';
var iconURL = '';
var currentTemp = '';
var currentHumidity = '';
var currentWindSpeed = '';


// page opens to last searched city



function displayCurrent(weatherData) {
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

  // UV Index
  // var currentUVI = weatherData.daily[0].uvi;
  // console.log(currentUVI);
  // document.getElementById('wind-speed').textContent = currentWindSpeed + ' MPH';
  // console.log('Todays UV Index: ' + data.list[0].main.humidity)
  // if (uvIndex < 3) { uvIndex.addClass('low')} else if (2 < uvIndex < 6) {uvIndex.addClass('medium')} else {uvIndex.addClass('high')}
  // array for forecast days
  // var forecastDay = [0, 8, 16, 24, 36, 44];
  // forecastDay.forEach(forcastLoop);

  // function forcastLoop(weatherData) {
  //   var currentTemp = weatherData.list[0].main.temp;
  //   document.getElementById('forecast-temp').textContent = currentTemp + ' ºF';
  //   // Humidity
  //   var currentHumidity = weatherData.list[0].main.humidity;
  //   document.getElementById('forecast-humidity').textContent = currentHumidity + '%';
  // }

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

  // fetch from openweather API
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
        })

      // // save current weather objects as an array
      // var currentWeather = [cityName, todaysDate, iconURL, currentTemp, currentHumidity, currentWindSpeed];
      // console.log(currentWeather);
      // return currentWeather;
      if (data) {
        displayCurrent(data);
        // forcastLoop(data);
        displayForecast(data);
      }
    })


  //push objects to array
  // if (localStorage.getItem(currentWeather)) {
  //   lsCurrentWeather = JSON.parse(localStorage.getItem(currentWeather))
  //   // lsCurrentWeather = 
  //   localStorage.setItem('currentWeather', JSON.stringify(lsCurrentWeather))
  // }


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