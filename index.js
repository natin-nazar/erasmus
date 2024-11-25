document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initAnimations();
});

function initMobileMenu() {
  const hamburger = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");

  hamburger?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("active");
    overlay?.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  overlay?.addEventListener("click", () => {
    mobileMenu?.classList.remove("active");
    overlay?.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  const mobileNavLinks = document.querySelectorAll(".mobile-menu .nav__link");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu?.classList.remove("active");
      overlay?.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });
}

function initAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".animate").forEach((element) => {
    observer.observe(element);
  });
}
