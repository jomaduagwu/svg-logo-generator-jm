var APIKey = "d790997ca229b3abb8cc2c3ff03ae371";

var requestURL = "http://api.openweathermap.org/geo/1.0/direct?q=";

function getWeather(cityName) {
    fetch('${requestURL}${cityName}&units=metric&appid=${APIKey}')
    then (response => response.json())
    .then(da)
}
