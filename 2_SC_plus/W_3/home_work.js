let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
let cityInput = prompt("Enter a city");
let cityName = cityInput.toLowerCase();

if (weather.hasOwnProperty(cityName)) {
  let temperature = Math.round(weather[cityName].temp);
  let humidity = Math.round(weather[cityName].humidity);
  alert(
    `It is currently ${temperature}°C (${
      (temperature * 9) / 5 + 32
    }°F) in ${cityInput} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${cityName}`
  );
}
