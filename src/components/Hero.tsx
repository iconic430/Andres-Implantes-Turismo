import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { clinicInfo } from "../data/clinicData";

export default function Hero() {
  const handleScrollToForm = () => {
    const element = document.getElementById("formulario");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-black text-white" id="hero-section">
      {/* Decorative Blur Orbs - Purple & Gold ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 -z-10 opacity-35 blur-[120px] pointer-events-none">
        <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-brand-purple-900/40"></div>
        <div className="absolute -bottom-10 left-10 w-80 h-80 rounded-full bg-brand-gold-700/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
            {/* Subtitle / Live Target Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-wrap items-center justify-center gap-2 bg-brand-purple-950/80 border border-brand-purple-900 text-brand-gold-400 px-4 py-2.5 rounded-2xl shadow-[0_4px_20px_rgba(147,51,234,0.15)]"
              id="hero-subtitle-container"
            >
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100" id="hero-user-subtitle">
                {clinicInfo.subtitle}
              </p>
            </motion.div>

            {/* Main Title - Focusing strictly on Dental Implants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
              id="hero-title-container"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-sans font-bold tracking-tight leading-tight text-white">
                Implantes dentales <span className="gradient-text-gold relative inline-block font-extrabold">premium</span> por solo <span className="text-brand-gold-400 font-extrabold">$1,500 USD</span> <br className="hidden md:inline" />
                en solo <span className="text-brand-gold-400 font-extrabold">dos sesiones</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                Recupera tu salud oral y la confianza al sonreír con el <strong className="text-white font-semibold">Dr. Andrés Moyetón</strong> en la frontera. Tecnología biológica avanzada CAD/CAM en Ciudad Juárez, ahorrando más de <strong className="text-brand-gold-400 font-semibold">$3,000 USD</strong> por implante.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
              id="hero-cta-container"
            >
              <button
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 hover:from-brand-purple-500 hover:to-brand-purple-600 text-white font-bold uppercase tracking-wider rounded-2xl shadow-xl hover:shadow-brand-purple-900/30 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group border border-brand-gold-400/20"
                id="hero-primary-btn"
              >
                Agendar Consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-brand-gold-400" />
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
