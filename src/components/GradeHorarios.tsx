import React, { useState } from 'react';
import { SCHEDULE_DATA, SCHEDULE_DAYS, ScheduleItem } from '../data/gymData';
import { Clock, MapPin, User, ArrowUpRight } from 'lucide-react';

interface GradeHorariosProps {
  onSelectSlot: (modality: string, time: string) => void;
}

export const GradeHorarios: React.FC<GradeHorariosProps> = ({ onSelectSlot }) => {
  const [selectedDay, setSelectedDay] = useState<string>('seg-sex');
  const [modalityFilter, setModalityFilter] = useState<string>('all');

  const currentItems = SCHEDULE_DATA[selectedDay] || [];

  const filteredItems = currentItems.filter((item) => {
    if (modalityFilter === 'all') return true;
    return item.modality.toLowerCase().includes(modalityFilter.toLowerCase());
  });

  const filterOptions = [
    { id: 'all', label: 'Todas as Aulas' },
    { id: 'musculação', label: 'Musculação' },
    { id: 'funcional', label: 'Funcional' },
    { id: 'spinning', label: 'Spinning' },
    { id: 'lutas', label: 'Lutas / Boxe' },
  ];

  return (
    <section id="horarios" className="py-20 lg:py-28 bg-[#141414] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8F031] mb-2">
              <span className="w-6 h-[2px] bg-[#C8F031]" />
              <span>Programação Semanal</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Grade de Horários
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
            Grade regular de turmas presenciais. Salão de musculação funciona em fluxo contínuo durante todo o expediente da unidade.
          </p>
        </div>

        {/* Controls Bar: Day Tabs + Modality Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Day Segmented Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#1c1c1c] rounded-md border border-zinc-800 self-start sm:self-auto overflow-x-auto max-w-full">
            {SCHEDULE_DAYS.map((day) => (
              <button
                key={day.id}
                type="button"
                onClick={() => setSelectedDay(day.id)}
                className={`px-3 sm:px-4 py-2 text-xs font-semibold rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                  selectedDay === day.id
                    ? 'bg-[#C8F031] text-black shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>

          {/* Modality Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setModalityFilter(opt.id)}
                className={`text-xs px-2.5 py-1.5 rounded-sm border transition-colors whitespace-nowrap cursor-pointer ${
                  modalityFilter === opt.id
                    ? 'border-[#C8F031] text-[#C8F031] bg-[#C8F031]/10 font-medium'
                    : 'border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

        </div>

        {/* Schedule Display - Responsive: Desktop Table, Mobile Timeline Cards */}
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center bg-[#191919] border border-zinc-800 rounded-lg">
            <p className="text-zinc-400 text-sm">Nenhuma aula encontrada para este filtro no dia selecionado.</p>
            <button
              type="button"
              onClick={() => setModalityFilter('all')}
              className="mt-3 text-xs text-[#C8F031] hover:underline cursor-pointer"
            >
              Ver todas as modalidades
            </button>
          </div>
        ) : (
          <>
            {/* Desktop Structured View (md+) */}
            <div className="hidden md:block overflow-hidden rounded-lg border border-zinc-800 bg-[#181818]">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 bg-[#1f1f1f] text-xs uppercase tracking-wider text-zinc-400 font-semibold font-heading">
                    <th className="py-4 px-6">Horário</th>
                    <th className="py-4 px-6">Modalidade</th>
                    <th className="py-4 px-6">Espaço / Sala</th>
                    <th className="py-4 px-6">Treinador(a)</th>
                    <th className="py-4 px-6">Nível</th>
                    <th className="py-4 px-6 text-right">Agendamento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  {filteredItems.map((item: ScheduleItem) => (
                    <tr
                      key={item.id}
                      className="hover:bg-zinc-800/40 transition-colors group"
                    >
                      <td className="py-4 px-6 whitespace-nowrap font-mono tabular-nums text-white font-medium text-xs">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#C8F031]" />
                          <span>{item.time}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-semibold text-white">
                        {item.modality}
                      </td>
                      <td className="py-4 px-6 text-zinc-400 text-xs">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-zinc-500" />
                          <span>{item.room}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-zinc-300 text-xs">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3 h-3 text-zinc-500" />
                          <span>{item.instructor}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-xs text-zinc-400">
                        <span>{item.level}</span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          type="button"
                          onClick={() => onSelectSlot(item.modality, item.time)}
                          className="inline-flex items-center gap-1 text-xs text-[#C8F031] hover:text-[#b5dc26] font-medium transition-colors cursor-pointer group-hover:translate-x-0.5 duration-200"
                        >
                          <span>Reservar teste</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Vertical Flow (< md) - Zero horizontal scroll guaranteed */}
            <div className="md:hidden space-y-3">
              {filteredItems.map((item: ScheduleItem) => (
                <div
                  key={item.id}
                  className="bg-[#191919] border border-zinc-800 p-4 rounded-md flex flex-col justify-between gap-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#C8F031] font-mono tabular-nums mb-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.time}</span>
                      </div>
                      <h4 className="font-heading text-lg font-bold text-white uppercase tracking-tight">
                        {item.modality}
                      </h4>
                    </div>
                    <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-sm shrink-0">
                      {item.level}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400 py-2 border-t border-zinc-800/80">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-zinc-500 shrink-0" />
                      <span className="truncate">{item.room}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3 h-3 text-zinc-500 shrink-0" />
                      <span className="truncate">{item.instructor}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectSlot(item.modality, item.time)}
                    className="w-full bg-zinc-800 hover:bg-[#C8F031] text-zinc-200 hover:text-black py-2.5 px-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Agendar nesta sessão</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Free flow note */}
        <div className="mt-8 p-4 rounded-sm bg-[#181818] border border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div>
            <span className="font-semibold text-white">Salão de Musculação & Pesos Livres:</span> Acesso contínuo sem necessidade de agendamento de horário fixo, respeitando o horário de funcionamento da unidade.
          </div>
          <a
            href="#agendamento"
            className="text-[#C8F031] hover:underline font-semibold whitespace-nowrap"
          >
            Agendar experimental →
          </a>
        </div>

      </div>
    </section>
  );
};
