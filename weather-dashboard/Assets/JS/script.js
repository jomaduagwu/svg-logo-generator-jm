// Define the API key and API URL
var apiKey = "d790997ca229b3abb8cc2c3ff03ae371";
var apiUrl = "https://api.openweathermap.org/data/2.5/"; //weather?q=
var apirealurl = "https://api.openweathermap.org/geo/1.0/direct?q=";

var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
// need to set lat and lon so it can pull
// var openweather = apirealurl + cityInput + "&appid=" + apiKey;

// Get references to the HTML elements
var searchForm = document.querySelector("#search-form");
var cityInput = document.querySelector("#city-input");
var searchBtn = document.querySelector("#search-btn");
var searchHist = document.querySelector(".search-hist");
var currentWeather = document.querySelector(".current-weather");
var fiveDayForecast = document.querySelector(".five-day-forecast");
var recentCities = document.querySelector(".recent-searches");
var cityList = document.querySelector(".city-list");

// fetch(openweather) 
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)
//     });
// Add an event listener to the search form
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Get the city name from the search input
  var cityName = cityInput.value;
  // varruct the API URL with the city name and API key
  var apiEndpoint = `${apiUrl}weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  var openweather = `${apiUrl}weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  // Send a GET request to the API endpoint and handle the response
  // 
  fetch(openweather)
    .then((response) => {
        // .then(response => response.json())
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
  
    })
    .then((data) => {
      // Extract the weather data from the API response
      var cityName = data.name;
      var date = new Date(data.dt * 1000);
      var iconCode = data.weather[0].icon;
      var temp = data.main.temp;
      var wind = data.wind.speed;
      var humidity = data.main.humidity;
     console.log(data);
      // Update the dashboard with the weather data
      currentWeather.querySelector("#city").textContent = cityName;
      currentWeather.querySelector("#date").textContent = date.toLocaleDateString();
      currentWeather.querySelector("#weather-icon").setAttribute("src", `http://openweathermap.org/img/w/${iconCode}.png`);
      currentWeather.querySelector("#temp").textContent = temp;
      currentWeather.querySelector("#wind").textContent = wind;
      currentWeather.querySelector("#humidity").textContent = humidity;

      // after line 31 (.then((date)))... 
      // currentWeather.innerHTML = "
    //      <h2>${data.name}</h2>
    //     <p>Temperature: ${data.main.temp}</p>
    //     <p>Wind Speed: ${data.wind.speed}</p>
    //     <p>Humidity: ${data.main.humidity}</p>
    //    "
        // Use the city name to fetch the 5-day forecast for the city
        
        var fiveForecast = `${apiUrl}forecast?q=${cityName}&appid=${apiKey}&units=imperial`;
        fetch(fiveForecast) 
        .then(response => response.json())
        .then(data => {
        // Update the 5-day forecast section with the relevant data
        fiveDayForecast.innerHTML = '';
        data.list.forEach(item => { 
            const date = new Date(item.dt * 1000);
            fiveDayForecast.innerHTML += `
            <div>
                <p>${date.toDateString()}</p>
                <p>Temperature: ${item.main.temp}</p>
                <p>Wind: ${item.wind.speed}</p>
                <p>Humidity: ${item.main.humidity}</p>
            </div>
            `;
            console.log(data);
        });

        // Add the city to the search history
        searchHist.push(data.name);
        searchHist.innerHTML = '';
        searchHist.forEach(city => {
            searchHist.innerHTML += `
            <li><button>${city}</button></li>
            `;

      // Store the searched city in local storage
      var searchHist= JSON.parse(localStorage.getItem("searchHist")) || [];
      searchHist.push(cityName);
      localStorage.setItem("searchHist", JSON.stringify(searchHist));
    })
    .catch((error) => {
      console.error("Error fetching weather data", error);
    });
});
    });
})

// // $("#clear-history").on("click",clearHistory)
// need to use the geocoding url
// change icon