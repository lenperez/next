import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Briefcase, User, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "Work", href: "#work", icon: Briefcase },
  { label: "About", href: "#about", icon: User },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10"
              : "bg-[#F5F5F5]/90 backdrop-blur-md border-b border-black/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
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

          {/* Desktop links & Theme Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-2" role="list">
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className={`inline-flex items-center gap-2 transition-all text-sm tracking-wider uppercase font-medium px-4 py-2 rounded-full ${
                        isDark
                          ? "text-white/75 hover:text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-blue-400"
                          : "text-neutral-700 hover:text-black hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-blue-600"
                      }`}
                    >
                      <Icon size={15} aria-hidden="true" />
                      <span>{l.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className={`p-2 rounded-full transition-all flex items-center justify-center ${
                isDark
                  ? "text-white/75 hover:text-white hover:bg-white/10"
                  : "text-neutral-700 hover:text-black hover:bg-black/5"
              }`}
            >
              {isDark ? (
                <Sun size={18} aria-hidden="true" className="text-amber-400" />
              ) : (
                <Moon size={18} aria-hidden="true" className="text-blue-700" />
              )}
            </button>
          </div>

          {/* Mobile menu controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className={`p-2.5 rounded-full transition-colors ${
                isDark ? "text-white/75 hover:text-white" : "text-neutral-700 hover:text-black"
              }`}
            >
              {isDark ? (
                <Sun size={18} aria-hidden="true" className="text-amber-400" />
              ) : (
                <Moon size={18} aria-hidden="true" className="text-blue-700" />
              )}
            </button>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`p-2.5 rounded-lg transition-colors ${
                isDark ? "text-white/80 hover:text-white hover:bg-white/10" : "text-neutral-800 hover:text-black hover:bg-black/5"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
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
              <ul className="px-6 py-4 flex flex-col gap-3" role="list">
                {links.map((l) => {
                  const Icon = l.icon;
                  return (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className={`inline-flex items-center gap-3 text-sm tracking-wider uppercase font-medium p-2.5 rounded-lg w-full ${
                          isDark ? "text-white/80 hover:text-white hover:bg-white/10" : "text-neutral-800 hover:text-black hover:bg-black/5"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <Icon size={18} aria-hidden="true" />
                        <span>{l.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}


