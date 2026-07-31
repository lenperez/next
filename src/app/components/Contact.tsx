import { motion } from "motion/react";
import { Mail, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Contact() {
  const { isDark } = useTheme();

  return (
    <section id="contact" className="py-28 px-6 relative" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`rounded-3xl p-12 md:p-20 relative overflow-hidden border transition-all ${
          isDark
            ? "bg-[#111318]/90 border-white/[0.08]"
            : "bg-white/95 border-black/[0.08] shadow-sm"
        }`}>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-800/10 pointer-events-none" style={{ filter: "blur(60px)" }} />

          <div className="relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px 0px" }}
              className="text-blue-400 tracking-[0.3em] uppercase text-xs mb-4 font-semibold"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px 0px" }}
              transition={{ delay: 0.05 }}
              className={`${isDark ? "text-white" : "text-black"} mb-4 transition-colors`}
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
            >
              Let's build something together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px 0px" }}
              transition={{ delay: 0.1 }}
              className={`${isDark ? "text-white/40" : "text-black/60"} max-w-md mx-auto mb-12 leading-relaxed transition-colors`}
            >
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px 0px" }}
              transition={{ delay: 0.15 }}
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



