"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TRUST_STATS } from "@/lib/constants";
import { revealVariants, staggerContainer } from "@/lib/motion";

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export function TrustRibbon() {
  return (
    <section className="bg-emerald border-y border-gold/20" aria-label="Key facts">
      <motion.div
        className="content-container py-5 md:py-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {TRUST_STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={revealVariants}
              className="flex items-baseline gap-1.5 text-ivory"
            >
              <span className="text-2xl md:text-3xl font-serif text-gold-soft font-light">
                {stat.isPlaceholder ? (
                  <span className="text-lg opacity-70">{stat.value}</span>
                ) : (
                  <>
                    <CountUp target={parseInt(stat.value)} />
                    {stat.suffix}
                  </>
                )}
                {"extra" in stat && stat.extra && (
                  <span className="text-lg ml-1">{stat.extra}</span>
                )}
              </span>
              <span className="text-ivory/70 text-xs md:text-sm uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
