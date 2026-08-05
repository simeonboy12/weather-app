const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const wind = document.getElementById("wind");


async function getWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }


    // Paste your OpenWeather API key between the quotes below
  const apiKey = "80fa5bc3325e28c04ae149ef24d493d0";


    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {

        const response = await fetch(url);

        const data = await response.json();


        if (data.cod === "404") {
            alert("City not found");
            return;
        }


        cityName.textContent = data.name;

        temperature.textContent =
        "Temperature: " + data.main.temp + "°C";


        condition.textContent =
        "Condition: " + data.weather[0].description;


        wind.textContent =
        "Wind: " + data.wind.speed + " m/s";


    } catch {

        alert("Unable to get weather data");

    }

}
