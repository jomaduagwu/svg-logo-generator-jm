// var APIKey = "d790997ca229b3abb8cc2c3ff03ae371";

// var requestURL = "http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}";

// function getWeather(cityName) {
//     fetch('${requestURL}${cityName}&units=metric&appid=${APIKey}')
//     then (response => response.json())
//     .then(da)
// }
// var city = "";
// var stateCode = "";
// var limit = 10;


$(document).ready(function () {
  // api key and api url variables
  var apiKey = "d790997ca229b3abb8cc2c3ff03ae371";
  // open weather map geocoding api
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${APIKey}";

  // add event listener for form submit event
  $("form").submit(function(event) {
    event.preventDefault();

    // get the city input values
    var city = $("city-input").val();
    var limit = 10;

    var currentWeatherUrl = apiUrl + "weather?q=" + city + "&units=metric&appid=" + apiKey;
    var forecastUrl = apiUrl + "forecast?q=" + city + "&units=metric&appid=" + apiKey;

    $.getJSON(currentWeatherUrl, function(currentWeatherData) {
      $(".current-weather").html(
        "<h2>Current Weather:</h2>" +
        "<p>Temperature: " + currentWeatherData.main.temp + " &deg;C</p>" +
        "<p>Humidity: " + currentWeatherData.main.humidity + " %</p>" +
        "<p>Wind Speed: " + currentWeatherData.wind.speed + " m/s</p>"
      );

      // add the city to the search history
      $(".search-history").prepend("<button>" + city + "</button>");

      for (var i = 0; i < forecastData.list.length; i++) {
        // Display only the forecast for 12:00 PM for each day
        if (forecastData.list[i].dt_txt.indexOf("12:00:00") !== -1) {
          var forecastDate = new Date(forecastData.list[i].dt * 1000);
          var forecastDateString = forecastDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
          
          $(".forecast").append(
            "<div class='forecast-day'>" +
            "<h3 class='date'>" + forecastDateString + "</h3>" +
            "<p class='temp'>Temperature: " + forecastData.list[i].main.temp + " &deg;C</p>" +
            "<p class='humidity'>Humidity: " + forecastData.list[i].main.humidity + " %</p>" +
            "<p class='windSpeed'>Wind Speed: " + forecastData.list[i].wind.speed + " m/s</p>" +
            "</div>"
          );
        }
      }
    });
  });
});
