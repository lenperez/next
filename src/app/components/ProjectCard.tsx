import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { useTheme } from "../context/ThemeContext";

interface ProcessStep {
  label: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  synopsis: string;
  image: string;
  tag: string;
  year: string;
  steps: ProcessStep[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProcessModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { isDark } = useTheme();

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={`fixed inset-0 z-50 backdrop-blur-sm flex items-end md:items-center justify-center ${
          isDark ? "bg-black/75" : "bg-black/40"
        }`}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`
            relative w-full h-full overflow-y-auto border
            md:h-auto md:max-h-[85vh] md:max-w-[480px] md:rounded-2xl md:mx-4
            ${isDark ? "bg-[#111318] border-white/[0.08]" : "bg-white border-black/[0.1] shadow-2xl"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className={`sticky top-4 left-full ml-auto mr-4 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
              isDark ? "bg-white/10 hover:bg-white/20 text-white/60 hover:text-white" : "bg-black/10 hover:bg-black/20 text-black/60 hover:text-black"
            }`}
            style={{ float: "right" }}
          >
            <X size={16} />
          </button>

          {/* Image */}
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />

          <div className="px-6 py-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full font-medium text-blue-400 bg-blue-500/10">
                {project.tag}
              </span>
            </div>
            <h3
              className={`${isDark ? "text-white" : "text-black"} mb-1 transition-colors`}
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </h3>
            <p className={`${isDark ? "text-white/40" : "text-black/60"} text-sm leading-relaxed mb-5 transition-colors`}>
              {project.synopsis}
            </p>

            {/* Process steps */}
            <p className={`${isDark ? "text-white/30" : "text-black/40"} text-xs tracking-widest uppercase mb-4`}>
              Process &amp; Approach
            </p>
            <div className="flex flex-col gap-3">
              {project.steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.35,
                  }}
                  className={`border rounded-xl p-4 transition-colors ${
                    isDark
                      ? "bg-white/[0.03] border-white/[0.06] hover:border-blue-700/25"
                      : "bg-black/[0.02] border-black/[0.06] hover:border-blue-700/25"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-semibold shrink-0 bg-blue-700/20 text-blue-400">
                      {i + 1}
                    </span>
                    <h4
                      className={`${isDark ? "text-white/80" : "text-black/80"} text-xs tracking-wider uppercase`}
                      style={{ fontWeight: 600 }}
                    >
                      {step.label}
                    </h4>
                  </div>
                  <p className={`${isDark ? "text-white/40" : "text-black/60"} text-xs leading-relaxed`}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group"
      >
        <div
          className={`rounded-2xl overflow-hidden border transition-all duration-300 backdrop-blur-[30px] ${
            expanded
              ? isDark
                ? "border-blue-700/30 bg-black/60"
                : "border-blue-700/30 bg-white"
              : isDark
                ? "border-white/[0.06] bg-black/50 hover:border-white/[0.12] hover:bg-black/60"
                : "border-black/[0.08] bg-white/90 shadow-sm hover:border-black/[0.16] hover:bg-white"
          }`}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-0">
            {/* Image — clicking opens modal */}
            <div
              className="md:w-2/5 overflow-hidden cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-56 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="md:w-3/5 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full font-medium text-blue-400 bg-blue-500/10">
                    {project.tag}
                  </span>
                  <span className={`text-xs ${isDark ? "text-white/30" : "text-black/40"}`}>
                    {project.year}
                  </span>
                </div>

                <h3
                  className={`${isDark ? "text-white" : "text-black"} mb-3 transition-colors`}
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>
                <p className={`${isDark ? "text-white/40" : "text-black/50"} text-sm leading-relaxed mb-2 transition-colors`}>
                  {project.subtitle}
                </p>
                <p className={`${isDark ? "text-white/60" : "text-black/70"} text-sm leading-relaxed line-clamp-3 transition-colors`}>
                  {project.synopsis}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6">
                {/* Process Overview — inline expand on all screen sizes */}
                <span
                  onClick={() => setExpanded(!expanded)}
                  className="text-blue-400 hover:bg-blue-500/10 text-sm flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all cursor-pointer font-medium"
                >
                  {expanded ? "Collapse" : "Process Overview"}
                  <motion.div
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </span>

                {/* Arrow — opens modal */}
                <button
                  onClick={() => setModalOpen(true)}
                  className={`p-2 rounded-full transition-all cursor-pointer ${
                    isDark ? "hover:bg-white/10" : "hover:bg-black/5"
                  }`}
                >
                  <ArrowUpRight
                    size={18}
                    className={`${
                      isDark ? "text-white/20 group-hover:text-white/50" : "text-black/30 group-hover:text-black/60"
                    } transition-colors`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Inline expanded process steps */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >
                <div className={`border-t px-8 py-8 ${isDark ? "border-white/[0.06]" : "border-black/[0.06]"}`}>
                  <p className={`${isDark ? "text-white/30" : "text-black/40"} text-xs tracking-widest uppercase mb-6`}>
                    Process &amp; Approach
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.steps.map((step, i) => (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: i * 0.07,
                          duration: 0.4,
                        }}
                        className={`backdrop-blur-[30px] border rounded-xl p-4 transition-colors ${
                          isDark
                            ? "bg-black/50 border-white/[0.06] hover:border-blue-700/25"
                            : "bg-white border-black/[0.06] hover:border-blue-700/25 shadow-xs"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-semibold bg-blue-700/20 text-blue-400">
                            {i + 1}
                          </span>
                          <h4
                            className={`${isDark ? "text-white/80" : "text-black/80"} text-xs tracking-wider uppercase`}
                            style={{ fontWeight: 600 }}
                          >
                            {step.label}
                          </h4>
                        </div>
                        <p className={`${isDark ? "text-white/40" : "text-black/60"} text-xs leading-relaxed`}>
                          {step.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.article>

      {modalOpen && (
        <ProcessModal
          project={project}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export type { Project };
