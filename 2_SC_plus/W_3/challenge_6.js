let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true,
};

// JS Challenge 1
// Given an object called paris, log its temperature
console.log(paris.temperature);

// JS Challenge 2
// Create an object called sydney similar to paris and log its temperature (use fake data)
let sydney = { ...paris, name: "Sydney", temperature: 25 };
console.log(sydney.temperature);

// JS Challenge 3
// Create an array with 3 different Australian city names only and log each name
const australianCities = ["Melbourne", "Brisbane", "Perth"];
australianCities.forEach((city) => console.log(city));

// JS Challenge 4
// Create an array of 3 cities with the same properties as paris and console log each city temperature
const citiesArray = [
  { ...paris, name: "Sydney", temperature: 22 },
  { ...paris, name: "Melbourne", temperature: 20 },
  { ...paris, name: "Brisbane", temperature: 24 },
];

citiesArray.forEach((city) =>
  console.log(`${city.name} temperature: ${city.temperature} degrees`)
);
