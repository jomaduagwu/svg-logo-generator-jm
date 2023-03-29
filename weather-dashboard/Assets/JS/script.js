// var APIKey = "d790997ca229b3abb8cc2c3ff03ae371";

// var requestURL = "http://api.openweathermap.org/geo/1.0/direct?q=";

// function getWeather(cityName) {
//     fetch('${requestURL}${cityName}&units=metric&appid=${APIKey}')
//     then (response => response.json())
//     .then(da)
// }

var form = document.querySelector('#city-form'); // ???
var input = document.querySelector('#city-input');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  var city = input.value;
  var apiKey = "d790997ca229b3abb8cc2c3ff03ae371";
  var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";

  fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      // handle the weather data and update the page
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      // display an error message to the user
    });
});