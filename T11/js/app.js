document.addEventListener('DOMContentLoaded', () => {
  const productListEl = document.getElementById('product-list');
  const productCountEl = document.getElementById('product-count');
  const cartItemsEl = document.getElementById('cart-items');
  const cartBadgeEl = document.getElementById('cart-badge');
  const clearCartBtn = document.getElementById('clear-cart-btn');
  const emptyCartMsg = document.getElementById('empty-cart-msg');
  const orderSummaryEl = document.getElementById('order-summary');
  const subtotalValEl = document.getElementById('subtotal-val');
  const taxValEl = document.getElementById('tax-val');
  const totalValEl = document.getElementById('total-val');
  const checkoutBtn = document.getElementById('checkout-btn');
  const customForm = document.getElementById('custom-product-form');
  const customName = document.getElementById('custom-name');
  const customPrice = document.getElementById('custom-price');
  const toastEl = document.getElementById('toast');

  let products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      desc: 'Active noise cancellation',
      price: 79.99,
      badge: 'Audio',
      icon: `<svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"></path></svg>`
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      desc: 'Tactile switches with RGB',
      price: 119.00,
      badge: 'Gear',
      icon: `<svg class="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="6" cy="10" r="1"></circle><circle cx="10" cy="10" r="1"></circle><circle cx="14" cy="10" r="1"></circle><circle cx="18" cy="10" r="1"></circle><circle cx="6" cy="14" r="1"></circle><circle cx="18" cy="14" r="1"></circle><path stroke-linecap="round" d="M10 14h4"></path></svg>`
    },
    {
      id: 3,
      name: 'Ergonomic Mouse',
      desc: 'Wireless precision sensor',
      price: 49.50,
      badge: 'Gear',
      icon: `<svg class="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><rect x="6" y="3" width="12" height="18" rx="6"></rect><path stroke-linecap="round" d="M12 7v4"></path></svg>`
    },
    {
      id: 4,
      name: 'USB-C Multi-Hub',
      desc: '7-in-1 4K HDMI & 100W PD',
      price: 29.99,
      badge: 'Accessory',
      icon: `<svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><rect x="4" y="8" width="16" height="8" rx="2"></rect><path stroke-linecap="round" d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M9 12h.01M12 12h.01M15 12h.01"></path></svg>`
    }
  ];

  let cart = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, qty: 1 },
    { id: 3, name: 'Ergonomic Mouse', price: 49.50, qty: 2 }
  ];

  let toastTimeout = null;
  function showToast(msg) {
    if (toastTimeout) clearTimeout(toastTimeout);
    toastEl.textContent = msg;
    toastEl.classList.remove('opacity-0', 'pointer-events-none');
    toastTimeout = setTimeout(() => {
      toastEl.classList.add('opacity-0', 'pointer-events-none');
    }, 2200);
  }

  function renderProducts() {
    productCountEl.textContent = `${products.length} items`;
    productListEl.innerHTML = '';

    products.forEach((prod) => {
      const card = document.createElement('div');
      card.className = 'bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex flex-col justify-between hover:border-slate-300 transition';
      card.innerHTML = `
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
            ${prod.icon}
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5">
              <h3 class="font-bold text-xs text-slate-900 truncate">${prod.name}</h3>
            </div>
            <p class="text-[11px] text-slate-500 mt-0.5 line-clamp-1">${prod.desc}</p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-200/60">
          <span class="text-xs font-bold text-slate-900">$${prod.price.toFixed(2)}</span>
          <button type="button" class="add-to-cart-btn px-2.5 py-1 bg-white hover:bg-blue-600 hover:text-white border border-slate-200 hover:border-blue-600 text-slate-700 text-xs font-semibold rounded-lg shadow-sm active:scale-95 transition">
            + Add
          </button>
        </div>
      `;

      card.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        addToCart(prod);
      });

      productListEl.appendChild(card);
    });
  }

  function renderCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadgeEl.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;

    if (cart.length === 0) {
      cartItemsEl.innerHTML = '';
      emptyCartMsg.classList.remove('hidden');
      orderSummaryEl.classList.add('opacity-50', 'pointer-events-none');
      subtotalValEl.textContent = '$0.00';
      taxValEl.textContent = '$0.00';
      totalValEl.textContent = '$0.00';
      return;
    }

    emptyCartMsg.classList.add('hidden');
    orderSummaryEl.classList.remove('opacity-50', 'pointer-events-none');

    cartItemsEl.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item) => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;

      const itemEl = document.createElement('div');
      itemEl.className = 'py-3 flex items-center justify-between gap-3 text-xs';
      itemEl.innerHTML = `
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-slate-800 truncate">${item.name}</h4>
          <p class="text-[11px] text-slate-400 mt-0.5">$${item.price.toFixed(2)} each</p>
        </div>
        <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 rounded-lg p-1">
          <button type="button" class="minus-btn w-5 h-5 flex items-center justify-center text-slate-600 hover:bg-white rounded font-bold transition">-</button>
          <span class="px-1.5 font-bold text-slate-800 min-w-[16px] text-center">${item.qty}</span>
          <button type="button" class="plus-btn w-5 h-5 flex items-center justify-center text-slate-600 hover:bg-white rounded font-bold transition">+</button>
        </div>
        <div class="text-right">
          <div class="font-bold text-slate-900 text-xs">$${itemTotal.toFixed(2)}</div>
          <button type="button" class="del-btn text-[10px] text-slate-400 hover:text-red-500 transition mt-0.5">Remove</button>
        </div>
      `;

      itemEl.querySelector('.minus-btn').addEventListener('click', () => {
        updateQty(item.id, -1);
      });

      itemEl.querySelector('.plus-btn').addEventListener('click', () => {
        updateQty(item.id, 1);
      });

      itemEl.querySelector('.del-btn').addEventListener('click', () => {
        removeFromCart(item.id);
      });

      cartItemsEl.appendChild(itemEl);
    });

    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    subtotalValEl.textContent = `$${subtotal.toFixed(2)}`;
    taxValEl.textContent = `$${tax.toFixed(2)}`;
    totalValEl.textContent = `$${total.toFixed(2)}`;
  }

  function addToCart(product) {
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1
      });
    }
    renderCart();
    showToast(`Added "${product.name}" to cart`);
  }

  function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
    renderCart();
  }

  function removeFromCart(id) {
    const item = cart.find(i => i.id === id);
    cart = cart.filter(i => i.id !== id);
    renderCart();
    if (item) showToast(`Removed "${item.name}"`);
  }

  clearCartBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    cart = [];
    renderCart();
    showToast('Cart cleared');
  });

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    const total = totalValEl.textContent;
    showToast(`Order confirmed! Total: ${total}`);
    cart = [];
    renderCart();
  });

  customForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = customName.value.trim();
    const price = parseFloat(customPrice.value);

    if (name && !isNaN(price) && price > 0) {
      const newProd = {
        id: Date.now(),
        name,
        desc: 'Custom product item',
        price,
        badge: 'Custom',
        icon: `<svg class="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>`
      };
      products.push(newProd);
      renderProducts();
      addToCart(newProd);
      customName.value = '';
      customPrice.value = '';
      showToast(`Added custom product "${name}"`);
    }
  });

  renderProducts();
  renderCart();
});
