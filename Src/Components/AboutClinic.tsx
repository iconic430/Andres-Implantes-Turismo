import { motion } from "motion/react";
import { Award, ShieldCheck, Heart, Sparkles, GraduationCap, Microscope, Stethoscope } from "lucide-react";
import { clinicInfo } from "../data/clinicData";

export default function AboutClinic() {
  return (
    <section className="py-24 bg-white text-slate-800 border-b border-slate-100" id="acerca-de">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-purple-700 font-bold uppercase block">
            Dirección Clínica & Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight" id="about-heading">
            Liderado por el Dr. Andrés Moyetón Arenas
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Un especialista comprometido con la odontología biológica, la preservación de la estructura dental natural y el bienestar de cada persona.
          </p>
        </div>

        {/* Doctor Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-content">
          {/* Left: Interactive clinical team photo with overlays */}
          <div className="lg:col-span-5 relative" id="about-image-col">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-purple-600/5 blur-2xl -z-10"></div>
            
            <div className="rounded-[2.5rem] border-8 border-slate-50 shadow-xl overflow-hidden aspect-[4/5] bg-slate-100 relative">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=80"
                alt="Dr. Andrés Moyetón Arenas - Especialista en Implantes Dentales"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Signature */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-black/95 text-white backdrop-blur-md p-5 rounded-2xl border border-brand-purple-900/50 space-y-1">
                <span className="text-xs font-bold text-brand-gold-400 uppercase tracking-widest block">Director Clínico</span>
                <p className="text-base font-bold text-white">{clinicInfo.name}</p>
                <p className="text-[10px] text-slate-300 font-medium leading-none">Cédula Especialidad: {clinicInfo.specialtyCedula}</p>
              </div>
            </div>
          </div>

          {/* Right: Biography, values & academic credentials */}
          <div className="lg:col-span-7 space-y-8" id="about-text-col">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-purple-950">Pasión por el Paciente como Ser Humano</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {clinicInfo.aboutShort}
              </p>
              <div className="bg-brand-purple-950/5 border border-brand-purple-900/10 rounded-2xl p-5 space-y-3.5">
                <p className="text-brand-purple-900 font-bold text-xs uppercase tracking-widest">Con tu evaluación podrás:</p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {clinicInfo.aboutBulletPoints.map((bp, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-brand-purple-700 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Credentials / Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="academic-credentials">
              <div className="flex gap-4 items-start" id="cred-1">
                <div className="p-3 rounded-2xl bg-brand-purple-950 text-brand-gold-400 shrink-0 border border-brand-purple-900/20">
                  <GraduationCap className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">Egreso & Formación</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Egresado de la reconocida {clinicInfo.education}, con Cédula Profesional {clinicInfo.professionalCedula}.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start" id="cred-2">
                <div className="p-3 rounded-2xl bg-brand-purple-950 text-brand-gold-400 shrink-0 border border-brand-purple-900/20">
                  <Stethoscope className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">Médicos Sin Fronteras</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Colaboración humanitaria internacional activa que fundamenta la calidez y el sentido ético de cada intervención médica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start" id="cred-3">
                <div className="p-3 rounded-2xl bg-brand-purple-950 text-brand-gold-400 shrink-0 border border-brand-purple-900/20">
                  <Microscope className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">Aparatología de Precisión</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Escaneo intraoral, Rayos X y diseño inmediato para colocar coronas estéticas y duraderas.
                  </p>
                </div>
              </div>


            </div>

            {/* Quick quote box */}
            <div className="bg-brand-purple-950/5 border-l-4 border-brand-purple-700 p-5 rounded-r-2xl" id="dr-quote-box">
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "En nuestra clínica, entendemos que tu sonrisa es mucho más que estética: es confianza, es salud, es poder sonreír sin pensarlo dos veces."
              </p>
              <span className="block text-xs font-bold text-brand-purple-950 mt-2 text-right">— Dr. Andrés Moyetón Arenas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
