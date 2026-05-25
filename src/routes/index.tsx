import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { ClientOnly } from "@/components/portfolio/ClientOnly";
import { Nav } from "@/components/portfolio/Nav";
import { HeroScene } from "@/components/portfolio/HeroScene";
import { FloatingSkills, SKILLS } from "@/components/portfolio/FloatingSkills";
import { ProjectShowcase } from "@/components/portfolio/ProjectShowcase";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Services } from "@/components/portfolio/Services";
import { FAQ } from "@/components/portfolio/FAQ";
import { STATS, REGIONS } from "@/components/portfolio/data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muhammad Ahsan — Expert WordPress Developer | Lahore, PK" },
      { name: "description", content: "Muhammad Ahsan (M-Ahxsn) — WordPress, Elementor, WooCommerce and React specialist. Fast, SEO-optimized, beautifully animated websites for clients worldwide." },
      { property: "og:title", content: "Muhammad Ahsan — Expert WordPress Developer" },
      { property: "og:description", content: "Pixel-perfect WordPress, WooCommerce and React builds. Core Web Vitals in the green. Available worldwide." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Muhammad Ahsan",
        alternateName: "M-Ahxsn",
        jobTitle: "Expert WordPress & Creative Frontend Developer",
        email: "m.ahxsn@gmail.com",
        telephone: "+92 303 9968120",
        address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
        url: "/",
        sameAs: ["https://linkedin.com/in/M-Ahxsn", "https://github.com/M-Ahxsn", "https://wa.me/923039968120"],
        knowsAbout: ["WordPress", "Elementor", "WooCommerce", "React", "SEO", "UI/UX", "Tailwind CSS", "Figma to WordPress"],
      }),
    }],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <ClientOnly fallback={null}>
        <SmoothScroll>
          <Page />
        </SmoothScroll>
      </ClientOnly>
    </ThemeProvider>
  );
}

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[60] hidden md:block"
      animate={{ x: pos.x - 18, y: pos.y - 18 }}
      transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.4 }}
    >
      <div className="h-9 w-9 rounded-full border border-ember/60 backdrop-blur-[2px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-ember" />
    </motion.div>
  );
}

function Section({ id, eyebrow, title, sub, children, className = "" }: {
  id?: string; eyebrow?: string; title?: React.ReactNode; sub?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <div className="max-w-3xl mb-12 sm:mb-16">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ember animate-[pulse-glow_2.4s_ease-in-out_infinite]" />
                {eyebrow}
              </motion.div>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
              >
                {title}
              </motion.h2>
            )}
            {sub && (
              <motion.p
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                {sub}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 grid-noise opacity-60" />
      <div className="absolute inset-0 bg-radial-ember" />
      <div className="absolute -top-32 -right-32 h-[40rem] w-[40rem] rounded-full bg-ember/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-ember-glow/20 blur-3xl" />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-16 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 glass px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-ember animate-[pulse-glow_2s_ease-in-out_infinite]" />
            Available for new projects · Immediate start
          </motion.div>
          <motion.h1
            initial="hidden" animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-7 text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-tight"
          >
            {["Expert", "WordPress", "Developer", "—", "shipped."].map((w, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { y: 60, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="inline-block mr-3"
              >
                {w === "shipped." ? <span className="text-gradient-ember">{w}</span> : w}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Hi, I'm <span className="text-foreground font-medium">Muhammad Ahsan</span> — a WordPress
            specialist crafting high-converting, lightning-fast and SEO-optimized digital experiences.
            Sites that <span className="text-foreground">actually convert.</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium ring-ember-glow">
              Get free consultation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:ring-ember-glow transition">
              View portfolio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl"
          >
            {STATS.map((s) => (
              <div key={s.label} className="glass rounded-xl px-4 py-3">
                <div className="text-xl font-semibold">{s.value}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <ClientOnly>
            <HeroScene />
          </ClientOnly>
          {/* floating skill chips around the orb */}
          {SKILLS.slice(0, 6).map((s, i) => {
            const angle = (i / 6) * Math.PI * 2;
            const x = 50 + Math.cos(angle) * 42;
            const y = 50 + Math.sin(angle) * 36;
            return (
              <motion.div
                key={s.name}
                className="absolute glass rounded-xl px-3 py-1.5 text-xs font-medium flex items-center gap-2"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24"><path d={s.path} fill={s.color} /></svg>
                {s.name}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        <span>Scroll</span>
        <span className="relative block h-10 w-px bg-foreground/20 overflow-hidden">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-ember"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = ["WordPress", "Elementor", "WooCommerce", "React", "Tailwind", "Framer Motion", "SEO", "Core Web Vitals", "UI/UX", "Figma", "Headless CMS", "Performance"];
  return (
    <div className="relative overflow-hidden border-y border-foreground/10 py-6 bg-surface">
      <div className="flex marquee-track gap-12 whitespace-nowrap text-2xl sm:text-3xl font-semibold tracking-tight">
        {[...items, ...items].map((w, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className={i % 3 === 0 ? "text-gradient-ember" : "text-foreground/70"}>{w}</span>
            <span className="text-ember">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Senior craft, freelance <span className="text-gradient-ember">flexibility.</span></>}
      sub="I help founders and agencies turn ideas into websites people actually remember. Eight years of WordPress, React and motion work — focused on speed, clarity and conversion."
    >
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-5 text-lg text-foreground/85 leading-relaxed"
        >
          <p>
            I started building WordPress sites at 16, fell in love with the way good code makes design come alive,
            and never stopped. Today I lead end-to-end builds — from strategy and design systems to
            performance, SEO and the boring-but-critical bits that keep a site healthy years after launch.
          </p>
          <p>
            Most of my work lives somewhere between marketing and engineering: brand sites that need to be fast
            and beautiful, WooCommerce stores that have to convert, and React experiences that feel like product, not slideshows.
          </p>
          <p>
            I freelance because it lets me stay close to the craft. Every line of code, every easing curve, every
            heading — chosen on purpose.
          </p>
        </motion.div>
        <motion.aside
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-5 rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8 ring-ember-glow"
        >
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">What I do best</div>
          <ul className="space-y-4">
            {[
              { t: "WordPress & Elementor", d: "Custom themes, block patterns, page-builder mastery." },
              { t: "WooCommerce", d: "Stores that load fast and check out faster." },
              { t: "React & Motion", d: "Cinematic frontends with measurable performance." },
              { t: "SEO & Speed", d: "Technical SEO, schema, Core Web Vitals in the green." },
            ].map((x) => (
              <li key={x.t} className="flex gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-ember/15 ring-1 ring-ember/40 grid place-items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                </span>
                <div>
                  <div className="font-medium">{x.t}</div>
                  <div className="text-sm text-muted-foreground">{x.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </Section>
  );
}

const SKILL_GROUPS = [
  { name: "WordPress", desc: "Custom themes, blocks, ACF, multilingual, headless setups." },
  { name: "Elementor Pro", desc: "Custom widgets, theme builder, locked-down editor experiences." },
  { name: "WooCommerce", desc: "Stores, subscriptions, multi-currency, checkout optimisation." },
  { name: "React", desc: "Component libraries, design systems, animated SPAs and SSR." },
  { name: "Tailwind CSS", desc: "Design tokens, theming, accessible utility-driven UI." },
  { name: "SEO & Speed", desc: "Technical SEO, schema, Core Web Vitals in the green." },
];

function Skills() {
  const [active, setActive] = useState(0);
  return (
    <Section
      id="skills"
      eyebrow="Skill set"
      title={<>A full stack, <span className="text-gradient-ember">cinematically</span> wired.</>}
      sub="From WordPress to WebGL — a connected toolkit that lets one developer ship what usually takes a team."
    >
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <FloatingSkills />
        </div>
        <div className="lg:col-span-6">
          <div className="divide-y divide-foreground/10 border-y border-foreground/10">
            {SKILL_GROUPS.map((s, i) => (
              <button
                key={s.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group w-full text-left py-6 flex items-center justify-between gap-6"
              >
                <div>
                  <div className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-colors ${active === i ? "text-gradient-ember" : "text-foreground/80 group-hover:text-foreground"}`}>
                    {s.name}
                  </div>
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -6, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2 text-muted-foreground max-w-md">{s.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <span className={`text-xs tracking-[0.2em] uppercase ${active === i ? "text-ember" : "text-muted-foreground"}`}>0{i + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhyChoose() {
  const items = [
    { t: "Expertise that compounds", d: "Eight years of shipping WordPress and React. No learning on your dime." },
    { t: "Communication first", d: "Async updates, weekly demos, no ghosting. You always know what's next." },
    { t: "Performance budget, day one", d: "Lighthouse 95+ on launch — and a maintenance plan to keep it there." },
    { t: "SEO baked in", d: "Schema, metadata, semantic HTML and Core Web Vitals tuned into the stack." },
    { t: "Speed as a feature", d: "Asset pipelines, image strategies and caching designed for real users." },
    { t: "Long-term support", d: "Care plans, monitoring and predictable monthly retainers." },
  ];
  return (
    <Section
      id="why"
      eyebrow="Why work with me"
      title={<>Quiet craft. <span className="text-gradient-ember">Loud results.</span></>}
      sub="Senior-level delivery without agency overhead. Every project gets a partner, not a vendor."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((x, i) => (
          <motion.div
            key={x.t}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl border border-foreground/10 bg-card p-6 overflow-hidden group"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-ember/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-3xl font-semibold text-gradient-ember">0{i + 1}</div>
            <div className="mt-3 font-medium text-lg">{x.t}</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function GlobalArea() {
  return (
    <Section
      id="global"
      eyebrow="Where I work"
      title={<>Built for clients <span className="text-gradient-ember">around the globe.</span></>}
      sub="Remote-native since day one. Comfortable across timezones, currencies, languages and compliance requirements."
    >
      <div className="relative rounded-3xl border border-foreground/10 bg-card overflow-hidden p-10 sm:p-14">
        <div className="absolute inset-0 grid-noise opacity-40" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-ember/15 blur-3xl" />
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-3 text-sm">
          {REGIONS.map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }}
              className="glass rounded-xl px-4 py-3 flex items-center justify-between"
            >
              <span>{r}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-ember animate-[pulse-glow_2s_ease-in-out_infinite]" />
            </motion.div>
          ))}
        </div>
        <div className="relative mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { t: "Async-first", d: "Detailed Looms, written specs, async standups." },
            { t: "Any stack handoff", d: "Hosting setup, DNS, analytics, CRM wiring." },
            { t: "Multi-currency & i18n", d: "Stripe, WPML, RTL — comfortable with all of it." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-foreground/10 p-5 bg-background/30">
              <div className="font-medium">{x.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section id="cta" className="!py-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-card p-10 sm:p-16 ring-ember-glow">
        <div className="absolute inset-0 bg-radial-ember opacity-80" />
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-ember/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-ember-glow/25 blur-3xl" />
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/15 glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-ember animate-[pulse-glow_2s_ease-in-out_infinite]" />
            Booking new projects · Immediate start
          </div>
          <h2 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Ready to launch a site that <span className="text-gradient-ember">actually converts?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Tell me about your project — goals, timeline and budget. I'll come back within one business day
            with a clear plan and a fixed price. No agency overhead, no surprises.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-sm font-semibold hover:opacity-90 transition">
              Hire Me
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="https://wa.me/923039968120" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-medium hover:ring-ember-glow transition">
              WhatsApp · +92 303 9968120
            </a>
            <a href="mailto:m.ahxsn@gmail.com" className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-medium hover:ring-ember-glow transition">
              m.ahxsn@gmail.com
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's get to <span className="text-gradient-ember">work.</span></>}
      sub="Fill in a few details and I'll reply within one business day."
    >
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@brand.com" />
            </div>
            <Field label="Company / brand" name="company" placeholder="Optional" required={false} />
            <Field label="Project type" name="type" placeholder="WordPress, WooCommerce, React…" />
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Project details</label>
              <textarea
                required
                rows={5}
                placeholder="Goals, timeline, budget range, links…"
                className="w-full rounded-xl border border-foreground/15 bg-background/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ember/60 transition"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition ring-ember-glow"
            >
              {sent ? "Sent — talk soon ✦" : "Send inquiry"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
        </div>
        <aside className="lg:col-span-5 space-y-5">
          <div className="rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Direct</div>
            <a href="mailto:m.ahxsn@gmail.com" className="mt-2 block text-2xl font-medium hover:text-ember transition">m.ahxsn@gmail.com</a>
            <div className="mt-1 text-sm text-muted-foreground">Replies within one business day.</div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                <a href="tel:+923039968120" className="hover:text-ember transition">+92 303 9968120</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                <div>Lahore, Punjab, PK</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8 space-y-4">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Elsewhere</div>
            {[
              { l: "LinkedIn · M-Ahxsn", h: "https://linkedin.com/in/M-Ahxsn" },
              { l: "GitHub · M-Ahxsn", h: "https://github.com/M-Ahxsn" },
              { l: "WhatsApp", h: "https://wa.me/923039968120" },
              { l: "Email", h: "mailto:m.ahxsn@gmail.com" },
            ].map((s) => (
              <a key={s.l} href={s.h} className="flex items-center justify-between group">
                <span className="text-lg group-hover:text-ember transition">{s.l}</span>
                <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder, required = true }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-foreground/15 bg-background/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ember/60 transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 mt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="h-8 w-8 rounded-xl bg-foreground text-background grid place-items-center font-bold">A</span>
            <span>Ahsan<span className="text-ember">.</span></span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Freelance WordPress & creative frontend developer building premium, performant websites worldwide.
          </p>
        </div>
        <FooterCol title="Navigate" links={[["About", "#about"], ["Skills", "#skills"], ["Work", "#work"], ["FAQ", "#faq"]]} />
        <FooterCol title="Services" links={[["WordPress", "#skills"], ["Elementor", "#skills"], ["WooCommerce", "#skills"], ["React", "#skills"]]} />
        <FooterCol title="Contact" links={[["hello@ahsan.dev", "mailto:hello@ahsan.dev"], ["LinkedIn", "#"], ["GitHub", "#"], ["Upwork", "#"]]} />
      </div>
      <div className="border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Ahsan. Crafted with obsession.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ember animate-[pulse-glow_2s_ease-in-out_infinite]" />
            Currently available for Q3
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">{title}</div>
      <ul className="space-y-2">
        {links.map(([l, h]) => (
          <li key={l}>
            <a href={h} className="text-sm hover:text-ember transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Page() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Section
          id="work"
          eyebrow="Selected work"
          title={<>Recent <span className="text-gradient-ember">projects.</span></>}
          sub="Hover any card — the website screenshot rises to reveal the full design."
        >
          <ProjectShowcase />
        </Section>
        <Section
          id="testimonials"
          eyebrow="Client love"
          title={<>Trusted by <span className="text-gradient-ember">founders & studios.</span></>}
          sub="Thirty-four reviews from clients across four continents. Real names. Real outcomes."
        >
          <Testimonials />
        </Section>
        <WhyChoose />
        <GlobalArea />
        <Section
          id="faq"
          eyebrow="Questions"
          title={<>Frequently <span className="text-gradient-ember">asked.</span></>}
          sub="Everything you'd usually ask on the first call — answered up front."
        >
          <FAQ />
        </Section>
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
