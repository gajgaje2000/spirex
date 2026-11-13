document.addEventListener('DOMContentLoaded', () => {
  const amount = document.getElementById('amount');
  const from = document.getElementById('from-currency');
  const to = document.getElementById('to-currency');
  const swapBtn = document.getElementById('swap-btn');
  const convertBtn = document.getElementById('convert-btn');
  const resultAmount = document.getElementById('result-amount');
  const rateSubtext = document.getElementById('rate-subtext');

  let rates = {};

  async function fetchRates() {
    resultAmount.textContent = 'Fetching live rates...';
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      const data = await res.json();
      rates = data.rates;
      convert();
    } catch {
      resultAmount.textContent = 'Unable to fetch rates';
    }
  }

  function convert() {
    if (!rates[from.value] || !rates[to.value]) return;

    const val = parseFloat(amount.value);
    if (isNaN(val) || val < 0) {
      resultAmount.textContent = 'Enter a valid amount';
      rateSubtext.textContent = '';
      return;
    }

    const rate = rates[to.value] / rates[from.value];
    const total = val * rate;

    resultAmount.textContent = `${val.toLocaleString()} ${from.value} = ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${to.value}`;
    rateSubtext.textContent = `1 ${from.value} = ${rate.toFixed(4)} ${to.value}`;
  }

  swapBtn.addEventListener('click', () => {
    [from.value, to.value] = [to.value, from.value];
    convert();
  });

  amount.addEventListener('input', convert);
  from.addEventListener('change', convert);
  to.addEventListener('change', convert);
  convertBtn.addEventListener('click', convert);

  fetchRates();
});
