(function () {
  'use strict';

  const menuItems = [
    {
      id: 1,
      title: 'Paneer Tikka',
      category: 'starters',
      price: '₹260',
      diet: 'veg',
      badge: 'Popular',
      description: 'Grilled cottage cheese cubes marinated in yogurt, ginger, garlic, and Indian spices.'
    },
    {
      id: 2,
      title: 'Crispy Veg Manchurian',
      category: 'starters',
      price: '₹220',
      diet: 'veg',
      badge: 'Popular',
      description: 'Fried mixed-vegetable balls tossed in spicy garlic soy sauce with spring onions.'
    },
    {
      id: 3,
      title: 'Tandoori Chicken (Half)',
      category: 'starters',
      price: '₹340',
      diet: 'non-veg',
      badge: 'Special',
      description: 'Classic roasted chicken marinated in traditional spices and served with mint chutney.'
    },
    {
      id: 4,
      title: 'Fresh Garden Salad',
      category: 'starters',
      price: '₹180',
      diet: 'veg',
      badge: 'Fresh',
      description: 'Crisp cucumber, tomatoes, lettuce, olives, and toasted seeds with light lemon dressing.'
    },
    {
      id: 5,
      title: 'Margherita Pizza',
      category: 'mains',
      price: '₹310',
      diet: 'veg',
      badge: 'Popular',
      description: 'Thin crust baked pizza topped with fresh tomato sauce, mozzarella cheese, and basil.'
    },
    {
      id: 6,
      title: 'Paneer Butter Masala',
      category: 'mains',
      price: '₹290',
      diet: 'veg',
      badge: 'Bestseller',
      description: 'Soft paneer cubes cooked in rich creamy tomato and butter gravy, served hot.'
    },
    {
      id: 7,
      title: 'Dal Tadka & Jeera Rice',
      category: 'mains',
      price: '₹240',
      diet: 'veg',
      badge: 'Combo',
      description: 'Yellow lentils tempered with cumin, garlic, and ghee, served alongside steamed jeera rice.'
    },
    {
      id: 8,
      title: 'Butter Chicken',
      category: 'mains',
      price: '₹360',
      diet: 'non-veg',
      badge: 'Bestseller',
      description: 'Tender boneless chicken simmered in spiced butter-tomato gravy with fresh cream.'
    },
    {
      id: 9,
      title: 'Gulab Jamun (2 Pcs)',
      category: 'desserts',
      price: '₹110',
      diet: 'veg',
      badge: 'Classic',
      description: 'Warm soft milk dumplings soaked in lightly scented cardamom sugar syrup.'
    },
    {
      id: 10,
      title: 'Chocolate Brownie with Ice Cream',
      category: 'desserts',
      price: '₹180',
      diet: 'veg',
      badge: 'Popular',
      description: 'Warm baked chocolate brownie served with a scoop of vanilla ice cream and chocolate sauce.'
    },
    {
      id: 11,
      title: 'Fresh Lime Soda',
      category: 'beverages',
      price: '₹90',
      diet: 'veg',
      badge: 'Fresh',
      description: 'Chilled sparkling lemon drink prepared sweet, salted, or mixed with mint leaves.'
    },
    {
      id: 12,
      title: 'Mango Lassi',
      category: 'beverages',
      price: '₹130',
      diet: 'veg',
      badge: 'Special',
      description: 'Thick chilled yogurt drink blended with sweet ripe mango pulp and crushed cardamom.'
    }
  ];

  const galleryItems = [
    {
      title: 'Main Dining Hall',
      tag: 'Dining',
      desc: 'Spacious indoor seating arranged for families and group dinners.',
      image: 'assets/images/ambiance.jpg'
    },
    {
      title: 'Fresh Baked Pizza',
      tag: 'Kitchen',
      desc: 'Hot thin-crust pizzas prepared fresh to order.',
      image: 'assets/images/pizza.jpg'
    },
    {
      title: 'Garden Fresh Salad',
      tag: 'Starters',
      desc: 'Seasonal vegetables and greens served chilled.',
      image: 'assets/images/salad.jpg'
    },
    {
      title: 'Family Table Setup',
      tag: 'Seating',
      desc: 'Comfortable tables reserved for evening gatherings and birthdays.',
      image: 'assets/images/private_dining.jpg'
    },
    {
      title: 'Cold Drinks & Coolers',
      tag: 'Drinks',
      desc: 'Refreshing fresh lime coolers and house beverages.',
      image: 'assets/images/mocktail.jpg'
    },
    {
      title: 'Desserts & Sweets',
      tag: 'Desserts',
      desc: 'Warm brownies, ice cream, and traditional Indian sweets.',
      image: 'assets/images/dessert.jpg'
    }
  ];

  const menuGrid = document.getElementById('menu-grid');
  const menuTabs = document.querySelectorAll('.menu-tab');
  let activeMenuCategory = 'all';

  function renderMenu() {
    if (!menuGrid) return;

    const filtered = activeMenuCategory === 'all'
      ? menuItems
      : menuItems.filter(item => item.category === activeMenuCategory);

    menuGrid.innerHTML = filtered.map(item => `
      <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between gap-3 group">
        <div class="space-y-2">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-full flex items-center justify-center p-0.5 border ${
                item.diet === 'veg' ? 'border-emerald-600' : 'border-rose-600'
              }">
                <span class="w-1.5 h-1.5 rounded-full ${item.diet === 'veg' ? 'bg-emerald-600' : 'bg-rose-600'}"></span>
              </span>
              <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">${item.category}</span>
            </div>

            ${item.badge ? `
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                ${item.badge}
              </span>
            ` : ''}
          </div>

          <div>
            <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug">
              ${item.title}
            </h3>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
              ${item.description}
            </p>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span class="text-sm font-extrabold text-slate-900">${item.price}</span>
          <a href="#booking" class="text-[11px] font-semibold text-blue-600 hover:text-blue-800 transition">
            Book Table &rarr;
          </a>
        </div>
      </div>
    `).join('');
  }

  menuTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      activeMenuCategory = btn.getAttribute('data-cat');
      menuTabs.forEach(b => {
        if (b === btn) {
          b.className = 'menu-tab px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white transition whitespace-nowrap shadow-sm';
        } else {
          b.className = 'menu-tab px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 transition whitespace-nowrap';
        }
      });
      renderMenu();
    });
  });

  const galleryGrid = document.getElementById('gallery-grid');
  function renderGallery() {
    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryItems.map(item => `
      <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-xs group bg-white flex flex-col justify-between">
        <div class="h-48 overflow-hidden relative">
          <img src="${item.image}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <span class="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-950/70 text-white backdrop-blur-xs">
            ${item.tag}
          </span>
        </div>
        <div class="p-4 flex flex-col justify-between gap-2 bg-white flex-1">
          <div>
            <h4 class="text-sm font-bold text-slate-900 leading-tight">${item.title}</h4>
            <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">${item.desc}</p>
          </div>
          <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span class="font-medium text-slate-400">City Restaurant</span>
            <a href="#booking" class="text-blue-600 font-bold hover:underline">Book Table &rarr;</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  const reservationForm = document.getElementById('reservation-form');
  const bookGuests = document.getElementById('book-guests');
  const bookDate = document.getElementById('book-date');
  const bookSeating = document.getElementById('book-seating');
  const bookName = document.getElementById('book-name');
  const bookPhone = document.getElementById('book-phone');
  const selectedTimeSlot = document.getElementById('selected-time-slot');
  const timeSlotButtons = document.querySelectorAll('.slot-btn');

  const summaryGuests = document.getElementById('summary-guests');
  const summaryDate = document.getElementById('summary-date');
  const summaryTime = document.getElementById('summary-time');
  const summarySeating = document.getElementById('summary-seating');

  const bookingDialog = document.getElementById('booking-dialog');
  const ticketRef = document.getElementById('ticket-ref');
  const ticketName = document.getElementById('ticket-name');
  const ticketParty = document.getElementById('ticket-party');
  const ticketDateTime = document.getElementById('ticket-datetime');

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayString = `${yyyy}-${mm}-${dd}`;

  if (bookDate) {
    bookDate.value = todayString;
    bookDate.min = todayString;
  }

  function formatDisplayDate(dateStr) {
    if (!dateStr) return 'Today';
    const [y, m, d] = dateStr.split('-');
    const dt = new Date(y, parseInt(m, 10) - 1, d);
    return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function updateSummary() {
    if (summaryGuests && bookGuests) {
      summaryGuests.textContent = bookGuests.value;
    }
    if (summaryDate && bookDate) {
      summaryDate.textContent = formatDisplayDate(bookDate.value);
    }
    if (summaryTime && selectedTimeSlot) {
      summaryTime.textContent = selectedTimeSlot.value;
    }
    if (summarySeating && bookSeating) {
      summarySeating.textContent = bookSeating.value;
    }
  }

  if (bookGuests) bookGuests.addEventListener('change', updateSummary);
  if (bookDate) bookDate.addEventListener('input', updateSummary);
  if (bookSeating) bookSeating.addEventListener('change', updateSummary);

  timeSlotButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const timeVal = btn.getAttribute('data-time');
      if (selectedTimeSlot) selectedTimeSlot.value = timeVal;

      timeSlotButtons.forEach(b => {
        if (b === btn) {
          b.className = 'slot-btn py-2 text-xs font-semibold rounded-lg border border-blue-600 bg-blue-600 text-white transition text-center shadow-xs';
        } else {
          b.className = 'slot-btn py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition text-center';
        }
      });

      updateSummary();
    });
  });

  const STORAGE_KEY = 'city_restaurant_reservations_v1';

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = (bookName?.value || '').trim();
      const phone = (bookPhone?.value || '').trim();
      const guests = bookGuests?.value || '4 Guests';
      const date = bookDate?.value || todayString;
      const time = selectedTimeSlot?.value || '07:30 PM';
      const seating = bookSeating?.value || 'Indoor AC Hall';
      const requests = document.getElementById('book-requests')?.value.trim() || '';

      if (!name || !phone) return;

      const refCode = `CR-${Math.floor(1000 + Math.random() * 9000)}`;

      const reservationRecord = {
        refCode,
        name,
        phone,
        guests,
        date,
        time,
        seating,
        requests,
        bookedAt: new Date().toISOString()
      };

      try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        stored.unshift(reservationRecord);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      } catch (err) {
        console.error('Error saving reservation:', err);
      }

      if (ticketRef) ticketRef.textContent = refCode;
      if (ticketName) ticketName.textContent = name;
      if (ticketParty) ticketParty.textContent = `${guests} • ${seating}`;
      if (ticketDateTime) ticketDateTime.textContent = `${formatDisplayDate(date)} • ${time}`;

      if (bookingDialog) {
        bookingDialog.showModal();
      }

      reservationForm.reset();
      if (bookDate) bookDate.value = todayString;
      updateSummary();
    });
  }

  if (bookingDialog && !('closedBy' in HTMLDialogElement.prototype)) {
    const isClickOutside = (e, dlg) => {
      const r = dlg.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    let pressedOutside = false;
    bookingDialog.addEventListener('pointerdown', (e) => {
      pressedOutside = isClickOutside(e, bookingDialog);
    });
    bookingDialog.addEventListener('pointerup', (e) => {
      if (pressedOutside && isClickOutside(e, bookingDialog)) {
        bookingDialog.close();
      }
    });
  }

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
      });
    });
  }

  renderMenu();
  renderGallery();
  updateSummary();
})();
