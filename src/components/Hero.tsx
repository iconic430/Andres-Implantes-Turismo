import { motion } from "motion/react";
import { ArrowRight, MessageCircle, ShieldCheck, MapPin, BadgePercent, Zap, Car } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content (left) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Subtitle / Live Target Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-brand-purple-950/80 border border-brand-purple-900 text-brand-gold-400 px-4 py-2.5 rounded-2xl shadow-[0_4px_20px_rgba(147,51,234,0.15)]"
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
                Implantes Dentales <span className="gradient-text-gold relative inline-block font-extrabold">Premium</span> <br />
                por solo <span className="text-brand-gold-400 font-extrabold">$1,500 USD</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Recupera tu salud oral y la confianza al sonreír con el <strong className="text-white font-semibold">{clinicInfo.name}</strong> en la frontera. Tecnología biológica avanzada CAD/CAM en Ciudad Juárez, <strong className="text-brand-gold-400">ahorrando más de $3,000 USD</strong> por implante. ¡Pick-up en la frontera (válido para 3 o más implantes)!
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
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

          {/* Hero Visual Image (right) */}
          <div className="lg:col-span-5 relative" id="hero-image-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Purple-gold backglow shadow */}
              <div className="absolute inset-4 rounded-[2.5rem] bg-brand-purple-600/20 blur-2xl -z-10"></div>
              
              {/* Frame */}
              <div className="rounded-[2.5rem] border-4 border-brand-purple-900/60 shadow-2xl overflow-hidden aspect-[4/5] bg-brand-dark relative gold-glow">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80"
                  alt="Dr. Andrés Moyetón Arenas Implantes Dentales"
                  className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  id="hero-img-element"
                />
                
                {/* Visual Badges overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-brand-black/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-brand-purple-900/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-purple-950 border border-brand-purple-850 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-brand-gold-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Cédula Especialidad</p>
                    <p className="text-xs sm:text-sm font-bold text-white tracking-tight">{clinicInfo.specialtyCedula} | Reg. MSF</p>
                  </div>
                </div>
              </div>

              {/* Decorative brand tag */}
              <div className="absolute -top-4 -left-4 w-14 h-14 rounded-full bg-brand-gold-500 text-brand-black flex flex-col items-center justify-center font-bold text-xs shadow-lg rotate-12 border-2 border-white">
                <span className="font-extrabold">100%</span>
                <span className="text-[8px] font-sans font-medium uppercase tracking-tighter">Biológico</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
