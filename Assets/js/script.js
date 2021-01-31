


// page opens to last searched city

// search button searches for input
   // dynamically take user input and provide it as a parameter in the open weather api call

// add search to local storage

// local storage persists reload

// click on a city in the search history to view current and future conditions for that city

// display city name, the date, an icon representation of weather conditions, 


// display temperature, humidity, wind speed, uv index 
// fetch from openweather API
fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=49007e1734cfd0ecf0b4c3ad67f3f238')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  // create new div for each stat
    
    // The UV index color  indicates whether the conditions are favorable, moderate, or severe
        // if (uv > x) { addClass(high)} else if uv < x && uv > y { addClass(mid)} else {addClass(low)}

// 5 day forcast
// fetch from openweather api

    // display date, icon, temperature, and humidity
