document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile navigation menu
  const menuToggle = document.querySelector("#menuToggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Accessibility: Toggle menu with Enter or Space key
    menuToggle.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        mobileMenu.classList.toggle("hidden");
      }
    });
  }

  // Search button redirect
  const searchBtn = document.querySelector(".search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      window.location.href = "/search";
    });

    // Accessibility: Trigger search with Enter or Space key
    searchBtn.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = "/search";
      }
    });
  }

  // Update footer year dynamically
  const yearPlaceholder = document.getElementById("yearPlaceholder");
  if (yearPlaceholder) {
    yearPlaceholder.textContent = new Date().getFullYear();
  }
});