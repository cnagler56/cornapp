import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const cachedWeather = localStorage.getItem('weatherData');
                if (cachedWeather) {
                    const { data, timestamp } = JSON.parse(cachedWeather);
                    const oneHour = 60 * 60 * 1000; // Cache expiration (1 hour)
                    const now = new Date().getTime();
    
                    if (now - timestamp < oneHour) {
                        setWeatherData(data);
                        setLoading(false);
                        return;
                    }
                }
    
                const response = await axios.get('/fetch-weather', {
                    params: { gridID: 'MPX', gridX: '107', gridY: '71' }
                });
    
                const weatherData = response.data;
    
                localStorage.setItem(
                    'weatherData',
                    JSON.stringify({ data: weatherData, timestamp: new Date().getTime() })
                );
    
                setWeatherData(weatherData);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch weather data.');
                setLoading(false);
            }
        };
    
        fetchWeather();
    }, []);

    const getBackgroundColor = (temperature) => {
        if (temperature < 10) {
            return '#003f5c'; // Dark Blue
        } else if (temperature < 20) {
            return '#0000FF'; // Medium Dark Blue
        } else if (temperature < 30) {
            return '#0096FF'; // Medium Blue
        } else if (temperature < 40) {
            return '#ADD8E6'; // Light Blue
        } else if (temperature < 50) {
            return '#7DF9FF'; // Very Light Blue
        } else if (temperature < 60) {
            return '#f95d6a'; // Neutral (Transition)
        } else if (temperature < 70) {
            return '#ff7c43'; // Light Red
        } else if (temperature < 80) {
            return '#ffa600'; // Medium Light Red
        } else if (temperature < 90) {
            return '#f44747'; // Medium Red
        } else if (temperature < 100) {
            return '#e03c28'; // Dark Red
        } else {
            return '#990000'; // Very Dark Red
        }
    };

    if (loading) return <p>Loading weather data...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Weather Forecast</h1>
            {weatherData.length === 0 ? (
                <p>No weather data available.</p>
            ) : (
                <div className="display">
                    {weatherData.map((period) => {
                        // Calculate background color dynamically
                        const backgroundColor = getBackgroundColor(period.temperature);

                        return (
                            <div
                                className="weatherbox"
                                key={period.dayForecast}
                                style={{ backgroundColor }} // Apply the background color
                            >
                                <h3>{`${period.name}`}</h3>
                                <p><strong>Temperature:</strong> {period.temperature} °F</p>
                                <p><strong>Precipitation Chance:</strong> {period.precipitationChance ?? 'N/A'}%</p>
                                <p><strong>Wind:</strong> {period.windSpeed} {period.windDirection}</p>
                                <p><strong>Forecast:</strong> {period.shortForecast}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Weather;

