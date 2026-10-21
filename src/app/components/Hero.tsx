import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Tooltip } from "./Tooltip";

export function Hero() {
  const { isDark } = useTheme();
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yKicker = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -30]);
  const yTitle = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -60]);
  const yDivider = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -42]);
  const yParagraph = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -25]);
  const yCta = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -15]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.75], shouldReduceMotion ? [1, 1] : [1, 0.15]);

  return (
    <section
      ref={heroRef}
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Foreground content with parallax differential planes */}
      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-10 text-center px-4 sm:px-7 max-w-4xl mx-auto will-change-transform"
      >
        <motion.div style={{ y: yKicker }}>
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className={`${isDark ? "text-blue-400" : "text-blue-700"} tracking-[0.35em] uppercase text-xs mb-6 font-semibold transition-colors leading-relaxed sm:leading-normal`}
          >
            <span className="block sm:inline">UX • Product</span>
            <span className="hidden sm:inline"> • </span>
            <span className="block sm:inline">Design • Thinker</span>
          </motion.p>
        </motion.div>

        <motion.div style={{ y: yTitle }}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
            className={`${isDark ? "text-white" : "text-neutral-900"} leading-none mb-6 transition-colors`}
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            Pieces
          </motion.h1>
        </motion.div>

        <motion.div style={{ y: yDivider }}>
          <motion.div
            initial={{ opacity: 0, y: -12, scaleX: 0 }}
            animate={{ opacity: 1, y: 0, scaleX: 1 }}
            transition={{ delay: 1.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
            className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"
          />
        </motion.div>

        <motion.div style={{ y: yParagraph }}>
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.16, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className={`${isDark ? "text-white/80" : "text-neutral-700"} text-lg leading-relaxed max-w-xl mx-auto transition-colors`}
          >
            Some of the work of Len Perez, spanning: user research,{" "}
            <span className="whitespace-nowrap">visual / interaction / ux design</span>, and
            high-fidelity product experiences.
          </motion.p>
        </motion.div>

        <motion.div style={{ y: yCta }}>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.24, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <Tooltip content="Explore featured case studies and work" position="top">
              <a
                href="#work"
                aria-label="View Work - navigate to featured projects section"
                className={`group inline-flex items-center text-sm tracking-widest uppercase font-medium transition-all duration-200 px-5 py-2.5 rounded-full border hover:bg-blue-100 hover:text-blue-900 hover:border-transparent focus-visible:bg-blue-100 focus-visible:text-blue-900 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-blue-900/40 focus-visible:outline-none ${
                  isDark
                    ? "text-white/80 border-white/20"
                    : "text-neutral-800 border-black/15"
                }`}
              >
                <span className="transition-colors group-hover:text-blue-900 group-focus-visible:text-blue-900">View Work</span>
                <span
                  className="inline-flex items-center transition-all duration-300 ease-out opacity-0 max-w-0 -translate-y-1 ml-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-6 group-hover:translate-y-0 group-hover:ml-2 group-focus-visible:opacity-100 group-focus-visible:max-w-6 group-focus-visible:translate-y-0 group-focus-visible:ml-2"
                >
                  <ArrowDown size={16} aria-hidden="true" className="shrink-0 transition-colors group-hover:text-blue-900 group-focus-visible:text-blue-900" />
                </span>
              </a>
            </Tooltip>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

