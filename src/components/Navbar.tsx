import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-brand-purple-900/40 py-3"
          : "bg-transparent py-5"
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            id="logo-container"
          >
            <div>
              <span className="font-sans text-xl font-extrabold tracking-tight text-white block leading-none">
                Clínica NES
              </span>
            </div>
          </div>

          {/* Single "Agendar cita" Button */}
          <div>
            <button
              onClick={() => handleScrollToSection("formulario")}
              className="bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 hover:from-brand-purple-500 hover:to-brand-purple-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border border-brand-gold-400/20 shadow-lg hover:shadow-brand-purple-900/30 transition-all cursor-pointer"
              id="nav-cta-btn"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
