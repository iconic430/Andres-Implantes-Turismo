import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function SuccessStories() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
      alt: "Resultado clínico - Sonrisa saludable de paciente",
    },
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
      alt: "Resultado clínico - Restauración dental exitosa",
    },
    {
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
      alt: "Resultado clínico - Rehabilitación con implante biocompatible",
    },
    {
      url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
      alt: "Resultado clínico - Estética dental premium",
    },
    {
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
      alt: "Resultado clínico - Implantes dentales de alta precisión",
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

        {/* 5 Images Grid - Modern asymmetrical layout with zoom hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" id="success-images-grid">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-md aspect-[4/5] hover:shadow-xl transition-all"
              id={`success-image-card-${index}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Subtle elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
