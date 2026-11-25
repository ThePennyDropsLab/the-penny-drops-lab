/* =====================================================================
   The Penny Drops Lab — interactividad y movimiento (v2)
   Vanilla JS, sin dependencias:
     1) Tema claro/oscuro persistente (localStorage)
     2) Menú móvil
     3) Entrada con profundidad por sección (IntersectionObserver)
     4) Barra de progreso de lectura
     5) Push-in del hero al hacer scroll (parallax de profundidad)
   ===================================================================== */
(function () {
  "use strict";
  const root = document.documentElement;

  /* 1) Tema ---------------------------------------------------------- */
  const KEY = "pdl-theme";
  const saved = localStorage.getItem(KEY);
  if (saved) root.setAttribute("data-theme", saved);
  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    const paint = () => {
      const light = root.getAttribute("data-theme") === "light";
      toggle.textContent = light ? "☀" : "☾";
      toggle.setAttribute("aria-label", light ? "Modo oscuro" : "Modo claro");
    };
    paint();
    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem(KEY, next);
      paint();
    });
  }

  /* 2) Menú móvil ---------------------------------------------------- */
  const burger = document.querySelector(".nav__burger");
  const links = document.querySelector(".nav__links");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 3) Entrada con profundidad --------------------------------------- */
  const reveals = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* 4) + 5) Scroll: progreso de lectura y push-in del hero ----------- */
  const bar = document.querySelector(".progress");
  const hero = document.querySelector(".hero__inner");
  let ticking = false;

  const onScroll = () => {
    const h = document.documentElement;
    if (bar) {
      const max = h.scrollHeight - h.clientHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? h.scrollTop / max : 0) + ")";
    }
    if (hero && !reduce) {
      // la "cámara" empuja hacia dentro: el hero crece y se desvanece al salir
      const p = Math.min(h.scrollTop / (window.innerHeight * 0.9), 1);
      hero.style.transform = "scale(" + (1 + p * 0.12) + ") translateY(" + (p * -40) + "px)";
      hero.style.opacity = String(1 - p * 0.9);
    }
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();
})();
