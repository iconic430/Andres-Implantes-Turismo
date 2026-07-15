import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Eye } from "lucide-react";

interface CaseItem {
  id: number;
  title: string;
  beforeUrl: string;
  afterUrl: string;
}

function SuccessCaseCard({
  item,
  showBefore,
  progress,
  onManualToggle,
}: {
  item: CaseItem;
  showBefore: boolean;
  progress: number;
  onManualToggle: (before: boolean) => void;
  key?: React.Key;
}) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-5 shadow-sm hover:shadow-md transition-all flex flex-col space-y-4" id={`success-case-card-${item.id}`}>
      {/* Header inside the card */}
      <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
        <span className="text-base font-bold text-slate-950">{item.title}</span>
        <span className="text-[10px] font-mono font-bold text-brand-purple-700 bg-brand-purple-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
          Garantizado
        </span>
      </div>

      {/* Image frame - 16:9 aspect ratio */}
      <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/5 border border-slate-200 shadow-sm group">
        {/* Progress bar at the top of the image */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-black/10 z-10">
          <div
            className="h-full bg-brand-gold-400 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Display Image with AnimatePresence */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={`${item.id}-${showBefore ? "before" : "after"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={showBefore ? item.beforeUrl : item.afterUrl}
              alt={`${item.title} - ${showBefore ? "Antes" : "Después"}`}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>

        {/* Gradient Overlay for aesthetic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

        {/* Floating manual toggle buttons inside the card */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-brand-black/95 backdrop-blur-md p-1 rounded-xl border border-brand-purple-900/30 flex gap-0.5 z-10">
          <button
            onClick={() => onManualToggle(true)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase transition-all tracking-wider ${
              showBefore
                ? "bg-brand-purple-950 text-brand-gold-400 border border-brand-purple-850 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Antes
          </button>
          <button
            onClick={() => onManualToggle(false)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase transition-all tracking-wider ${
              !showBefore
                ? "bg-brand-purple-950 text-brand-gold-400 border border-brand-purple-850 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Después
          </button>
        </div>

        {/* Status Indicator */}
        <div className="absolute top-3 right-3 bg-brand-purple-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-brand-purple-800 flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${showBefore ? "bg-amber-400 animate-pulse" : "bg-emerald-400 animate-pulse"}`}></span>
          <span className="text-[9px] font-mono font-bold text-white uppercase tracking-wider">
            {showBefore ? "Antes" : "Después"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const cases = [
    {
      id: 1,
      title: "Caso 1",
      beforeUrl: "https://i.postimg.cc/63SZCPN2/IMG-1800.jpg",
      afterUrl: "https://i.postimg.cc/prFFCB2p/IMG-1804.jpg"
    },
    {
      id: 2,
      title: "Caso 2",
      beforeUrl: "https://i.postimg.cc/RVt883GP/Captura-de-pantalla-2026-07-14-a-la(s)-6-41-05-p-m.png",
      afterUrl: "https://i.postimg.cc/qMKYYtQb/Captura-de-pantalla-2026-07-14-a-la(s)-6-41-25-p-m.png"
    },
    {
      id: 3,
      title: "Caso 3",
      beforeUrl: "https://i.postimg.cc/PrDccLK2/Captura-de-pantalla-2026-07-14-a-la(s)-6-42-26-p-m.png",
      afterUrl: "https://i.postimg.cc/4NcMMKw5/Captura-de-pantalla-2026-07-14-a-la(s)-6-43-01-p-m.png"
    }
  ];

  const [showBefore, setShowBefore] = useState(false); // default to después (final result)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalTime = 100; // tick every 100ms
    const duration = 5000; // 5 seconds
    const increment = (intervalTime / duration) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [showBefore]);

  useEffect(() => {
    if (progress >= 100) {
      setShowBefore((curr) => !curr);
      setProgress(0);
    }
  }, [progress]);

  const handleManualToggle = (before: boolean) => {
    setShowBefore(before);
    setProgress(0);
  };

  return (
    <section className="py-24 bg-white text-slate-800" id="casos-exito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-purple-700 font-bold uppercase block">
            Antes y Después
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight flex items-center justify-center gap-2" id="success-heading">
            <Sparkles className="w-6 h-6 text-brand-gold-600 shrink-0 animate-pulse" />
            Nuestros Resultados Clínicos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Resultados reales que demuestran la precisión y excelencia de nuestros tratamientos.
          </p>
        </div>

        {/* 3 Cases Grid with synchronized parent state */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="success-cases-grid">
          {cases.map((c) => (
            <SuccessCaseCard
              key={c.id}
              item={c}
              showBefore={showBefore}
              progress={progress}
              onManualToggle={handleManualToggle}
            />
          ))}
        </div>

        {/* User Guide Caption */}
        <div className="text-center text-xs text-slate-500 font-medium mt-10">
          <p className="flex items-center justify-center gap-1.5">
            <span>🔄 Cambiando automáticamente cada 5 segundos.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-600 font-semibold">Puedes alternar manualmente usando los botones de cada tarjeta.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

