import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo cursor-hover">
          Hitesh Patil<span className="accent-dot">.</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="cursor-hover">
              {l.label}
            </a>
          ))}
        </nav>


        <button
          className="nav-toggle cursor-hover"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
