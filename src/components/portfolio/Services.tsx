import { motion } from "framer-motion";
import { SERVICES } from "./data";

/**
 * Service icons — inline SVGs (no extra deps), each visually
 * tied to the service it represents.
 */
function Icon({ name }: { name: string }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "figma":
      return (
        <svg {...common}>
          <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H12v5H7.5A2.5 2.5 0 0 1 5 5.5Z" />
          <path d="M12 3h4.5A2.5 2.5 0 0 1 19 5.5 2.5 2.5 0 0 1 16.5 8H12V3Z" />
          <path d="M5 12a2.5 2.5 0 0 1 2.5-2.5H12v5H7.5A2.5 2.5 0 0 1 5 12Z" />
          <path d="M12 9.5h4.5A2.5 2.5 0 1 1 14 14.5H12v-5Z" />
          <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H12v2.5A2.5 2.5 0 1 1 5 18.5Z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 13 9 5 9-5" />
          <path d="m3 17 9 5 9-5" />
        </svg>
      );
    case "blocks":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M14 17.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z" />
        </svg>
      );
    case "shopping":
      return (
        <svg {...common}>
          <path d="M3 3h2l2.4 12.6A2 2 0 0 0 9.4 17H19a2 2 0 0 0 2-1.6L22 8H6" />
          <circle cx="10" cy="20" r="1.5" />
          <circle cx="17" cy="20" r="1.5" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path d="M12 14 16 9" />
          <path d="M3 12a9 9 0 0 1 18 0" />
          <circle cx="12" cy="14" r="1.5" fill="currentColor" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

export function Services() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {SERVICES.map((s, i) => (
        <motion.article
          key={s.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card p-7"
        >
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-ember/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative flex items-start justify-between">
            <div className="h-14 w-14 rounded-2xl bg-ember/12 ring-1 ring-ember/30 text-ember grid place-items-center group-hover:bg-ember group-hover:text-white transition-colors duration-500">
              <Icon name={s.icon} />
            </div>
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.n}</span>
          </div>
          <h3 className="relative mt-6 text-xl font-semibold">{s.title}</h3>
          <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          <a href="#contact" className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ember opacity-80 group-hover:opacity-100 transition">
            Get a quote
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.article>
      ))}
    </div>
  );
}