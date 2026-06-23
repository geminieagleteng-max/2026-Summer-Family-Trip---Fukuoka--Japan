// 🚀 App JavaScript for Fukuoka 2026 Trip Website

// --- Page Initialization & Setup ---
document.addEventListener("DOMContentLoaded", () => {
  setupNavbarScroll();
  setupItinerarySwitcher();
  setupGalleryFilters();
  setupCardNavigation();
});

// --- Navbar Scroll Effect & Active Highlight ---
function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section, header");

  window.addEventListener("scroll", () => {
    // 1. Add background shadow when scrolled
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // 2. Dynamic active section highlight
    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === currentId) {
        link.classList.add("active");
      }
    });
  });
}

// --- Day-by-Day Itinerary Switcher ---
function setupItinerarySwitcher() {
  const dayButtons = document.querySelectorAll(".day-btn");
  const dayPanels = document.querySelectorAll(".day-panel");

  dayButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.getAttribute("data-day");

      // Reset active states
      dayButtons.forEach(b => b.classList.remove("active"));
      dayPanels.forEach(p => p.classList.remove("active"));

      // Set active
      btn.classList.add("active");
      const activePanel = document.getElementById(`day-panel-${day}`);
      if (activePanel) {
        activePanel.classList.add("active");
      }

      // Smooth scroll if mobile/small viewport so active panel is visible
      if (window.innerWidth <= 1024) {
        btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    });
  });
}

// --- Gallery Filters ---
function setupGalleryFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryCards = document.querySelectorAll(".gallery-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filterValue = btn.getAttribute("data-filter");

      // Toggle active filter button
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter gallery cards
      galleryCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "flex";
          card.style.animation = "fadeIn 0.5s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// --- Card Navigation (Redirects to spot.html?id=xxx) ---
function setupCardNavigation() {
  const spotCards = document.querySelectorAll(".gallery-card");

  spotCards.forEach(card => {
    // Style cursor to pointer to show it is clickable
    card.style.cursor = "pointer";
    
    card.addEventListener("click", (e) => {
      // If they clicked the button/link itself, let native navigation handle it
      if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) {
        return;
      }
      
      const spotKey = card.getAttribute("data-spot");
      if (spotKey) {
        window.location.href = `spot.html?id=${spotKey}`;
      }
    });
  });
}

// --- Mobile Navigation Menu Toggle ---
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("mobile-open");
    const isOpen = navMenu.classList.contains("mobile-open");
    mobileMenuBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });

  // Close menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("mobile-open");
      mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}
