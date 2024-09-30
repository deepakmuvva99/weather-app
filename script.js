
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '862519c91e5a4a0fbce55906242909'; // Your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();

 
        document.getElementById('cityName').innerText = `City: ${data.location.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c} °C`;
        document.getElementById('weatherDescription').innerText = `Weather: ${data.current.condition.text}`;
        document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
        document.getElementById('windSpeed').innerText = `Wind Speed: ${data.current.wind_kph} kph`; 
        document.getElementById('feelsLike').innerText = `Feels Like: ${data.current.feelslike_c} °C`; 

      
        const weatherIcon = document.querySelector('.weather-icon');
        if (data.current.condition.text.includes("Clear")) {
            weatherIcon.className = "fas fa-sun weather-icon";  
        } else if (data.current.condition.text.includes("Rain")) {
            weatherIcon.className = "fas fa-cloud-showers-heavy weather-icon"; 
        } else if (data.current.condition.text.includes("Snow")) {
            weatherIcon.className = "fas fa-snowflake weather-icon";  
        } else if (data.current.condition.text.includes("Cloud")) {
            weatherIcon.className = "fas fa-cloud weather-icon"; 
        } else {
            weatherIcon.className = "fas fa-question-circle weather-icon";  
        }
    } catch (error) {
        alert(error.message);
    }
}

function toggleMusic() {
    const audio = document.getElementById('backgroundAudio');
    const musicButton = document.getElementById('musicButton');
    if (audio.paused) {
        audio.play();
        musicButton.innerText = "Pause Music";
    } else {
        audio.pause();
        musicButton.innerText = "Play Music";
    }
}
