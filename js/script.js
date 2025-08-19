document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const options = { threshold: 0.3 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
