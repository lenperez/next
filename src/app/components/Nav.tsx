import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
            : "bg-[#F5F5F5]/90 backdrop-blur-md border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className={`tracking-[0.2em] uppercase text-sm transition-colors ${
            isDark ? "text-white" : "text-black"
          }`}
          style={{ fontWeight: 600 }}
        >
          Len Perez
        </a>

        {/* Desktop links & Theme Switcher */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`transition-all text-sm tracking-wider uppercase px-4 py-1.5 rounded-full ${
                    isDark
                      ? "text-white/60 hover:text-white hover:bg-white/10"
                      : "text-black/60 hover:text-black hover:bg-black/5"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-wider uppercase font-medium transition-all border ${
              isDark
                ? "bg-white/5 hover:bg-white/10 border-white/10 text-white/80 hover:text-white"
                : "bg-black/5 hover:bg-black/10 border-black/10 text-black/80 hover:text-black"
            }`}
          >
            {isDark ? (
              <>
                <Sun size={14} className="text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon size={14} className="text-blue-400" />
                <span>Dark</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full transition-colors ${
              isDark ? "text-white/80 hover:text-white bg-white/5" : "text-black/80 hover:text-black bg-black/5"
            }`}
          >
            {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-blue-400" />}
          </button>

          <button
            className={`p-2 transition-colors ${
              isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden border-b transition-colors ${
              isDark ? "bg-[#0a0a0a] border-white/10" : "bg-[#F5F5F5] border-black/10"
            }`}
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`text-sm tracking-wider uppercase ${
                      isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

