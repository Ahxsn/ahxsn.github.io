import { TESTIMONIALS } from "./data";

const ACCENTS = ["#ef4444", "#f43f5e", "#fb7185", "#dc2626", "#e11d48", "#f97316"];

function handleFrom(name: string) {
  const parts = name.toLowerCase().split(" ");
  return "@" + parts[0] + (parts[1] ? parts[1][0] : "");
}

function Card({ t, accent }: { t: (typeof TESTIMONIALS)[number]; accent: string }) {
  const initials = t.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <figure className="w-[360px] sm:w-[420px] shrink-0 rounded-2xl border border-foreground/10 bg-card p-5 hover:ring-ember-glow transition-shadow">
      <header className="flex items-center gap-3">
        <div
          className="h-11 w-11 shrink-0 rounded-full grid place-items-center text-sm font-semibold text-white ring-2 ring-background"
          style={{ background: `linear-gradient(135deg, ${accent}, var(--ember))` }}
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-sm truncate">{t.name}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" className="text-ember shrink-0">
              <path fill="currentColor" d="M12 2 9.6 8.6 3 9l5.1 4.6L6.4 21 12 17.5 17.6 21l-1.7-7.4L21 9l-6.6-.4Z" />
            </svg>
          </div>
          <div className="text-xs text-muted-foreground truncate">{handleFrom(t.name)}</div>
        </div>
        <div className="text-ember text-xs tracking-tight">★★★★★</div>
      </header>
      <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85 line-clamp-5">"{t.text}"</blockquote>
      <div className="mt-3 text-[11px] text-muted-foreground/80">{t.role}</div>
    </figure>
  );
}

function Row({ items, direction, duration }: { items: (typeof TESTIMONIALS)[number][]; direction: "left" | "right"; duration: number }) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden marquee-mask">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} accent={ACCENTS[i % ACCENTS.length]} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  const top = TESTIMONIALS.slice(0, half);
  const bottom = TESTIMONIALS.slice(half);
  return (
    <div className="flex flex-col gap-5">
      <Row items={top} direction="left" duration={80} />
      <Row items={bottom} direction="right" duration={90} />
    </div>
  );
}