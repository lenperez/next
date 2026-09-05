import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Tooltip } from "./Tooltip";

export function Hero() {
  const { isDark } = useTheme();

  return (
    <section aria-label="Introduction" className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Foreground content — scrolls at normal 1× speed */}
      <div className="relative z-10 text-center px-4 sm:px-7 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className={`${isDark ? "text-blue-400" : "text-blue-700"} tracking-[0.35em] uppercase text-xs mb-6 font-semibold transition-colors leading-relaxed sm:leading-normal`}
        >
          <span className="block sm:inline">UX • Product</span>
          <span className="hidden sm:inline"> • </span>
          <span className="block sm:inline">Design • Thinker</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`${isDark ? "text-white" : "text-neutral-900"} leading-none mb-6 transition-colors`}
          style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
        >
          Pieces
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          aria-hidden="true"
          className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className={`${isDark ? "text-white/80" : "text-neutral-700"} text-lg leading-relaxed max-w-xl mx-auto transition-colors`}
        >
          Some of my work, spanning: user research,{" "}
          <span className="whitespace-nowrap">visual / interaction / ux design</span>, and
          high-fidelity product experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12"
        >
          <Tooltip content="Explore featured case studies and work" position="top">
            <a
              href="#work"
              aria-label="View Work - navigate to featured projects section"
              className={`inline-flex items-center gap-2 text-sm tracking-widest uppercase font-medium transition-all px-5 py-2.5 rounded-full ${
                isDark
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-neutral-800 hover:text-black hover:bg-black/5"
              }`}
            >
              <span>View Work</span>
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                <ArrowDown size={16} aria-hidden="true" />
              </motion.div>
            </a>
          </Tooltip>
        </motion.div>
      </div>

      {/* Bottom label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        aria-hidden="true"
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[92vw] text-center text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-medium transition-colors leading-relaxed sm:leading-normal ${
          isDark ? "text-white/40" : "text-neutral-600"
        }`}
      >
        <span className="block sm:inline">Pieces –</span>{" "}
        <span className="block sm:inline">A Collection of My Work</span>
      </motion.p>
    </section>
  );
}

