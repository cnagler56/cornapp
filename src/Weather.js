import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faSun, faCloud, faWind } from '@fortawesome/free-solid-svg-icons';
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
                    const oneHour = 60 * 60 * 12000; 
    
                    if (Date.now() - timestamp < oneHour) {
                        setWeatherData(data);
                        setLoading(false);
                        return;
                    }
                }
    
                const response = await axios.get('/fetch-weather', {
                    params: { gridID: 'MPX', gridX: '107', gridY: '71' },
                    withCredentials: true
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
            return '#023E8A';  
        } else if (temperature < 20) {
            return '#0077B6';  
        } else if (temperature < 30) {
            return '#0096FF';  
        } else if (temperature < 40) {
            return '#ADD8E6';  
        } else if (temperature < 50) {
            return '#7DF9FF'; // Very Light Blue
        } else if (temperature < 60) {
            return '#f95d6a';  
        } else if (temperature < 70) {
            return '#ff7c43';  
        } else if (temperature < 80) {
            return '#ffa600';  
        } else if (temperature < 90) {
            return '#f44747';  
        } else if (temperature < 100) {
            return '#e03c28';  
        } else {
            return '#990000';  
        }
    };

    const getIconColor = (precipitationChance) => {
        if (precipitationChance > 80) return 'darkblue';
        if (precipitationChance > 50) return 'blue';
        if (precipitationChance > 20) return 'lightblue';
        return 'white';
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
                    {weatherData
                    .filter((period) => !period.name.includes('Night'))
                    .map((period) => {
                        const backgroundColor = getBackgroundColor(period.temperature);

                        return (
                            <div
                                className="weatherbox"
                                key={period.dayForecast}
                                style={{ backgroundColor }} 
                            >
                                <span>
                                <p className="weather-item1">
                                {period.name}</p>
                                <p className="weather-item"> {period.temperature} °F</p>
                                <p className="weather-item">
                                {period.precipitationChance ?? 'N/A'}%
                  {period.precipitationChance > 0 && (
                    <FontAwesomeIcon
                      icon={faTint}
                      style={{  color: getIconColor(period.precipitationChance), marginLeft: '5px' }}
                    />
                  )}
                </p>
                                <p className="weather-item2"><FontAwesomeIcon icon={faWind} style={{ color: "blue", marginRight: "5px" }} />
                                 {period.windSpeed} {period.windDirection}</p>
                                <p className="weather-item3"><FontAwesomeIcon icon={faSun} style={{ color: "gold", marginRight: "5px" }} />
                                 {period.shortForecast}</p>
                                </span>

                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Weather;

