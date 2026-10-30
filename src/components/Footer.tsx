import React from 'react';
import { ArrowUp, Instagram, Youtube, Award, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c0c0c] text-white border-t border-[#222222] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-zinc-800/80">
          
          {/* Brand & Concept (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#C8F031] flex items-center justify-center rounded-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#141414"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="4 20 12 4 20 20" />
                  <polyline points="8 15 12 8 16 15" />
                </svg>
              </div>
              <span className="font-heading text-2xl font-bold tracking-wider uppercase text-white">
                VÉRTICE <span className="text-[#C8F031] font-light text-base tracking-normal">ACADEMIA</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Centro de treinamento focado em biomecânica de precisão, condicionamento atlético e constância física. Espaços dedicados com equipamentos calibrados para o seu melhor rendimento.
            </p>

            {/* Illustrative Social Media */}
            <div className="pt-2">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold block mb-2.5">
                Canais Oficiais Ilustrativos
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#agendamento"
                  aria-label="Instagram demonstrativo"
                  className="w-9 h-9 rounded-sm bg-[#161616] border border-zinc-800 hover:border-[#C8F031] hover:text-[#C8F031] text-zinc-400 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#agendamento"
                  aria-label="YouTube demonstrativo"
                  className="w-9 h-9 rounded-sm bg-[#161616] border border-zinc-800 hover:border-[#C8F031] hover:text-[#C8F031] text-zinc-400 flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#agendamento"
                  aria-label="Clube Strava demonstrativo"
                  className="w-9 h-9 rounded-sm bg-[#161616] border border-zinc-800 hover:border-[#C8F031] hover:text-[#C8F031] text-zinc-400 flex items-center justify-center transition-colors text-xs font-bold"
                >
                  <Award className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8F031]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Planos & Preços
                </a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-white transition-colors">
                  Grade de Horários
                </a>
              </li>
              <li>
                <a href="#professores" className="hover:text-white transition-colors">
                  Corpo Técnico
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Modalidades List (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8F031]">
              Modalidades
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">
                  Musculação de Precisão
                </a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">
                  Treinamento Funcional
                </a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">
                  Spinning & Ride
                </a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">
                  Boxe & Artes Marciais
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Demonstrative Info (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8F031]">
              Horário de Funcionamento
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span>Segunda a Sexta</span>
                <span className="text-white font-mono">06:00 – 23:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span>Sábados</span>
                <span className="text-white font-mono">08:00 – 18:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span>Domingos e Feriados</span>
                <span className="text-white font-mono">08:00 – 14:00</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#agendamento"
                className="inline-block text-xs font-semibold text-black bg-[#C8F031] hover:bg-[#b5dc26] px-4 py-2.5 rounded-sm transition-colors uppercase tracking-wider"
              >
                Agendar Aula Gratuita
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Disclaimer Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-zinc-500 shrink-0" />
            <span>
              Projeto web demonstrativo da <strong>Vértice Academia</strong>. Não possui vínculo comercial ou cadastros empresariais reais.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#C8F031] transition-colors cursor-pointer py-1"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
