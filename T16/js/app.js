// The Olive Bistro - Interactive Logic

(function () {
  'use strict';

  // --- Menu Selections Dataset ---
  const menuItems = [
    {
      id: 1,
      title: 'Truffle Edamame Hummus & Warm Pita',
      category: 'starters',
      price: '₹380',
      diet: 'veg',
      badge: 'Bestseller',
      description: 'Silky whipped chickpeas and edamame, infused with black truffle oil and toasted sesame, served with house-baked wood-fired pita.'
    },
    {
      id: 2,
      title: 'Crispy Zucchini Blossoms with Herbed Ricotta',
      category: 'starters',
      price: '₹420',
      diet: 'veg',
      badge: 'Seasonal',
      description: 'Delicate organic blossoms stuffed with whipped lemon ricotta, mint, and sea salt, flash-fried in light sparkling batter.'
    },
    {
      id: 3,
      title: 'Chargrilled Harissa Chicken Skewers',
      category: 'starters',
      price: '₹490',
      diet: 'non-veg',
      badge: 'Popular',
      description: 'Tender chicken marinated in roasted red pepper harissa, cumin, and garlic, served over garlic labneh with pickled onions.'
    },
    {
      id: 4,
      title: 'Smoked Burrata & Fig Salad',
      category: 'starters',
      price: '₹460',
      diet: 'veg',
      badge: "Chef's Special",
      description: 'Creamy artisanal burrata paired with fresh sweet figs, baby arugula, crushed walnuts, and a 12-year aged balsamic drizzle.'
    },
    {
      id: 5,
      title: 'Wild Mushroom & Truffle Flatbread',
      category: 'mains',
      price: '₹560',
      diet: 'veg',
      badge: 'Wood-Fired',
      description: 'Slow-fermented sourdough crust topped with roasted portobello, porcini cream, fresh thyme, and smoked scamorza cheese.'
    },
    {
      id: 6,
      title: 'Wood-Fired Roasted Bell Pepper & Pesto Pizza',
      category: 'mains',
      price: '₹520',
      diet: 'veg',
      badge: 'Wood-Fired',
      description: 'San Marzano tomato base, char-grilled bell peppers, pine nut basil pesto, buffalo mozzarella, and fresh basil leaves.'
    },
    {
      id: 7,
      title: 'Slow-Cooked Moroccan Lamb Tagine',
      category: 'mains',
      price: '₹680',
      diet: 'non-veg',
      badge: 'Signature',
      description: 'Braised tender lamb shoulder in aromatic Ras el Hanout spices, apricots, and toasted almonds, served with fluffy saffron couscous.'
    },
    {
      id: 8,
      title: 'Saffron Risotto with Charred Asparagus',
      category: 'mains',
      price: '₹540',
      diet: 'veg',
      badge: 'Signature',
      description: 'Carnaroli rice slow-simmered with Kashmiri saffron broth, aged parmesan, lemon zest, and grilled tender asparagus spears.'
    },
    {
      id: 9,
      title: 'Saffron & Pistachio Panna Cotta',
      category: 'desserts',
      price: '₹340',
      diet: 'veg',
      badge: 'Bestseller',
      description: 'Delicate chilled cream flavored with organic saffron and green cardamom, topped with wild rose reduction and slivered pistachios.'
    },
    {
      id: 10,
      title: 'Dark Chocolate Olive Oil Ganache Cake',
      category: 'desserts',
      price: '₹380',
      diet: 'veg',
      badge: "Chef's Pick",
      description: 'Decadent 70% dark chocolate sponge finished with cold-pressed extra virgin olive oil, Maldon sea salt, and espresso cream.'
    },
    {
      id: 11,
      title: 'Rosemary Grapefruit Sparkler',
      category: 'beverages',
      price: '₹260',
      diet: 'veg',
      badge: 'Refreshing',
      description: 'Fresh pink grapefruit juice, torched garden rosemary syrup, tonic water, and crushed pink peppercorns.'
    },
    {
      id: 12,
      title: 'Smoked Orange & Basil Mojito',
      category: 'beverages',
      price: '₹280',
      diet: 'veg',
      badge: 'Handcrafted',
      description: 'Charred orange wheels muddled with sweet Italian basil, fresh lime juice, sparkling soda, and smoked cedar essence.'
    }
  ];

  // --- Gallery Features Dataset with Local Images ---
  const galleryItems = [
    {
      title: 'Open-Air Rooftop Ambiance',
      tag: 'Ambiance',
      desc: 'Twilight city views, warm ambient lighting, and acoustic sessions.',
      image: 'assets/images/ambiance.jpg'
    },
    {
      title: 'Wood-Fired Hearth Craft',
      tag: 'Kitchen',
      desc: 'Hand-stretched sourdough pizzas baked at 450°C in our brick oven.',
      image: 'assets/images/pizza.jpg'
    },
    {
      title: 'Signature Burrata & Fig Salad',
      tag: 'Culinary',
      desc: 'Creamy burrata, fresh figs, arugula, and aged balsamic glaze.',
      image: 'assets/images/salad.jpg'
    },
    {
      title: 'Private Celebration Alcove',
      tag: 'Events',
      desc: 'Intimate space for birthday dinners and family milestone gatherings.',
      image: 'assets/images/private_dining.jpg'
    },
    {
      title: 'Botanical Craft Mocktails',
      tag: 'Bar',
      desc: 'Fresh herbal syrups, cold-pressed citrus, and smoked aromatics.',
      image: 'assets/images/mocktail.jpg'
    },
    {
      title: 'Artisanal Dessert Platter',
      tag: 'Pastry',
      desc: 'Saffron panna cotta, dark chocolate ganache, and seasonal bakes.',
      image: 'assets/images/dessert.jpg'
    }
  ];

  // --- Render Menu Items ---
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
            Reserve to Taste &rarr;
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

  // --- Render Gallery Items with Real Local Images ---
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
            <span class="font-medium text-slate-400">The Olive Bistro • Surat</span>
            <a href="#booking" class="text-blue-600 font-bold hover:underline">Book Visit &rarr;</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // --- Table Booking Logic ---
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

  // Set default reservation date to today, min date to today
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayString = `${yyyy}-${mm}-${dd}`;

  if (bookDate) {
    bookDate.value = todayString;
    bookDate.min = todayString;
  }

  // Format date for summary
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
      summarySeating.textContent = bookSeating.value.split('(')[0].trim();
    }
  }

  if (bookGuests) bookGuests.addEventListener('change', updateSummary);
  if (bookDate) bookDate.addEventListener('input', updateSummary);
  if (bookSeating) bookSeating.addEventListener('change', updateSummary);

  // Time slot selection
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

  // Handle Reservation Form Submission
  const STORAGE_KEY = 'olive_bistro_reservations_v1';

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = (bookName?.value || '').trim();
      const phone = (bookPhone?.value || '').trim();
      const guests = bookGuests?.value || '4 Guests';
      const date = bookDate?.value || todayString;
      const time = selectedTimeSlot?.value || '07:30 PM';
      const seating = bookSeating?.value || 'Rooftop Terrace';
      const requests = document.getElementById('book-requests')?.value.trim() || '';

      if (!name || !phone) return;

      // Generate random booking code
      const refCode = `OB-${Math.floor(1000 + Math.random() * 9000)}`;

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

      // Save to localStorage
      try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        stored.unshift(reservationRecord);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      } catch (err) {
        console.error('Error saving reservation:', err);
      }

      // Populate confirmation ticket dialog
      if (ticketRef) ticketRef.textContent = refCode;
      if (ticketName) ticketName.textContent = name;
      if (ticketParty) ticketParty.textContent = `${guests} • ${seating}`;
      if (ticketDateTime) ticketDateTime.textContent = `${formatDisplayDate(date)} • ${time}`;

      // Open native modal
      if (bookingDialog) {
        bookingDialog.showModal();
      }

      // Reset form
      reservationForm.reset();
      if (bookDate) bookDate.value = todayString;
      updateSummary();
    });
  }

  // Progressive light-dismiss for dialog
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

  // --- Mobile Navigation Toggle ---
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

  // --- Initial Render ---
  renderMenu();
  renderGallery();
  updateSummary();

})();
