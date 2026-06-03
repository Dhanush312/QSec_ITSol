// qsec/app.jsx — composition + scroll-reveal + parallax + Tweaks
import React from 'react';
const { useState: useS, useEffect: useE, useRef: useR } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "centered",
  "accent": "#2f4fb0",
  "radius": 18,
  "motion": true
}/*EDITMODE-END*/;

// hex -> oklch accent preset (L C H)
const ACCENT_PRESETS = {
  "#2f4fb0": { l: 0.475, c: 0.165, h: 260, label: "Deep blue" },   // trustworthy
  "#0e8fc0": { l: 0.585, c: 0.110, h: 232, label: "Cyan" },        // tech
  "#3b4150": { l: 0.380, c: 0.020, h: 264, label: "Monochrome" },  // apple-like
  "#1f8a5b": { l: 0.520, c: 0.120, h: 156, label: "Green" },       // secure
};

function applyTweaks(t) {
  const root = document.documentElement;
  const p = ACCENT_PRESETS[t.accent] || ACCENT_PRESETS["#2f4fb0"];
  root.style.setProperty("--accent-l", p.l);
  root.style.setProperty("--accent-c", p.c);
  root.style.setProperty("--accent-h", p.h);
  root.style.setProperty("--radius", t.radius + "px");
  root.style.setProperty("--radius-sm", Math.max(8, t.radius - 6) + "px");
}

// Scroll reveal + parallax controller (re-binds when content changes)
function useScrollFx(deps, motionOn) {
  useE(() => {
    const reveals = Array.from(document.querySelectorAll("[data-reveal]"));
    const reveal = (el) => {
      el.setAttribute("data-shown", "1");
      el.style.opacity = "1";
      el.style.transform = "none";
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((el) => io.observe(el));

    const px = Array.from(document.querySelectorAll("[data-parallax]"));
    let raf = null;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        if (!motionOn || reduce) { px.forEach(el => el.style.transform = ""); return; }
        const sy = window.scrollY;
        const vh = window.innerHeight;
        px.forEach((el) => {
          const sp = parseFloat(el.getAttribute("data-speed")) || 0;
          const mode = el.getAttribute("data-parallax") || "center";
          let y;
          if (mode === "scroll") {
            y = sy * sp;                                   // background layers drift with the page
          } else {
            const r = el.getBoundingClientRect();
            y = (r.top + r.height / 2 - vh / 2) * sp;      // foreground moves against its own position
          }
          const scAttr = parseFloat(el.getAttribute("data-scale"));
          let scale = "";
          if (!isNaN(scAttr)) {
            const r = el.getBoundingClientRect();
            const prog = Math.min(1, Math.max(0, 1 - (r.top + r.height) / (vh + r.height)));
            scale = ` scale(${(1 + prog * scAttr).toFixed(3)})`;
          }
          el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)${scale}`;
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, deps);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useE(() => { applyTweaks(t); }, [t.accent, t.radius]);
  useScrollFx([t.heroVariant], t.motion);

  return (
    <React.Fragment>
      <div className="bg-fx" aria-hidden="true">
        <div className="orb orb-1" data-parallax="scroll" data-speed="0.22"></div>
        <div className="orb orb-2" data-parallax="scroll" data-speed="-0.16"></div>
        <div className="orb orb-3" data-parallax="scroll" data-speed="0.12"></div>
        <div className="orb orb-4" data-parallax="scroll" data-speed="-0.2"></div>
      </div>
      <Nav />
      <main>
        <Hero variant={t.heroVariant} />
        <Services />
        <About />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />

      <TweaksPanel>
        <TweakSection label="Hero layout" />
        <TweakRadio label="Direction" value={t.heroVariant}
          options={["centered", "split", "editorial"]}
          onChange={(v) => setTweak("heroVariant", v)} />
        <TweakSection label="Brand" />
        <TweakColor label="Accent" value={t.accent}
          options={Object.keys(ACCENT_PRESETS)}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSlider label="Corner radius" value={t.radius} min={4} max={26} step={2} unit="px"
          onChange={(v) => setTweak("radius", v)} />
        <TweakToggle label="Parallax motion" value={t.motion}
          onChange={(v) => setTweak("motion", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

export default App;
