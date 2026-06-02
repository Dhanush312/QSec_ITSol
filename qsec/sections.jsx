// qsec/sections.jsx — content data + NetworkVisual + Nav + Hero
const { useState, useEffect, useRef } = React;

/* ============================ CONTENT ============================ */
const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why QSec", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: "IconSupport", name: "IT Support", blurb: "Responsive helpdesk and on-site support that keeps your team working — not waiting.", tag: "Managed" },
  { icon: "IconShield", name: "Network Security", blurb: "Firewalls, monitoring and hardening that quietly keep threats out of your business.", tag: "Security" },
  { icon: "IconCloud", name: "Cloud Solutions", blurb: "Migrate, back up and scale on Microsoft 365, Google Workspace and private cloud.", tag: "Cloud" },
  { icon: "IconServer", name: "System Administration", blurb: "Servers, accounts and infrastructure managed and patched so nothing falls behind.", tag: "Managed" },
  { icon: "IconCode", name: "Web Development", blurb: "Fast, modern websites and web apps built to represent your business properly.", tag: "Build" },
  { icon: "IconCamera", name: "CCTV & Surveillance", blurb: "Smart camera systems with remote viewing, designed and installed end to end.", tag: "On-site" },
  { icon: "IconRefresh", name: "AMC Services", blurb: "Annual maintenance contracts with predictable cost and proactive upkeep.", tag: "Contract" },
];

const WHY = [
  { icon: "IconClock", title: "24/7 support", body: "Round-the-clock monitoring and a team that answers when something can't wait." },
  { icon: "IconBolt", title: "Fast response", body: "Clear response targets — most issues acknowledged and triaged within the hour." },
  { icon: "IconBadge", title: "Certified experts", body: "Vendor-certified engineers across security, cloud and infrastructure." },
  { icon: "IconTag", title: "Honest pricing", body: "Transparent contracts with no surprise line items — built for SMB budgets." },
  { icon: "IconLock", title: "Security first", body: "Every solution is designed with your data protection as the default, not an add-on." },
  { icon: "IconUsers", title: "One partner", body: "Support, security, cloud and web under a single accountable team." },
];

const STATS = [
  { num: "10+", label: "Years serving local business" },
  { num: "120+", label: "Businesses supported" },
  { num: "<1hr", label: "Average response time" },
  { num: "99.9%", label: "Monitored uptime" },
];

const TESTIMONIALS = [
  { quote: "QSec quietly took over our entire IT setup. Things just work now, and when we call, a real person picks up.", name: "Priya Menon", role: "Operations Lead, Retail Group" },
  { quote: "They migrated us to the cloud over a weekend with zero downtime. The security review alone was worth it.", name: "Arun Kulkarni", role: "Director, Logistics Firm" },
  { quote: "Fast, honest and easy to work with. It feels like having an IT department without the overhead.", name: "Sana Fernandes", role: "Founder, Design Studio" },
];

const DIRECTORS = [
  {
    name: "Swetha Kuchu",
    role: "Director, Product & Operations",
    bio: "A powerhouse with 12+ years in the Product Development Lifecycle and a stellar track record at Volvo, Urgently, and Polaris — our director leads with passion and precision.",
    initials: "SK",
    image: "qsec/images/swetha.svg",
  },
  {
    name: "Sruthi Jonnalagadda",
    role: "Director, Finance & Strategy",
    bio: "With sharp financial acumen and deep expertise in accounting, our director is a rising CA driving smart, strategic decisions at every level of the business.",
    initials: "SJ",
    image: "qsec/images/sruthi.svg",
  },
];

/* ===================== ABSTRACT NETWORK VISUAL ===================== */
// Built from simple circles + lines — a secured network constellation.
function NetworkVisual({ className = "", compact = false }) {
  const nodes = [
    { x: 50, y: 50, r: 5.5, core: true },
    { x: 20, y: 26 }, { x: 80, y: 24 }, { x: 86, y: 62 },
    { x: 64, y: 82 }, { x: 26, y: 76 }, { x: 14, y: 54 },
    { x: 50, y: 14 }, { x: 38, y: 44 }, { x: 66, y: 40 },
  ];
  const links = [[0,8],[0,9],[8,1],[8,6],[8,5],[9,2],[9,3],[9,7],[3,4],[4,5],[6,5],[0,4]];
  return (
    <div className={"netviz " + className} aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="nvCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.55" />
          </radialGradient>
        </defs>
        {links.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
                className="nv-link" style={{ animationDelay: `${i * 0.35}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={i} className="nv-node" style={{ animationDelay: `${i * 0.4}s` }}>
            {n.core && <circle cx={n.x} cy={n.y} r="11" className="nv-halo" />}
            <circle cx={n.x} cy={n.y} r={n.r || 2.6} fill={n.core ? "url(#nvCore)" : "var(--surface)"}
                    stroke={n.core ? "none" : "var(--accent)"} strokeWidth={n.core ? 0 : 1} />
            {n.core && <path d="M50 47.2l-2.6 1.1v2c0 1.5 1 2.6 2.6 3.1 1.6-.5 2.6-1.6 2.6-3.1v-2L50 47.2z"
                             fill="#fff" opacity="0.95" />}
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ============================ NAV ============================ */
function Logo({ onClick }) {
  return (
    <a href="#top" onClick={onClick} className="logo" aria-label="QSec IT Solutions home">
      <span className="logo-mark"><span className="logo-dot" /></span>
      <span className="logo-text">QSec<span className="logo-sub">IT Solutions</span></span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  const close = () => setOpen(false);
  return (
    <header className={"nav " + (scrolled ? "nav-scrolled" : "")}>
      <div className="wrap nav-inner">
        <Logo onClick={close} />
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary nav-cta">Get started</a>
          <button className="nav-burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
            {open ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>
      <div className={"mobile-menu " + (open ? "open" : "")}>
        <div className="mobile-menu-inner">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
          <a href="#contact" className="btn btn-primary" onClick={close} style={{ marginTop: 8, justifyContent: "center" }}>Get started</a>
        </div>
      </div>
    </header>
  );
}

/* ============================ HERO ============================ */
function HeroBadge() {
  return (
    <div className="hero-badge" data-reveal>
      <span className="hero-badge-dot" />
      Now onboarding new businesses across the region
    </div>
  );
}

function HeroCTAs({ center }) {
  return (
    <div className={"hero-ctas " + (center ? "center" : "")} data-reveal style={{ "--reveal-delay": ".12s" }}>
      <a href="#contact" className="btn btn-primary">Get started <IconArrow size={18} /></a>
      <a href="#services" className="btn btn-ghost">Explore services</a>
    </div>
  );
}

function Hero({ variant }) {
  const head = "Secure IT solutions for modern businesses";
  const sub = "QSec keeps your technology reliable, protected and out of your way — managed support, network security, cloud and web, from one accountable team.";

  if (variant === "split") {
    return (
      <section className="hero hero-split" id="top">
        <div className="wrap hero-split-grid">
          <div className="hero-split-copy">
            <HeroBadge />
            <h1 className="hero-title" data-reveal style={{ "--reveal-delay": ".05s" }}>{head}</h1>
            <p className="hero-sub" data-reveal style={{ "--reveal-delay": ".1s" }}>{sub}</p>
            <HeroCTAs />
            <div className="hero-trust" data-reveal style={{ "--reveal-delay": ".18s" }}>
              <IconCheck size={16} /> Trusted by 120+ local businesses
            </div>
          </div>
          <div className="hero-split-visual" data-reveal style={{ "--reveal-delay": ".12s" }}>
            <div className="visual-card" data-parallax="center" data-speed="-0.1">
              <NetworkVisual />
            </div>
          </div>
        </div>
        <HeroStatStrip />
      </section>
    );
  }

  if (variant === "editorial") {
    return (
      <section className="hero hero-editorial" id="top">
        <div className="wrap">
          <HeroBadge />
          <h1 className="hero-title hero-title-xl" data-reveal style={{ "--reveal-delay": ".05s" }}>
            Secure IT solutions<br />for modern <span className="grad">businesses.</span>
          </h1>
          <div className="hero-editorial-row">
            <p className="hero-sub" data-reveal style={{ "--reveal-delay": ".1s" }}>{sub}</p>
            <HeroCTAs />
          </div>
        </div>
        <div className="wrap hero-editorial-band" data-reveal style={{ "--reveal-delay": ".16s" }}>
          <div className="band-visual ph-grid" data-parallax="center" data-speed="-0.13">
            <NetworkVisual />
            <span className="band-tag">network · cloud · support</span>
          </div>
        </div>
        <HeroStatStrip />
      </section>
    );
  }

  // default: centered
  return (
    <section className="hero hero-centered" id="top">
      <div className="wrap hero-centered-inner">
        <div style={{ display: "flex", justifyContent: "center" }}><HeroBadge /></div>
        <h1 className="hero-title hero-title-center" data-reveal style={{ "--reveal-delay": ".05s" }}>
          Secure IT solutions for<br /><span className="grad">modern businesses</span>
        </h1>
        <p className="hero-sub hero-sub-center" data-reveal style={{ "--reveal-delay": ".1s" }}>{sub}</p>
        <HeroCTAs center />
        <div className="hero-centered-visual" data-reveal style={{ "--reveal-delay": ".18s" }}>
          <div className="visual-card wide" data-parallax="center" data-speed="-0.09" data-scale="0.06">
            <NetworkVisual />
          </div>
        </div>
      </div>
      <HeroStatStrip />
    </section>
  );
}

function HeroStatStrip() {
  return (
    <div className="wrap">
      <div className="stat-strip" data-reveal>
        {STATS.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  NAV_LINKS, SERVICES, WHY, STATS, TESTIMONIALS, DIRECTORS,
  NetworkVisual, Nav, Hero, HeroStatStrip, Logo
});
