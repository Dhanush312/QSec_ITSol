// qsec/sections2.jsx — Services, About, Why, Testimonials, Contact, Footer, WhatsApp
const { useState: useState2 } = React;

/* ============================ SERVICES ============================ */
function ServiceCard({ s, i }) {
  const Icon = window[s.icon];
  return (
    <a href="#contact" className="svc-card" data-reveal style={{ "--reveal-delay": `${(i % 3) * 0.06}s` }}>
      <div className="svc-icon"><Icon size={24} /></div>
      <div className="svc-body">
        <div className="svc-top">
          <h3 className="svc-name">{s.name}</h3>
          <span className="svc-tag">{s.tag}</span>
        </div>
        <p className="svc-blurb">{s.blurb}</p>
      </div>
      <div className="svc-cta">Learn more <IconArrowUpRight size={16} /></div>
    </a>
  );
}

function Services() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">What we do</span>
          <h2 className="sec-title">Everything your business needs, under one roof</h2>
          <p className="sec-sub">From day-to-day support to security and cloud, QSec runs the technology so you can run the business.</p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s, i) => <ServiceCard key={s.name} s={s} i={i} />)}
          <div className="svc-card svc-card-cta" data-reveal style={{ "--reveal-delay": ".06s" }}>
            <h3 className="svc-name">Not sure where to start?</h3>
            <p className="svc-blurb">Book a free 20-minute IT review and we'll map out exactly what you need.</p>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: "auto" }}>Book a review <IconArrow size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ ABOUT ============================ */
function About() {
  return (
    <section className="sec sec-about" id="about">
      <div className="wrap about-grid">
        <div className="about-copy" data-reveal>
          <span className="eyebrow">About QSec</span>
          <h2 className="sec-title" style={{ marginTop: 18 }}>A local IT partner that businesses actually trust</h2>
          <p className="about-lead">
            QSec IT Solutions helps small and growing businesses use technology with confidence.
            We take care of the support, security and infrastructure so technology becomes an
            advantage — never a worry.
          </p>
          <div className="mv">
            <div className="mv-item">
              <div className="mv-label eyebrow">Mission</div>
              <p>To make enterprise-grade IT and security simple, affordable and dependable for every business we serve.</p>
            </div>
            <div className="mv-item">
              <div className="mv-label eyebrow">Vision</div>
              <p>To be the most trusted technology partner for local businesses — the team they recommend without hesitation.</p>
            </div>
          </div>
        </div>
        <div className="about-visual" data-reveal style={{ "--reveal-delay": ".1s" }}>
          <div className="about-card" data-parallax="center" data-speed="-0.08">
            <div className="about-card-head">
              <span className="about-chip"><span className="about-chip-dot" /> Live monitoring</span>
              <span className="about-card-time">All systems normal</span>
            </div>
            <div className="about-rows">
              {[["Network security", "Protected"], ["Cloud backups", "Synced 4m ago"], ["Endpoint health", "32 / 32 online"], ["Open tickets", "None"]].map((r, i) => (
                <div className="about-row" key={i}>
                  <span>{r[0]}</span>
                  <span className="about-row-val"><span className="dot-ok" /> {r[1]}</span>
                </div>
              ))}
            </div>
            <NetworkVisual className="about-net" />
          </div>
        </div>
      </div>      <div className="about-team" data-reveal>
        <div className="wrap">
          <div className="sec-head left" data-reveal>
            <span className="eyebrow">Leadership</span>
            <h3 className="sec-title" style={{ marginTop: 18 }}>Meet our directors</h3>
          </div>
          <div className="directors-grid">
            {DIRECTORS.map((d, i) => (
              <div className="director-card" key={d.name} data-reveal style={{ "--reveal-delay": `${i * 0.08}s` }}>
                <div className="director-avatar" aria-hidden="true">
                  {d.image ? <img src={d.image} alt={`${d.name} profile`} /> : d.initials}
                </div>
                <div className="director-details">
                  <h3 className="director-name">{d.name}</h3>
                  <p className="director-role">{d.role}</p>
                  <p className="director-bio">{d.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>    </section>
  );
}

/* ============================ WHY CHOOSE US ============================ */
function WhyChoose() {
  return (
    <section className="sec sec-why" id="why">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">Why QSec</span>
          <h2 className="sec-title">Reasons businesses stay with us</h2>
          <p className="sec-sub">No jargon, no lock-in, no surprises — just dependable technology and people who pick up the phone.</p>
        </div>
        <div className="why-grid">
          {WHY.map((w, i) => {
            const Icon = window[w.icon];
            return (
              <div className="why-card" key={w.title} data-reveal style={{ "--reveal-delay": `${(i % 3) * 0.06}s` }}>
                <div className="why-icon"><Icon size={22} /></div>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-body">{w.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================ TESTIMONIALS ============================ */
function Testimonials() {
  return (
    <section className="sec sec-testi" id="testimonials">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">Clients</span>
          <h2 className="sec-title">Trusted by businesses like yours</h2>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure className="testi-card" key={i} data-reveal style={{ "--reveal-delay": `${i * 0.07}s` }}>
              <div className="testi-quote-mark">"</div>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="testi-avatar" aria-hidden="true">{t.name.split(" ").map(n => n[0]).join("")}</span>
                <span>
                  <span className="testi-name">{t.name}</span>
                  <span className="testi-role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ CONTACT ============================ */
function Field({ label, children, error }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      {children}
      <span className={"field-error " + (error ? "show" : "")}>{error || ""}</span>
    </label>
  );
}

function Contact() {
  const [form, setForm] = useState2({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState2({});
  const [sent, setSent] = useState2(false);
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name.";
    if (!form.email.trim()) er.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "That email doesn't look right.";
    if (!form.message.trim() || form.message.trim().length < 10) er.message = "Tell us a little more (10+ characters).";
    setErrors(er);
    return Object.keys(er).length === 0;
  };
  const submit = (e) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  return (
    <section className="sec sec-contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy" data-reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="sec-title" style={{ marginTop: 18 }}>Let's talk about your IT</h2>
          <p className="contact-lead">Tell us what you're dealing with and we'll get back within one business day — usually much sooner.</p>
          <ul className="contact-list">
            <li><span className="ci"><IconPhone size={18} /></span><div><span className="ci-k">Phone</span><a href="tel:+910000000000">+91 00000 00000</a></div></li>
            <li><span className="ci"><IconMail size={18} /></span><div><span className="ci-k">Email</span><a href="mailto:hello@qsecitsol.com">hello@qsecitsol.com</a></div></li>
            <li><span className="ci"><IconPin size={18} /></span><div><span className="ci-k">Office</span><span>Add your street address here</span></div></li>
          </ul>
          <div className="map-ph ph-grid" role="img" aria-label="Map location placeholder">
            <span className="map-pin"><IconPin size={20} /></span>
            <span className="map-label">GOOGLE MAPS EMBED</span>
          </div>
        </div>

        <div className="contact-form-wrap" data-reveal style={{ "--reveal-delay": ".1s" }}>
          {sent ? (
            <div className="form-success">
              <div className="success-check"><IconCheck size={30} /></div>
              <h3>Thanks, {form.name.split(" ")[0] || "there"}!</h3>
              <p>Your message is on its way. A QSec specialist will reach out shortly.</p>
              <button className="btn btn-ghost" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}>Send another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="form-row">
                <Field label="Name" error={errors.name}>
                  <input className={"input " + (errors.name ? "err" : "")} value={form.name} onChange={set("name")} placeholder="Your full name" />
                </Field>
                <Field label="Phone" error={null}>
                  <input className="input" value={form.phone} onChange={set("phone")} placeholder="Optional" />
                </Field>
              </div>
              <Field label="Email" error={errors.email}>
                <input className={"input " + (errors.email ? "err" : "")} value={form.email} onChange={set("email")} placeholder="you@company.com" />
              </Field>
              <Field label="How can we help?" error={errors.message}>
                <textarea className={"input textarea " + (errors.message ? "err" : "")} value={form.message} onChange={set("message")} rows={5} placeholder="Tell us about your business and what you need…" />
              </Field>
              <button type="submit" className="btn btn-primary form-submit">Send message <IconArrow size={18} /></button>
              <p className="form-note">We'll never share your details. No spam, ever.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */
function Footer() {
  const cols = [
    { h: "Services", links: SERVICES.slice(0, 5).map(s => s.name) },
    { h: "Company", links: ["About", "Why QSec", "Clients", "Contact"] },
    { h: "Support", links: ["Get started", "Book a review", "AMC plans", "Help desk"] },
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cta" data-reveal>
          <h2 className="footer-cta-title">Ready to make IT the easy part?</h2>
          <a href="#contact" className="btn btn-primary">Get started <IconArrow size={18} /></a>
        </div>
        <hr className="divider" style={{ background: "var(--border-2)", opacity: .5 }} />
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Reliable, secure technology for modern businesses. Support, security, cloud and web — from one team you can trust.</p>
            <div className="footer-social">
              {["in", "X", "f"].map((s) => <a key={s} href="#" className="soc" aria-label={"Social " + s}>{s}</a>)}
            </div>
          </div>
          {cols.map((c) => (
            <div className="footer-col" key={c.h}>
              <h4>{c.h}</h4>
              {c.links.map((l) => <a key={l} href="#contact">{l}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} QSec IT Solutions Pvt Ltd. All rights reserved.</span>
          <span className="footer-legal"><a href="#">Privacy</a><a href="#">Terms</a></span>
        </div>
      </div>
    </footer>
  );
}

/* ============================ WHATSAPP FLOAT ============================ */
function WhatsAppFloat() {
  return (
    <a className="wa-float" href="https://wa.me/910000000000" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <IconWhatsApp size={28} />
      <span className="wa-tip">Chat with us</span>
    </a>
  );
}

Object.assign(window, { Services, About, WhyChoose, Testimonials, Contact, Footer, WhatsAppFloat });
