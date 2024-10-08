import React from 'react';
import axios from 'axios';
import Search from './components/Search/Search';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import Forecast from './components/Forecast/Forecast';
import './index.css';

function App() {
  const [weather, setWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState(null);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  var apiKey = process.env.VITE_OPENWEATHERMAP_API_KEY;

  const handleSearch = async (city) => {
    try {
      setError('');
      setLoading(true);
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`,
      );
      setWeather(weatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ru`,
      );
      setForecast(forecastResponse.data);
    } catch {
      setError('Город не найден или произошла ошибка при запросе.');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Прогноз погоды</h1>
      <Search onSearch={handleSearch} />
      {error && <p className='error-message'>{error}</p>}
      {loading ? (
        <div data-testid='loader' className='loader'></div>
      ) : (
        <>
          <WeatherDetails weather={weather} />
          <Forecast forecast={forecast} />
        </>
      )}
    </div>
  );
}

export default App;
