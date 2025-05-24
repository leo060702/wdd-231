const apiKey = "YOUR_API_KEY"; // ← 替换为你自己的 OpenWeatherMap API Key
const weatherContainer = document.getElementById("weather");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=34.0&lon=-117.96&units=imperial&appid=" + apiKey;

async function getWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Weather data unavailable");

    const data = await response.json();
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const description = data.weather[0].description;
    const temp = data.main.temp.toFixed(1);

    weatherContainer.innerHTML = `
      <p><img src="${iconUrl}" alt="${description} icon"> ${description}</p>
      <p>Temperature: ${temp}&deg;F</p>
    `;
  } catch (error) {
    weatherContainer.innerHTML = "<p>Unable to load weather data.</p>";
    console.error(error);
  }
}

getWeather();
