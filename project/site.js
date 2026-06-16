// FAQ accordion (works on any page that has .faq-item)
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  if (!q || !a) return;
  q.addEventListener('click', () => {
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => {
      o.classList.remove('open');
      o.querySelector('.faq-a').style.maxHeight = 0;
    });
    if (!open){
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// Smooth scroll for same-page anchors only
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1){
      const el = document.querySelector(id);
      if (el){ e.preventDefault(); window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 60, behavior:'smooth'}); }
    }
  });
});
