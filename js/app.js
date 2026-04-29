/* ── העתקה ללוח (נתיב ראשי) ── */
const copyBtn  = document.getElementById('copyBtn');
const pathCode = document.getElementById('installPath');

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(pathCode.textContent).then(() => {
    copyBtn.classList.add('copied');
    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> הועתק!';
    setTimeout(() => {
      copyBtn.classList.remove('copied');
      copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> העתק נתיב';
    }, 2000);
  });
});

/* ── העתקת נתיבים בכרטיסיות ── */
document.querySelectorAll('.copy-path-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const path = btn.getAttribute('data-path');
    navigator.clipboard.writeText(path).then(() => {
      btn.classList.add('copied');
      btn.innerHTML = '<i class="fa-solid fa-check"></i> הועתק!';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = '<i class="fa-regular fa-copy"></i> העתק נתיב';
      }, 2000);
    });
  });
});

/* ── צ׳קליסט + התקדמות ── */
const checks = document.querySelectorAll('.card-check');
const fill   = document.getElementById('progressFill');
const pct    = document.getElementById('progressPct');
const total  = checks.length;

function updateProgress() {
  const done = document.querySelectorAll('.card-check.checked').length;
  const percent = Math.round((done / total) * 100);
  fill.style.width = percent + '%';
  pct.textContent  = percent + ' %';
}

checks.forEach(box => {
  function toggle() {
    box.classList.toggle('checked');
    box.setAttribute('aria-checked', box.classList.contains('checked'));
    box.closest('.card').classList.toggle('completed', box.classList.contains('checked'));
    updateProgress();
  }
  box.addEventListener('click', toggle);
  box.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });
});


/* ── Back to Top ── */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
