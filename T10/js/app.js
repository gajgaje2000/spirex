document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('weather-form');
  const input = document.getElementById('city-input');
  const searchBtn = document.getElementById('search-btn');
  const statusMsg = document.getElementById('status-message');
  const card = document.getElementById('weather-card');

  const cityNameEl = document.getElementById('city-name');
  const citySubtextEl = document.getElementById('city-subtext');
  const iconBoxEl = document.getElementById('weather-icon-box');
  const tempEl = document.getElementById('temperature');
  const feelsLikeEl = document.getElementById('feels-like-text');
  const metricTempEl = document.getElementById('metric-temp');
  const metricHumidityEl = document.getElementById('metric-humidity');
  const metricConditionEl = document.getElementById('metric-condition');
  const metricWindEl = document.getElementById('metric-wind');

  function getWeatherInfo(code) {
    const sunIcon = `<svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"></circle><path stroke-linecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"></path></svg>`;
    const cloudSunIcon = `<svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
    const cloudIcon = `<svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h10a4 4 0 001.5-7.7A5 5 0 008.3 9.4 4 4 0 003 15z"></path></svg>`;
    const rainIcon = `<svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"></path><path stroke-linecap="round" d="M8 19v2m8-2v2m-4-1v2"></path></svg>`;
    const thunderIcon = `<svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`;
    const snowIcon = `<svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2v20m10-10H2m15.5 5.5L6.5 6.5m11 0L6.5 17.5"></path></svg>`;
    const fogIcon = `<svg class="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" d="M4 8h16M3 12h18M5 16h14M7 20h10"></path></svg>`;

    if (code === 0) {
      return { desc: 'Clear sky', badge: 'bg-amber-50 text-amber-700 border-amber-200/60', iconColor: 'text-amber-500', icon: sunIcon };
    } else if (code === 1 || code === 2) {
      return { desc: 'Partly cloudy', badge: 'bg-sky-50 text-sky-700 border-sky-200/60', iconColor: 'text-sky-500', icon: cloudSunIcon };
    } else if (code === 3) {
      return { desc: 'Overcast', badge: 'bg-slate-100 text-slate-700 border-slate-200', iconColor: 'text-slate-500', icon: cloudIcon };
    } else if (code === 45 || code === 48) {
      return { desc: 'Foggy', badge: 'bg-slate-100 text-slate-700 border-slate-200', iconColor: 'text-slate-400', icon: fogIcon };
    } else if ([51, 53, 55, 56, 57].includes(code)) {
      return { desc: 'Drizzle', badge: 'bg-blue-50 text-blue-700 border-blue-200/60', iconColor: 'text-blue-400', icon: rainIcon };
    } else if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
      return { desc: 'Rain', badge: 'bg-blue-50 text-blue-700 border-blue-200/60', iconColor: 'text-blue-500', icon: rainIcon };
    } else if ([71, 73, 75, 77, 85, 86].includes(code)) {
      return { desc: 'Snow', badge: 'bg-cyan-50 text-cyan-700 border-cyan-200/60', iconColor: 'text-cyan-400', icon: snowIcon };
    } else if ([95, 96, 99].includes(code)) {
      return { desc: 'Thunderstorm', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/60', iconColor: 'text-indigo-500', icon: thunderIcon };
    }
    return { desc: 'Fair', badge: 'bg-slate-100 text-slate-700 border-slate-200', iconColor: 'text-slate-500', icon: cloudSunIcon };
  }

  function showStatus(text) {
    statusMsg.textContent = text;
    statusMsg.classList.remove('hidden');
    card.classList.add('hidden');
  }

  function displayWeather(location, weather) {
    statusMsg.classList.add('hidden');
    card.classList.remove('hidden');

    const info = getWeatherInfo(weather.weather_code);
    const temp = Math.round(weather.temperature_2m);
    const feelsLike = Math.round(weather.apparent_temperature);
    const humidity = weather.relative_humidity_2m;
    const wind = weather.wind_speed_10m;

    cityNameEl.textContent = location.country ? `${location.name}, ${location.country}` : location.name;
    citySubtextEl.innerHTML = `${Math.abs(location.latitude).toFixed(2)}° ${location.latitude >= 0 ? 'N' : 'S'}, ${Math.abs(location.longitude).toFixed(2)}° ${location.longitude >= 0 ? 'E' : 'W'} &nbsp;&nbsp;•&nbsp;&nbsp; ${location.timezone || 'UTC'}`;

    iconBoxEl.className = `w-16 h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm ${info.iconColor}`;
    iconBoxEl.innerHTML = info.icon;

    tempEl.textContent = `${temp}°C`;
    feelsLikeEl.textContent = `Feels like ${feelsLike}°C`;

    metricTempEl.textContent = `${temp}°C`;
    metricHumidityEl.textContent = `${humidity}%`;
    metricConditionEl.textContent = info.desc;
    metricWindEl.textContent = `${wind} km/h`;
  }

  async function fetchWeather(city, silent = false) {
    const q = city.trim();
    if (!q) return;

    if (!silent) {
      showStatus(`Fetching weather for "${q}"...`);
      searchBtn.disabled = true;
    }

    try {
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=1&language=en&format=json`);
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        if (!silent) showStatus(`No city found matching "${q}"`);
        searchBtn.disabled = false;
        return;
      }

      const loc = geoData.results[0];
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`);
      const weatherData = await weatherRes.json();

      if (weatherData && weatherData.current) {
        displayWeather(loc, weatherData.current);
      } else {
        if (!silent) showStatus('Unable to retrieve weather data.');
      }
    } catch {
      if (!silent) showStatus('Error connecting to weather service. Please try again.');
    } finally {
      searchBtn.disabled = false;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchWeather(input.value);
  });

  fetchWeather('New Delhi', true);
});
