const header = document.querySelector('.header');

header.classList.add('is-init');

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

requestAnimationFrame(() => {
  header.classList.remove('is-init');
});

window.addEventListener('scroll', updateHeader, { passive: true });
