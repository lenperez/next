import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Briefcase, User, Mail, FileText, Sun, Moon, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Tooltip } from "./Tooltip";

const links = [
  { label: "Work", href: "#work", icon: Briefcase },
  { label: "About", href: "#about", icon: User },
  { label: "Contact", href: "#contact", icon: Mail },
];

interface NavProps {
  onNavigateToWork?: () => void;
}

export function Nav({ onNavigateToWork }: NavProps = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on Escape key press (WCAG 2.1 keyboard dismiss pattern)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        aria-label="Main Navigation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }}
        className={`w-full transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10"
              : "bg-[#F5F5F5]/90 backdrop-blur-md border-b border-black/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-7 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.36, ease: [0.16, 1, 0.3, 1] }}
          >
            <Tooltip content="Return to top" position="bottom">
              <a
                href="#"
                aria-label="Len Perez - UX Designer Home"
                className={`inline-flex items-center gap-2.5 text-sm tracking-wider uppercase font-semibold transition-colors rounded-lg px-2 py-1 ${
                  isDark
                    ? "text-white/80 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-400"
                    : "text-neutral-800 hover:text-black focus-visible:ring-2 focus-visible:ring-blue-600"
                }`}
              >
                <img
                  src={isDark ? "/favicon-dark.svg" : "/favicon-light.svg"}
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                  className="w-4.5 h-4.5 object-contain shrink-0"
                />
                <span>Len Perez</span>
              </a>
            </Tooltip>
          </motion.div>

          {/* Desktop links, Resume & Theme Switcher (fading in from right to left) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Unified Segmented Control for Navigation Links — stroke brought back permanently */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.16, ease: [0.16, 1, 0.3, 1] }}
              role="group"
              aria-label="Portfolio navigation"
              onMouseLeave={() => setHoveredIndex(null)}
              className={`h-10 inline-flex items-center p-0.5 rounded-full border transition-colors duration-200 ${
                isDark ? "border-white/20" : "border-black/15"
              }`}
            >
              <ul className="h-full flex items-center" role="list">
                {links.map((l, idx) => {
                  const Icon = l.icon;
                  const showDivider = idx < links.length - 1;
                  const hideDivider = hoveredIndex !== null;
                  // Right-to-left delay calculation: Contact (idx 2) -> About (idx 1) -> Work (idx 0)
                  const linkDelay = 1.16 + (links.length - 1 - idx) * 0.06;
                  return (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: linkDelay, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full flex items-center"
                    >
                      <Tooltip content={`Navigate to ${l.label}`} position="bottom">
                        <a
                          href={l.href}
                          onClick={(e) => {
                            setHoveredIndex(null);
                            (e.currentTarget as HTMLElement).blur();
                            if (l.href === "#work" && onNavigateToWork) {
                              e.preventDefault();
                              onNavigateToWork();
                            }
                          }}
                          onMouseEnter={() => setHoveredIndex(idx)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          onFocus={() => setHoveredIndex(idx)}
                          onBlur={() => setHoveredIndex(null)}
                          className={`group h-full inline-flex items-center justify-center gap-1.5 transition-all duration-200 text-xs sm:text-sm tracking-wider uppercase font-medium px-3.5 rounded-full hover:bg-blue-100 hover:text-blue-900 focus-visible:bg-blue-100 focus-visible:text-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/40 focus-visible:outline-none ${
                            isDark
                              ? "text-white/80"
                              : "text-neutral-700"
                          }`}
                        >
                          <Icon
                            size={14}
                            aria-hidden="true"
                            className="shrink-0 transition-colors group-hover:text-blue-900 group-focus-visible:text-blue-900"
                          />
                          <span className="transition-colors group-hover:text-blue-900 group-focus-visible:text-blue-900">
                            {l.label}
                          </span>
                        </a>
                      </Tooltip>
                      {showDivider && (
                        <span
                          aria-hidden="true"
                          className={`w-px h-3.5 self-center transition-opacity duration-200 ${
                            isDark ? "bg-white/20" : "bg-black/15"
                          } ${hideDivider ? "opacity-0" : "opacity-100"}`}
                        />
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Standalone Résumé Action Button with open new window icon on rollover */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Tooltip content="View résumé (PDF in new tab)" position="bottom">
                <a
                  href="/LenPerez_UXresume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Len Perez UX Resume (PDF in new tab)"
                  className={`group h-10 inline-flex items-center justify-center gap-2 transition-all duration-200 text-xs sm:text-sm tracking-wider uppercase font-medium px-4 rounded-full border hover:bg-blue-100 hover:text-blue-900 hover:border-blue-900 focus-visible:bg-blue-100 focus-visible:text-blue-900 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/40 focus-visible:outline-none ${
                    isDark
                      ? "text-white/75 border-white/20"
                      : "text-neutral-700 border-black/15"
                  }`}
                >
                  <FileText size={14} aria-hidden="true" className="shrink-0 transition-colors group-hover:text-blue-900 group-focus-visible:text-blue-900" />
                  <span className="transition-colors group-hover:text-blue-900 group-focus-visible:text-blue-900">RÉSUMÉ</span>
                  <span className="inline-flex items-center transition-all duration-200 ease-out opacity-0 max-w-0 -translate-x-1 ml-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-5 group-hover:translate-x-0 group-hover:ml-0.5 group-focus-visible:opacity-100 group-focus-visible:max-w-5 group-focus-visible:translate-x-0 group-focus-visible:ml-0.5">
                    <ExternalLink size={13} aria-hidden="true" className="shrink-0 transition-colors group-hover:text-blue-900 group-focus-visible:text-blue-900" />
                  </span>
                </a>
              </Tooltip>
            </motion.div>

            {/* Theme Toggle Button (stroke brought back on hover) */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.00, ease: [0.16, 1, 0.3, 1] }}
            >
              <Tooltip content={isDark ? "Switch to light theme" : "Switch to dark theme"} position="bottom">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                  className={`group h-10 w-10 rounded-full transition-all duration-200 flex items-center justify-center border hover:bg-blue-100 hover:border-blue-900 focus-visible:bg-blue-100 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/40 focus-visible:outline-none ${
                    isDark
                      ? "border-white/20 text-white/80"
                      : "border-black/15 text-neutral-700"
                  }`}
                >
                  {isDark ? (
                    <Sun size={18} aria-hidden="true" className="text-amber-400 group-hover:text-blue-900 group-focus-visible:text-blue-900 transition-colors" />
                  ) : (
                    <Moon size={18} aria-hidden="true" className="text-blue-700 group-hover:text-blue-900 group-focus-visible:text-blue-900 transition-colors" />
                  )}
                </button>
              </Tooltip>
            </motion.div>
          </div>

          {/* Mobile menu controls (right to left: menu hamburger button first, then theme toggle) */}
          <div className="flex md:hidden items-center gap-2">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Tooltip content={isDark ? "Switch to light theme" : "Switch to dark theme"} position="bottom">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                  className={`group p-2 rounded-full transition-all duration-200 border hover:bg-blue-100 hover:border-blue-900 focus-visible:bg-blue-100 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/40 focus-visible:outline-none ${
                    isDark
                      ? "border-white/20 text-white/80"
                      : "border-black/15 text-neutral-700"
                  }`}
                >
                  {isDark ? (
                    <Sun size={18} aria-hidden="true" className="text-amber-400 group-hover:text-blue-900 group-focus-visible:text-blue-900 transition-colors" />
                  ) : (
                    <Moon size={18} aria-hidden="true" className="text-blue-700 group-hover:text-blue-900 group-focus-visible:text-blue-900 transition-colors" />
                  )}
                </button>
              </Tooltip>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.00, ease: [0.16, 1, 0.3, 1] }}
            >
              <Tooltip content={menuOpen ? "Close navigation menu" : "Open navigation menu"} position="bottom">
                <button
                  type="button"
                  aria-expanded={menuOpen}
                  aria-controls="mobile-navigation-menu"
                  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                  className={`group p-2.5 rounded-lg transition-all duration-200 border hover:bg-blue-100 hover:text-blue-900 hover:border-blue-900 focus-visible:bg-blue-100 focus-visible:text-blue-900 focus-visible:border-blue-900 focus-visible:ring-2 focus-visible:ring-blue-900/40 focus-visible:outline-none ${
                    isDark
                      ? "text-white/80 border-white/20"
                      : "text-neutral-800 border-black/15"
                  }`}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? (
                    <X size={22} aria-hidden="true" className="shrink-0 transition-colors group-hover:text-blue-900 group-focus-visible:text-blue-900" />
                  ) : (
                    <Menu size={22} aria-hidden="true" className="shrink-0 transition-colors group-hover:text-blue-900 group-focus-visible:text-blue-900" />
                  )}
                </button>
              </Tooltip>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden border-b transition-colors ${
                isDark ? "bg-[#0a0a0a] border-white/10" : "bg-[#F5F5F5] border-black/10 shadow-lg"
              }`}
            >
              <div className="px-4 sm:px-7 py-4 flex flex-col gap-3">
                {/* Mobile Unified Segmented Group */}
                <div
                  role="group"
                  aria-label="Navigation Sections"
                  className={`p-1 rounded-2xl border transition-colors duration-200 ${
                    isDark ? "border-white/15" : "border-black/10"
                  }`}
                >
                  <ul className="flex flex-col" role="list">
                    {links.map((l, idx) => {
                      const Icon = l.icon;
                      const showDivider = idx < links.length - 1;
                      return (
                        <li key={l.href}>
                          <Tooltip content={`Navigate to ${l.label}`} position="bottom">
                            <a
                              href={l.href}
                              className={`group inline-flex items-center gap-3 text-sm tracking-wider uppercase font-medium p-2.5 rounded-xl w-full hover:bg-blue-100 hover:text-blue-900 transition-all duration-200 ${
                                isDark
                                  ? "text-white/80"
                                  : "text-neutral-800"
                              }`}
                              onClick={(e) => {
                                setMenuOpen(false);
                                if (l.href === "#work" && onNavigateToWork) {
                                  e.preventDefault();
                                  onNavigateToWork();
                                }
                              }}
                            >
                              <Icon size={18} aria-hidden="true" className="shrink-0 transition-colors group-hover:text-blue-900" />
                              <span className="transition-colors group-hover:text-blue-900">{l.label}</span>
                            </a>
                          </Tooltip>
                          {showDivider && (
                            <div
                              aria-hidden="true"
                              className={`h-px mx-3 ${isDark ? "bg-white/10" : "bg-black/10"}`}
                            />
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Mobile Résumé Action Button */}
                <Tooltip content="View résumé (PDF)" position="bottom">
                  <a
                    href="/LenPerez_UXresume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center gap-3 text-sm tracking-wider uppercase font-medium p-2.5 rounded-xl w-full border hover:bg-blue-100 hover:text-blue-900 hover:border-blue-900 transition-all duration-200 ${
                      isDark
                        ? "text-white/80 border-white/20"
                        : "text-neutral-800 border-black/15"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <FileText size={18} aria-hidden="true" className="shrink-0 transition-colors group-hover:text-blue-900" />
                    <span className="transition-colors group-hover:text-blue-900">RÉSUMÉ</span>
                    <ExternalLink size={15} aria-hidden="true" className="shrink-0 transition-colors opacity-60 group-hover:opacity-100 group-hover:text-blue-900" />
                  </a>
                </Tooltip>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}


