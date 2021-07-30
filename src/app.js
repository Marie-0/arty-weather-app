// Search Engine
function search(city) {
  let apiKey = "8f6b1ec5dcfe08b27439b846a9c1473d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemperature);
}
function handlesubmit(event) {
  event.preventDefault();
  let cityformElement = document.querySelector("#cityform");
  search(cityformElement.value);
}
let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handlesubmit);

// Farenheit conversion
function displayFarenheitConversion(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".current-temperature");
  celsiusLink.classList.remove("active");
  farenheitLink.classList.add("active");
  let farenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = "• " + Math.round(farenheitTemperature) + "°F";
}

function displayCelsiusBack(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".current-temperature");
  temperatureElement.innerHTML = "• " + Math.round(celsiusTemperature) + "°C";
}

let farenheitLink = document.querySelector(".farenheit-link");
farenheitLink.addEventListener("click", displayFarenheitConversion);

let celsiusLink = document.querySelector(".celsius-link");
celsiusLink.addEventListener("click", displayCelsiusBack);

search("Paris");

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

  celsiusTemperature = response.data.main.temp;

  let emojiElement = response.data.weather[0].icon;
  if (emojiElement === "01d") {
    currentEmojiElement.innerHTML = "☀️";
  }
  if (emojiElement === "02d") {
    currentEmojiElement = "🌤";
  }
  if (emojiElement === "03d") {
    currentEmojiElement.innerHTML = "🌥";
  }
  if (emojiElement === "04d") {
    currentEmojiElement.innerHTML = " ☁️";
  }
  if (emojiElement === "09d") {
    currentEmojiElement.innerHTML = "🌧";
  }
  if (emojiElement === "10d") {
    currentEmojiElement.innerHTML = "🌦";
  }
  if (emojiElement === "11d") {
    currentEmojiElement.innerHTML = "🌩";
  }
  if (emojiElement === "13d") {
    currentEmojiElement.innerHTML = "❄️";
  }
  if (emojiElement === "50d") {
    currentEmojiElement.innerHTML = "🌫";
  }

  let parisTemperature = Math.round(celsiusTemperature);
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
let h1element = document.querySelector(".daypart");
if (hour < 10) {
  hour = `0${hour}`;
}
if (hour < 12) {
  h1element.innerHTML = "🌤 Good Morning 🌤";
}
if (hour < 6) {
  h1element.innerHTML = "🌥 Hello Early bird  🌥";
}
if (hour >= 22) {
  h1element.innerHTML = "🌚 Good Night 🌚";
}
if (hour < 22) {
  h1element.innerHTML = "🌝 Good Evening 🌝";
}
if (hour < 18) {
  h1element.innerHTML = "🌞 Good Afternoon 🌞";
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
