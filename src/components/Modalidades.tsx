import React from 'react';
import { MODALITIES_DATA, Modality } from '../data/gymData';
import { ArrowUpRight, Flame, Timer, Zap } from 'lucide-react';

interface ModalidadesProps {
  onSelectModality: (modalityName: string) => void;
}

export const Modalidades: React.FC<ModalidadesProps> = ({ onSelectModality }) => {
  const musculacao = MODALITIES_DATA.find((m) => m.id === 'musculacao')!;
  const funcional = MODALITIES_DATA.find((m) => m.id === 'funcional')!;
  const spinning = MODALITIES_DATA.find((m) => m.id === 'spinning')!;
  const lutas = MODALITIES_DATA.find((m) => m.id === 'lutas')!;

  return (
    <section id="modalidades" className="py-20 lg:py-28 bg-[#141414] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8F031] mb-2">
              <span className="w-6 h-[2px] bg-[#C8F031]" />
              <span>Metodologia & Espaços</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Modalidades projetadas <br className="hidden sm:inline" />
              <span className="text-zinc-400">para desempenho consistente.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
            Ambientes independentes, acústica tratada e equipamentos calibrados. Não misturamos fluxos: cada modalidade opera em sua própria arena técnica.
          </p>
        </div>

        {/* Asymmetric Composition - Distinct Layouts per Modality */}
        <div className="space-y-8">
          
          {/* 1. MUSCULAÇÃO: Marquee Wide Bento Split */}
          <div className="bg-[#191919] border border-zinc-800 rounded-lg overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Image Frame */}
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] overflow-hidden">
                <img
                  src={musculacao.image}
                  alt={musculacao.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#191919]" />
                
                {/* Modality tag overlay */}
                <div className="absolute top-4 left-4 bg-[#141414]/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-zinc-800 text-xs font-heading uppercase tracking-wider text-white">
                  01 · Arena Principal
                </div>
              </div>

              {/* Text & Specs Content */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-[#C8F031] font-semibold uppercase tracking-wider mb-2">
                    {musculacao.tagline}
                  </div>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
                    {musculacao.name}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    {musculacao.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6">
                    {musculacao.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8F031] mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metadata strip */}
                  <div className="flex flex-wrap items-center gap-4 py-4 border-t border-zinc-800 text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-[#C8F031]" />
                      <span>Intensidade: <strong className="text-white">{musculacao.intensity}</strong></span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1.5">
                      <Timer className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{musculacao.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectModality('Musculação')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-[#C8F031] text-zinc-200 hover:text-black font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all cursor-pointer"
                  >
                    <span>Testar Musculação na Aula Gratuita</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2 & 3. DUAL GRID: Treinamento Funcional + Spinning (Distinct visual structures) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Treinamento Funcional: Vertical Athletic Card with turf metrics */}
            <div className="bg-[#191919] border border-zinc-800 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-zinc-700 transition-colors">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={funcional.image}
                    alt={funcional.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#141414]/90 backdrop-blur-md px-3 py-1 rounded-sm border border-zinc-800 text-xs font-heading uppercase tracking-wider text-white">
                    02 · Conditioning & Turf
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="text-xs text-[#C8F031] font-semibold uppercase tracking-wider mb-2">
                    {funcional.tagline}
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
                    {funcional.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                    {funcional.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 mb-6 bg-zinc-900/80 p-3 rounded-sm border border-zinc-800">
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase block">Duração</span>
                      <strong className="text-white font-medium">{funcional.duration}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase block">Intensidade</span>
                      <strong className="text-[#C8F031] font-medium">{funcional.intensity}</strong>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-zinc-400">
                    {funcional.features.map((f, i) => (
                      <p key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#C8F031] rounded-full shrink-0" />
                        <span>{f}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectModality('Treinamento Funcional')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-[#C8F031] text-zinc-200 hover:text-black font-semibold text-xs uppercase tracking-wider px-4 py-3 rounded-sm transition-all cursor-pointer"
                >
                  <span>Experimentar Funcional</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Spinning & Ride: Dark Sensory Room aesthetic */}
            <div className="bg-[#191919] border border-zinc-800 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-zinc-700 transition-colors">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={spinning.image}
                    alt={spinning.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#141414]/90 backdrop-blur-md px-3 py-1 rounded-sm border border-zinc-800 text-xs font-heading uppercase tracking-wider text-white">
                    03 · Estúdio Cyclo
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="text-xs text-[#C8F031] font-semibold uppercase tracking-wider mb-2">
                    {spinning.tagline}
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
                    {spinning.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                    {spinning.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 mb-6 bg-zinc-900/80 p-3 rounded-sm border border-zinc-800">
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase block">Duração</span>
                      <strong className="text-white font-medium">{spinning.duration}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase block">Intensidade</span>
                      <strong className="text-[#C8F031] font-medium">{spinning.intensity}</strong>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-zinc-400">
                    {spinning.features.map((f, i) => (
                      <p key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#C8F031] rounded-full shrink-0" />
                        <span>{f}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectModality('Spinning')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-[#C8F031] text-zinc-200 hover:text-black font-semibold text-xs uppercase tracking-wider px-4 py-3 rounded-sm transition-all cursor-pointer"
                >
                  <span>Experimentar Spinning</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* 4. LUTAS & ARTES MARCIAIS: Dedicated Combat Studio with horizontal panoramic rhythm */}
          <div className="bg-[#191919] border border-zinc-800 rounded-lg overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Text & Specs Content (left side this time for composition balance) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <div className="text-xs text-[#C8F031] font-semibold uppercase tracking-wider mb-2">
                    {lutas.tagline}
                  </div>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
                    {lutas.name}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    {lutas.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {lutas.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8F031] mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 py-4 border-t border-zinc-800 text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#C8F031]" />
                      <span>Intensidade: <strong className="text-white">{lutas.intensity}</strong></span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1.5">
                      <Timer className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{lutas.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectModality('Lutas')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-[#C8F031] text-zinc-200 hover:text-black font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all cursor-pointer"
                  >
                    <span>Testar Lutas na Aula Gratuita</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image Frame */}
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] overflow-hidden order-1 lg:order-2">
                <img
                  src={lutas.image}
                  alt={lutas.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-[#191919]" />
                
                <div className="absolute top-4 right-4 bg-[#141414]/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-zinc-800 text-xs font-heading uppercase tracking-wider text-white">
                  04 · Dojo & Sparring
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
