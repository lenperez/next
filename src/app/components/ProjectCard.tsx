import { useState, useRef, useEffect } from "react";
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
  triggerElement,
}: {
  project: Project;
  onClose: () => void;
  triggerElement: HTMLElement | null;
}) {
  const { isDark } = useTheme();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Focus trap, Escape key handling, and Scroll Locking (WCAG 2.1 Dialog Pattern)
  useEffect(() => {
    // Lock background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button initially
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      // Restore focus back to the triggering element
      triggerElement?.focus();
    };
  }, [onClose, triggerElement]);

  return createPortal(
    <AnimatePresence>
      <div
        className={`fixed inset-0 z-50 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4 ${
          isDark ? "bg-black/80" : "bg-black/50"
        }`}
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${project.id}`}
          aria-describedby={`modal-synopsis-${project.id}`}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`
            relative w-full max-h-[90dvh] md:max-h-[85vh] overflow-y-auto border rounded-t-2xl md:rounded-2xl md:max-w-[540px] shadow-2xl
            ${isDark ? "bg-[#111318] border-white/15 text-white" : "bg-white border-black/15 text-neutral-900"}
          `}
          style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label={`Close modal for ${project.title}`}
            className={`sticky top-4 right-4 ml-auto mr-4 mt-4 z-10 flex items-center justify-center w-9 h-9 rounded-full transition-all ${
              isDark
                ? "bg-white/10 hover:bg-white/20 text-white focus-visible:ring-2 focus-visible:ring-blue-400"
                : "bg-black/10 hover:bg-black/20 text-neutral-900 focus-visible:ring-2 focus-visible:ring-blue-600"
            }`}
            style={{ float: "right" }}
          >
            <X size={18} aria-hidden="true" />
          </button>

          {/* Image */}
          <ImageWithFallback
            src={project.image}
            alt={`Visual preview of ${project.title}`}
            className="w-full h-52 object-cover"
          />

          <div className="px-6 py-6 sm:px-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs tracking-widest uppercase px-3 py-1 rounded-full font-semibold ${
                isDark ? "text-blue-400 bg-blue-500/15" : "text-blue-800 bg-blue-100"
              }`}>
                {project.tag}
              </span>
              <span className={`text-xs font-medium ${isDark ? "text-white/60" : "text-neutral-600"}`}>
                {project.year}
              </span>
            </div>

            <h3
              id={`modal-title-${project.id}`}
              className={`${isDark ? "text-white" : "text-neutral-900"} mb-1 transition-colors`}
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </h3>
            <p className={`${isDark ? "text-blue-400" : "text-blue-700"} text-xs font-semibold uppercase tracking-wider mb-3`}>
              {project.subtitle}
            </p>
            <p
              id={`modal-synopsis-${project.id}`}
              className={`${isDark ? "text-white/80" : "text-neutral-700"} text-sm leading-relaxed mb-6 transition-colors`}
            >
              {project.synopsis}
            </p>

            {/* Process steps */}
            <p className={`${isDark ? "text-white/60" : "text-neutral-700"} text-xs font-bold tracking-widest uppercase mb-4`}>
              Process &amp; Approach
            </p>
            <div className="flex flex-col gap-3">
              {project.steps.map((step, i) => (
                <div
                  key={step.label}
                  className={`border rounded-xl p-4 transition-colors ${
                    isDark
                      ? "bg-white/[0.04] border-white/10"
                      : "bg-neutral-50 border-black/10"
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className={`w-5 h-5 rounded-full text-[11px] flex items-center justify-center font-bold shrink-0 ${
                      isDark ? "bg-blue-600/30 text-blue-300" : "bg-blue-600 text-white"
                    }`} aria-hidden="true">
                      {i + 1}
                    </span>
                    <h4
                      className={`${isDark ? "text-white" : "text-neutral-900"} text-xs tracking-wider uppercase font-semibold`}
                    >
                      {step.label}
                    </h4>
                  </div>
                  <p className={`${isDark ? "text-white/75" : "text-neutral-700"} text-xs leading-relaxed`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
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
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const imageTriggerRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveTrigger = useRef<HTMLElement | null>(null);
  const { isDark } = useTheme();

  const handleOpenModal = (trigger: HTMLElement | null) => {
    lastActiveTrigger.current = trigger;
    setModalOpen(true);
  };

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
        aria-label={`${project.title} - ${project.subtitle}`}
        className="group"
      >
        <div
          className={`rounded-2xl overflow-hidden border transition-all duration-300 backdrop-blur-[30px] ${
            expanded
              ? isDark
                ? "border-blue-500/40 bg-black/70"
                : "border-blue-600/40 bg-white"
              : isDark
                ? "border-white/10 bg-black/50 hover:border-white/20 hover:bg-black/60"
                : "border-black/10 bg-white/90 shadow-sm hover:border-black/20 hover:bg-white"
          }`}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-0">
            {/* Image button — accessible click/keyboard trigger for modal */}
            <button
              ref={imageTriggerRef}
              type="button"
              onClick={() => handleOpenModal(imageTriggerRef.current)}
              aria-label={`Open detailed case study for ${project.title}`}
              className="w-full text-left md:w-2/5 overflow-hidden group/img relative cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <ImageWithFallback
                src={project.image}
                alt={`Case study visual representation of ${project.title}`}
                className="w-full h-56 md:h-72 object-cover transition-transform duration-700 group-hover/img:scale-105"
              />
              <span className="sr-only">Click to view full case study</span>
            </button>

            {/* Content */}
            <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs tracking-widest uppercase px-3 py-1 rounded-full font-semibold ${
                    isDark ? "text-blue-400 bg-blue-500/15" : "text-blue-800 bg-blue-100"
                  }`}>
                    {project.tag}
                  </span>
                  <span className={`text-xs font-medium ${isDark ? "text-white/60" : "text-neutral-600"}`}>
                    {project.year}
                  </span>
                </div>

                <h3
                  className={`${isDark ? "text-white" : "text-neutral-900"} mb-2 transition-colors`}
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>
                <p className={`${isDark ? "text-blue-400" : "text-blue-700"} text-sm font-medium leading-relaxed mb-3 transition-colors`}>
                  {project.subtitle}
                </p>
                <p className={`${isDark ? "text-white/80" : "text-neutral-700"} text-sm leading-relaxed line-clamp-3 transition-colors`}>
                  {project.synopsis}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6">
                {/* Process Overview — accessible interactive button */}
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                  aria-controls={`process-steps-${project.id}`}
                  aria-label={`${expanded ? "Collapse" : "Expand"} process steps for ${project.title}`}
                  className={`text-sm font-semibold flex items-center gap-2 px-4 py-2 rounded-full transition-all cursor-pointer ${
                    isDark
                      ? "text-blue-400 hover:bg-blue-500/15 hover:text-blue-300"
                      : "text-blue-700 hover:bg-blue-100 hover:text-blue-900"
                  }`}
                >
                  <span>{expanded ? "Collapse" : "Process Overview"}</span>
                  <motion.div
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} aria-hidden="true" />
                  </motion.div>
                </button>

                {/* Arrow — opens modal */}
                <button
                  ref={triggerRef}
                  type="button"
                  onClick={() => handleOpenModal(triggerRef.current)}
                  aria-label={`Open detailed case study modal for ${project.title}`}
                  className={`p-2.5 rounded-full transition-all cursor-pointer ${
                    isDark ? "hover:bg-white/10 text-white/60 hover:text-white" : "hover:bg-black/5 text-neutral-600 hover:text-black"
                  }`}
                >
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Inline expanded process steps */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                id={`process-steps-${project.id}`}
                role="region"
                aria-label={`Process and approach steps for ${project.title}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >
                <div className={`border-t px-6 py-6 sm:px-8 sm:py-8 ${isDark ? "border-white/10" : "border-black/10"}`}>
                  <p className={`${isDark ? "text-white/60" : "text-neutral-700"} text-xs font-bold tracking-widest uppercase mb-6`}>
                    Process &amp; Approach
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.steps.map((step, i) => (
                      <div
                        key={step.label}
                        className={`border rounded-xl p-4 transition-colors ${
                          isDark
                            ? "bg-black/60 border-white/10 hover:border-blue-500/30"
                            : "bg-neutral-50 border-black/10 hover:border-blue-600/30 shadow-xs"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold shrink-0 ${
                              isDark ? "bg-blue-600/30 text-blue-300" : "bg-blue-600 text-white"
                            }`}
                            aria-hidden="true"
                          >
                            {i + 1}
                          </span>
                          <h4
                            className={`${isDark ? "text-white" : "text-neutral-900"} text-xs tracking-wider uppercase font-semibold`}
                          >
                            {step.label}
                          </h4>
                        </div>
                        <p className={`${isDark ? "text-white/75" : "text-neutral-700"} text-xs leading-relaxed`}>
                          {step.description}
                        </p>
                      </div>
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
          triggerElement={lastActiveTrigger.current}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export type { Project };

