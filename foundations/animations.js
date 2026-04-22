window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  // -------------------------
  // HERO ANIMATION
  // -------------------------
  const tl = gsap.timeline();

  tl.to(".hero h1", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  tl.to(
    ".hero p",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.4",
  );

  tl.to({}, { duration: 0.25 });

  tl.to(".card", {
    opacity: 1,
    y: 0,
    scale: 1,
    stagger: 0.12,
    duration: 0.8,
    ease: "power3.out",
  });

  // -------------------------
  // MAGNETIC + GLOW EFFECT
  // -------------------------
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // glow position variables
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);

      // magnetic movement
      const moveX = (x - rect.width / 2) / 14;
      const moveY = (y - rect.height / 2) / 14;

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
});
