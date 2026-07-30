import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Hero() {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center">

      {/* Foreground content — scrolls at normal 1× speed */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-blue-400 tracking-[0.35em] uppercase text-xs mb-6 font-semibold"
        >
          UX • Product • Design • Thinker
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`${isDark ? "text-white" : "text-black"} leading-none mb-6 transition-colors`}
          style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
        >
          Pieces
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className={`${isDark ? "text-white/50" : "text-black/60"} text-lg leading-relaxed max-w-xl mx-auto transition-colors`}
        >
          A collection of work spanning research, interaction design, and high-fidelity product experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12"
        >
          <a
            href="#work"
            className={`inline-flex items-center gap-2 text-sm tracking-widest uppercase transition-all px-5 py-2 rounded-full ${
              isDark
                ? "text-white/40 hover:text-white/80 hover:bg-white/10"
                : "text-black/50 hover:text-black/80 hover:bg-black/5"
            }`}
          >
            <span>View Work</span>
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Bottom label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase transition-colors ${
          isDark ? "text-white/20" : "text-black/30"
        }`}
      >
        Pieces — A Collection of Work
      </motion.p>
    </section>
  );
}

