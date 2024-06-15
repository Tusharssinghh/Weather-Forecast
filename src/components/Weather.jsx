import React from 'react';

const Weather = ({ data, forecastData }) => {
    const getWeatherIcon = (description, hour) => {
        const isNight = hour >= 18 || hour < 4;
        let icon = "/animated/";

        if (isNight) {
            switch (description) {
                case "clear sky": return icon + "night.svg";
                case "few clouds": return icon + "partly-cloudy-night.svg";
                case "scattered clouds": return icon + "scattered_clouds.svg";
                case "broken clouds": return icon + "cloudy-night-1.svg";
                case "overcast clouds": return icon + "overcast-night.svg";
                case "smoke": return icon + "partly-cloudy-night-smoke.svg";
                case "light rain": return icon + "Light rain night.svg";
                case "rain":
                case "heavy intensity rain":
                case "moderate rain": return icon + "rain.svg";
                case "light snow": return icon + "partly-cloudy-night-snow.svg";
                case "snow": return icon + "snow.svg";
                case "haze": return icon + "haze-night.svg";
                case "drizzle": return icon + "partly-cloudy-night-drizzle.svg";
                default: return icon + "unknown.svg";
            }
        } else {
            switch (description) {
                case "clear sky": return icon + "day.svg";
                case "few clouds": return icon + "partly-cloudy-day.svg";
                case "scattered clouds": return icon + "scattered_clouds.svg";
                case "broken clouds": return icon + "cloudy-day-1.svg";
                case "overcast clouds": return icon + "overcast-day.svg";
                case "smoke": return icon + "partly-cloudy-day-smoke.svg";
                case "light rain": return icon + "light-rain-day.svg";
                case "rain":
                case "heavy intensity rain":
                case "moderate rain": return icon + "rain.svg";
                case "light snow": return icon + "partly-cloudy-day-snow.svg";
                case "snow": return icon + "snow.svg";
                case "haze": return icon + "haze-day.svg";
                case "drizzle": return icon + "partly-cloudy-day-drizzle.svg";
                default: return icon + "unknown.svg";
            }
        }
    };

    const weather = data.weather[0];
    const hour = new Date().getHours();
    const weatherIcon = getWeatherIcon(weather.description, hour);

    return (
        <div className="weather">
            <div>
                <div className="desc">{weather.main} - {weather.description.charAt(0).toUpperCase() + weather.description.slice(1)}</div>
                <img src={weatherIcon} className="weatherIcon" alt="Weather Icon" />
            </div>
            <h1 className="temp">{Math.round(data.main.temp)} °C</h1>
            <h2 className="city">{data.name}</h2>

            <div className="details">
                <div className="col col1">
                    <img src="Imgs/dew.png" alt="Humidity Icon" />
                    <div>
                        <div className="humidity">{data.main.humidity}%</div>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="col col2">
                    <img src="Imgs/wind (1).png" alt="Wind Speed Icon" />
                    <div>
                        <div className="wind">{data.wind.speed} km/h</div>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>

            <div className="forecast">
                <h3>3-Day Forecast</h3>
                <div className="forecastDetails">
                    {forecastData.list.slice(0, 24 * 3).map((forecast, index) => (
                        <div key={index} className="forecastItem">
                            <p>{new Date(forecast.dt * 1000).toLocaleString()}</p>
                            <img
                                src={getWeatherIcon(forecast.weather[0].description, new Date(forecast.dt * 1000).getHours())}
                                alt="Forecast Icon"
                            />
                            <p>{Math.round(forecast.main.temp)} °C</p>
                            <p>{forecast.weather[0].description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Weather;
