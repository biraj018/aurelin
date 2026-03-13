/* =============================================
   AURÉLINE — Main JavaScript
   ============================================= */

/* ---- NAV: Hamburger ---- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
}

/* ---- NAV: Scroll shadow ---- */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 20px rgba(42,33,24,0.08)'
      : 'none';
  }
});

/* ---- NEWSLETTER ---- */
function handleSubscribe(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (!input || !input.value) return;
  showToast('✦ Welcome to the Auréline Circle!');
  input.value = '';
}

// Expose globally for inline onsubmit
window.handleSubscribe = handleSubscribe;

/* ---- BLOG FILTER ---- */
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const cat = this.dataset.cat || 'all';
    const cards = document.querySelectorAll('.post-card[data-cat]');

    cards.forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ---- TOAST ---- */
function showToast(msg, duration = 3000) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ---- PINTEREST SHARE ---- */
document.querySelectorAll('.pin-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const url   = encodeURIComponent(window.location.href);
    const media = encodeURIComponent(btn.dataset.img || '');
    const desc  = encodeURIComponent(btn.dataset.desc || document.title);
    window.open(
      `https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${desc}`,
      '_blank', 'width=750,height=550'
    );
  });
});

/* ---- SMOOTH ANCHOR SCROLL ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const id = this.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ---- CONTACT FORM ---- */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✦ Message sent! We\'ll be in touch soon.');
    contactForm.reset();
  });
}

/* ---- LAZY IMAGES (if real images added later) ---- */
if ('IntersectionObserver' in window) {
  const lazyImgs = document.querySelectorAll('img[data-src]');
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        imgObserver.unobserve(img);
      }
    });
  });
  lazyImgs.forEach(img => imgObserver.observe(img));
}
