import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Modalidades } from './components/Modalidades';
import { Planos } from './components/Planos';
import { GradeHorarios } from './components/GradeHorarios';
import { Professores } from './components/Professores';
import { Depoimentos } from './components/Depoimentos';
import { FAQ } from './components/FAQ';
import { AgendamentoForm } from './components/AgendamentoForm';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedModality, setSelectedModality] = useState<string>('Musculação');
  const [selectedTime, setSelectedTime] = useState<string>('07:30');

  const scrollToSchedule = () => {
    const el = document.getElementById('agendamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExplore = () => {
    const el = document.getElementById('modalidades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectModality = (modalityName: string) => {
    // Map modality names to form values
    let target = 'Musculação';
    if (modalityName.toLowerCase().includes('funcional')) target = 'Treinamento Funcional';
    else if (modalityName.toLowerCase().includes('spinning')) target = 'Spinning';
    else if (modalityName.toLowerCase().includes('lutas') || modalityName.toLowerCase().includes('boxe')) target = 'Lutas';
    
    setSelectedModality(target);
    scrollToSchedule();
  };

  const handleSelectPlan = (planName: string) => {
    scrollToSchedule();
  };

  const handleSelectSlot = (modality: string, time: string) => {
    let target = 'Musculação';
    if (modality.toLowerCase().includes('funcional')) target = 'Treinamento Funcional';
    else if (modality.toLowerCase().includes('spinning')) target = 'Spinning';
    else if (modality.toLowerCase().includes('lutas') || modality.toLowerCase().includes('boxe') || modality.toLowerCase().includes('jiu-jitsu')) target = 'Lutas';

    setSelectedModality(target);
    // Extract first time like 06:30 from "06:30 - 07:15"
    const parsedTime = time.split(' ')[0] || time;
    setSelectedTime(parsedTime);
    scrollToSchedule();
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col font-sans selection:bg-[#C8F031] selection:text-black">
      {/* 1. Navbar */}
      <Navbar onScheduleClick={scrollToSchedule} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onScheduleClick={scrollToSchedule}
          onExploreClick={scrollToExplore}
        />

        {/* 3. Modalidades */}
        <Modalidades onSelectModality={handleSelectModality} />

        {/* 4. Planos e Preços */}
        <Planos onSelectPlan={handleSelectPlan} />

        {/* 5. Grade de Horários */}
        <GradeHorarios onSelectSlot={handleSelectSlot} />

        {/* 6. Professores */}
        <Professores />

        {/* 7. Depoimentos */}
        <Depoimentos />

        {/* 8. FAQ */}
        <FAQ />

        {/* 9. Agendamento de Aula Experimental */}
        <AgendamentoForm
          initialModality={selectedModality}
          initialTime={selectedTime}
        />
      </main>

      {/* 10. Rodapé */}
      <Footer />
    </div>
  );
}
