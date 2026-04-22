gsap.registerPlugin(ScrollTrigger);

/* BACK NAV FIX */
window.addEventListener("pageshow", () => {
  const navEntries = performance.getEntriesByType("navigation");
  if (navEntries.length && navEntries[0].type === "back_forward") {
    window.location.reload();
  }
});

/* FLOATING SCROLL HINT */
gsap.to(".scroll-hint", {
  y: 6,
  repeat: -1,
  yoyo: true,
  duration: 1.2,
  ease: "power1.inOut",
});

/* MAGNETIC + GLOW */
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");

    const moveX = (x - rect.width / 2) / 12;
    const moveY = (y - rect.height / 2) / 12;

    gsap.to(card, {
      x: moveX,
      y: moveY,
      scale: 1.05,
      duration: 0.25,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  });
});
