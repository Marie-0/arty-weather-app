let apiKey = "8f6b1ec5dcfe08b27439b846a9c1473d";
let city = "Paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(`${apiUrl}`).then(showTemperature);
console.log(apiUrl);

// Display City weather info

function showTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature");
  let cityElement = document.querySelector(".current-city");
  let descriptionElement = document.querySelector(".description");
  let minimumTemperature = document.querySelector(".min-temp");
  let maximumTemperature = document.querySelector(".max-temp");
  let humidityElement = document.querySelector(".humidity-percent");
  let windElement = document.querySelector(".wind-speed");
  let currentEmojiElement = document.querySelector(".currentemoji");
  if (currentEmojiElement === "01d") {
    currentEmojiElement.innerHTML = "☀️";
  }
  if (currentEmojiElement === "02d") {
    currentEmojiElement = "🌤";
  }
  if (currentEmojiElement === "03d") {
    currentEmojiElement.innerHTML = "🌥";
  }
  if (currentEmojiElement === "04d") {
    currentEmojiElement.innerHTML = " ☁️";
  }
  if (currentEmojiElement === "09d") {
    currentEmojiElement.innerHTML = "🌧";
  }
  if (currentEmojiElement === "10d") {
    currentEmojiElement.innerHTML = "🌦";
  }
  if (currentEmojiElement === "11d") {
    currentEmojiElement.innerHTML = "🌩";
  }
  if (currentEmojiElement === "13d") {
    currentEmojiElement.innerHTML = "❄️";
  }
  if (currentEmojiElement === "50d") {
    currentEmojiElement.innerHTML = "🌫";
  }

  let parisTemperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `• ${parisTemperature}°C`;
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  minimumTemperature.innerHTML = Math.round(response.data.main.temp_min) + "°C";
  maximumTemperature.innerHTML = Math.round(response.data.main.temp_max) + "°C";
  humidityElement.innerHTML = response.data.main.humidity + "%";
  windElement.innerHTML = Math.round(response.data.wind.speed) + " km/h";
}

// Current date and time

let now = new Date();
let currentdate = document.querySelector(".current-date");
let date = now.getDate();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

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
