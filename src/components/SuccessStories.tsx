import { motion } from "motion/react";
import { Sparkles, Image } from "lucide-react";

export default function SuccessStories() {
  const cases = [
    {
      id: 1,
      title: "Caso 1",
      subtitle: "Implante Unitario de Circonia"
    },
    {
      id: 2,
      title: "Caso 2",
      subtitle: "Restauración Estética Anterior"
    },
    {
      id: 3,
      title: "Caso 3",
      subtitle: "Rehabilitación Funcional Biológica"
    },
    {
      id: 4,
      title: "Caso 4",
      subtitle: "Implante de Titanio Ultra-puro"
    },
    {
      id: 5,
      title: "Caso 5",
      subtitle: "Restauración CAD/CAM de Alta Estética"
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-800" id="casos-exito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-purple-700 font-bold uppercase block">
            Casos de Éxito
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight flex items-center justify-center gap-2" id="success-heading">
            <Sparkles className="w-6 h-6 text-brand-gold-600 shrink-0" />
            Nuestros Resultados Clínicos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pacientes de Estados Unidos que confiaron en nosotros para mejorar su estética dental.
          </p>
        </div>

        {/* 5 Images Grid - aspect-[9/16] layout with border-dashed placeholders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" id="success-images-grid">
          {cases.map((c, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-slate-50 border-2 border-dashed border-brand-purple-200 hover:border-brand-purple-400 hover:shadow-xl transition-all aspect-[9/16] flex flex-col items-center justify-center p-4 text-center space-y-3"
              id={`success-image-card-${index}`}
            >
              <div className="p-3 rounded-full bg-brand-purple-50 text-brand-purple-700 group-hover:bg-brand-purple-100 transition-colors">
                <Image className="w-6 h-6 text-brand-purple-700 animate-pulse" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-brand-purple-700 uppercase tracking-widest block">{c.title}</span>
                <p className="text-xs font-bold text-slate-900 leading-tight">Insertar imagen, resultado</p>
                <p className="text-[9px] text-slate-500 max-w-full leading-relaxed">{c.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
