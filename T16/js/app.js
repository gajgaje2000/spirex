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

  // --- Gallery Features Dataset ---
  const galleryItems = [
    {
      title: 'Open-Air Rooftop Terrace',
      tag: 'Ambiance',
      desc: 'Ambient evening dining with twilight city views and warm fairy lighting.',
      color: 'from-amber-700 to-stone-800'
    },
    {
      title: 'Wood-Fired Hearth Craft',
      tag: 'Kitchen',
      desc: 'Hand-stretched sourdough pizzas baked at 450°C in our custom brick oven.',
      color: 'from-orange-800 to-stone-900'
    },
    {
      title: 'Signature Burrata & Fig Plate',
      tag: 'Culinary',
      desc: 'Creamy burrata, fresh organic figs, and 12-year balsamic glaze.',
      color: 'from-emerald-800 to-stone-900'
    },
    {
      title: 'Private Celebration Alcove',
      tag: 'Events',
      desc: 'Intimate space for birthday dinners and family gatherings.',
      color: 'from-stone-700 to-stone-900'
    },
    {
      title: 'Botanical Craft Mocktails',
      tag: 'Bar',
      desc: 'Fresh herbal syrups, cold-pressed citrus, and smoked aromatics.',
      color: 'from-rose-800 to-stone-900'
    },
    {
      title: 'Sunday Brunch Tasting Table',
      tag: 'Experience',
      desc: 'Multi-course weekend spread with mezze boards and fresh bakes.',
      color: 'from-amber-800 to-stone-900'
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
      <div class="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between gap-3 group">
        <div class="space-y-2">
          
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-full flex items-center justify-center p-0.5 border ${
                item.diet === 'veg' ? 'border-emerald-600' : 'border-rose-600'
              }">
                <span class="w-1.5 h-1.5 rounded-full ${item.diet === 'veg' ? 'bg-emerald-600' : 'bg-rose-600'}"></span>
              </span>
              <span class="text-[10px] uppercase font-bold text-stone-400 tracking-wider">${item.category}</span>
            </div>

            ${item.badge ? `
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                ${item.badge}
              </span>
            ` : ''}
          </div>

          <div>
            <h3 class="text-sm font-bold text-stone-900 group-hover:text-amber-700 transition leading-snug">
              ${item.title}
            </h3>
            <p class="text-xs text-stone-500 mt-1 leading-relaxed line-clamp-2">
              ${item.description}
            </p>
          </div>

        </div>

        <div class="pt-3 border-t border-stone-100 flex items-center justify-between">
          <span class="text-sm font-extrabold text-stone-900">${item.price}</span>
          <a href="#booking" class="text-[11px] font-semibold text-amber-700 hover:text-amber-900 transition">
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
          b.className = 'menu-tab px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-900 text-white transition whitespace-nowrap shadow-xs';
        } else {
          b.className = 'menu-tab px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 transition whitespace-nowrap';
        }
      });
      renderMenu();
    });
  });

  // --- Render Gallery Items ---
  const galleryGrid = document.getElementById('gallery-grid');
  function renderGallery() {
    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryItems.map(item => `
      <div class="rounded-2xl border border-stone-200 overflow-hidden shadow-xs group bg-white flex flex-col justify-between">
        <div class="h-44 bg-gradient-to-br ${item.color} p-4 flex flex-col justify-between text-white relative">
          <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md self-start">
            ${item.tag}
          </span>
          <div class="space-y-0.5">
            <h4 class="text-sm font-bold text-white leading-tight drop-shadow-sm">${item.title}</h4>
            <p class="text-[11px] text-stone-200 line-clamp-1 drop-shadow-xs">${item.desc}</p>
          </div>
        </div>
        <div class="p-4 flex items-center justify-between text-xs text-stone-600 bg-white">
          <span class="font-medium text-[11px] text-stone-500">The Olive Bistro • Surat</span>
          <span class="text-amber-700 font-bold text-[11px]">View Experience &rarr;</span>
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
          b.className = 'slot-btn py-2 text-xs font-semibold rounded-lg border border-amber-600 bg-amber-600 text-white transition text-center shadow-xs';
        } else {
          b.className = 'slot-btn py-2 text-xs font-semibold rounded-lg border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 transition text-center';
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
