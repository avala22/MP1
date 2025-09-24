/* Smooth Scroll */
function smoothScroll(target, duration = 800) {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY - 50;
    const distance = end - start;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
  
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  
      window.scrollTo(0, start + distance * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    requestAnimationFrame(animation);
  }
  
  /* Attach smooth scroll */
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) smoothScroll(target, 800);
      document.getElementById("nav-links").classList.remove("active");
    });
  });
  
  /* Carousel */
  const track = document.querySelector(".carousel-track");
  const slides = track ? Array.from(track.children) : [];
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  let index = 0;
  
  function updateSlide() {
    if (track) track.style.transform = `translateX(-${index * 100}%)`;
  }
  if (nextButton) nextButton.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });
  if (prevButton) prevButton.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });
  
  /* Modal */
  document.querySelectorAll("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(btn.dataset.open).setAttribute("aria-hidden", "false");
    });
  });
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").setAttribute("aria-hidden", "true");
    });
  });
  
  /* Navbar shrink */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("shrink");
    else navbar.classList.remove("shrink");
  });
  
  /* Progress bar */
  const progressBar = document.getElementById("progress-bar");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + "%";
  });
  
  /* Scroll spy */
  const sections = document.querySelectorAll("section");
  const navLinksAll = document.querySelectorAll("nav a");
  
  window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + navbar.offsetHeight + 50;
  
    let currentSection = null;
    sections.forEach(section => {
      if (section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navLinksAll.forEach(link => {
      link.classList.remove("active");
      if (currentSection && link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
      navLinksAll.forEach(link => link.classList.remove("active"));
      document.querySelector('nav a[href="#contact"]').classList.add("active");
    }
  });
  
  /* Hamburger toggle */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
  