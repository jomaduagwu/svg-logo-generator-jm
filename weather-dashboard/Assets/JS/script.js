// api test
// requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={houston}&appid=d790997ca229b3abb8cc2c3ff03ae371';
// // var apiKey = "d790997ca229b3abb8cc2c3ff03ae371";

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

$(document).ready(function() {
  // select the search form and attach an event listener to it
  $('#search-form').on('submit', function(event) {
    // prevent the default form submission behavior
    event.preventDefault();
    // retrieve the city name entered by the user
    var city = $('#search-input').val();
    getWeather(city);
  });
  
  function getWeather(city){
    var apiKey = "d790997ca229b3abb8cc2c3ff03ae371";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&sunits=imperial&appid=${apiKey}";

    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      var cityEl = document.querySelector("#city");
      var dateEl = document.querySelector("#date");
      var tempEl = document.querySelector("#temperature");
      var windEl = document.querySelector("#wind");
      var humidEl = document.querySelector("#humidity");
      var iconEl = document.querySelector("#weather-icon");

      cityEl.textContent = data.name;
      dateEl.textContent = new Date().toLocaleDateString();
      tempEl.textContent = data.main.temp.toFixed(0);
      windEl.textContent = data.wind.speed.toFixed(0);
      humidEl.textContent = data.main.humidity;
      iconEl.setAttribute(
        "src",
        `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
      );
    })
    .catch((error) => console.log(error));
}
});
    // make a request to the OpenWeatherMap API to retrieve weather data for the city
    
    // you can then use jQuery's AJAX method to make the request and handle the response
    // for example:
//     $.ajax({
//       url: apiUrl,
//       method: 'GET'
//     }).then(function(response) {
//       // handle the response data
//       console.log(response);
//     }).catch(function(error) {
//       // handle the error
//       console.log(error);
//     });
//   });
// });



// var cityInput = $('#city-input').val; //.val necessary?
// var 

// // get the weather based on city name input
// function getWeather(city) {
//   var apiKey = "d790997ca229b3abb8cc2c3ff03ae371";
//   var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=${apiKey}&units=imperial";

//   $.getJSON(requestURL).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {

//       })
//     }
//   }) {
    
//   }
// }


// $(document).ready(function () {
//   // api key and api url variables
//   var apiKey = "d790997ca229b3abb8cc2c3ff03ae371";
//   // open weather map geocoding api
//   var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=lat=${lat}&lon=${lon}&appid=${APIKey}";

//   // add event listener for form submit event
//   $("form").submit(function(event) {
//     event.preventDefault();

//     // get the city input values
//     var city = $("city-input").val();
//     var limit = 10;

//     var currentWeatherUrl = apiUrl + "weather?q=" + city + "&units=metric&appid=" + apiKey;
//     var forecastUrl = apiUrl + "forecast?q=" + city + "&units=metric&appid=" + apiKey;

//     $.getJSON(currentWeatherUrl, function(currentWeatherData) {
//       $(".current-weather").html(
//         "<h2>Current Weather:</h2>" +
//         "<p>Temperature: " + currentWeatherData.main.temp + " &deg;C</p>" +
//         "<p>Humidity: " + currentWeatherData.main.humidity + " %</p>" +
//         "<p>Wind Speed: " + currentWeatherData.wind.speed + " m/s</p>"
//       );

//       // add the city to the search history
//       $(".search-history").prepend("<button>" + city + "</button>");

//       for (var i = 0; i < forecastData.list.length; i++) {
//         // Display only the forecast for 12:00 PM for each day
//         if (forecastData.list[i].dt_txt.indexOf("12:00:00") !== -1) {
//           var forecastDate = new Date(forecastData.list[i].dt * 1000);
//           var forecastDateString = forecastDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
          
//           $(".forecast").append(
//             "<div class='forecast-day'>" +
//             "<h3 class='date'>" + forecastDateString + "</h3>" +
//             "<p class='temp'>Temperature: " + forecastData.list[i].main.temp + " &deg;C</p>" +
//             "<p class='humidity'>Humidity: " + forecastData.list[i].main.humidity + " %</p>" +
//             "<p class='windSpeed'>Wind Speed: " + forecastData.list[i].wind.speed + " m/s</p>" +
//             "</div>"
//           );
//         }
//       }
//     });
//   });
// });
