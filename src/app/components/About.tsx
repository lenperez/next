import { motion } from "motion/react";
import { Layers, Users, BarChart2, Lightbulb } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const skills = [
  { icon: Users, label: "User Research", desc: "Persona development, heat mapping, user flows" },
  { icon: Layers, label: "UX Strategy", desc: "Heuristic analysis, storymapping, competitive research" },
  { icon: Lightbulb, label: "Design", desc: "Lo-fi wireframes, hi-fi comps, style guides" },
  { icon: BarChart2, label: "Analytics", desc: "Data-driven decisions, bounce rate analysis, screen sizing" },
];

export function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" aria-labelledby="about-heading" className="py-28 px-4 sm:px-7 relative" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className={`${isDark ? "text-blue-400" : "text-blue-700"} tracking-[0.3em] uppercase text-xs mb-4 font-semibold transition-colors`}>
              About
            </p>
            <h2
              id="about-heading"
              className={`${isDark ? "text-white" : "text-neutral-900"} mb-6 transition-colors`}
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
            >
              Designing experiences that are purposeful &amp; human.
            </h2>
            <p className={`${isDark ? "text-white/80" : "text-neutral-700"} leading-relaxed mb-4 transition-colors`}>
              I'm a UX designer with a process-first approach — every decision is grounded in research, validated through data, and refined through collaboration.
            </p>
            <p className={`${isDark ? "text-white/80" : "text-neutral-700"} leading-relaxed transition-colors`}>
              From redesigning enterprise eProcurement platforms to building style guides for medical community dashboards, I thrive where complexity meets clarity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4" role="list">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px 0px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`rounded-xl p-5 border transition-all duration-300 ${
                  isDark
                    ? "bg-[#111318]/90 border-white/10 hover:border-blue-500/30 hover:bg-[#161a22]"
                    : "bg-white/95 border-black/10 shadow-sm hover:border-blue-600/30 hover:bg-white"
                }`}
              >
                <skill.icon size={22} aria-hidden="true" className={isDark ? "text-blue-400 mb-3" : "text-blue-700 mb-3"} />
                <h3 className={`${isDark ? "text-white" : "text-neutral-900"} text-sm mb-1 transition-colors font-semibold`}>
                  {skill.label}
                </h3>
                <p className={`${isDark ? "text-white/75" : "text-neutral-700"} text-xs leading-relaxed transition-colors`}>
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



