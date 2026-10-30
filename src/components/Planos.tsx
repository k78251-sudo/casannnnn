import React from 'react';
import { PLANS_DATA, Plan } from '../data/gymData';
import { Check, Star, Info, ArrowUpRight } from 'lucide-react';

interface PlanosProps {
  onSelectPlan: (planName: string) => void;
}

export const Planos: React.FC<PlanosProps> = ({ onSelectPlan }) => {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-[#101010] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8F031] mb-2">
            <span className="w-5 h-[2px] bg-[#C8F031]" />
            <span>Assinaturas & Acesso</span>
            <span className="w-5 h-[2px] bg-[#C8F031]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Planos desenhados para sua constância.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Acesso a todas as modalidades sem taxa de matrícula ou anuidade escondida. Escolha o período que melhor se adapta à sua rotina de treinamento.
          </p>
        </div>

        {/* Fictitious / Demonstrative Clear Notice Banner */}
        <div className="max-w-2xl mx-auto mb-12 p-3 sm:p-4 rounded-sm bg-zinc-900/90 border border-zinc-800 text-center flex items-center justify-center gap-2.5 text-xs text-zinc-400">
          <Info className="w-4 h-4 text-[#C8F031] shrink-0" />
          <span>
            <strong>Informação importante:</strong> Todos os preços e condições abaixo são <em>valores demonstrativos e fictícios</em>, criados exclusivamente para apresentação conceitual do projeto.
          </span>
        </div>

        {/* Pricing Cards Grid - Highlighting the Trimestral Plan */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS_DATA.map((plan: Plan) => {
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`relative rounded-lg flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#1c1c1c] border-2 border-[#C8F031] shadow-2xl shadow-[#C8F031]/10 lg:-translate-y-3 z-10'
                    : 'bg-[#161616] border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Visual Flag for Highlighted Plan */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C8F031] text-black text-xs font-bold font-heading uppercase tracking-wider px-4 py-1 rounded-sm shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 fill-black" />
                    <span>{plan.badge || 'Mais Escolhido'}</span>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex-1">
                  {/* Top info */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-tight">
                        {plan.name}
                      </h3>
                      {!isHighlighted && plan.badge && (
                        <span className="text-[11px] font-semibold text-[#C8F031] uppercase tracking-wide">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 min-h-[32px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-5 my-3 border-y border-zinc-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight tabular-nums">
                        {plan.priceFormatted}
                      </span>
                      <span className="text-sm text-zinc-400">{plan.periodLabel}</span>
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-1">
                      {plan.period} · <span className="text-zinc-400">Preço ilustrativo</span>
                    </div>
                  </div>

                  {/* Inclusions list */}
                  <div className="space-y-3 mt-6">
                    <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">O que está incluído:</p>
                    {plan.features.map((feat, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isHighlighted ? 'text-[#C8F031]' : 'text-zinc-400'}`} />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Terms & Conditions small note */}
                  <div className="mt-6 pt-4 border-t border-zinc-800/80 text-[11px] text-zinc-500 leading-snug">
                    <strong className="text-zinc-400">Condições:</strong> {plan.conditions}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 px-4 rounded-sm font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isHighlighted
                        ? 'bg-[#C8F031] hover:bg-[#b5dc26] text-black shadow-md active:scale-98'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white active:scale-98'
                    }`}
                  >
                    <span>Escolher {plan.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[10px] text-zinc-500 mt-2">
                    Primeira aula 100% gratuita antes de qualquer cobrança
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section bottom guarantee note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-zinc-400">
            Dúvidas sobre formas de pagamento e cancelamento? Consulte nossa seção de <a href="#faq" className="text-[#C8F031] hover:underline">Perguntas Frequentes</a> ou fale com nossa equipe.
          </p>
        </div>

      </div>
    </section>
  );
};
