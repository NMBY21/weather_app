// JS Challenge 1
// Create an object weather and console log it
const weather1 = {};
console.log(weather1);

// JS Challenge 2
// Create an object weather with properties of temp and humidity and console log the object
const weather2 = {
  temp: 25,
  humidity: 60,
};
console.log(weather2);

// JS Challenge 3
// Console log the humidity and the temperature
console.log(`Temperature: ${weather2.temp} degrees`);
console.log(`Humidity: ${weather2.humidity}%`);

// JS Challenge 4
// Add a property windSpeed and console log it
weather2.windSpeed = 10;
console.log(weather2);

// JS Challenge 5
// Console log the wind speed, the temperature and the humidity using the square brackets syntax
console.log(`Wind Speed: ${weather2["windSpeed"]} km/h`);
console.log(`Temperature: ${weather2["temp"]} degrees`);
console.log(`Humidity: ${weather2["humidity"]}%`);

// JS Challenge 6
// Create an object or an array of objects called `forecast` with each day’s temperature, and console log it
const forecast = [
  { day: "Monday", temperature: 22 },
  { day: "Tuesday", temperature: 24 },
  { day: "Wednesday", temperature: 20 },
  { day: "Thursday", temperature: 18 },
  { day: "Friday", temperature: 25 },
  { day: "Saturday", temperature: 23 },
  { day: "Sunday", temperature: 21 },
];

console.log(forecast);
