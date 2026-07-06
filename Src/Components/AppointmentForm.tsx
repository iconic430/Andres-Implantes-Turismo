import { motion } from "motion/react";

export default function AppointmentForm() {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden border-b border-brand-purple-950/60" id="formulario">
      {/* Decorative background visual */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.12),transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-[2.5rem] p-16 md:p-24 shadow-2xl relative"
          id="empty-form-placeholder"
        >
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight" id="form-placeholder-title">
            Formulario
          </h2>
          <p className="text-slate-400 text-sm mt-4 max-w-sm mx-auto" id="form-placeholder-desc">
            Espacio reservado para el agendamiento de su cita.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
