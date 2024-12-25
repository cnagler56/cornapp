import React, { useState, useEffect } from "react";

const NWS = () => {
    const [locations] = useState([
        "MPX,107,71",
        "DLH,112,42", 
    ]);
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8081/fetch-weathers?locations=${locations.join(",")}`
                );
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeather();
    }, [locations]);

    return (
<div>
    <h1>Weather Forecast</h1>
    {weatherData.map((locationData, index) => (
        <div key={index}>
            <h2>Location {locationData.location}</h2>
            {locationData.forecasts && locationData.forecasts.length > 0 ? (
                locationData.forecasts.map((period, idx) => (
                    <div key={idx}>
                        <p><strong>Time:</strong> {period.startTime}</p>
                        <p><strong>Temperature:</strong> {period.temperature}°F</p>
                        <p><strong>Precipitation Chance:</strong> {period.precipitationChance ?? 'N/A'}%</p>
                        <p><strong>Forecast:</strong> {period.shortForecast}</p>
                    </div>
                ))
            ) : (
                <p>No forecast data available.</p>
            )}
        </div>
    ))}
</div>
    );
};

export default NWS;

