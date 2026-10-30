import React, { useState } from 'react';
import { FAQ_DATA, FaqItem } from '../data/gymData';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Aula Experimental', 'Planos', 'Modalidades', 'Horários', 'Estrutura'];

  const filteredFaqs = FAQ_DATA.filter((item: FaqItem) => {
    if (activeCategory === 'Todas') return true;
    return item.category === activeCategory;
  });

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#101010] border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8F031] mb-2">
            <span className="w-5 h-[2px] bg-[#C8F031]" />
            <span>Tire suas Dúvidas</span>
            <span className="w-5 h-[2px] bg-[#C8F031]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            Informações objetivas sobre como funciona nossa estrutura, processo de agendamento e políticas de acesso.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`text-xs px-3 py-1.5 rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#C8F031] text-black font-semibold shadow-sm'
                  : 'bg-[#181818] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-md border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#181818] border-[#C8F031]/60'
                    : 'bg-[#161616] border-zinc-800/90 hover:border-zinc-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-medium tracking-tight ${isOpen ? 'text-[#C8F031]' : 'text-zinc-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-sm flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#C8F031] text-black' : 'bg-zinc-800 text-zinc-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-zinc-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                      <span>Categoria: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help CTA */}
        <div className="mt-12 text-center p-6 rounded-md bg-[#161616] border border-zinc-800/80">
          <p className="text-xs text-zinc-400 mb-3">
            Não encontrou a resposta que procurava? Nossa equipe está à disposição para esclarecer qualquer ponto.
          </p>
          <a
            href="#agendamento"
            className="inline-flex items-center gap-1.5 text-xs text-[#C8F031] hover:underline font-semibold"
          >
            <span>Fale conosco através do agendamento de aula experimental</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
