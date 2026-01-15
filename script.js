// Wait until DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => { 
  // ================= BUBBLES =================
  const bubbleContainer = document.querySelector('.bubbles');

  for (let i = 0; i < 25; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    const size = Math.random() * 40 + 10; // random size 10-50px
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = Math.random() * 10 + 8 + 's'; // random speed
    bubble.style.animationDelay = Math.random() * 5 + 's';          // random delay

    bubbleContainer.appendChild(bubble);
  }

  // ================= DROPDOWN MENU =================
  const menuIcon = document.querySelector('.menu-icon');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  menuIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
  });

  // Close dropdown if click outside
  document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });

  // ================= SMOOTH SCROLL =================
  document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        dropdownMenu.style.display = 'none'; // close menu after click
      }
    });
  });

  // ================= BACK TO TOP =================
  const backToTop = document.querySelector('footer a.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ================= SCROLL PROGRESS BAR =================
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + '%';
    });
  }
});
