document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elementsToAnimate.forEach((el) => observer.observe(el));
});
