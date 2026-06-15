import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SKILLS = [
  { name: "WordPress", color: "#21759B", path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-8.6 10c0-1.2.2-2.4.7-3.5l4.8 13.1a8.6 8.6 0 0 1-5.5-9.6Zm8.6 8.6c-.8 0-1.6-.1-2.4-.3l2.6-7.6 2.7 7.4-.1.2c-.9.2-1.8.3-2.8.3Zm1.2-12.6c.5 0 1-.1 1-.1.5 0 .4-.8 0-.7 0 0-1.5.1-2.5.1l-2.3-.1c-.4 0-.5.8 0 .7 0 0 .5.1.9.1l1.4 3.9-2 6L4.7 7.7c.5 0 1-.1 1-.1.5 0 .4-.8 0-.7 0 0-1.5.1-2.4.1A8.6 8.6 0 0 1 12 3.4c2.2 0 4.1.8 5.6 2.2h-.4c-.8 0-1.4.7-1.4 1.5 0 .7.4 1.3.8 2 .3.6.7 1.4.7 2.4 0 .7-.3 1.6-.7 2.7l-.8 2.6L13 7.7Zm2.4 12.1L17 14l1.8-5c.3-.7.4-1.3.4-1.9l-.1-.7a8.6 8.6 0 0 1-3.7 13.4Z" },
  { name: "React", color: "#61DAFB", path: "M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 4.5c-5 0-9-2-9-4.5S7 9 12 9s9 2 9 4.5-4 4.5-9 4.5Zm0-1.6c4 0 7.4-1.4 7.4-2.9S16 9.6 12 9.6s-7.4 1.4-7.4 2.9 3.4 2.9 7.4 2.9Zm-6.5 4.7c-2.2-1.3-2.4-5.6.2-9.6 2.5-4 5.9-6.4 8-5.1 2.2 1.3 2.5 5.6-.1 9.6-2.5 4-5.9 6.4-8.1 5.1Zm.8-1.4c1.5.9 4.4-1.2 6.5-4.4 2-3.2 2.3-6.5.8-7.4-1.5-.9-4.5 1.2-6.5 4.5-2 3.1-2.3 6.5-.8 7.3Zm12.2 1.4c-2.2 1.3-5.6-1.1-8.1-5.1-2.5-4-2.3-8.3-.1-9.6 2.2-1.3 5.6 1.1 8.1 5.1 2.6 4 2.3 8.3.1 9.6Zm-.8-1.4c1.5-.9 1.2-4.2-.8-7.3-2-3.3-5-5.4-6.5-4.5-1.5.9-1.2 4.2.8 7.4 2.1 3.2 5 5.3 6.5 4.4Z" },
  { name: "Tailwind", color: "#38BDF8", path: "M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 2 1.4 1 1 2.2 2.2 4.5 2.2 2.6 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-2-1.4-1-1.1-2.2-2.2-4.5-2.2Zm-5 6c-2.6 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 2 1.4 1 1 2.2 2.2 4.5 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-2-1.4-1-1.1-2.2-2.2-4.5-2.2Z" },
  { name: "Elementor", color: "#92003B", path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-3 6h1.5v8H9V8Zm3 0h6v1.5h-6V8Zm0 3.2h6v1.6h-6v-1.6ZM12 14.5h6V16h-6v-1.5Z" },
  { name: "Woo", color: "#7F54B3", path: "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-3 3v-3H5a2 2 0 0 1-2-2V6Zm3.5 2.2c-.4 0-.7.3-.7.7 0 1.1.3 2.6.9 3.7.2.5.5.7.8.6.5 0 1-.7 1.3-2 .2.7.5 1.3.8 1.8.2.2.4.3.6.3.4 0 .8-.3 1.1-1 .6-1.2 1-2.7 1-3.7 0-.4-.3-.7-.7-.7s-.7.3-.7.7c0 .8-.2 2-.7 3-.2-.6-.3-1.4-.4-2.2 0-.4-.3-.7-.7-.6-.4 0-.7.3-.7.7-.1.9-.3 1.7-.6 2.3-.4-1-.5-2.3-.5-3.2 0-.4-.3-.7-.8-.7Z" },
  { name: "JS", color: "#F7DF1E", path: "M4 3h16v18H4V3Zm8.5 13c0 1 .5 1.7 1.6 1.7s1.7-.5 1.7-2v-5h1.6v5c0 2-.9 3.4-3.3 3.4-2 0-3.3-1.1-3.3-3.1h1.7Zm-4.7-.1c.2.9.8 1.6 1.9 1.6.9 0 1.4-.5 1.4-1.1 0-.7-.4-1-1.5-1.4l-.6-.3c-1.7-.7-2.7-1.6-2.7-3.2 0-1.5 1.1-2.7 2.9-2.7 1.3 0 2.2.5 2.8 1.7l-1.5.9c-.3-.6-.6-.8-1.3-.8s-1.1.4-1.1.9c0 .6.4.9 1.4 1.3l.6.3c2 .9 3 1.7 3 3.4 0 1.8-1.4 2.8-3.3 2.8-1.9 0-3-.9-3.6-2.1l1.6-.9Z" },
  { name: "HTML", color: "#E34F26", path: "M3 3l1.7 18.3L12 23l7.3-1.7L21 3H3Zm14.2 5.8H8.9l.2 2.3h8l-.6 6.6-4.5 1.3-4.5-1.3-.3-3.4h2.2l.1 1.7 2.5.7 2.5-.7.3-2.9H7.8L7.2 6.5H17l.2 2.3Z" },
  { name: "CSS", color: "#1572B6", path: "M3 3l1.7 18.3L12 23l7.3-1.7L21 3H3Zm13.7 5.8H8.8l.2 2.3h7.4l-.6 6.6-4.5 1.3-4.5-1.3-.3-3.4h2.2l.2 1.7 2.4.7 2.5-.7.3-2.9H7.7L7.2 6.5h9.8l-.3 2.3Z" },
  { name: "Figma", color: "#F24E1E", path: "M8 2h4v6H8a3 3 0 0 1 0-6Zm0 8h4v6H8a3 3 0 0 1 0-6Zm0 8h4v2a3 3 0 0 1-3 3 3 3 0 0 1-1-5Zm6-16h2a3 3 0 0 1 0 6h-2V2Zm0 8a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" },
  { name: "SEO", color: "#22c55e", path: "M10 3a7 7 0 1 1-4.95 11.95L2 18l3.05-3.05A7 7 0 0 1 10 3Zm0 2a5 5 0 1 0 0 10A5 5 0 0 0 10 5Zm10 15-3-3 1.4-1.4L21 18.6 19.4 20Z" },
  { name: "Speed", color: "#f97316", path: "M12 3a9 9 0 0 0-9 9c0 2.4 1 4.6 2.5 6.2L4 20l1.8-1.5A9 9 0 1 0 12 3Zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm-1 3v5l4 2 .7-1.3-3.2-1.7V8H11Z" },
  { name: "UI/UX", color: "#a78bfa", path: "M4 5h16v10H4V5Zm-2 12h20v2H2v-2Zm5-7h2v4H7v-4Zm4-2h2v6h-2V8Zm4 3h2v3h-2v-3Z" },
  { name: "API", color: "#06b6d4", path: "M4 6h16v4H4V6Zm0 8h16v4H4v-4Zm2-6h2v2H6V8Zm0 8h2v2H6v-2Z" },
  { name: "Hosting", color: "#10b981", path: "M5 4h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 9h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Zm2-7v1h1V6H7Zm0 9v1h1v-1H7Z" },
];

function SkillBadge({ name, color, path, i }: (typeof SKILLS)[number] & { i: number }) {
  const angle = (i / SKILLS.length) * Math.PI * 2;
  const rx = 38 + (i % 3) * 4;
  const ry = 30 + (i % 2) * 6;
  const x = 50 + Math.cos(angle) * rx;
  const y = 50 + Math.sin(angle) * ry;
  const delay = (i % 5) * 0.4;
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, delay: delay * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 6, -4, 0] }}
        transition={{ duration: 6 + (i % 4), repeat: Infinity, ease: "easeInOut", delay }}
        whileHover={{ scale: 1.18, rotate: 12 }}
        className="glass rounded-2xl p-3 sm:p-4 will-change-transform"
        style={{ boxShadow: `0 10px 40px -10px ${color}66, 0 0 0 1px ${color}33 inset` }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path d={path} fill={color} />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export function FloatingSkills() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yB = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div ref={ref} className="relative aspect-square w-full max-w-[560px] mx-auto">
      <motion.div style={{ y: yA }} className="absolute inset-0 bg-radial-ember opacity-70" />
      <motion.div style={{ y: yB }} className="absolute inset-6 rounded-full border border-foreground/10" />
      <motion.div style={{ y: yA }} className="absolute inset-16 rounded-full border border-foreground/10" />
      <motion.div style={{ y: yB }} className="absolute inset-28 rounded-full border border-foreground/10" />
      {SKILLS.map((s, i) => (
        <SkillBadge key={s.name} {...s} i={i} />
      ))}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-2 glass ring-ember-glow text-sm font-semibold">
        Full Stack
      </div>
    </div>
  );
}

export { SKILLS };