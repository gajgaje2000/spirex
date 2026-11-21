document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('expense-form');
  const titleInput = document.getElementById('expense-title');
  const amountInput = document.getElementById('expense-amount');
  const list = document.getElementById('expense-list');
  const totalDisplay = document.getElementById('total-amount');
  const countDisplay = document.getElementById('expense-count');
  const emptyState = document.getElementById('empty-state');

  let expenses = JSON.parse(localStorage.getItem('expenses')) || [
    { id: 1, title: 'Server Hosting', amount: 15.00 },
    { id: 2, title: 'Coffee & Snacks', amount: 4.50 },
    { id: 3, title: 'Domain Renewal', amount: 12.00 }
  ];

  function saveAndRender() {
    localStorage.setItem('expenses', JSON.stringify(expenses));

    const total = expenses.reduce((sum, item) => sum + item.amount, 0);
    totalDisplay.textContent = `$${total.toFixed(2)}`;
    countDisplay.textContent = `${expenses.length} ${expenses.length === 1 ? 'item' : 'items'}`;
    emptyState.classList.toggle('hidden', expenses.length > 0);

    list.innerHTML = '';
    expenses.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'flex items-center justify-between py-2.5 px-1 text-sm';
      li.innerHTML = `
        <span class="font-medium text-slate-800">${item.title}</span>
        <div class="flex items-center gap-3">
          <span class="font-semibold text-slate-900">$${item.amount.toFixed(2)}</span>
          <button type="button" aria-label="Delete" class="text-slate-400 hover:text-red-500 transition-colors p-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      `;

      li.querySelector('button').addEventListener('click', () => {
        expenses = expenses.filter(e => e.id !== item.id);
        saveAndRender();
      });

      list.appendChild(li);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (title && !isNaN(amount) && amount > 0) {
      expenses.unshift({ id: Date.now(), title, amount });
      titleInput.value = '';
      amountInput.value = '';
      saveAndRender();
    }
  });

  saveAndRender();
});
