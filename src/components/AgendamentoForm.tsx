import React, { useState, useEffect } from 'react';
import { CheckCircle2, Copy, Check, ExternalLink, Calendar, Clock, User, Phone, Sparkles, RefreshCw } from 'lucide-react';

interface AgendamentoFormProps {
  initialModality?: string;
  initialTime?: string;
}

export const AgendamentoForm: React.FC<AgendamentoFormProps> = ({
  initialModality,
  initialTime,
}) => {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [modalidade, setModalidade] = useState('Musculação');
  const [dia, setDia] = useState('');
  const [horario, setHorario] = useState('07:30');
  const [observacoes, setObservacoes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync external preselection if user clicked a modality or schedule slot
  useEffect(() => {
    if (initialModality) {
      setModalidade(initialModality);
    }
  }, [initialModality]);

  useEffect(() => {
    if (initialTime) {
      setHorario(initialTime);
    }
  }, [initialTime]);

  // Set min date to today in YYYY-MM-DD
  const todayString = new Date().toISOString().split('T')[0];

  // Set default date to tomorrow if empty
  useEffect(() => {
    if (!dia) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setDia(tomorrow.toISOString().split('T')[0]);
    }
  }, [dia]);

  // Phone input formatting mask: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    let formatted = raw;

    if (raw.length <= 2) {
      formatted = raw.length > 0 ? `(${raw}` : '';
    } else if (raw.length <= 7) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    } else if (raw.length <= 11) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7, 11)}`;
    } else {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7, 11)}`;
    }

    setWhatsapp(formatted);
    if (errors.whatsapp) {
      setErrors((prev) => ({ ...prev, whatsapp: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!nome.trim() || nome.trim().length < 3) {
      newErrors.nome = 'Por favor, informe seu nome completo (mínimo 3 caracteres).';
    }

    const cleanPhone = whatsapp.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.whatsapp = 'Informe um número de WhatsApp válido com DDD (ex: 11 98765-4321).';
    }

    if (!modalidade) {
      newErrors.modalidade = 'Selecione uma modalidade para a aula.';
    }

    if (!dia) {
      newErrors.dia = 'Escolha a data desejada para sua aula.';
    }

    if (!horario) {
      newErrors.horario = 'Selecione um horário para a aula.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return '';
    try {
      const parts = dateString.split('-');
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
      return dateString;
    } catch {
      return dateString;
    }
  };

  const getCleanPhoneNumber = () => {
    const digits = whatsapp.replace(/\D/g, '');
    // If user typed 10 or 11 digits without country code, add Brazilian code (55)
    if (digits.length === 10 || digits.length === 11) {
      return `55${digits}`;
    }
    return digits;
  };

  const generateSummaryText = () => {
    const formattedDate = formatDateDisplay(dia);
    return `*SOLICITAÇÃO DE AULA EXPERIMENTAL — VÉRTICE ACADEMIA*
---------------------------------------------
• Visitante: ${nome.trim()}
• WhatsApp: ${whatsapp}
• Modalidade: ${modalidade}
• Data pretendida: ${formattedDate}
• Horário: ${horario}
${observacoes.trim() ? `• Observações: ${observacoes.trim()}\n` : ''}---------------------------------------------
Mensagem gerada para acompanhamento e agendamento da aula gratuita.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleCopySummary = async () => {
    const text = generateSummaryText();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  const handleOpenWhatsApp = () => {
    const cleanPhone = getCleanPhoneNumber();
    const text = encodeURIComponent(generateSummaryText());
    // STRICT REQUIREMENT: "abrir o WhatsApp utilizando o número informado pelo próprio visitante, nunca direcionando automaticamente para um número fictício da empresa."
    const url = `https://wa.me/${cleanPhone}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setCopied(false);
  };

  const modalitiesList = [
    'Musculação',
    'Treinamento Funcional',
    'Spinning',
    'Lutas'
  ];

  const suggestedTimes = [
    '06:30', '07:30', '08:30', '12:15', '17:30', '18:30', '19:30', '20:30'
  ];

  return (
    <section id="agendamento" className="py-20 lg:py-28 bg-[#141414] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8F031] mb-2">
            <span className="w-5 h-[2px] bg-[#C8F031]" />
            <span>Sem Custo · Sem Vínculo</span>
            <span className="w-5 h-[2px] bg-[#C8F031]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Agende sua Aula Experimental
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Preencha seus dados para reservar sua sessão gratuita. Conheça nossa estrutura, equipe e metodologia de perto.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-[#181818] border border-zinc-800 rounded-lg p-6 sm:p-10 shadow-2xl relative">
          
          {!isSubmitted ? (
            /* Booking Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. Nome Completo */}
                <div className="space-y-2">
                  <label htmlFor="nome" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Seu Nome Completo <span className="text-[#C8F031]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="nome"
                      value={nome}
                      onChange={(e) => {
                        setNome(e.target.value);
                        if (errors.nome) setErrors((prev) => ({ ...prev, nome: '' }));
                      }}
                      placeholder="Ex: Carlos Eduardo Silveira"
                      className={`w-full bg-[#121212] border ${
                        errors.nome ? 'border-red-500 ring-1 ring-red-500' : 'border-zinc-700 focus:border-[#C8F031]'
                      } text-white text-sm rounded-sm pl-10 pr-4 py-3 placeholder-zinc-600 focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.nome && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.nome}</p>
                  )}
                </div>

                {/* 2. WhatsApp do Visitante */}
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Seu Número de WhatsApp <span className="text-[#C8F031]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="whatsapp"
                      value={whatsapp}
                      onChange={handlePhoneChange}
                      placeholder="(11) 98765-4321"
                      className={`w-full bg-[#121212] border ${
                        errors.whatsapp ? 'border-red-500 ring-1 ring-red-500' : 'border-zinc-700 focus:border-[#C8F031]'
                      } text-white text-sm rounded-sm pl-10 pr-4 py-3 placeholder-zinc-600 focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.whatsapp ? (
                    <p className="text-[11px] text-red-400 mt-1">{errors.whatsapp}</p>
                  ) : (
                    <p className="text-[10px] text-zinc-500">Usado para enviar a confirmação da sua aula.</p>
                  )}
                </div>

              </div>

              {/* 3. Modalidade Desejada */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  Modalidade Desejada <span className="text-[#C8F031]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {modalitiesList.map((mod) => {
                    const isSelected = modalidade === mod;
                    return (
                      <button
                        key={mod}
                        type="button"
                        onClick={() => {
                          setModalidade(mod);
                          if (errors.modalidade) setErrors((prev) => ({ ...prev, modalidade: '' }));
                        }}
                        className={`py-3 px-3 rounded-sm border text-xs font-semibold transition-all cursor-pointer text-center ${
                          isSelected
                            ? 'bg-[#C8F031] border-[#C8F031] text-black shadow-md'
                            : 'bg-[#141414] border-zinc-700 text-zinc-300 hover:border-zinc-500'
                        }`}
                      >
                        {mod}
                      </button>
                    );
                  })}
                </div>
                {errors.modalidade && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.modalidade}</p>
                )}
              </div>

              {/* 4. Dia e Horário */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* Dia desejado */}
                <div className="space-y-2">
                  <label htmlFor="dia" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Dia Desejado <span className="text-[#C8F031]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="dia"
                      min={todayString}
                      value={dia}
                      onChange={(e) => {
                        setDia(e.target.value);
                        if (errors.dia) setErrors((prev) => ({ ...prev, dia: '' }));
                      }}
                      className={`w-full bg-[#121212] border ${
                        errors.dia ? 'border-red-500 ring-1 ring-red-500' : 'border-zinc-700 focus:border-[#C8F031]'
                      } text-white text-sm rounded-sm pl-10 pr-4 py-3 placeholder-zinc-600 focus:outline-none transition-colors [color-scheme:dark]`}
                    />
                  </div>
                  {errors.dia && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.dia}</p>
                  )}
                </div>

                {/* Horário desejado */}
                <div className="space-y-2">
                  <label htmlFor="horario" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Horário Sugerido <span className="text-[#C8F031]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="horario"
                      value={horario}
                      onChange={(e) => {
                        setHorario(e.target.value);
                        if (errors.horario) setErrors((prev) => ({ ...prev, horario: '' }));
                      }}
                      className={`w-full bg-[#121212] border ${
                        errors.horario ? 'border-red-500 ring-1 ring-red-500' : 'border-zinc-700 focus:border-[#C8F031]'
                      } text-white text-sm rounded-sm pl-10 pr-4 py-3 focus:outline-none transition-colors appearance-none`}
                    >
                      {suggestedTimes.map((time) => (
                        <option key={time} value={time} className="bg-[#181818] text-white">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.horario && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.horario}</p>
                  )}
                </div>

              </div>

              {/* 5. Observações opcionais */}
              <div className="space-y-2">
                <label htmlFor="obs" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Observações ou Objetivos <span className="text-zinc-600 font-normal">(Opcional)</span>
                </label>
                <textarea
                  id="obs"
                  rows={2}
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  placeholder="Ex: Já treino há 1 ano, foco em reabilitação de ombro, nunca fiz aula de spinning..."
                  className="w-full bg-[#121212] border border-zinc-700 focus:border-[#C8F031] text-white text-xs sm:text-sm rounded-sm p-3 placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#C8F031] hover:bg-[#b5dc26] text-black font-semibold text-sm sm:text-base py-4 px-6 rounded-sm transition-all shadow-lg shadow-[#C8F031]/15 hover:shadow-[#C8F031]/30 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-black" />
                  <span>Confirmar e Gerar Agendamento</span>
                </button>
                <p className="text-center text-[11px] text-zinc-500 mt-2.5">
                  Não é necessário fornecer dados de pagamento ou cartão de crédito.
                </p>
              </div>

            </form>
          ) : (
            /* Post-Submission Confirmation & Action Area */
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Success Badge */}
              <div className="flex items-center gap-3 p-4 rounded-md bg-[#C8F031]/10 border border-[#C8F031]/40 text-[#C8F031]">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white">
                    Agendamento Solicitado com Sucesso!
                  </h3>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    Os dados da sua aula experimental foram organizados abaixo.
                  </p>
                </div>
              </div>

              {/* Organized Summary Card */}
              <div className="bg-[#121212] border border-zinc-700 rounded-md p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="text-xs font-semibold text-[#C8F031] uppercase tracking-wider">
                    Resumo da Solicitação
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    Protocolo: VRT-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Visitante</span>
                    <strong className="text-white text-sm">{nome}</strong>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-semibold">WhatsApp Informado</span>
                    <strong className="text-[#C8F031] text-sm">{whatsapp}</strong>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Modalidade</span>
                    <strong className="text-white text-sm">{modalidade}</strong>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Data & Horário</span>
                    <strong className="text-white text-sm">{formatDateDisplay(dia)} às {horario}</strong>
                  </div>
                </div>

                {observacoes.trim() && (
                  <div className="pt-2 border-t border-zinc-800 text-xs">
                    <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Observações</span>
                    <p className="text-zinc-300 italic">{observacoes}</p>
                  </div>
                )}
              </div>

              {/* Two Main Actions required by prompt */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                
                {/* 1. Botão "Copiar resumo" */}
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full sm:w-1/2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs sm:text-sm py-3.5 px-4 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer border border-zinc-700"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#C8F031]" />
                      <span className="text-[#C8F031]">Resumo Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Copiar resumo</span>
                    </>
                  )}
                </button>

                {/* 2. Botão "Abrir no WhatsApp" using the visitor's own number */}
                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="w-full sm:w-1/2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs sm:text-sm py-3.5 px-4 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <ExternalLink className="w-4 h-4 text-black" />
                  <span>Abrir no WhatsApp ({whatsapp})</span>
                </button>

              </div>

              {/* Explanatory Note regarding WhatsApp rule */}
              <p className="text-center text-[11px] text-zinc-500 leading-relaxed">
                Ao clicar em &quot;Abrir no WhatsApp&quot;, o link direciona a mensagem formatada para o número de WhatsApp informado ({whatsapp}), permitindo que você guarde o resumo ou encaminhe diretamente.
              </p>

              {/* Edit / New Submission Option */}
              <div className="pt-4 text-center border-t border-zinc-800">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Editar dados ou fazer novo agendamento</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
