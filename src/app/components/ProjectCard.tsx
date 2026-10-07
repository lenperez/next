import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronDown, X, Image as ImageIcon, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { useTheme } from "../context/ThemeContext";
import { Tooltip } from "./Tooltip";

export interface ProcessStep {
  label: string;
  description: string;
  image?: string;
  imageAlt?: string;
  placeholder?: boolean | string;
  placeholderText?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  synopsis: string;
  image: string;
  tag: string;
  year?: string;
  steps: ProcessStep[];
  showStepPlaceholders?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface LightboxData {
  src: string;
  alt: string;
  title: string;
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
  const [lightboxImage, setLightboxImage] = useState<LightboxData | null>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  // Check if content overflows to ensure scrollbar is rendered immediately when not all content is visible
  useEffect(() => {
    const checkOverflow = () => {
      if (modalRef.current) {
        const { scrollHeight, clientHeight } = modalRef.current;
        setHasOverflow(scrollHeight > clientHeight + 4);
      }
    };

    checkOverflow();

    const el = modalRef.current;
    if (!el) return;

    window.addEventListener("resize", checkOverflow);
    const t1 = setTimeout(checkOverflow, 80);
    const t2 = setTimeout(checkOverflow, 300);

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(checkOverflow);
      observer.observe(el);
      Array.from(el.children).forEach((child) => observer?.observe(child));
    }

    return () => {
      window.removeEventListener("resize", checkOverflow);
      clearTimeout(t1);
      clearTimeout(t2);
      observer?.disconnect();
    };
  }, [project]);

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
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
        return;
      }

      if (e.key === "Tab" && modalRef.current && !lightboxImage) {
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
  }, [onClose, triggerElement, lightboxImage]);

  return createPortal(
    <>
      <AnimatePresence>
        <div
          className={`fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center p-0 lg:p-6 ${
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
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`
              relative w-full h-[100dvh] max-h-[100dvh] lg:h-auto lg:max-h-[85vh] lg:w-[75vw] lg:max-w-[75vw]
              ${hasOverflow ? "overflow-y-scroll" : "overflow-y-auto"} modal-scrollable rounded-none lg:rounded-2xl border-0 lg:border shadow-2xl flex flex-col
              ${isDark ? "bg-[#111318] lg:border-white/15 text-white" : "bg-white lg:border-black/15 text-neutral-900"}
            `}
            style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Close button: 0-height container so image flows flush to the top edge */}
            <div className="sticky top-0 z-30 flex justify-end pointer-events-none h-0 overflow-visible">
              <div className="p-3 sm:p-4">
                <Tooltip content="Close (Esc)" position="bottom">
                  <button
                    ref={closeBtnRef}
                    type="button"
                    onClick={onClose}
                    aria-label={`Close modal for ${project.title}`}
                    className={`pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full transition-all shadow-xl backdrop-blur-md border ${
                      isDark
                        ? "bg-[#111318]/80 hover:bg-[#1c202a] text-white border-white/25 focus-visible:ring-2 focus-visible:ring-blue-400"
                        : "bg-white/80 hover:bg-neutral-100 text-neutral-900 border-black/15 focus-visible:ring-2 focus-visible:ring-blue-600"
                    }`}
                  >
                    <X size={20} aria-hidden="true" />
                  </button>
                </Tooltip>
              </div>
            </div>

            {/* Image banner - flows flush to the very top */}
            <div className="w-full h-56 sm:h-72 lg:h-80 xl:h-96 shrink-0 relative overflow-hidden lg:rounded-t-2xl">
              <ImageWithFallback
                src={project.image}
                alt={`Visual preview of ${project.title}`}
                className="w-full h-full object-cover lg:rounded-t-2xl"
              />
            </div>

            <div className="px-3 py-6 sm:px-8 lg:px-12 flex-1">
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs tracking-widest uppercase px-3 py-1 rounded-full font-semibold ${
                  isDark ? "text-blue-400 bg-blue-500/15" : "text-blue-800 bg-blue-100"
                }`}>
                  {project.tag}
                </span>
                {project.year && project.year.toLowerCase() !== "case study" && (
                  <span className={`text-xs font-medium ${isDark ? "text-white/60" : "text-neutral-600"}`}>
                    {project.year}
                  </span>
                )}
              </div>

              <h3
                id={`modal-title-${project.id}`}
                className={`${isDark ? "text-white" : "text-neutral-900"} mb-1.5 transition-colors`}
                style={{
                  fontSize: "clamp(1.4rem, 2.4vw, 2.2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </h3>
              <p className={`${isDark ? "text-blue-400" : "text-blue-700"} text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4`}>
                {project.subtitle}
              </p>
              <p
                id={`modal-synopsis-${project.id}`}
                className={`${isDark ? "text-white/80" : "text-neutral-700"} text-sm sm:text-base leading-relaxed mb-8 max-w-4xl transition-colors`}
              >
                {project.synopsis}
              </p>

              {/* Process steps */}
              <p className={`${isDark ? "text-white/60" : "text-neutral-700"} text-xs font-bold tracking-widest uppercase mb-4`}>
                Process &amp; Approach
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 pb-4">
                {project.steps.map((step, i) => {
                  const hasImage = Boolean(step.image);
                  const hasPlaceholder = Boolean(
                    step.placeholder ||
                    (project.id === "purchasing-platform" && !hasImage) ||
                    (project.showStepPlaceholders && !hasImage)
                  );

                  return (
                    <div
                      key={step.label}
                      className={`border rounded-xl p-4 sm:p-5 transition-colors flex flex-col justify-between ${
                        isDark
                          ? "bg-white/[0.04] border-white/10"
                          : "bg-neutral-50 border-black/10"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <span
                            className={`w-5 h-5 rounded-full text-[11px] flex items-center justify-center font-bold shrink-0 ${
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

                        {/* Step Visual Artifact (Rendered only in modal) */}
                        {hasImage ? (
                          <div className="my-3 overflow-hidden rounded-lg border border-black/10 dark:border-white/15 bg-white group/stepimg relative shadow-xs">
                            <button
                              type="button"
                              onClick={() =>
                                setLightboxImage({
                                  src: step.image!,
                                  alt: step.imageAlt || `${step.label} artifact`,
                                  title: `${step.label} — ${project.title}`,
                                })
                              }
                              className="w-full text-left block relative cursor-zoom-in group-hover/stepimg:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
                              aria-label={`View full-size ${step.label} artifact`}
                            >
                              <img
                                src={step.image}
                                alt={step.imageAlt || `${step.label} artifact`}
                                referrerPolicy="no-referrer"
                                className="w-full h-auto aspect-video object-contain bg-white rounded-lg p-1.5"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover/stepimg:bg-black/15 transition-colors flex items-end justify-end p-2 pointer-events-none">
                                <span className="bg-black/85 text-white text-[10px] font-medium px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1 opacity-0 group-hover/stepimg:opacity-100 transition-opacity shadow-sm">
                                  <ZoomIn size={11} aria-hidden="true" />
                                  <span>Expand</span>
                                </span>
                              </div>
                            </button>
                          </div>
                        ) : hasPlaceholder ? (
                          <div
                            className={`my-3 h-32 rounded-lg border border-dashed flex flex-col items-center justify-center text-center p-3 transition-colors ${
                              isDark
                                ? "bg-white/[0.02] border-white/15 text-white/40"
                                : "bg-black/[0.02] border-black/15 text-neutral-400"
                            }`}
                            aria-label={`Placeholder for ${step.label} artifact`}
                          >
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center mb-1.5 ${
                                isDark
                                  ? "bg-white/[0.06] text-white/60"
                                  : "bg-black/[0.04] text-neutral-500"
                              }`}
                            >
                              <ImageIcon size={15} aria-hidden="true" />
                            </div>
                            <span
                              className={`text-[11px] font-semibold tracking-wide uppercase ${
                                isDark ? "text-white/65" : "text-neutral-700"
                              }`}
                            >
                              {typeof step.placeholder === "string"
                                ? step.placeholder
                                : step.placeholderText || "Artifact Placeholder"}
                            </span>
                            <span
                              className={`text-[10px] mt-0.5 ${
                                isDark ? "text-white/40" : "text-neutral-400"
                              }`}
                            >
                              Documentation asset
                            </span>
                          </div>
                        ) : null}
                      </div>

                      <p className={`${isDark ? "text-white/75" : "text-neutral-700"} text-xs leading-relaxed mt-1`}>
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Lightbox for viewing full-size artifact */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto modal-scrollable"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxImage.title}
          >
            <div className="w-full max-w-6xl flex justify-between items-center mb-3 px-2 shrink-0">
              <span className="text-white text-sm sm:text-base font-semibold truncate">
                {lightboxImage.title}
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="Close image preview"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none cursor-pointer"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div
              className="max-w-6xl max-h-[85vh] w-full bg-white rounded-xl overflow-y-auto modal-scrollable shadow-2xl p-2 sm:p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>,
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
          <div className="flex flex-col md:flex-row gap-0 items-stretch">
            {/* Image button — accessible click/keyboard trigger for modal */}
            <Tooltip content={`View ${project.title}`} position="top">
              <button
                ref={imageTriggerRef}
                type="button"
                onClick={() => handleOpenModal(imageTriggerRef.current)}
                aria-label={`Open details for ${project.title}`}
                className="w-full text-left md:w-2/5 overflow-hidden group/img relative cursor-pointer md:self-stretch block p-0 border-0 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              >
                <div className="w-full h-56 sm:h-64 md:h-full md:min-h-full md:absolute md:inset-0 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={`Visual representation of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105 group-hover:scale-105"
                  />
                </div>
                <span className="sr-only">Click to view project details</span>
              </button>
            </Tooltip>

            {/* Content */}
            <div className="md:w-3/5 px-3 py-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs tracking-widest uppercase px-3 py-1 rounded-full font-semibold ${
                    isDark ? "text-blue-400 bg-blue-500/15" : "text-blue-800 bg-blue-100"
                  }`}>
                    {project.tag}
                  </span>
                  {project.year && project.year.toLowerCase() !== "case study" && (
                    <span className={`text-xs font-medium ${isDark ? "text-white/60" : "text-neutral-600"}`}>
                      {project.year}
                    </span>
                  )}
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
                {/* Quick Overview — accessible interactive button */}
                <Tooltip content={expanded ? "Collapse overview" : "Expand quick overview"} position="top">
                  <button
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                    aria-controls={`process-steps-${project.id}`}
                    aria-label={`${expanded ? "Collapse" : "Expand"} quick overview for ${project.title}`}
                    className={`text-sm font-semibold flex items-center gap-2 px-4 py-2 rounded-full transition-all cursor-pointer ${
                      isDark
                        ? "text-blue-400 hover:bg-blue-500/15 hover:text-blue-300"
                        : "text-blue-700 hover:bg-blue-100 hover:text-blue-900"
                    }`}
                  >
                    <span>{expanded ? "Collapse" : "Quick Overview"}</span>
                    <motion.div
                      animate={{ rotate: expanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} aria-hidden="true" />
                    </motion.div>
                  </button>
                </Tooltip>

                {/* Arrow — opens modal */}
                <Tooltip content={`Open details for ${project.title}`} position="top">
                  <button
                    ref={triggerRef}
                    type="button"
                    onClick={() => handleOpenModal(triggerRef.current)}
                    aria-label={`Open details modal for ${project.title}`}
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
                </Tooltip>
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
                <div className={`border-t px-3 py-6 sm:px-8 sm:py-8 ${isDark ? "border-white/10" : "border-black/10"}`}>
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

