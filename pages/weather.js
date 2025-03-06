import React, { useState } from 'react';

const WeatherPage = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
        setError('');
      } else {
        setError('Kota tidak ditemukan');
        setWeather(null);
      }
  };

  return (
    <div>
      <h1>Cek Cuaca</h1>
      <input
        type="text"
        placeholder="Masukkan nama kota"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Cari</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Suhu: {weather.main.temp}°C</p>
          <p>Kondisi: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;