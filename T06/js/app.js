document.addEventListener('DOMContentLoaded', () => {
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const ampmEl = document.getElementById('ampm');

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
    ampmEl.textContent = ampm;
  }

  updateClock();
  setInterval(updateClock, 1000);
});
