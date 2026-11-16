document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const statusMsg = document.getElementById('status-message');
  const card = document.getElementById('country-card');

  const flagImg = document.getElementById('country-flag');
  const nameEl = document.getElementById('country-name');
  const officialEl = document.getElementById('country-official');
  const capitalEl = document.getElementById('country-capital');
  const populationEl = document.getElementById('country-population');
  const regionEl = document.getElementById('country-region');
  const currencyEl = document.getElementById('country-currency');

  let countries = [];

  function showStatus(text) {
    statusMsg.textContent = text;
    statusMsg.classList.remove('hidden');
    card.classList.add('hidden');
  }

  function displayCountry(country) {
    statusMsg.classList.add('hidden');
    card.classList.remove('hidden');

    flagImg.src = country.flags ? (country.flags.png || country.flags.svg) : '';
    flagImg.alt = `${country.name.common} Flag`;

    nameEl.textContent = country.name.common;
    officialEl.textContent = country.name.official || country.name.common;
    capitalEl.textContent = country.capital && country.capital.length ? country.capital[0] : 'N/A';
    populationEl.textContent = country.population ? country.population.toLocaleString() : 'N/A';
    regionEl.textContent = country.region || 'N/A';

    if (country.currencies) {
      const curr = Object.values(country.currencies)[0];
      currencyEl.textContent = curr ? `${curr.name} (${curr.symbol || ''})` : 'N/A';
    } else {
      currencyEl.textContent = 'N/A';
    }
  }

  function search(query) {
    const q = query.trim().toLowerCase();
    if (!q) return;

    if (!countries.length) {
      showStatus('Searching...');
    }

    const match = countries.find(c => c.name.common.toLowerCase() === q)
      || countries.find(c => c.name.common.toLowerCase().startsWith(q))
      || countries.find(c => c.name.common.toLowerCase().includes(q))
      || countries.find(c => c.name.official.toLowerCase().includes(q));

    if (match) {
      displayCountry(match);
    } else if (countries.length) {
      showStatus(`No country found matching "${query}"`);
    }
  }

  async function loadData() {
    try {
      const res = await fetch('https://cdn.jsdelivr.net/gh/restcountries/restcountries@master/src/main/resources/countriesV3.1.json');
      if (res.ok) {
        countries = await res.json();
      }
    } catch {
      // Fallback
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    search(input.value);
  });

  loadData();
});
