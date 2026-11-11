document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
      toggle.textContent = isOpen ? '×' : '☰';
    });
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      });
    });
  }

  document.querySelectorAll('[data-placeholder-link]').forEach(link => {
    link.addEventListener('click', event => {
      if (link.getAttribute('href') === '#') {
        event.preventDefault();
        alert('Tautan tugas belum diisi. Edit portofolio.html dan masukkan tautan Google Drive atau tautan publik tugas ini.');
      }
    });
  });
});
