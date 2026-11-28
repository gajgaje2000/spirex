(function () {
  'use strict';

  const defaultBooks = [
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programming',
      year: 2008,
      isbn: '978-0132350884',
      status: 'Available',
      borrowedBy: '',
      dueDate: '',
      description: 'A practical handbook of agile software craftsmanship covering naming, functions, comments, formatting, and error handling.'
    },
    {
      id: 2,
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke',
      category: 'Web Development',
      year: 2018,
      isbn: '978-1593279509',
      status: 'Available',
      borrowedBy: '',
      dueDate: '',
      description: 'A modern introduction to JavaScript programming covering language fundamentals, DOM interaction, and asynchronous code.'
    },
    {
      id: 3,
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      category: 'Computer Science',
      year: 2009,
      isbn: '978-0262033848',
      status: 'Borrowed',
      borrowedBy: 'Aarav Patel',
      dueDate: '2026-12-05',
      description: 'Comprehensive textbook covering data structures, sorting, graph algorithms, dynamic programming, and complexity analysis.'
    },
    {
      id: 4,
      title: "You Don't Know JS Yet",
      author: 'Kyle Simpson',
      category: 'Web Development',
      year: 2020,
      isbn: '978-1491904244',
      status: 'Available',
      borrowedBy: '',
      dueDate: '',
      description: 'Deep dive into core JavaScript mechanisms including scope, closures, prototypes, types, and grammar.'
    },
    {
      id: 5,
      title: 'The Pragmatic Programmer',
      author: 'David Thomas & Andrew Hunt',
      category: 'Programming',
      year: 2019,
      isbn: '978-0135957059',
      status: 'Available',
      borrowedBy: '',
      dueDate: '',
      description: 'Timeless tips on software design, debugging, automation, refactoring, and writing maintainable code.'
    },
    {
      id: 6,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'Self-Help',
      year: 2018,
      isbn: '978-0735211292',
      status: 'Borrowed',
      borrowedBy: 'Diya Shah',
      dueDate: '2026-12-08',
      description: 'An easy and proven framework for building good habits, breaking bad ones, and making small daily improvements.'
    },
    {
      id: 7,
      title: 'HTML & CSS: Design and Build Websites',
      author: 'Jon Duckett',
      category: 'Web Development',
      year: 2011,
      isbn: '978-1118008188',
      status: 'Available',
      borrowedBy: '',
      dueDate: '',
      description: 'Visual guide to learning semantic HTML markup, CSS layouts, typography, and color styling from scratch.'
    },
    {
      id: 8,
      title: 'Database System Concepts',
      author: 'Abraham Silberschatz',
      category: 'Computer Science',
      year: 2019,
      isbn: '978-0078022159',
      status: 'Available',
      borrowedBy: '',
      dueDate: '',
      description: 'Foundational guide to relational databases, SQL querying, normalization, transaction management, and indexing.'
    },
    {
      id: 9,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      category: 'Fiction',
      year: 1988,
      isbn: '978-0062315007',
      status: 'Available',
      borrowedBy: '',
      dueDate: '',
      description: 'Classic story following a young shepherd named Santiago on his journey in search of personal purpose.'
    }
  ];

  const STORAGE_KEY = 'city_library_books_v1';

  function loadBooks() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to read library data:', e);
    }
    return defaultBooks.map(book => ({ ...book }));
  }

  function saveBooks(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error('Failed to save library data:', e);
    }
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  let books = loadBooks();

  const statTotal = document.getElementById('stat-total');
  const statAvailable = document.getElementById('stat-available');
  const statBorrowed = document.getElementById('stat-borrowed');
  const resultsCount = document.getElementById('results-count');

  const searchInput = document.getElementById('book-search');
  const categoryFilter = document.getElementById('category-filter');
  const statusFilter = document.getElementById('status-filter');
  const sortSelect = document.getElementById('sort-books');
  const resetBtn = document.getElementById('reset-filters-btn');
  const emptyResetBtn = document.getElementById('empty-reset-btn');

  const booksGrid = document.getElementById('books-grid');
  const emptyState = document.getElementById('empty-state');

  const addBookDialog = document.getElementById('add-book-dialog');
  const openAddBookBtn = document.getElementById('open-add-book-btn');
  const cancelAddBtn = document.getElementById('cancel-add-btn');
  const addBookForm = document.getElementById('add-book-form');

  const borrowDialog = document.getElementById('borrow-dialog');
  const borrowForm = document.getElementById('borrow-form');
  const cancelBorrowBtn = document.getElementById('cancel-borrow-btn');

  const detailsDialog = document.getElementById('details-dialog');

  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg text-xs font-semibold border transition-all duration-300 translate-y-2 opacity-0 ${
      type === 'success' ? 'bg-slate-900 text-white border-slate-800' : 'bg-rose-900 text-white border-rose-800'
    }`;
    toast.textContent = message;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    });

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  function updateStats() {
    const total = books.length;
    const available = books.filter(b => b.status === 'Available').length;
    const borrowed = total - available;

    if (statTotal) statTotal.textContent = total;
    if (statAvailable) statAvailable.textContent = available;
    if (statBorrowed) statBorrowed.textContent = borrowed;
  }

  function getFilteredBooks() {
    const query = (searchInput?.value || '').trim().toLowerCase();
    const cat = categoryFilter?.value || 'All';
    const status = statusFilter?.value || 'All';
    const sortBy = sortSelect?.value || 'default';

    const filtered = books.filter(book => {
      const matchQuery =
        !query ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        (book.isbn && book.isbn.toLowerCase().includes(query));

      const matchCat = cat === 'All' || book.category === cat;
      const matchStatus = status === 'All' || book.status === status;

      return matchQuery && matchCat && matchStatus;
    });

    if (sortBy === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'author') {
      filtered.sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortBy === 'year') {
      filtered.sort((a, b) => Number(b.year) - Number(a.year));
    }

    return filtered;
  }

  function renderBooks() {
    if (!booksGrid) return;

    const list = getFilteredBooks();
    if (resultsCount) resultsCount.textContent = list.length;

    if (list.length === 0) {
      booksGrid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    booksGrid.innerHTML = list.map(book => {
      const isAvailable = book.status === 'Available';
      return `
        <article class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between gap-4">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                ${escapeHtml(book.category)}
              </span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                isAvailable
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }">
                ${isAvailable ? 'Available' : 'Borrowed'}
              </span>
            </div>

            <div>
              <h2 class="text-sm font-bold text-slate-900 leading-snug">
                <button type="button" data-action="details" data-id="${book.id}" class="text-left hover:text-blue-600 transition">
                  ${escapeHtml(book.title)}
                </button>
              </h2>
              <p class="text-xs text-slate-500 mt-0.5">${escapeHtml(book.author)} • ${escapeHtml(book.year)}</p>
            </div>

            <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              ${escapeHtml(book.description || 'No description provided.')}
            </p>

            ${!isAvailable && book.borrowedBy ? `
              <p class="text-[11px] text-amber-700 bg-amber-50/70 border border-amber-100 rounded-lg px-2.5 py-1.5">
                Issued to <strong>${escapeHtml(book.borrowedBy)}</strong>${book.dueDate ? ` • Due ${escapeHtml(book.dueDate)}` : ''}
              </p>
            ` : ''}
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <button type="button" data-action="details" data-id="${book.id}" class="px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition">
              Details
            </button>

            <div class="flex items-center gap-1.5">
              ${isAvailable ? `
                <button type="button" data-action="borrow" data-id="${book.id}" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm">
                  Borrow
                </button>
              ` : `
                <button type="button" data-action="return" data-id="${book.id}" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-sm">
                  Return Book
                </button>
              `}
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function openDetails(id) {
    const book = books.find(b => b.id === id);
    if (!book || !detailsDialog) return;

    const isAvailable = book.status === 'Available';

    document.getElementById('detail-category').textContent = book.category;
    document.getElementById('detail-title').textContent = book.title;
    document.getElementById('detail-author').textContent = `By ${book.author}`;
    document.getElementById('detail-year').textContent = book.year;
    document.getElementById('detail-isbn').textContent = book.isbn || 'N/A';
    document.getElementById('detail-desc').textContent = book.description || 'No description provided.';

    const statusEl = document.getElementById('detail-status');
    statusEl.textContent = book.status;
    statusEl.className = isAvailable ? 'font-bold text-emerald-700' : 'font-bold text-amber-700';

    const borrowInfoEl = document.getElementById('detail-borrow-info');
    if (!isAvailable && book.borrowedBy) {
      borrowInfoEl.textContent = `Currently borrowed by ${book.borrowedBy}${book.dueDate ? ` (Due date: ${book.dueDate})` : ''}.`;
      borrowInfoEl.classList.remove('hidden');
    } else {
      borrowInfoEl.classList.add('hidden');
    }

    const actionBtn = document.getElementById('detail-action-btn');
    if (isAvailable) {
      actionBtn.textContent = 'Borrow Book';
      actionBtn.className = 'px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition shadow-sm';
      actionBtn.onclick = () => {
        detailsDialog.close();
        openBorrowModal(book.id);
      };
    } else {
      actionBtn.textContent = 'Return Book';
      actionBtn.className = 'px-4 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition shadow-sm';
      actionBtn.onclick = () => {
        returnBook(book.id);
        detailsDialog.close();
      };
    }

    const deleteBtn = document.getElementById('detail-delete-btn');
    deleteBtn.onclick = () => {
      if (confirm(`Remove "${book.title}" from the library catalog?`)) {
        books = books.filter(b => b.id !== book.id);
        saveBooks(books);
        updateStats();
        renderBooks();
        detailsDialog.close();
        showToast('Book removed from library.');
      }
    };

    detailsDialog.showModal();
  }

  function openBorrowModal(id) {
    const book = books.find(b => b.id === id);
    if (!book || !borrowDialog) return;

    document.getElementById('borrow-book-id').value = book.id;
    document.getElementById('borrow-book-label').textContent = `${book.title} — ${book.author}`;

    const dueInput = document.getElementById('borrow-due-date');
    const today = new Date();
    const minStr = today.toISOString().split('T')[0];
    const twoWeeks = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
    const defaultStr = twoWeeks.toISOString().split('T')[0];

    dueInput.min = minStr;
    dueInput.value = defaultStr;

    borrowDialog.showModal();
  }

  function returnBook(id) {
    const book = books.find(b => b.id === id);
    if (!book) return;

    book.status = 'Available';
    book.borrowedBy = '';
    book.dueDate = '';

    saveBooks(books);
    updateStats();
    renderBooks();
    showToast(`"${book.title}" marked as returned.`);
  }

  if (booksGrid) {
    booksGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;
      const action = btn.getAttribute('data-action');
      const id = Number(btn.getAttribute('data-id'));

      if (action === 'details') openDetails(id);
      else if (action === 'borrow') openBorrowModal(id);
      else if (action === 'return') returnBook(id);
    });
  }

  if (openAddBookBtn && addBookDialog) {
    openAddBookBtn.addEventListener('click', () => {
      addBookDialog.showModal();
    });
  }

  if (cancelAddBtn && addBookDialog) {
    cancelAddBtn.addEventListener('click', () => {
      addBookDialog.close();
    });
  }

  if (addBookForm) {
    addBookForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('new-title').value.trim();
      const author = document.getElementById('new-author').value.trim();
      const category = document.getElementById('new-category').value;
      const year = document.getElementById('new-year').value.trim();
      const isbn = document.getElementById('new-isbn').value.trim();
      const description = document.getElementById('new-desc').value.trim();

      if (!title || !author) return;

      const nextId = books.reduce((max, b) => Math.max(max, b.id), 0) + 1;

      books.unshift({
        id: nextId,
        title,
        author,
        category,
        year: Number(year) || new Date().getFullYear(),
        isbn: isbn || 'N/A',
        status: 'Available',
        borrowedBy: '',
        dueDate: '',
        description: description || `${category} book by ${author}.`
      });

      saveBooks(books);
      updateStats();
      renderBooks();
      addBookForm.reset();
      addBookDialog.close();
      showToast(`Added "${title}" to the catalog.`);
    });
  }

  if (cancelBorrowBtn && borrowDialog) {
    cancelBorrowBtn.addEventListener('click', () => {
      borrowDialog.close();
    });
  }

  if (borrowForm) {
    borrowForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const id = Number(document.getElementById('borrow-book-id').value);
      const borrower = document.getElementById('borrower-name').value.trim();
      const dueDate = document.getElementById('borrow-due-date').value;

      const book = books.find(b => b.id === id);
      if (!book || !borrower) return;

      book.status = 'Borrowed';
      book.borrowedBy = borrower;
      book.dueDate = dueDate;

      saveBooks(books);
      updateStats();
      renderBooks();
      borrowForm.reset();
      borrowDialog.close();
      showToast(`Issued "${book.title}" to ${borrower}.`);
    });
  }

  function resetAllFilters() {
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = 'All';
    if (statusFilter) statusFilter.value = 'All';
    if (sortSelect) sortSelect.value = 'default';
    renderBooks();
  }

  if (searchInput) searchInput.addEventListener('input', renderBooks);
  if (categoryFilter) categoryFilter.addEventListener('change', renderBooks);
  if (statusFilter) statusFilter.addEventListener('change', renderBooks);
  if (sortSelect) sortSelect.addEventListener('change', renderBooks);
  if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);

  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const isClickOutside = (e, dlg) => {
      const r = dlg.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    [addBookDialog, borrowDialog, detailsDialog].forEach(dlg => {
      if (!dlg) return;
      let pressedOutside = false;
      dlg.addEventListener('pointerdown', (e) => {
        pressedOutside = isClickOutside(e, dlg);
      });
      dlg.addEventListener('pointerup', (e) => {
        if (pressedOutside && isClickOutside(e, dlg)) {
          dlg.close();
        }
      });
    });
  }

  updateStats();
  renderBooks();
})();
