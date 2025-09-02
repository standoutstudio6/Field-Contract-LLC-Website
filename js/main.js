// Mobile menu
const btn = document.getElementById('mobileMenuBtn');
const menu = document.getElementById('mobileMenu');
if (btn && menu) btn.addEventListener('click', () => menu.classList.toggle('hidden'));

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Simple lightbox for Recent Projects
document.addEventListener('click', (e) => {
  const fig = e.target.closest('[data-lightbox="projects"]');
  if (!fig) return;
  const src = fig.querySelector('img')?.getAttribute('src');
  if (!src) return;
  const lb = document.querySelector('#lightbox');
  lb.querySelector('img').src = src;
  lb.classList.add('open');
});
document.querySelector('#lightbox')?.addEventListener('click', (e) => {
  if (e.target.id === 'lightbox' || e.target.dataset.close === 'lightbox' || e.target.tagName === 'BUTTON') {
    e.currentTarget.classList.remove('open');
  }
});
