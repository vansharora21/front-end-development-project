Edit
Copy code
const form = document.getElementById('form');
const search = document.getElementById('search');
const weatherInfo = document.getElementById('weather-info');

const apiKey = '572342a7a4db925dd413c7d7f052900a'; // Replace with your OpenWeatherMap API key

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    if (location) {
        getWeather(location);
    }
});

async function getWeather(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Weather: ${weather[0].description}</p>
    `;
}