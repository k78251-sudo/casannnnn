export interface Modality {
  id: string;
  name: string;
  tagline: string;
  description: string;
  focus: string[];
  intensity: 'Moderada' | 'Alta' | 'Muito Alta' | 'Personalizada';
  duration: string;
  image: string;
  features: string[];
}

export interface Plan {
  id: string;
  name: string;
  period: string;
  priceFormatted: string;
  periodLabel: string;
  description: string;
  highlighted: boolean;
  badge?: string;
  features: string[];
  conditions: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  modality: string;
  instructor: string;
  room: string;
  level: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  timeAtGym: string;
  focus: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Aula Experimental' | 'Planos' | 'Modalidades' | 'Horários' | 'Estrutura';
}

export const MODALITIES_DATA: Modality[] = [
  {
    id: 'musculacao',
    name: 'Musculação & Força',
    tagline: 'Biomecânica de precisão e pesos livres',
    description: 'Área com maquinário convergente, anilhas de competição e halteres de uretano até 60kg. Piso com absorção de impacto acústico e estações de agachamento independentes.',
    focus: ['Hipertrofia', 'Reabilitação Postural', 'Força Pura', 'Longevidade'],
    intensity: 'Personalizada',
    duration: 'Treino livre ou guiado',
    image: '/src/assets/images/modalidade_musculacao_1793401913085.jpg',
    features: [
      'Gaiolas de agachamento olímpico com barras calibradas',
      'Maquinário articulado com curvas de resistência fisiológicas',
      'Área dedicada a halteres de 2kg a 60kg sem filas',
      'Instrutores presentes para correção técnica contínua'
    ]
  },
  {
    id: 'funcional',
    name: 'Treinamento Funcional',
    tagline: 'Capacidade metabólica e agilidade atlética',
    description: 'Circuito dinâmico sobre grama sintética com trenós de tração, kettlebells certificados, caixas de salto e cordas navais. Desenvolvido para movimentar o corpo em múltiplos planos.',
    focus: ['Potência', 'Resistência Muscular', 'Mobilidade', 'Coordenação'],
    intensity: 'Alta',
    duration: '45 a 55 minutos',
    image: '/src/assets/images/modalidade_funcional_1793401913068.jpg',
    features: [
      'Pista de grama sintética para arrancada e trenó',
      'Monitores de remo ergométrico e air bikes',
      'Exercícios em pequenos grupos com supervisão técnica',
      'Periodização semanal para evitar sobrecarga articular'
    ]
  },
  {
    id: 'spinning',
    name: 'Spinning & Ride',
    tagline: 'Cardio intervalado de alta queima energética',
    description: 'Estúdio imersivo com acústica tratada, iluminação cênica suave e bicicletas magnéticas com medição de potência por watt e cadência em tempo real.',
    focus: ['Capacidade Cardiorrespiratória', 'Queima Calórica', 'Endurance', 'Música & Ritmo'],
    intensity: 'Muito Alta',
    duration: '45 minutos',
    image: '/src/assets/images/modalidade_spinning_1793401914814.jpg',
    features: [
      'Bicicletas com freio magnético silencioso e pedal misto (tênis ou clip)',
      'Painel individual com potência (Watts), RPM e zonas cardíacas',
      'Climatização rápida controlada por zonas térmicas',
      'Playlists coordenadas com os picos de esforço da aula'
    ]
  },
  {
    id: 'lutas',
    name: 'Artes Marciais & Boxe',
    tagline: 'Disciplina, técnica e condicionamento de combate',
    description: 'Dojo climatizado com tatame de alta densidade e trilho de sacos pesados de couro. Aulas focadas em fundamentos técnicos, reflexos rápidos e autocontrole.',
    focus: ['Defesa Pessoal', 'Condicionamento Físico', 'Agilidade', 'Foco Mental'],
    intensity: 'Muito Alta',
    duration: '60 minutos',
    image: '/src/assets/images/modalidade_lutas_1793401915142.jpg',
    features: [
      'Turmas com separação clara de níveis técnicos (iniciante ao avançado)',
      'Tatame higienizado com sistema antimicrobiano entre cada sessão',
      'Boxe tradicional, Muay Thai e Jiu-Jitsu técnico',
      'Segurança total com luvas e proteções obrigatórias'
    ]
  }
];

export const PLANS_DATA: Plan[] = [
  {
    id: 'mensal',
    name: 'Plano Mensal',
    period: 'Cobrança mensal recorrente',
    priceFormatted: 'R$ 219',
    periodLabel: '/mês',
    description: 'Para quem busca flexibilidade máxima e não quer assumir compromisso de fidelidade ou carência.',
    highlighted: false,
    features: [
      'Acesso integral à área de musculação e pesos livres',
      'Acesso a todas as aulas coletivas (Spinning, Funcional e Lutas)',
      'Avaliação física inicial com medição de composição corporal',
      'Armários rotativos e vestiários premium com secador e duchas',
      'Sem taxa de cancelamento após o primeiro mês'
    ],
    conditions: 'Cobrança mensal no cartão de crédito recorrente ou débito em conta. Sem retenção de limite total.'
  },
  {
    id: 'trimestral',
    name: 'Plano Trimestral',
    period: 'Ciclo de 3 meses',
    priceFormatted: 'R$ 179',
    periodLabel: '/mês',
    description: 'Nossa melhor relação entre consistência de treino, acompanhamento e valor mensal com desconto garantido.',
    highlighted: true,
    badge: 'Mais Escolhido',
    features: [
      'Tudo incluído no Plano Mensal',
      'Reavaliação física completa a cada 45 dias com relatório comparativo',
      '2 convites mensais para treinar com um convidado',
      'Acesso a workshops técnicos mensais de biomecânica e levantamento',
      'Prioridade na reserva de horários de Spinning e Lutas pelo app',
      'Kit de boas-vindas Vértice (toalha esportiva e garrafa térmica)'
    ],
    conditions: 'Parcelamento em até 3x sem juros no cartão de crédito. Economia de 18% em relação ao plano mensal.'
  },
  {
    id: 'anual',
    name: 'Plano Anual',
    period: 'Contrato de 12 meses',
    priceFormatted: 'R$ 149',
    periodLabel: '/mês',
    description: 'Para atletas e praticantes comprometidos com resultados sólidos a médio e longo prazo.',
    highlighted: false,
    badge: 'Maior Economia',
    features: [
      'Acesso irrestrito a todas as unidades e horários da academia',
      'Reavaliação física mensal com bioimpedância tetrapolar',
      '4 convites mensais para acompanhantes',
      'Direito a 30 dias de trancamento de plano durante viagens ou férias',
      'Desconto exclusivo com parceiros de fisioterapia e nutrição parceiros',
      'Locker individual fixo incluso (sujeito à disponibilidade)'
    ],
    conditions: 'Parcelamento em até 12x no cartão de crédito recorrente sem comprometer o limite total do cartão.'
  }
];

export const SCHEDULE_DAYS = [
  { id: 'seg-sex', label: 'Segunda a Sexta' },
  { id: 'sabado', label: 'Sábados' },
  { id: 'dom-fer', label: 'Domingos & Feriados' }
];

export const SCHEDULE_DATA: Record<string, ScheduleItem[]> = {
  'seg-sex': [
    { id: '1', time: '06:30 - 07:15', modality: 'Spinning & Ride', instructor: 'Rodrigo Vaz', room: 'Estúdio Cyclo', level: 'Todos os níveis' },
    { id: '2', time: '07:30 - 08:25', modality: 'Treinamento Funcional', instructor: 'Helena Prado', room: 'Arena Turf', level: 'Intermediário' },
    { id: '3', time: '08:30 - 09:30', modality: 'Musculação Guiada', instructor: 'Marcos Silveira', room: 'Salão Principal', level: 'Iniciante ao Avançado' },
    { id: '4', time: '12:15 - 13:00', modality: 'Spinning Express', instructor: 'Rodrigo Vaz', room: 'Estúdio Cyclo', level: 'Intensivo' },
    { id: '5', time: '13:00 - 13:50', modality: 'Treinamento Funcional', instructor: 'Helena Prado', room: 'Arena Turf', level: 'Todos os níveis' },
    { id: '6', time: '17:30 - 18:25', modality: 'Treinamento Funcional', instructor: 'Helena Prado', room: 'Arena Turf', level: 'Intermediário' },
    { id: '7', time: '18:30 - 19:20', modality: 'Spinning & Ride', instructor: 'Rodrigo Vaz', room: 'Estúdio Cyclo', level: 'Avançado' },
    { id: '8', time: '19:30 - 20:30', modality: 'Boxe & Muay Thai', instructor: 'Rodrigo Vaz', room: 'Dojo de Lutas', level: 'Fundamentos & Sparring' },
    { id: '9', time: '20:30 - 21:30', modality: 'Jiu-Jitsu Técnico', instructor: 'Marcos Silveira', room: 'Dojo de Lutas', level: 'Técnico' }
  ],
  'sabado': [
    { id: '10', time: '08:30 - 09:20', modality: 'Spinning Especial', instructor: 'Rodrigo Vaz', room: 'Estúdio Cyclo', level: 'Resistência' },
    { id: '11', time: '09:30 - 10:45', modality: 'Funcional Super Circuit', instructor: 'Helena Prado', room: 'Arena Turf', level: 'Todos os níveis' },
    { id: '12', time: '11:00 - 12:30', modality: 'Lutas Open Mat & Sparring', instructor: 'Rodrigo Vaz', room: 'Dojo de Lutas', level: 'Praticantes' },
    { id: '13', time: '14:00 - 17:00', modality: 'Musculação com Plantão Técnico', instructor: 'Marcos Silveira', room: 'Salão Principal', level: 'Livre' }
  ],
  'dom-fer': [
    { id: '14', time: '09:00 - 09:50', modality: 'Treinamento Funcional Mobilidade', instructor: 'Helena Prado', room: 'Arena Turf', level: 'Recuperação & Força' },
    { id: '15', time: '10:00 - 10:50', modality: 'Spinning Recovery Ride', instructor: 'Rodrigo Vaz', room: 'Estúdio Cyclo', level: 'Cardio Moderado' },
    { id: '16', time: '08:00 - 14:00', modality: 'Musculação Livre com Suporte', instructor: 'Marcos Silveira', room: 'Salão Principal', level: 'Treino Livre' }
  ]
};

export const TRAINERS_DATA: Trainer[] = [
  {
    id: 'marcos',
    name: 'Marcos Silveira',
    role: 'Coordenador Técnico & Biomecânica',
    bio: 'Mais de 12 anos dedicados ao treinamento de força resistida e correção postural biomecânica. Focado em atletas amadores e pessoas buscando longevidade física com segurança articular.',
    specialties: ['Biomecânica Articular', 'Periodização de Força', 'Levantamentos Básicos'],
    image: '/src/assets/images/coach_marcos_1793401937448.jpg'
  },
  {
    id: 'helena',
    name: 'Helena Prado',
    role: 'Especialista em Funcional & Condicionamento',
    bio: 'Formada em treinamento integrado com foco em transferência de força para movimentos cotidianos e agilidade atlética. Lidera circuitos com atenção minuciosa ao alinhamento de cada aluno.',
    specialties: ['Treinamento Funcional Metabólico', 'Mobilidade Dinâmica', 'Prevenção de Lesões'],
    image: '/src/assets/images/coach_helena_1793401935784.jpg'
  },
  {
    id: 'rodrigo',
    name: 'Rodrigo Vaz',
    role: 'Treinador de Ciclismo Indoor & Lutas',
    bio: 'Experiência sólida em artes marciais de contato e prescrição de treinos intervalados de alta intensidade (HIIT) sobre a bicicleta. Suas sessões unem disciplina, técnica e motivação direta.',
    specialties: ['Ciclismo por Zonas de Potência', 'Boxe & Kickboxing', 'Condicionamento de Alta Intensidade'],
    image: '/src/assets/images/coach_rodrigo_1793401937714.jpg'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Rafael Fontes',
    timeAtGym: 'Membro há 9 meses',
    focus: 'Musculação e Hipertrofia',
    quote: 'O que mais me chamou a atenção desde o primeiro dia foi a quantidade de bancos e anilhas livres. Não existe aquela fila irritante no horário de pico, e os instrutores realmente observam sua postura sem você precisar ficar chamando.'
  },
  {
    id: '2',
    name: 'Camila Nogueira',
    timeAtGym: 'Membro há 1 ano e 2 meses',
    focus: 'Spinning e Funcional',
    quote: 'As aulas de bike têm uma dinâmica muito séria com métricas de potência reais, não é só giro aleatório no escuro. A climatização do espaço é excelente, o vestiário é limpíssimo e dá pra treinar e ir direto trabalhar.'
  },
  {
    id: '3',
    name: 'Lucas Meireles',
    timeAtGym: 'Membro há 6 meses',
    focus: 'Lutas e Musculação',
    quote: 'Vim para fazer a aula experimental sem muita expectativa e acabei fechando o plano trimestral na mesma semana. O tatame é amplo, seguro e a turma é muito focada em técnica, sem clima de exibicionismo.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'Aula Experimental',
    question: 'Como funciona a aula experimental gratuita?',
    answer: 'A aula experimental é 100% gratuita e não exige cadastro de cartão de crédito. Você escolhe a modalidade de seu interesse (Musculação, Funcional, Spinning ou Lutas) e o horário conveniente. No dia agendado, você será recebido na recepção, conhecerá os vestiários e terá um instrutor para orientar sua sessão durante todo o período.'
  },
  {
    category: 'Aula Experimental',
    question: 'O que preciso levar para a minha primeira aula?',
    answer: 'Recomendamos roupas esportivas confortáveis, tênis apropriado para treino, uma garrafa de água e documento com foto para identificação na portaria. Fornecemos toalha de rosto esterilizada e armários com chave ou senha digital.'
  },
  {
    category: 'Planos',
    question: 'Existe taxa de adesão ou taxa de manutenção anual?',
    answer: 'Não cobramos taxas surpresa, taxa de adesão ou qualquer custo de anuidade embutido. Os valores demonstrados em nossos planos são transparentes e cobrem o acesso acordado sem acréscimos adicionais no decorrer do contrato.'
  },
  {
    category: 'Planos',
    question: 'Posso trancar meu plano se precisar viajar?',
    answer: 'Sim. No Plano Anual, você tem direito a até 30 dias de trancamento sem custos, podendo ser divididos em dois períodos de 15 dias. No Plano Trimestral, é possível trancar por até 10 dias consecutivos mediante aviso prévio.'
  },
  {
    category: 'Modalidades',
    question: 'Um mesmo plano dá direito a todas as modalidades?',
    answer: 'Sim! Nossos planos oferecem livre acesso tanto à área de musculação quanto às turmas de Treinamento Funcional, Spinning e Lutas, respeitando apenas a lotação máxima das salas para garantir a segurança e o conforto de todos.'
  },
  {
    category: 'Horários',
    question: 'Qual é o horário de funcionamento da academia?',
    answer: 'A academia funciona de segunda a sexta-feira das 06:00 às 23:00, aos sábados das 08:00 às 18:00 e aos domingos e feriados das 08:00 às 14:00. O acesso à musculação é livre durante todo o horário de abertura.'
  },
  {
    category: 'Estrutura',
    question: 'A academia conta com estacionamento próprio?',
    answer: 'Sim, dispomos de estacionamento interno com vagas cobertas e segurança privativa gratuito para alunos durante o período de treino (até 2 horas de permanência por sessão).'
  },
  {
    category: 'Estrutura',
    question: 'Preciso apresentar atestado médico para treinar?',
    answer: 'Sim. Em conformidade com as boas práticas desportivas e segurança biológica, solicitamos o preenchimento do questionário de prontidão física (PAR-Q) na recepção e a entrega de atestado médico com liberação cardiovascular em até 30 dias após o início das atividades.'
  }
];
