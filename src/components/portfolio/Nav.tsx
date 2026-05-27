import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import logoImg from "@/assets/logo.png";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Clients" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-5 sm:px-8`}>
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all ${
          scrolled ? "glass ring-1 ring-foreground/10" : "bg-transparent"
        }`}>
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-foreground p-1 ring-1 ring-foreground/20">
              <img src={logoImg} alt="" aria-hidden="true" className="h-full w-full object-contain" />
              <span className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-br from-ember to-ember-glow opacity-60 blur" />
            </span>
            <span className="text-base tracking-tight">Ahsan<span className="text-ember">.</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}
                className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-ember scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="h-9 w-9 rounded-xl glass grid place-items-center hover:ring-ember-glow transition"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>
              )}
            </button>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition">
              Hire me
              <span aria-hidden>→</span>
            </a>
            <button onClick={() => setOpen((v) => !v)} className="md:hidden h-9 w-9 rounded-xl glass grid place-items-center" aria-label="Menu">
              <span className="flex flex-col gap-1.5">
                <span className={`h-px w-4 bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
                <span className={`h-px w-4 bg-current transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-5 mt-2 glass rounded-2xl p-3"
          >
            <nav className="flex flex-col">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm text-foreground/90 hover:text-ember">
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}