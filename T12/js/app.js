const doctorsData = [
  { id: 1, name: 'Dr. Sarah Jenkins', dept: 'Cardiology', qualification: 'MD, FACC', exp: '12 yrs exp', fee: '$80', availability: 'Mon, Wed, Fri', badge: 'Available Today' },
  { id: 2, name: 'Dr. David Chen', dept: 'Orthopedics', qualification: 'MS, Ortho', exp: '14 yrs exp', fee: '$70', availability: 'Mon, Tue, Thu', badge: 'Available Today' },
  { id: 3, name: 'Dr. Elena Rostova', dept: 'Pediatrics', qualification: 'MD, FAAP', exp: '9 yrs exp', fee: '$50', availability: 'Mon - Fri', badge: 'Available Tomorrow' },
  { id: 4, name: 'Dr. Rachel Adams', dept: 'General Medicine', qualification: 'MD (Internal Med)', exp: '8 yrs exp', fee: '$40', availability: 'Mon - Sat', badge: 'Available Today' },
  { id: 5, name: 'Dr. Marcus Vance', dept: 'Neurology', qualification: 'MD, PhD', exp: '15 yrs exp', fee: '$90', availability: 'Tue, Thu, Sat', badge: 'Available Tomorrow' },
  { id: 6, name: 'Dr. Anita Patel', dept: 'Dermatology', qualification: 'MD, DNB', exp: '11 yrs exp', fee: '$65', availability: 'Wed - Sun', badge: 'Available Today' }
];

const defaultBookings = [
  {
    id: 101,
    name: 'Rahul Sharma',
    phone: '+91 98765 43210',
    doctor: 'Dr. Sarah Jenkins',
    dept: 'Cardiology',
    date: '2026-11-24',
    time: '11:00 AM'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navbar toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- DOCTORS PAGE LOGIC ---
  const doctorsGrid = document.getElementById('doctors-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (doctorsGrid) {
    let currentFilter = 'All';

    function renderDoctors() {
      const filtered = currentFilter === 'All'
        ? doctorsData
        : doctorsData.filter(d => d.dept.toLowerCase() === currentFilter.toLowerCase());

      doctorsGrid.innerHTML = filtered.map(doc => `
        <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-slate-300 transition flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2 mb-3">
              <div>
                <h3 class="text-sm font-bold text-slate-900">${doc.name}</h3>
                <p class="text-xs text-slate-500">${doc.dept} • ${doc.qualification}</p>
              </div>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex-shrink-0">
                ${doc.badge}
              </span>
            </div>

            <div class="grid grid-cols-2 gap-2 text-xs py-2.5 border-y border-slate-100 text-slate-600 mb-3">
              <div>
                <span class="text-slate-400 block text-[10px]">Experience</span>
                <span class="font-semibold text-slate-800">${doc.exp}</span>
              </div>
              <div>
                <span class="text-slate-400 block text-[10px]">Consultation</span>
                <span class="font-semibold text-slate-800">${doc.fee}</span>
              </div>
              <div class="col-span-2">
                <span class="text-slate-400 block text-[10px]">Schedule</span>
                <span class="font-medium text-slate-700">${doc.availability}</span>
              </div>
            </div>
          </div>

          <a href="appointment.html?doctor=${doc.id}" class="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs transition text-center shadow-sm block">
            Book Appointment
          </a>
        </div>
      `).join('');
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-blue-600', 'text-white');
          b.classList.add('bg-white', 'border', 'border-slate-200', 'text-slate-600', 'hover:bg-slate-100');
        });
        btn.classList.remove('bg-white', 'border', 'border-slate-200', 'text-slate-600', 'hover:bg-slate-100');
        btn.classList.add('bg-blue-600', 'text-white');

        currentFilter = btn.dataset.filter;
        renderDoctors();
      });
    });

    renderDoctors();
  }

  // --- HOME PAGE FEATURED DOCTORS ---
  const featuredGrid = document.getElementById('featured-doctors');
  if (featuredGrid) {
    const featured = doctorsData.slice(0, 3);
    featuredGrid.innerHTML = featured.map(doc => `
      <div class="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col justify-between hover:border-slate-300 transition">
        <div>
          <div class="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 class="text-xs font-bold text-slate-900">${doc.name}</h3>
              <p class="text-[11px] text-slate-500">${doc.dept}</p>
            </div>
            <span class="text-xs font-bold text-blue-600">${doc.fee}</span>
          </div>
          <p class="text-[11px] text-slate-500 mb-3">${doc.exp} • ${doc.availability}</p>
        </div>
        <a href="appointment.html?doctor=${doc.id}" class="w-full py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition text-center block">
          Book &rarr;
        </a>
      </div>
    `).join('');
  }

  // --- APPOINTMENT PAGE LOGIC ---
  const form = document.getElementById('appointment-form');
  const deptSelect = document.getElementById('department-select');
  const docSelect = document.getElementById('doctor-select');
  const dateInput = document.getElementById('appointment-date');
  const alertBox = document.getElementById('status-alert');
  const appointmentsList = document.getElementById('appointments-list');
  const countEl = document.getElementById('appointment-count');

  if (form) {
    let appointments = JSON.parse(localStorage.getItem('hospital_appointments')) || defaultBookings;

    // Minimum date is today
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;

    const defaultDate = new Date(today);
    defaultDate.setDate(today.getDate() + 2);
    dateInput.value = `${defaultDate.getFullYear()}-${String(defaultDate.getMonth() + 1).padStart(2, '0')}-${String(defaultDate.getDate()).padStart(2, '0')}`;

    function updateDoctorOptions(selectedDept, selectedDocId = null) {
      docSelect.innerHTML = '<option value="">Choose a doctor</option>';
      const filtered = selectedDept
        ? doctorsData.filter(d => d.dept.toLowerCase() === selectedDept.toLowerCase())
        : doctorsData;

      filtered.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.id;
        opt.textContent = `${d.name} (${d.dept} - ${d.fee})`;
        if (selectedDocId && d.id === parseInt(selectedDocId)) {
          opt.selected = true;
        }
        docSelect.appendChild(opt);
      });

      if (!selectedDocId && filtered.length > 0) {
        docSelect.selectedIndex = 1;
      }
    }

    deptSelect.addEventListener('change', () => {
      updateDoctorOptions(deptSelect.value);
    });

    function renderAppointments() {
      if (countEl) countEl.textContent = `${appointments.length} booked`;

      if (appointments.length === 0) {
        appointmentsList.innerHTML = `
          <p class="text-center py-6 text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl">
            No appointments scheduled yet.
          </p>
        `;
        return;
      }

      appointmentsList.innerHTML = appointments.map(item => `
        <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
          <div>
            <div class="font-bold text-slate-800">${item.name}</div>
            <div class="text-[11px] text-slate-500 mt-0.5">${item.doctor} • <span class="text-slate-600">${item.dept}</span></div>
            <div class="text-[10px] text-slate-400 mt-1">📅 ${item.date} at ${item.time}</div>
          </div>
          <div class="flex flex-col items-end gap-1.5">
            <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-emerald-100 text-emerald-800">Confirmed</span>
            <button type="button" onclick="cancelBooking(${item.id})" class="text-[11px] text-rose-600 hover:text-rose-700 hover:underline">
              Cancel
            </button>
          </div>
        </div>
      `).join('');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('patient-name').value.trim();
      const phone = document.getElementById('patient-phone').value.trim();
      const docId = parseInt(docSelect.value);
      const date = dateInput.value;
      const time = document.getElementById('time-slot').value;

      const selectedDoc = doctorsData.find(d => d.id === docId);
      if (!selectedDoc || !name || !phone || !date) return;

      const newBooking = {
        id: Date.now(),
        name,
        phone,
        doctor: selectedDoc.name,
        dept: selectedDoc.dept,
        date,
        time
      };

      appointments.unshift(newBooking);
      localStorage.setItem('hospital_appointments', JSON.stringify(appointments));
      renderAppointments();

      alertBox.textContent = `Appointment confirmed with ${selectedDoc.name} on ${date} at ${time}.`;
      alertBox.className = 'p-2.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 block';

      document.getElementById('patient-name').value = '';
      document.getElementById('patient-phone').value = '';

      setTimeout(() => {
        alertBox.classList.add('hidden');
      }, 4000);
    });

    window.cancelBooking = function(id) {
      appointments = appointments.filter(a => a.id !== id);
      localStorage.setItem('hospital_appointments', JSON.stringify(appointments));
      renderAppointments();
    };

    // Check URL parameters for pre-selected doctor or service
    const urlParams = new URLSearchParams(window.location.search);
    const doctorParam = urlParams.get('doctor');
    const serviceParam = urlParams.get('service');

    if (doctorParam) {
      const doc = doctorsData.find(d => d.id === parseInt(doctorParam));
      if (doc) {
        deptSelect.value = doc.dept;
        updateDoctorOptions(doc.dept, doc.id);
      }
    } else if (serviceParam) {
      deptSelect.value = serviceParam;
      updateDoctorOptions(serviceParam);
    } else {
      deptSelect.value = 'Cardiology';
      updateDoctorOptions('Cardiology', 1);
    }

    renderAppointments();
  }
});
