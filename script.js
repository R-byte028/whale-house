// ================= DOM READY =================
window.addEventListener("DOMContentLoaded", () => {

  // ================= BUBBLES BACKGROUND =================
  const bubbleContainer = document.querySelector(".bubbles");

  if (bubbleContainer) {
    for (let i = 0; i < 25; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";

      const size = Math.random() * 40 + 10;
      bubble.style.width = size + "px";
      bubble.style.height = size + "px";
      bubble.style.left = Math.random() * 100 + "%";
      bubble.style.animationDuration = Math.random() * 10 + 8 + "s";
      bubble.style.animationDelay = Math.random() * 5 + "s";

      bubbleContainer.appendChild(bubble);
    }
  }

  // ================= DROPDOWN MENU =================
  const menuIcon = document.querySelector(".menu-icon");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (menuIcon && dropdownMenu) {
    menuIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle("show");
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  }

  // ================= SMOOTH SCROLL =================
  document.querySelectorAll(".dropdown-menu a").forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        dropdownMenu.classList.remove("show");
      }
    });
  });

  // ================= BACK TO TOP =================
  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ================= SCROLL PROGRESS BAR =================
  const progressBar = document.getElementById("scroll-progress");

  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = scrollPercent + "%";
    });
  }

  // ================= REVEAL ON SCROLL =================
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load
});
