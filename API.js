console.log('hello world!');

// API
// promises chaining

// async function getWeather() {
//     const city = document.getElementById('city').value;
//     const apiKey = '`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}'
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         if (data.cod === 200) {
//             document.getElementById('weather').innerHTML = `
//                 <h3>${data.name}, ${data.sys.country}</h3>
//                 <p>Temperature: ${data.main.temp}°C</p>
//                 <p>Weather: ${data.weather[0].description}</p>
//             `;
//         } else {
//             document.getElementById('weather').innerHTML = `<p>${data.message}</p>`;
//         }
//     } catch (error) {
//         document.getElementById('weather').innerHTML = `<p>Failed to fetch weather data.</p>`;
//     }
// }


async function getWeather() {
    const city = document.getElementById('city').value = "karachi";
    const apiKey = 'b4db485d7c4c485fa6d84351232508'; // Your WeatherAPI key

    if (!city) {
        document.getElementById('weather').innerHTML = `<p>Please enter a city name.</p>`;
    } else {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
        const data = await response.json();

        if (response.ok) {
            document.getElementById('weather').innerHTML = `
                <h3>${data.location.name}, ${data.location.country}</h3>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Weather: ${data.current.condition.text}</p>
               <p>Latitude: ${data.location.lat}</p>
               <p>Longitude: ${data.location.lon}</p>

                
            `;
        } else {
            document.getElementById('weather').innerHTML = `<p>${data.error.message}</p>`;
        }
    }
}
