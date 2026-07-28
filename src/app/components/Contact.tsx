import { motion } from "motion/react";
import { Mail, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Contact() {
  const { isDark } = useTheme();

  return (
    <section id="contact" className="py-28 px-6 relative" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div className={`rounded-3xl p-12 md:p-20 relative overflow-hidden backdrop-blur-[30px] border transition-all ${
          isDark
            ? "bg-black/50 border-white/[0.06]"
            : "bg-white/90 border-black/[0.08] shadow-sm"
        }`}>
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/5 to-blue-950/5" />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-800/12 blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-400 tracking-[0.3em] uppercase text-xs mb-4 font-semibold"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`${isDark ? "text-white" : "text-black"} mb-4 transition-colors`}
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
            >
              Let's build something together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`${isDark ? "text-white/40" : "text-black/60"} max-w-md mx-auto mb-12 leading-relaxed transition-colors`}
            >
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="mailto:lenperez@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-800 hover:bg-blue-700 text-white text-sm transition-colors shadow-sm"
                style={{ fontWeight: 600 }}
              >
                <Mail size={16} />
                lenperez@gmail.com
                <ExternalLink size={14} className="opacity-60" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

