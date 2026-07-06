import { motion } from "motion/react";
import { Check, Calendar, ArrowRight, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { launchOffers, clinicInfo } from "../data/clinicData";

export default function LaunchOffers() {
  const handleScrollToForm = () => {
    const element = document.getElementById("formulario");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-brand-black text-white border-b border-brand-purple-950/60" id="ofertas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-gold-400 font-bold uppercase block">
            Nuestra Propuesta de Inversión
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight" id="offers-heading">
            Paquete Todo Incluido de Implantes Dentales Premium
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Asegura tu precio especial válido por tiempo limitado. Una inversión inteligente para recuperar tu bienestar oral con el estándar de mayor prestigio internacional.
          </p>
        </div>

        {/* Launch Offers Flagship Block */}
        <div className="max-w-3xl mx-auto" id="offers-grid">
          {launchOffers.map((offer) => {
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-brand-dark rounded-[2.5rem] border border-brand-gold-500/30 flex flex-col justify-between overflow-hidden shadow-2xl gold-glow"
                id={`offer-card-${offer.id}`}
              >
                {/* Card Top Banner / Badge */}
                <div className="p-8 sm:p-10 pb-6 relative">
                  {/* Decorative glowing gradient backdrop */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-brand-purple-950 text-brand-gold-400 border border-brand-purple-800">
                      {offer.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-gold-400 bg-brand-purple-950/60 px-3 py-1.5 rounded-xl border border-brand-purple-900/40">
                      <Sparkles className="w-3.5 h-3.5 fill-brand-gold-500 text-brand-gold-500" />
                      Garantía Certificada por Escrito
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-6 leading-tight tracking-tight">{offer.title}</h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-2.5 leading-relaxed font-normal">{offer.description}</p>
                </div>

                {/* Benefits List */}
                <div className="px-8 sm:px-10 py-6 bg-brand-darker/60 border-y border-brand-purple-950 flex-1 relative z-10">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">¿Qué incluye este tratamiento integral?</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5" id={`benefits-list-${offer.id}`}>
                    {offer.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                        <div className="p-0.5 rounded-full bg-brand-purple-950 border border-brand-purple-900 text-brand-gold-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-tight">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="p-8 sm:p-10 bg-brand-dark relative z-10 space-y-6">
                  <div className="flex flex-col sm:flex-row items-baseline sm:items-end justify-between gap-4">
                    <div>
                      <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Costo Promedio en EE. UU.</span>
                      <span className="text-lg font-bold text-slate-500 line-through">
                        {offer.originalPrice}
                      </span>
                    </div>
                    <div className="sm:text-right">
                      <span className="block text-xs text-brand-gold-400 font-bold uppercase tracking-widest">Inversión Especial en Juárez</span>
                      <span className="text-4xl sm:text-5xl font-black text-brand-gold-400 tracking-tight block mt-1">
                        {offer.offerPrice} <span className="text-lg font-semibold text-slate-300">USD</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      onClick={handleScrollToForm}
                      className="w-full bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 hover:from-brand-purple-500 hover:to-brand-purple-600 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-brand-purple-900/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer text-sm uppercase tracking-wider border border-brand-gold-400/10"
                      id={`offer-cta-btn-${offer.id}`}
                    >
                      Agendar Consulta <ArrowRight className="w-4 h-4 text-brand-gold-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Urgency and Trust Banner */}
        <div className="max-w-3xl mx-auto mt-16 bg-brand-darker border border-brand-purple-900/40 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl" id="urgency-banner">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 bg-brand-purple-950 border border-brand-purple-900 rounded-2xl text-brand-gold-400 shrink-0 hidden sm:block">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base md:text-lg">¿No sabes cuándo vas a poder cruzar la frontera?</h4>
              <p className="text-slate-300 text-xs md:text-sm mt-0.5 leading-relaxed">No hay problema. Congela hoy esta tarifa registrando tus datos. Respetamos tu descuento de lanzamiento hasta por un año entero.</p>
            </div>
          </div>
          <button
            onClick={handleScrollToForm}
            className="w-full md:w-auto bg-brand-purple-950 hover:bg-brand-purple-900 text-brand-gold-400 border border-brand-purple-800 font-bold uppercase tracking-wider px-6 py-3.5 rounded-2xl text-xs shadow-sm hover:shadow transition-all shrink-0 cursor-pointer"
            id="freeze-offer-btn"
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </section>
  );
}
