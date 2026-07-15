import { motion } from "motion/react";
import { DollarSign, Car, ShieldCheck, Cpu, CheckCircle2 } from "lucide-react";
import { valuePropositions, clinicInfo } from "../data/clinicData";

const iconMap: { [key: string]: any } = {
  DollarSign: DollarSign,
  Car: Car,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu
};

export default function ValueProposition() {
  return (
    <section className="py-24 bg-brand-dark text-white border-y border-brand-purple-950/60" id="propuesta-valor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-gold-400 font-bold uppercase block">
            Beneficios Exclusivos
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight" id="val-prop-heading">
            Odontología Biológica e Implantes de Última Generación en la Frontera
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Combinamos una visión de respeto total al organismo del paciente con los mejores materiales (Circonia y Titanio ultra-puro), diagnósticos 3D inmediatos y un servicio exclusivo que elimina la fricción del cruce fronterizo.
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="val-prop-grid">
          {valuePropositions.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-darker p-8 rounded-3xl border border-brand-purple-900/40 hover:border-brand-gold-500/50 shadow-lg hover:shadow-brand-purple-950/50 transition-all group flex flex-col sm:flex-row gap-6 items-start"
                id={`val-card-${item.id}`}
              >
                <div className="p-4 rounded-2xl bg-brand-purple-950/80 border border-brand-purple-900/60 text-brand-gold-400 group-hover:bg-brand-purple-700 group-hover:text-white transition-all duration-300 shrink-0">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div className="space-y-2 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {item.id === "advanced-tech" && (
                    <div className="mt-4 pt-4 border-t border-brand-purple-900/30 grid grid-cols-1 gap-3 text-xs text-slate-300">
                      <div className="flex items-start gap-2.5">
                        <span className="text-brand-gold-400 mt-0.5 shrink-0 font-bold">•</span>
                        <span><strong className="text-white font-semibold">Escáner Intraoral 3D:</strong> Captura imágenes tridimensionales de alta definición sin moldes incómodos de pasta.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-brand-gold-400 mt-0.5 shrink-0 font-bold">•</span>
                        <span><strong className="text-white font-semibold">Fresadora CAD/CAM:</strong> Fabricación digital inmediata de coronas estéticas de circonia o silicato de litio.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-brand-gold-400 mt-0.5 shrink-0 font-bold">•</span>
                        <span><strong className="text-white font-semibold">Rayos X Digitales:</strong> Diagnóstico de alta definición con mínima exposición y planeación virtual milimétrica.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-brand-gold-400 mt-0.5 shrink-0 font-bold">•</span>
                        <span><strong className="text-white font-semibold">Sueroterapia Integrativa:</strong> Apoyo endovenoso biológico con vitaminas para optimizar la regeneración y el postoperatorio.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-brand-gold-400 mt-0.5 shrink-0 font-bold">•</span>
                        <span><strong className="text-white font-semibold">Ultrasonido & Reducción Bacteriana:</strong> Equipos especiales de desinfección profunda para garantizar la máxima bioseguridad.</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Comparison Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-purple-950 via-brand-black to-brand-purple-950 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden border border-brand-purple-900/60 shadow-2xl" id="val-comparison-banner">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-brand-purple-900/60 border border-brand-purple-700 text-brand-gold-400 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block">
                Comparativa Real de Inversión
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Misma Tecnología de Vanguardia. <br className="hidden sm:inline" />
                ¿Por qué pagar tarifas abusivas en EE. UU.?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
                En Texas o Nuevo México, la colocación de un implante dental completo (con su pilar y corona estética) tiene un costo promedio de <strong className="text-white">$4,500 USD</strong>. Con el <strong className="text-white">Dr. Andrés Moyetón</strong> en Juárez, obtienes exactamente el mismo estándar clínico por solo <strong className="text-brand-gold-400 font-bold">$1,500 USD</strong>.
              </p>
            </div>
            
            <div className="lg:col-span-5 bg-brand-black/90 rounded-3xl p-6 md:p-8 border border-brand-purple-900/70 space-y-4 shadow-xl">
              <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold text-slate-400 pb-2 border-b border-brand-purple-900/40">
                <span>Inversión por Implante</span>
                <span className="font-bold">Costo Promedio</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm text-slate-300 font-medium">Clínicas en EE. UU.</span>
                <span className="text-red-400 font-bold line-through text-sm sm:text-base">$4,500 USD</span>
              </div>
              <div className="flex justify-between items-center py-2 text-base sm:text-lg font-bold border-t border-brand-purple-900/20">
                <span className="text-brand-gold-400 font-bold">{clinicInfo.clinicName}</span>
                <span className="text-brand-gold-400 font-extrabold text-xl">$1,500 USD</span>
              </div>
              <div className="pt-2">
                <div className="bg-brand-purple-950/60 border border-brand-purple-800/80 rounded-2xl p-4 flex items-center gap-3 text-brand-gold-400 text-xs font-semibold">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-brand-gold-400" />
                  <span>Ahorras más de $3,000 USD por implante (Si la colocación es de 3 o más implantes incluye pick-up fronterizo)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
