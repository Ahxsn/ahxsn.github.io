import { TESTIMONIALS } from "./data";

const ACCENTS = ["#ef4444", "#f43f5e", "#fb7185", "#dc2626", "#e11d48", "#f97316", "#a855f7", "#6366f1", "#06b6d4", "#10b981"];

function handleFrom(name: string) {
  const parts = name.toLowerCase().split(" ");
  return "@" + parts[0] + (parts[1] ? parts[1][0] : "");
}

function Card({ t, accent }: { t: (typeof TESTIMONIALS)[number]; accent: string }) {
  const initials = t.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <figure className="w-[340px] sm:w-[380px] shrink-0 rounded-2xl border border-foreground/10 bg-card p-6 shadow-[0_1px_0_rgba(0,0,0,0.02),0_18px_40px_-24px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_1px_0_rgba(0,0,0,0.03),0_28px_60px_-28px_rgba(0,0,0,0.25)]">
      <header className="flex items-center gap-3">
        <div
          className="h-10 w-10 shrink-0 rounded-full grid place-items-center text-[13px] font-semibold text-white ring-2 ring-background"
          style={{ background: `linear-gradient(135deg, ${accent}, oklch(0.35 0.05 270))` }}
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="font-semibold text-[15px] text-foreground truncate">{t.name}</div>
          <div className="text-[13px] text-muted-foreground truncate">{handleFrom(t.name)}</div>
        </div>
      </header>
      <blockquote className="mt-4 text-[14.5px] leading-[1.65] text-foreground/75">
        {t.text}
      </blockquote>
    </figure>
  );
}

function Row({ items, direction, duration }: { items: (typeof TESTIMONIALS)[number][]; direction: "left" | "right"; duration: number }) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden marquee-mask">
      <div
        className="flex gap-5 w-max [animation-play-state:running] group-hover:[animation-duration:240s]"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite`,
          transition: "animation-duration 0.6s ease",
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
    <div className="flex flex-col gap-5 py-2">
      <Row items={top} direction="left" duration={80} />
      <Row items={bottom} direction="right" duration={90} />
    </div>
  );
}