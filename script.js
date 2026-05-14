// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(
          () => {
            entry.target.classList.add("visible");
          },
          80 * (entry.target.dataset.delay || 0),
        );
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

reveals.forEach((el, i) => {
  el.dataset.delay = i % 4;
  observer.observe(el);
});

// Smooth active nav
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === "#" + current ? "var(--accent)" : "";
  });
});
