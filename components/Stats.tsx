"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-mono bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-zinc-500 text-sm mt-2">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-6 border-y border-white/5">
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <AnimatedCounter target={100} label="GitHub Stars" suffix="+" />
        <AnimatedCounter target={12} label="Capture latency" suffix="ms" />
        <AnimatedCounter target={0} label="Cloud dependencies" />
        <AnimatedCounter target={100} label="Local & private" suffix="%" />
      </motion.div>
    </section>
  );
}
