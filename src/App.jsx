import React, { useState } from 'react';
import Favourite from './components/Favourite';
import Search from './components/Search';
import Weather from './components/Weather';
import './App.css';

const App = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState('');

    const apiKey = "0df3cf37b84de6254f7a821a6cca8390";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

    const fetchWeather = async (cityName) => {
        try {
            const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
            const data = await response.json();

            const forecastResponse = await fetch(forecastApiUrl + cityName + `&appid=${apiKey}`);
            const forecastData = await forecastResponse.json();

            if (response.status === 404 || forecastResponse.status === 404) {
                setError('Invalid city name');
                setWeatherData(null);
                setForecastData(null);
            } else {
                setWeatherData(data);
                setForecastData(forecastData);
                setError('');
            }
        } catch (error) {
            setError('Failed to fetch weather data');
            setWeatherData(null);
            setForecastData(null);
        }
    };

    return (
        <div className="app">
            <div className="card">
                <Favourite city={city} />
                <Search setCity={setCity} fetchWeather={fetchWeather} />
                {error && <div className="error">{error}</div>}
                {weatherData && <Weather data={weatherData} forecastData={forecastData} />}
            </div>
        </div>
    );
};

export default App;
