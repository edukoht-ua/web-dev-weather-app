const api_url = "https://api.openweathermap.org/data/2.5/weather?id=703448&appid=5b46063fcf9504b5759d3fd51e8524b7&units=metric";

async function getWeather() {
    const response = await fetch(api_url);
    
    const response_data = await response.json();

    console.log(response_data);  

    const city_name = response_data.name;
    const main = response_data.main;
    const temp = main.temp;
    const humidity = main.humidity;
    const weather = response_data.weather[0];
    const icon = weather.icon;
    const wind = response_data.wind;
    const wind_speed = wind.speed;

    document.getElementById("cityName").innerHTML = city_name;
    document.getElementById("temperature").innerHTML = `${temp} °C`;
    document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);

    document.getElementById("weather").innerHTML = `Weather: ${weather.main}`;
    document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`;
    document.getElementById("wind").innerHTML = `Wind speed: ${wind_speed} m/s`;
}

getWeather();