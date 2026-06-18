import { motion } from "framer-motion";
import { PROJECTS } from "./data";

function Card({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl border border-foreground/10 bg-card overflow-hidden hover:ring-ember-glow transition-shadow"
    >
      {/* Fixed-height viewport. On hover, the tall screenshot translates
          upward to reveal the full design smoothly from top to bottom. */}
      <div className="relative h-[420px] overflow-hidden bg-surface-2">
        <div className="absolute inset-x-4 top-4 bottom-4 rounded-xl overflow-hidden ring-1 ring-foreground/10 shadow-2xl">
          <div
            className="will-change-transform"
            style={{
              transition: "transform 12s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: "translateY(0%)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              const parent = el.parentElement!;
              const distance = el.scrollHeight - parent.clientHeight;
              el.style.transition = "transform 12s cubic-bezier(0.22, 1, 0.36, 1)";
              el.style.transform = `translateY(-${distance}px)`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transition = "transform 2.4s cubic-bezier(0.22, 1, 0.36, 1)";
              el.style.transform = "translateY(0px)";
            }}
          >
            <img
              src={p.image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="block w-full h-auto select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>
        <div className="absolute top-6 left-6 z-10 inline-flex items-center gap-2 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-foreground/80 border border-foreground/10">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent, boxShadow: `0 0 10px ${p.accent}` }} />
          {p.tag}
        </div>
      </div>

      <div className="p-6">
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.category}</span>
        <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
      </div>
    </motion.article>
  );
}

export function ProjectShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((p, i) => <Card key={p.title} p={p} i={i} />)}
    </div>
  );
}