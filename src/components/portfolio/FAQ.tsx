import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "./data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-foreground/10 border-y border-foreground/10">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            >
              <span className="text-lg sm:text-xl font-medium text-foreground group-hover:text-ember transition-colors">
                {f.q}
              </span>
              <span className={`h-9 w-9 shrink-0 rounded-full border border-foreground/15 grid place-items-center transition-transform ${isOpen ? "rotate-45 bg-ember text-primary-foreground border-ember" : ""}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-muted-foreground leading-relaxed max-w-3xl">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}