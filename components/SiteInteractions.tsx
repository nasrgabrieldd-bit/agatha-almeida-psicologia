"use client";

import { useEffect } from "react";

/**
 * Mounts once for the whole page and wires up every interaction that isn't
 * tied to a single component's own state: the headline flip, the mobile
 * menu, the theme toggle, scroll reveals and the about-photo parallax.
 * Kept close to the original prototype's vanilla-JS behavior on purpose,
 * this is the piece most likely to get refactored into per-component state
 * later, not the piece that needed new logic right now.
 */
export default function SiteInteractions() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    try {
      const hf = document.getElementById("headlineFlip");
      if (hf) {
        const handler = () => hf.classList.toggle("open");
        hf.addEventListener("click", handler);
        cleanups.push(() => hf.removeEventListener("click", handler));
      }
    } catch {}

    try {
      const isTouch = window.matchMedia && window.matchMedia("(hover: none)").matches;
      if (isTouch) {
        document.querySelectorAll<HTMLElement>(".icon-card").forEach((card) => {
          const handler = () => {
            const wasOpen = card.classList.contains("tap-open");
            document.querySelectorAll(".icon-card.tap-open").forEach((c) => c.classList.remove("tap-open"));
            if (!wasOpen) card.classList.add("tap-open");
          };
          card.addEventListener("click", handler);
          cleanups.push(() => card.removeEventListener("click", handler));
        });
      }
    } catch {}

    try {
      const root = document.documentElement;
      const themeBtn = document.getElementById("themeToggle");
      let storedTheme: string | null = null;
      try {
        storedTheme = localStorage.getItem("agatha-theme");
      } catch {}
      if (storedTheme === "light" || storedTheme === "dark") {
        root.setAttribute("data-theme", storedTheme);
      }

      const systemPrefersDark = () =>
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDarkNow = () => {
        const explicit = root.getAttribute("data-theme");
        if (explicit === "dark") return true;
        if (explicit === "light") return false;
        return systemPrefersDark();
      };
      const syncIcon = () => {
        themeBtn?.setAttribute("data-mode", isDarkNow() ? "dark" : "light");
      };
      syncIcon();

      const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
      const mqHandler = () => {
        if (!root.getAttribute("data-theme")) syncIcon();
      };
      mq?.addEventListener("change", mqHandler);
      cleanups.push(() => mq?.removeEventListener("change", mqHandler));

      if (themeBtn) {
        const clickHandler = () => {
          const next = isDarkNow() ? "light" : "dark";
          root.setAttribute("data-theme", next);
          try {
            localStorage.setItem("agatha-theme", next);
          } catch {}
          syncIcon();
        };
        themeBtn.addEventListener("click", clickHandler);
        cleanups.push(() => themeBtn.removeEventListener("click", clickHandler));
      }
    } catch {}

    try {
      const menuBtn = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");
      if (menuBtn && navLinks) {
        const toggle = () => {
          const isOpen = navLinks.classList.toggle("open");
          menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        };
        menuBtn.addEventListener("click", toggle);
        cleanups.push(() => menuBtn.removeEventListener("click", toggle));

        const linkHandlers: Array<[Element, () => void]> = [];
        navLinks.querySelectorAll("a").forEach((a) => {
          const h = () => {
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
          };
          a.addEventListener("click", h);
          linkHandlers.push([a, h]);
        });
        cleanups.push(() => linkHandlers.forEach(([a, h]) => a.removeEventListener("click", h)));

        const onResize = () => {
          if (window.innerWidth > 780) {
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
          }
        };
        window.addEventListener("resize", onResize);
        cleanups.push(() => window.removeEventListener("resize", onResize));
      }
    } catch {}

    try {
      const els = document.querySelectorAll(".reveal, .reveal-scale, .reveal-left, .reveal-right");
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("in");
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12 }
        );
        els.forEach((el) => io.observe(el));
        cleanups.push(() => io.disconnect());
      } else {
        els.forEach((el) => el.classList.add("in"));
      }
    } catch {}

    try {
      const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const pxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
      if (!reduceMotion && pxEls.length) {
        let ticking = false;
        const update = () => {
          const vh = window.innerHeight;
          pxEls.forEach((el) => {
            const depth = parseFloat(el.getAttribute("data-parallax") || "0") || 0;
            const r = el.getBoundingClientRect();
            const center = r.top + r.height / 2;
            const offset = (center - vh / 2) / vh;
            el.style.transform = `translateY(${offset * depth}px)`;
          });
          ticking = false;
        };
        const onScroll = () => {
          if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
          }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
        cleanups.push(() => window.removeEventListener("scroll", onScroll));
      }
    } catch {}

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
