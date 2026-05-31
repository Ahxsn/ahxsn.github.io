import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { ClientOnly } from "@/components/portfolio/ClientOnly";
import { Nav } from "@/components/portfolio/Nav";
import { FloatingSkills } from "@/components/portfolio/FloatingSkills";
import { ProjectShowcase } from "@/components/portfolio/ProjectShowcase";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Services } from "@/components/portfolio/Services";
import { FAQ } from "@/components/portfolio/FAQ";
import { STATS } from "@/components/portfolio/data";
import logoImg from "@/assets/logo.png";
import profileImg from "@/assets/profile.webp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muhammad Ahsan | Expert WordPress, Elementor & React Developer" },
      { name: "description", content: "Hire Muhammad Ahsan (Ahxsn) for premium WordPress, Elementor, WooCommerce, custom themes, custom plugins and high-converting landing page development. Fast, SEO-optimized, beautifully animated websites." },
      { property: "og:title", content: "Muhammad Ahsan | Expert WordPress, Elementor & React Developer" },
      { property: "og:description", content: "Pixel-perfect WordPress, WooCommerce, custom themes and custom plugin development. Core Web Vitals in the green. Available for new projects." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Muhammad Ahsan",
        alternateName: "Ahxsn",
        jobTitle: "Expert WordPress & Creative Frontend Developer",
        email: "m.ahxsn@gmail.com",
        telephone: "+92 303 9968120",
        url: "/",
        sameAs: ["https://www.linkedin.com/in/m-ahxsn", "https://github.com/Ahxsn", "https://wa.me/923039968120"],
        knowsAbout: ["WordPress", "Elementor", "WooCommerce", "Custom Themes", "Custom Plugins", "Landing Pages", "E-commerce", "React", "SEO"],
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

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-16">
        <div className="max-w-4xl">
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
            {["Expert", "WordPress", "Developer,", "shipped."].map((w, i) => (
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
            Hi, I'm <span className="text-foreground font-medium">Muhammad Ahsan</span>, a WordPress,
            Elementor and custom plugin specialist engineering high-converting, lightning-fast and SEO-optimized
            digital experiences. Sites that <span className="text-foreground">actually convert.</span>
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
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
          >
            {STATS.map((s) => (
              <div key={s.label} className="glass rounded-xl px-4 py-3">
                <div className="text-xl font-semibold">{s.value}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
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
  // Each item has a matching SVG glyph rendered identically across the ribbon.
  const items: { name: string; color: string; icon: React.ReactNode }[] = [
    {
      name: "WordPress", color: "#21759B",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-8.6 10a8.5 8.5 0 0 1 .7-3.4l4.7 12.9A8.6 8.6 0 0 1 3.4 12Zm8.6 8.6c-.8 0-1.6-.1-2.4-.4l2.5-7.4 2.6 7.1c-.8.5-1.7.7-2.7.7Zm1.2-12.6c.5 0 1-.1 1-.1.4 0 .4-.8 0-.8 0 0-1.5.1-2.4.1l-2.3-.1c-.5 0-.5.8 0 .8 0 0 .5.1.9.1l1.3 3.6-1.9 5.7L5.7 8c.4 0 .9-.1.9-.1.5 0 .4-.8 0-.8 0 0-1.4.1-2.4.1A8.6 8.6 0 0 1 12 3.4c2.4 0 4.5 1 6.1 2.5h-.4c-.8 0-1.4.7-1.4 1.4 0 .7.4 1.3.8 1.9.3.6.7 1.4.7 2.5 0 .8-.3 1.6-.7 2.7l-.9 2.9L13 8Zm2.5 12.1L18 14c.6-1.6.8-2.9.8-4.1l-.1-.7a8.6 8.6 0 0 1-3.5 10.9Z" /></svg>
      ),
    },
    {
      name: "Landing Pages", color: "#f97316",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 4v10h16V8H4Zm2 2h7v2H6v-2Zm0 4h5v2H6v-2Zm10-2h2v6h-2v-6Z" /></svg>
      ),
    },
    {
      name: "E-commerce Sites", color: "#7F54B3",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M3 4h2.2l.6 2H21l-2.5 8.5a2 2 0 0 1-1.9 1.5H8.1a2 2 0 0 1-2-1.6L4.2 4.5 3 4Zm5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg>
      ),
    },
    {
      name: "Elementor", color: "#92003B",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM9 7.5h1.5v9H9v-9Zm3.2 0H17V9h-4.8V7.5Zm0 3.7H17v1.6h-4.8v-1.6Zm0 3.8H17v1.5h-4.8V15Z" /></svg>
      ),
    },
    {
      name: "Custom Themes", color: "#a855f7",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M12 2a10 10 0 0 0-1 19.95c.5.06.9-.36.9-.86v-1.7c-3 .65-3.6-1.45-3.6-1.45A9.5 9.5 0 0 1 12 12a10 10 0 0 0 0-10Zm-5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" /></svg>
      ),
    },
    {
      name: "Custom Plugins", color: "#0ea5e9",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M14 2a2 2 0 0 0-2 2v2H8a2 2 0 0 0-2 2v4H4a2 2 0 1 0 0 4h2v4a2 2 0 0 0 2 2h4v-2a2 2 0 1 1 4 0v2h4a2 2 0 0 0 2-2v-4h-2a2 2 0 1 1 0-4h2V8a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2Z" /></svg>
      ),
    },
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-foreground/10 py-7 bg-surface">
      <div className="flex marquee-track gap-14 whitespace-nowrap text-2xl sm:text-3xl font-semibold tracking-tight">
        {doubled.map((w, i) => (
          <span key={i} className="flex items-center gap-5 shrink-0">
            <span className="grid place-items-center h-10 w-10 rounded-xl glass" style={{ color: w.color }}>
              {w.icon}
            </span>
            <span className={i % 3 === 0 ? "text-gradient-ember" : "text-foreground/85"}>{w.name}</span>
            <span className="text-ember/70 text-xl">✦</span>
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
      title={<>Engineered craft, executive <span className="text-gradient-ember">flexibility.</span></>}
      sub="A specialist partner for founders, agencies and enterprises building serious digital products. Strategic, deliberate and built to perform under real-world load."
    >
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 order-2 lg:order-1 space-y-5 text-lg text-foreground/85 leading-relaxed">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            I am a senior WordPress and frontend engineer specialising in the end-to-end delivery of premium
            digital platforms. My practice spans custom theme architecture, advanced Elementor systems, bespoke
            plugin engineering, WooCommerce commerce builds and high-performance React experiences.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            Every engagement is approached with a measurable mandate: maximise conversion, reduce technical
            debt, and ship sites that meet enterprise standards for speed, security, accessibility and search
            visibility. Strategy, design execution and engineering are tightly coupled under one accountable owner.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            The result is a partner that operates with the discipline of an agency, the velocity of a solo
            specialist and the long-term commitment of an in-house lead. Sites built for years of compounding return.
          </motion.p>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden ring-1 ring-foreground/15 ring-ember-glow">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-ember/40 via-ember-glow/20 to-transparent blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/0 to-background/60 z-10 pointer-events-none" />
              <img
                src={profileImg}
                alt=""
                aria-hidden="true"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover object-top select-none"
              />
              <div className="absolute bottom-4 left-4 z-20 glass rounded-xl px-3 py-2 text-xs">
                <div className="font-semibold">Muhammad Ahsan</div>
                <div className="text-muted-foreground">Sr. WordPress &amp; Frontend Engineer</div>
              </div>
            </div>
          </motion.div>
          <motion.aside
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full max-w-md mx-auto rounded-3xl border border-foreground/10 bg-card p-6 sm:p-7 ring-ember-glow"
          >
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Core competencies</div>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { t: "WordPress & Elementor", d: "Custom themes, block patterns and locked-down editor experiences." },
                { t: "Custom Plugins", d: "Purpose-built functionality engineered for security and scale." },
                { t: "WooCommerce", d: "Storefronts that load fast and check out faster." },
                { t: "Landing Pages", d: "High-conversion, CRO-optimised pages built for paid traffic." },
                { t: "React & Motion", d: "Cinematic frontends with measurable runtime performance." },
                { t: "SEO & Speed", d: "Technical SEO, schema and Core Web Vitals in the green." },
              ].map((x) => (
                <li key={x.t} className="flex gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full bg-ember/15 ring-1 ring-ember/40 grid place-items-center shrink-0">
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
      sub="From WordPress to WebGL. A connected toolkit that lets one developer ship what usually takes a team."
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
    { t: "Performance budget, day one", d: "Lighthouse 95+ on launch, with a maintenance plan to keep it there." },
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
            Tell me about your project. Goals, timeline and budget. I'll come back within one business day
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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch("https://formspree.io/f/xnjbyrpg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError("Could not send. Please email m.ahxsn@gmail.com directly.");
      }
    } catch {
      setError("Network issue. Please email m.ahxsn@gmail.com directly.");
    } finally {
      setSending(false);
    }
  };

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
            onSubmit={onSubmit}
            className="rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" placeholder="e.g. Sarah Thompson" />
              <Field label="Work email" name="email" type="email" placeholder="e.g. sarah@yourcompany.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Company or brand" name="company" placeholder="e.g. Acme Studio (optional)" required={false} />
              <Field label="Budget range (USD)" name="budget" placeholder="e.g. 2,500 to 8,000" required={false} />
            </div>
            <Field label="Project type" name="project_type" placeholder="WordPress build, Custom plugin, Landing page, WooCommerce store" />
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Project details</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Briefly describe your goals, ideal launch date and any reference links you'd like me to review."
                className="w-full rounded-xl border border-foreground/15 bg-background/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ember/60 transition"
              />
            </div>
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition ring-ember-glow"
            >
              {sent ? "Sent. Talk soon ✦" : sending ? "Sending..." : "Send inquiry"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </form>
        </div>
        <aside className="lg:col-span-5 space-y-5">
          <div className="rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Direct</div>
            <a href="mailto:m.ahxsn@gmail.com" className="mt-2 block text-2xl font-medium hover:text-ember transition">m.ahxsn@gmail.com</a>
            <div className="mt-1 text-sm text-muted-foreground">Replies within one business day.</div>
            <div className="mt-5 grid grid-cols-1 gap-3 text-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <a href="https://wa.me/923039968120" target="_blank" rel="noreferrer" className="hover:text-ember transition">+92 303 9968120</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Availability</div>
                <div>Booking new projects worldwide</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8 space-y-4">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Elsewhere</div>
            {[
              { l: "LinkedIn · m-ahxsn", h: "https://www.linkedin.com/in/m-ahxsn" },
              { l: "GitHub · Ahxsn", h: "https://github.com/Ahxsn" },
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

function Social({ href, label, path }: { href: string; label: string; path: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="h-10 w-10 grid place-items-center rounded-xl border border-foreground/15 text-foreground/70 hover:text-ember hover:border-ember/50 hover:ring-ember-glow transition"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d={path} />
      </svg>
    </a>
  );
}

function Footer() {
  const SOCIALS = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/m-ahxsn", path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z" },
    { label: "GitHub", href: "https://github.com/Ahxsn", path: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.93.68 1.88v2.78c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" },
    { label: "WhatsApp", href: "https://wa.me/923039968120", path: "M20.5 3.5A11 11 0 0 0 3.4 17.3L2 22l4.8-1.3a11 11 0 0 0 5.2 1.3 11 11 0 0 0 8.5-18.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.8.8-2.8-.2-.3a9 9 0 1 1 7.2 3.8Zm5-6.7c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.2s-.7.9-.8 1c-.1.2-.3.2-.6.1a7.4 7.4 0 0 1-3.6-3.2c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5 0-.8.4-.3.4-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.6 2 .8 2.8.8 3.8.7.6-.1 1.6-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.3Z" },
    { label: "Email", href: "mailto:m.ahxsn@gmail.com", path: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2v.3l8 5 8-5V7H4Zm16 2.4-7.4 4.6a1 1 0 0 1-1.2 0L4 9.4V17h16V9.4Z" },
  ];
  return (
    <footer className="relative mt-20 border-t border-foreground/10 bg-gradient-to-b from-background to-surface-2/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2.5 font-semibold">
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground p-1.5 ring-1 ring-foreground/20">
                <img src={logoImg} alt="" aria-hidden="true" className="h-full w-full object-contain" />
                <span className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-br from-ember to-ember-glow opacity-60 blur" />
              </span>
              <span className="text-lg">Ahsan<span className="text-ember">.</span></span>
            </a>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Expert WordPress and creative frontend developer crafting premium, performant
              websites for founders, studios and global brands.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => <Social key={s.label} {...s} />)}
            </div>
          </div>

          {/* Sitemap */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <FooterCol title="Site" links={[["About", "#about"], ["Services", "#services"], ["Work", "#work"], ["FAQ", "#faq"]]} />
            <FooterCol title="Skills" links={[["WordPress", "#skills"], ["Elementor", "#skills"], ["WooCommerce", "#skills"], ["React", "#skills"]]} />
          </div>

          {/* Contact card */}
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Get in touch</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:m.ahxsn@gmail.com" className="group flex items-center justify-between hover:text-ember transition">
                  <span>m.ahxsn@gmail.com</span>
                  <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923039968120" target="_blank" rel="noreferrer" className="group flex items-center justify-between hover:text-ember transition">
                  <span>WhatsApp · +92 303 9968120</span>
                  <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Ahxsn" target="_blank" rel="noreferrer" className="group flex items-center justify-between hover:text-ember transition">
                  <span>github.com/Ahxsn</span>
                  <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/m-ahxsn" target="_blank" rel="noreferrer" className="group flex items-center justify-between hover:text-ember transition">
                  <span>linkedin.com/in/m-ahxsn</span>
                  <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li className="flex items-center justify-between text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember animate-[pulse-glow_2s_ease-in-out_infinite]" />
                  Available for new projects worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Muhammad Ahsan. All rights reserved.</span>
          <span>Designed and developed with obsession.</span>
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
  // Disable right-click site-wide (and common save shortcuts).
  useEffect(() => {
    const blockContext = (e: MouseEvent) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (
        (e.ctrlKey || e.metaKey) && ["s", "u", "c"].includes(k) ||
        k === "f12" ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c"].includes(k))
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", blockContext);
    document.addEventListener("keydown", blockKeys);
    return () => {
      document.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

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
          id="services"
          eyebrow="What I do"
          title={<>Specialized <span className="text-gradient-ember">services.</span></>}
          sub="From concept to launch. Every service built for performance, conversion and growth."
        >
          <Services />
        </Section>
        <CTA />
        <Section
          id="work"
          eyebrow="Selected work"
          title={<>Recent <span className="text-gradient-ember">projects.</span></>}
          sub="Hover any card. The full-page design auto-scrolls top to bottom inside the frame."
        >
          <ProjectShowcase />
        </Section>
        <section id="testimonials" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ember animate-[pulse-glow_2.4s_ease-in-out_infinite]" />
                Client love
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
              >
                Trusted by <span className="text-gradient-ember">founders and studios.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                Real reviews from clients across four continents. Hover the marquee to slow it down.
              </motion.p>
            </div>
          </div>
          {/* Edge-to-edge marquee — breaks out of the page container */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <Testimonials />
          </div>
        </section>
        <WhyChoose />
        <Section
          id="faq"
          eyebrow="Questions"
          title={<>Frequently <span className="text-gradient-ember">asked.</span></>}
          sub="Everything you would usually ask on the first call, answered up front."
        >
          <FAQ />
        </Section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
