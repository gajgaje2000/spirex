const doctors = [
  { id: 1, name: 'Dr. Sarah Jenkins', dept: 'Cardiology', exp: '12 yrs exp', fee: '$80' },
  { id: 2, name: 'Dr. David Chen', dept: 'Orthopedics', exp: '14 yrs exp', fee: '$70' },
  { id: 3, name: 'Dr. Elena Rostova', dept: 'Pediatrics', exp: '9 yrs exp', fee: '$50' },
  { id: 4, name: 'Dr. Rachel Adams', dept: 'General Medicine', exp: '8 yrs exp', fee: '$40' }
];

const defaultBookings = [
  {
    id: 101,
    name: 'Rahul Sharma',
    phone: '+91 98765 43210',
    doctor: 'Dr. Sarah Jenkins',
    dept: 'Cardiology',
    date: '2026-11-23',
    time: '11:00 AM'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const doctorsList = document.getElementById('doctors-list');
  const doctorSelect = document.getElementById('doctor-select');
  const dateInput = document.getElementById('appointment-date');
  const form = document.getElementById('appointment-form');
  const alertBox = document.getElementById('status-alert');
  const appointmentsList = document.getElementById('appointments-list');
  const countEl = document.getElementById('appointment-count');

  let appointments = JSON.parse(localStorage.getItem('hospital_appointments')) || defaultBookings;

  // Set min date to today and default date
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;

  const defaultDate = new Date(today);
  defaultDate.setDate(today.getDate() + 2);
  dateInput.value = `${defaultDate.getFullYear()}-${String(defaultDate.getMonth() + 1).padStart(2, '0')}-${String(defaultDate.getDate()).padStart(2, '0')}`;

  // Render doctors in list and select dropdown
  function initDoctors() {
    doctorsList.innerHTML = doctors.map(doc => `
      <div class="p-3 border border-slate-200 rounded-xl flex items-center justify-between hover:border-slate-300 transition">
        <div>
          <div class="text-xs font-bold text-slate-800">${doc.name}</div>
          <div class="text-[11px] text-slate-500">${doc.dept} • ${doc.exp}</div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold text-slate-700">${doc.fee}</span>
          <button type="button" onclick="chooseDoctor(${doc.id})" class="px-2.5 py-1 text-[11px] font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition">
            Book
          </button>
        </div>
      </div>
    `).join('');

    doctorSelect.innerHTML = doctors.map(doc => `
      <option value="${doc.id}">${doc.name} (${doc.dept} - ${doc.fee})</option>
    `).join('');
  }

  // Render booked appointments
  function renderAppointments() {
    countEl.textContent = `${appointments.length} booked`;

    if (appointments.length === 0) {
      appointmentsList.innerHTML = `
        <p class="text-center py-6 text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl">
          No appointments scheduled
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

  // Form submit handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('patient-name').value.trim();
    const phone = document.getElementById('patient-phone').value.trim();
    const docId = parseInt(doctorSelect.value);
    const date = dateInput.value;
    const time = document.getElementById('time-slot').value;

    const selectedDoc = doctors.find(d => d.id === docId);
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

  // Global actions
  window.chooseDoctor = function(id) {
    doctorSelect.value = id;
    document.getElementById('patient-name').focus();
  };

  window.cancelBooking = function(id) {
    appointments = appointments.filter(a => a.id !== id);
    localStorage.setItem('hospital_appointments', JSON.stringify(appointments));
    renderAppointments();
  };

  initDoctors();
  renderAppointments();
});
