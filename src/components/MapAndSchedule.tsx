import { motion } from "motion/react";
import { Clock, MapPin, Calendar, Compass, Phone, Mail, Car } from "lucide-react";
import { clinicInfo, schedule } from "../data/clinicData";

export default function MapAndSchedule() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 text-slate-800" id="ubicacion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-purple-700 font-bold uppercase block">
            Ubicación Estratégica en la Frontera
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight" id="map-heading">
            A Pasos de la Frontera El Paso - Juárez
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Nuestra clínica está estratégicamente ubicada en Ciudad Juárez, ofreciendo un acceso sumamente ágil, seguro y conveniente para pacientes provenientes de Texas, Nuevo México, Arizona y el resto de EE. UU.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="map-grid-container">
          
          {/* Left Col: Map Iframe (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-lg min-h-[350px] lg:min-h-[450px] bg-slate-200 relative" id="map-iframe-container">
            <iframe
              src={clinicInfo.mapIframeUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Dr. Andrés Moyetón"
              id="google-maps-iframe-element"
            ></iframe>
            

          </div>

          {/* Right Col: Schedule Recuadro & Address Info (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6" id="schedule-card-col">
            
            {/* Schedule Card (Recuadro con horarios) */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md space-y-6" id="schedule-recuadro">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="p-2 bg-brand-purple-950 border border-brand-purple-900 text-brand-gold-400 rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Horarios de Atención</h3>
                  <p className="text-xs text-slate-500">Zona horaria de la frontera (MST)</p>
                </div>
              </div>

              {/* Day lists */}
              <div className="space-y-3" id="schedule-days-list">
                {schedule.map((s) => (
                  <div
                    key={s.day}
                    className="flex justify-between items-center text-sm"
                    id={`schedule-row-${s.day}`}
                  >
                    <span className="font-semibold text-slate-700">{s.day}</span>
                    <span
                      className={`font-mono text-xs px-3 py-1 rounded-full ${
                        s.closed
                          ? "bg-rose-50 text-rose-600 font-sans font-bold"
                          : "bg-slate-50 text-slate-600 border border-slate-100"
                      }`}
                    >
                      {s.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Border pickup status notice */}
              <div className="bg-brand-purple-950/5 border border-brand-purple-900/10 p-4 rounded-2xl flex gap-3.5 items-start">
                <div className="p-1 rounded-full bg-brand-purple-950 border border-brand-purple-900 text-brand-gold-400 shrink-0 mt-0.5 animate-pulse">
                  <Car className="w-4 h-4 text-brand-gold-400" />
                </div>
                <div className="text-xs text-slate-600">
                  <strong className="text-brand-purple-950 block">Pick-up Fronterizo (Válido para 3 o más implantes)</strong>
                  <span className="leading-relaxed">Para procedimientos de 3 o más implantes, te recogemos en el puente internacional que prefieras (Paso del Norte, Zaragoza, Santa Teresa) y te traemos de forma directa y segura a tu consulta dental.</span>
                </div>
              </div>
            </div>

            {/* Address & Contact Quick Info Card */}
            <div className="bg-brand-black text-white rounded-[2rem] p-8 border border-brand-purple-900/40 shadow-xl space-y-5 relative overflow-hidden" id="clinic-contact-info-card">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple-600/10 rounded-full blur-2xl"></div>
              
              <div className="space-y-4 relative z-10 text-sm">
                
                {/* Address */}
                <div className="flex gap-3.5 items-start">
                  <MapPin className="w-5 h-5 text-brand-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Dirección Exacta</span>
                    <span className="text-slate-300 text-xs mt-1 block leading-relaxed">{clinicInfo.address}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
