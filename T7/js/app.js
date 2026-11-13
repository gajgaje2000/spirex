document.addEventListener('DOMContentLoaded', () => {
  const amountInput = document.getElementById('amount');
  const fromSelect = document.getElementById('from-currency');
  const toSelect = document.getElementById('to-currency');
  const swapBtn = document.getElementById('swap-btn');
  const convertBtn = document.getElementById('convert-btn');
  const resultAmount = document.getElementById('result-amount');
  const rateSubtext = document.getElementById('rate-subtext');

  let exchangeRates = {};

  async function fetchRates() {
    resultAmount.textContent = 'Fetching live rates...';
    rateSubtext.textContent = '';

    try {
      const response = await fetch('https://open.er-api.com/v6/latest/USD');
      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      exchangeRates = data.rates;
      calculateConversion();
    } catch {
      resultAmount.textContent = 'Unable to fetch live rates';
      rateSubtext.textContent = 'Please check your internet connection';
    }
  }

  function formatNumber(num, maxFraction = 2) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: maxFraction
    }).format(num);
  }

  function calculateConversion() {
    if (!exchangeRates[fromSelect.value] || !exchangeRates[toSelect.value]) {
      return;
    }

    const amountVal = parseFloat(amountInput.value);
    const fromVal = fromSelect.value;
    const toVal = toSelect.value;

    if (isNaN(amountVal) || amountVal < 0) {
      resultAmount.textContent = 'Please enter a valid amount';
      rateSubtext.textContent = '';
      return;
    }

    const fromRate = exchangeRates[fromVal];
    const toRate = exchangeRates[toVal];
    const rate = toRate / fromRate;
    const converted = amountVal * rate;

    resultAmount.textContent = `${formatNumber(amountVal)} ${fromVal} = ${formatNumber(converted)} ${toVal}`;
    rateSubtext.textContent = `1 ${fromVal} = ${formatNumber(rate, 4)} ${toVal}`;
  }

  swapBtn.addEventListener('click', () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    calculateConversion();
  });

  amountInput.addEventListener('input', calculateConversion);
  fromSelect.addEventListener('change', calculateConversion);
  toSelect.addEventListener('change', calculateConversion);
  convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    calculateConversion();
  });

  fetchRates();
});
