import React from 'react';
import { TRAINERS_DATA, Trainer } from '../data/gymData';
import { Info } from 'lucide-react';

export const Professores: React.FC = () => {
  return (
    <section id="professores" className="py-20 lg:py-28 bg-[#101010] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8F031] mb-2">
              <span className="w-6 h-[2px] bg-[#C8F031]" />
              <span>Corpo Técnico</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Supervisão técnica de verdade.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
            Profissionais dedicados ao acompanhamento postural, progressão de carga segura e orientação em cada série.
          </p>
        </div>

        {/* Clear Notice Banner regarding illustrative trainer profiles */}
        <div className="mb-10 p-3 rounded-sm bg-zinc-900/60 border border-zinc-800 flex items-center gap-2 text-xs text-zinc-400 max-w-2xl">
          <Info className="w-4 h-4 text-[#C8F031] shrink-0" />
          <span>
            <strong>Nota informativa:</strong> Os perfis, fotografias e nomes abaixo são <em>demonstrativos e ilustrativos</em> para fins de apresentação do projeto.
          </span>
        </div>

        {/* Trainer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS_DATA.map((trainer: Trainer) => (
            <div
              key={trainer.id}
              className="bg-[#171717] border border-zinc-800 rounded-lg overflow-hidden flex flex-col group hover:border-zinc-700 transition-colors"
            >
              {/* Photo Frame (3:4 ratio) */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-90" />
                
                {/* Role overlay on image bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] text-[#C8F031] uppercase tracking-wider font-semibold block mb-1">
                    {trainer.role}
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-tight">
                    {trainer.name}
                  </h3>
                </div>
              </div>

              {/* Bio & Specialties */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  {trainer.bio}
                </p>

                <div className="pt-4 border-t border-zinc-800">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mb-2">
                    Especialidades Técnicas:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-zinc-300 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
