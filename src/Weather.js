import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get('/fetch-weather', {
                    params: { gridID: 'MPX', gridX: '107', gridY: '71' }
                });
                setWeatherData(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch weather data.');
                setLoading(false);
            }
        };

        fetchWeather();
    }, []); 

    if (loading) return <p>Loading weather data...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Weather Forecast</h1>
            {weatherData.length === 0 ? (
                <p>No weather data available.</p>
            ) : (
                <ul>
                    <h2>Minneapolis</h2>
                    {weatherData.map((period) => (
                        <div className = "weatherbox">
                        <li key={period.dayForecast}>
                            <h3>{`${period.name}`}</h3>
                            <p><strong>Temperature:</strong> {period.temperature} °F</p>
                            <p><strong>Precipitation Chance:</strong> {period.precipitationChance ?? 'N/A'}%</p>

                            <p><strong>Wind:</strong> {period.windSpeed} {period.windDirection}</p>
                            <p><strong>Forecast:</strong> {period.shortForecast}</p>
                        </li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Weather;
