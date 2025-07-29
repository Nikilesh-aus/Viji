document.addEventListener('scroll', () => {
  document.querySelectorAll('.card, .blog-post').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
window.addEventListener('load', () => {
  document.querySelectorAll('.card, .blog-post').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });
});