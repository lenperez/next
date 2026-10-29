import { useState } from "react";
import { motion } from "motion/react";
import { Layers, Users, BarChart2, Lightbulb } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { ImageWithFallback } from "./ImageWithFallback";

const skills = [
  { icon: Users, label: "User Research", desc: "Persona development, heat mapping, user flows" },
  { icon: Layers, label: "UX Strategy", desc: "Heuristic analysis, storymapping, competitive research" },
  { icon: Lightbulb, label: "Design", desc: "Lo-fi wireframes, hi-fi comps, style guides" },
  { icon: BarChart2, label: "Analytics", desc: "Data-driven decisions, bounce rate analysis, screen sizing" },
];

const ABOUT_IMAGES = [
  "/assets/aistudio/0_grade_6b449b67.jpg",
  "/assets/aistudio/1st_grade_96effda5.jpg",
  "/assets/aistudio/2nd_grade_5f4dd78d.jpg",
  "/assets/aistudio/4th_grade_ccccf49a.jpg",
  "/assets/aistudio/5th_grade_a93908f3.jpg",
  "/assets/aistudio/6th_grade_8c792b3d.jpg",
  "/assets/aistudio/7th_grade_814642fe.jpg",
];

function getNextAboutImage(): string {
  if (typeof window === "undefined") {
    return ABOUT_IMAGES[0];
  }
  try {
    const lastIndexStr = sessionStorage.getItem("about_avatar_idx");
    let nextIndex: number;
    if (lastIndexStr === null) {
      nextIndex = Math.floor(Math.random() * ABOUT_IMAGES.length);
    } else {
      const lastIndex = parseInt(lastIndexStr, 10);
      nextIndex = (lastIndex + 1) % ABOUT_IMAGES.length;
    }
    sessionStorage.setItem("about_avatar_idx", nextIndex.toString());
    return ABOUT_IMAGES[nextIndex];
  } catch {
    return ABOUT_IMAGES[Math.floor(Math.random() * ABOUT_IMAGES.length)];
  }
}

export function About() {
  const { isDark } = useTheme();
  const [currentImage] = useState<string>(() => getNextAboutImage());

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
              About me...
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-6">
              <div
                className={`relative shrink-0 w-24 sm:w-28 md:w-32 aspect-[3/4] rounded-2xl overflow-hidden border shadow-md transition-all duration-300 ${
                  isDark
                    ? "border-white/15 bg-white/5 ring-1 ring-white/10"
                    : "border-black/10 bg-black/5 ring-1 ring-black/5"
                }`}
              >
                <ImageWithFallback
                  src={currentImage}
                  alt="Len Perez — Product & UX Designer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h2
                id="about-heading"
                className={`${isDark ? "text-white" : "text-neutral-900"} transition-colors`}
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.18 }}
              >
                Designing experiences that are purposeful &amp; human.
              </h2>
            </div>

            <p className={`${isDark ? "text-white/80" : "text-neutral-700"} leading-relaxed mb-4 transition-colors`}>
              I'm a Product/UX Designer with a process-first approach — every decision is grounded in research, validated through data, and refined through collaboration.
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



