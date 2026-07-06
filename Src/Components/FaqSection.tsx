import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { faqs } from "../data/clinicData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white text-slate-800" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-purple-700 font-bold uppercase block">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight" id="faq-heading">
            Resolvemos tus Dudas sobre Implantes Dentales
          </h2>
        </div>

        {/* FAQs List */}
        <div className="space-y-4" id="faqs-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left gap-4 font-bold text-slate-950 hover:bg-slate-100/50 transition-colors cursor-pointer"
                  id={`faq-btn-${index}`}
                >
                  <span className="text-sm sm:text-base flex items-center gap-2.5">
                    <HelpCircle className="w-5 h-5 text-brand-purple-700 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-purple-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-slate-200/50"
                      id={`faq-answer-container-${index}`}
                    >
                      <div className="px-6 py-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
