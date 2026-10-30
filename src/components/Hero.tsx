import React from 'react';
import { ArrowDown, Check, ShieldCheck, Dumbbell, Clock } from 'lucide-react';

interface HeroProps {
  onScheduleClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick, onExploreClick }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 bg-[#141414] overflow-hidden border-b border-[#222222]">
      {/* Background Graphic Grid Subtle Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C8F031 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Action (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Context kicker: clean unboxed metadata with subtle lime line */}
            <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-zinc-400 font-semibold mb-4">
              <span className="w-8 h-[2px] bg-[#C8F031]" />
              <span className="text-[#C8F031]">Vértice Academia</span>
              <span className="text-zinc-600">·</span>
              <span>Padrão Técnico de Alto Rendimento</span>
            </div>

            {/* Headline: Barlow Condensed 700, strict size & balance */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-[0.98] text-balance mb-6">
              Sua primeira aula <br className="hidden sm:inline" />
              <span className="text-[#C8F031]">é por nossa conta.</span>
            </h1>

            {/* Short & Compelling Introduction */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed mb-8 font-normal">
              Conheça um centro de treinamento projetado para quem valoriza espaço real, biomecânica de precisão e acompanhamento técnico consistente. Experimente qualquer modalidade sem compromisso nem taxa de adesão.
            </p>

            {/* CTA Group: Prominent primary button & secondary scroll */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <button
                type="button"
                onClick={onScheduleClick}
                className="bg-[#C8F031] hover:bg-[#b5dc26] text-black font-semibold text-base px-8 py-4 rounded-sm transition-all duration-200 shadow-lg shadow-[#C8F031]/15 hover:shadow-[#C8F031]/30 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Agendar Aula Gratuita</span>
                <span className="text-black font-bold group-hover:translate-x-0.5 transition-transform">→</span>
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="bg-transparent hover:bg-zinc-800/60 text-zinc-300 hover:text-white border border-zinc-700 font-medium text-sm px-6 py-4 rounded-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver Modalidades</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            {/* Immediate Proof Points - Zero Pills, clean typography & dividers */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C8F031] shrink-0" />
                <span className="text-zinc-300">Sem taxas de adesão</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8F031] shrink-0" />
                <span className="text-zinc-300">Treinadores no salão</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-[#C8F031] shrink-0" />
                <span className="text-zinc-300">Sem aglomeração em pico</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
              
              {/* Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden">
                <img
                  src="/src/assets/images/hero_vertice_gym_1793401913668.jpg"
                  alt="Instalações e área de treinamento da Vértice Academia"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Scrim Overlay for Contrast & Drama */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent pointer-events-none" />
                
                {/* Subtle Geometric Corner Accent */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C8F031]/80 pointer-events-none" />
              </div>

              {/* Informative Floating Card at the bottom of the visual container */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#141414]/90 backdrop-blur-md border border-zinc-800 p-4 rounded-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-[#C8F031] uppercase tracking-wider">Estrutura Completa</div>
                    <div className="font-heading text-lg font-bold text-white uppercase tracking-tight">1.800m² dedicados à sua performance</div>
                  </div>
                  <div className="w-10 h-10 rounded-sm bg-zinc-800/80 flex items-center justify-center text-[#C8F031] shrink-0">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-400 flex items-center justify-between">
                  <span>Equipamentos calibrados</span>
                  <span className="text-zinc-600">·</span>
                  <span>Climatização hospitalar</span>
                  <span className="text-zinc-600">·</span>
                  <span>Estacionamento</span>
                </div>
              </div>

            </div>

            {/* Subtle decorative glow element behind card */}
            <div className="absolute -inset-4 bg-[#C8F031]/5 rounded-xl blur-2xl -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
