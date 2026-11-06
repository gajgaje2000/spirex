document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('billing-toggle');
  const toggleThumb = document.getElementById('toggle-thumb');
  const priceElements = document.querySelectorAll('.price-val');
  let isAnnual = false;

  if (toggleBtn && toggleThumb) {
    toggleBtn.addEventListener('click', () => {
      isAnnual = !isAnnual;

      toggleBtn.setAttribute('aria-checked', isAnnual);
      toggleBtn.classList.toggle('bg-blue-600', isAnnual);
      toggleBtn.classList.toggle('bg-slate-200', !isAnnual);

      toggleThumb.classList.toggle('translate-x-6', isAnnual);
      toggleThumb.classList.toggle('translate-x-0', !isAnnual);

      priceElements.forEach(el => {
        const targetPrice = isAnnual ? el.dataset.annual : el.dataset.monthly;
        if (targetPrice) {
          el.textContent = `$${targetPrice}`;
        }
      });
    });
  }
});
