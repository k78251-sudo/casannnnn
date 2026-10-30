import React from 'react';
import { TESTIMONIALS_DATA, Testimonial } from '../data/gymData';
import { Quote, Info } from 'lucide-react';

export const Depoimentos: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#141414] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8F031] mb-2">
            <span className="w-5 h-[2px] bg-[#C8F031]" />
            <span>Experiência Real</span>
            <span className="w-5 h-[2px] bg-[#C8F031]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-3">
            O que dizem os membros
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Relatos sobre rotina de treino, qualidade do espaço e convivência técnica no dia a dia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item: Testimonial) => (
            <div
              key={item.id}
              className="bg-[#181818] border border-zinc-800 p-6 sm:p-7 rounded-lg flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-[#C8F031] opacity-70 mb-4" />
                <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Clean unboxed attribution */}
              <div className="pt-4 border-t border-zinc-800/80">
                <div className="font-semibold text-white text-sm">
                  {item.name}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-0.5">
                  <span>{item.timeAtGym}</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-zinc-400">{item.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Notice Banner for Fictitious Testimonials */}
        <div className="mt-10 p-3 rounded-sm bg-zinc-900/50 border border-zinc-800/80 max-w-xl mx-auto text-center flex items-center justify-center gap-2 text-[11px] text-zinc-500">
          <Info className="w-3.5 h-3.5 text-[#C8F031] shrink-0" />
          <span>
            <strong>Nota:</strong> Depoimentos demonstrativos e nomes fictícios para ilustração do projeto.
          </span>
        </div>

      </div>
    </section>
  );
};
