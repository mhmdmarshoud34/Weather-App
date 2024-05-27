const apiKey = "0802b95a95572d74c61588a0fd27c8cc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorModal = document.getElementById("error-modal");
const modalOkBtn = document.getElementById("modal-ok-btn");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (response.status === 404 || data.cod === "404") {
      showErrorModal();
      return;
    }

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "./images/clouds.png";
      document.body.className = 'clouds';
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "./images/clear.png";
      document.body.className = 'clear';
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "./images/rain.png";
      document.body.className = 'rain';
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
      document.body.className = 'drizzle';
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "./images/snow.png";
      document.body.className = 'snow';
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "./images/mist.png";
      document.body.className = 'mist';
    } else {
      document.body.className = '';
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    showErrorModal();
  }
}

function showErrorModal() {
  errorModal.style.display = "block";
}

function closeErrorModal() {
  errorModal.style.display = "none";
}

modalOkBtn.addEventListener("click", closeErrorModal);

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
