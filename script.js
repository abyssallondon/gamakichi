document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    // close nav when clicking a link
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      // simple confirmation — replace with real submit later
      alert('Спасибо! Ваше сообщение получено.');
      form.reset();
    });
  }
});

// Optional: make team avatar links open in a new tab (already set via target)
document.addEventListener('click', (e) => {
  // close nav when clicking outside on small screens
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  if (nav && nav.classList.contains('open')) {
    if (!e.target.closest('.nav') && !e.target.closest('.nav-toggle')) {
      nav.classList.remove('open');
    }
  }
});
