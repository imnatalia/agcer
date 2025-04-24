const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer.observe(el));

document.addEventListener('DOMContentLoaded', function () {
  const scrollDownArrow = document.getElementById('scrollDownArrow');
  if (scrollDownArrow) {
    scrollDownArrow.addEventListener('click', function (event) {
      event.preventDefault();
      const sobreSection = document.getElementById('sobre');
      if (sobreSection) {
        sobreSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
});
