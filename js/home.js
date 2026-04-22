window.addEventListener("load", () => {
  // HERO INTRO
  const heroTl = gsap.timeline();

  heroTl
    .from(".hero h1", { opacity: 0, y: 40, duration: 0.8 })
    .to(".hero-desc", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
    .to(".scroll-hint", { opacity: 1, y: 0, duration: 0.8 }, "+=0.3");

  // SCROLL TIMELINE
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=140%",
      scrub: 1,
    },
  });

  tl.to(".hero", { opacity: 0, y: -80 });

  tl.to(
    ".content",
    {
      opacity: 1,
      onUpdate: function () {
        const p = this.progress();
        gsap.set(".content", {
          pointerEvents: p > 0.5 ? "auto" : "none",
        });
      },
    },
    "<",
  );

  tl.to(
    ".card",
    {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.2,
      ease: "power3.out",
    },
    "-=0.3",
  );
});
