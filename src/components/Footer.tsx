import { Smile, Sparkles, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { clinicInfo } from "../data/clinicData";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-black text-slate-400 border-t border-brand-purple-950/60 pt-16 pb-12" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-brand-purple-950/40">
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={handleScrollToTop}>
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-brand-purple-950 border border-brand-purple-900">
                <Smile className="w-6 h-6 text-brand-gold-400" />
                <Sparkles className="w-3.5 h-3.5 text-brand-gold-400 absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="font-sans text-xl font-bold tracking-tight text-white block leading-none">
                  Dr. Andrés
                </span>
                <span className="font-mono text-[9px] tracking-widest text-brand-gold-400 font-bold uppercase block mt-0.5">
                  MOYETÓN ARENAS
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Odontología biológica de vanguardia e implantes biocompatibles con sede en Ciudad Juárez, Chihuahua, México. Brindamos excelencia médica internacional sin dolor para pacientes provenientes de todo Estados Unidos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Navegación</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleScrollToSection("propuesta-valor")}
                  className="hover:text-brand-gold-400 transition-colors text-left cursor-pointer"
                >
                  ¿Por qué Elegirnos?
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("casos-exito")}
                  className="hover:text-brand-gold-400 transition-colors text-left cursor-pointer"
                >
                  Casos de Éxito
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("ofertas")}
                  className="hover:text-brand-gold-400 transition-colors text-left cursor-pointer"
                >
                  Precio Especial
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("formulario")}
                  className="hover:text-brand-gold-400 transition-colors text-left cursor-pointer"
                >
                  Evaluación de Sonrisa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("acerca-de")}
                  className="hover:text-brand-gold-400 transition-colors text-left cursor-pointer"
                >
                  Dr. Andrés Moyetón
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Atención al Paciente</h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4.5 h-4.5 text-brand-gold-400 mt-0.5 shrink-0" />
                <span className="text-slate-300 leading-relaxed">{clinicInfo.address}</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4.5 h-4.5 text-brand-gold-400 shrink-0" />
                <span>Llamadas USA: <a href={`tel:${clinicInfo.phoneUSA}`} className="hover:text-brand-gold-400 text-brand-gold-400 font-bold">{clinicInfo.phoneUSA}</a></span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4.5 h-4.5 text-brand-gold-400 shrink-0" />
                <span>WhatsApp: <a href={`tel:${clinicInfo.phoneCol}`} className="hover:text-brand-gold-400 text-brand-gold-400 font-bold">{clinicInfo.phoneCol}</a></span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="w-4.5 h-4.5 text-brand-gold-400 shrink-0" />
                <span>Correo: <a href={`mailto:${clinicInfo.email}`} className="hover:text-brand-gold-400 hover:underline text-slate-300">{clinicInfo.email}</a></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-slate-500 space-y-1 text-center sm:text-left leading-relaxed">
            <p>&copy; {new Date().getFullYear()} Dr. Andrés Moyetón Arenas. Todos los derechos reservados.</p>
            <p>
              Cédula Profesional: {clinicInfo.professionalCedula} | Cédula Especialidad: {clinicInfo.specialtyCedula} | Aviso de Publicidad COFEPRIS: {clinicInfo.advertisingNotice}.
            </p>
            <p className="text-[10px] text-slate-600">
              Todas las marcas registradas (Straumann, Neodent, etc.) pertenecen a sus respectivos dueños y se mencionan únicamente con fines de especificación de materiales clínicos.
            </p>
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="p-3 rounded-full bg-brand-purple-950 border border-brand-purple-900 text-brand-gold-400 hover:text-white hover:bg-brand-purple-900 transition-all cursor-pointer flex items-center justify-center group"
            title="Volver Arriba"
            id="footer-back-to-top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
