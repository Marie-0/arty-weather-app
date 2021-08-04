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

let form = document.querySelector("#search-form");
form.addEventListener("submit", handlesubmit);

search("Paris");

function getForecast(coordinates) {
  let apiKey = "8f6b1ec5dcfe08b27439b846a9c1473d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

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
    currentEmojiElement.innerHTML = "🌤";
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

  getForecast(response.data.coord);
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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

// Forecast Javascript
function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index > 0 && index < 6) {
      let currentEmojiElement = document.querySelector(".forecast-emoji");
      let emojiElement = forecastDay.weather[0].icon;
      if (emojiElement === "01d") {
        currentEmojiElement = "☀️";
      }
      if (emojiElement === "02d") {
        currentEmojiElement = "🌤";
      }
      if (emojiElement === "03d") {
        currentEmojiElement = "🌥";
      }
      if (emojiElement === "04d") {
        currentEmojiElement = " ☁️";
      }
      if (emojiElement === "09d") {
        currentEmojiElement = "🌧";
      }
      if (emojiElement === "10d") {
        currentEmojiElement = "🌦";
      }
      if (emojiElement === "11d") {
        currentEmojiElement = "🌩";
      }
      if (emojiElement === "13d") {
        currentEmojiElement = "❄️";
      }
      if (emojiElement === "50d") {
        currentEmojiElement = "🌫";
      }
      forecastHTML =
        forecastHTML +
        `<div class="col">
                <div class="forecast-preview">
                    <div class="forecast-day">${formatDay(forecastDay.dt)}</div>
                    <div class="forecast-emoji">${currentEmojiElement}</div>
                    <div class="forecast-min-temperature">${Math.round(
                      forecastDay.temp.min
                    )} ° C min</div>
                    <div class="forecast-max-temperature">${Math.round(
                      forecastDay.temp.max
                    )} ° C max</div>
                </div>`;
    }
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
  });
}

// Image according to  Weather
function changeArt() {
  let img = document.querySelector("#artwork");
  let imgSource = img.setAttribute("src", "img/william-turner.jpg");
  let emojiElement = document.querySelector("#emoji");
  let textElement = document.querySelector("#cartel");
  if (emojiElement === "☀️") {
    imgSource = img.setAttribute("src", "img/tarsila-doamaral.jpg");
    textElement.innerHTML =
      "Tarsila do Amaral, Abaporu, 1928 © Tarsila do Amaral";
  }
}
changeArt();
