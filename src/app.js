let apiKey = "8f6b1ec5dcfe08b27439b846a9c1473d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;

axios.get(`${apiUrl}`).then(showTemperature);
console.log(apiUrl);

function showTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature");
  let cityElement = document.querySelector(".current-city");
  let descriptionElement = document.querySelector(".description");
  let parisTemperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `• ${parisTemperature}°C`;
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

// Current date and time

let now = new Date();
let currentdate = document.querySelector(".current-date");
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
currentdate.innerHTML = `${month},  ${date} • ${hour}:${minutes}`;
