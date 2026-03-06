// ═══════════════════════════════════════════════════════════════
//  VELOCIDADE BAIXA 2026 — DADOS DO CAMPEONATO
//  Como preencher após cada corrida:
//  - resultado: liste todos os pilotos por ordem de chegada
//  - pontos: pontos da corrida (25,18,15,12,10,8,6,4,2,1)
//  - sprint: preencha apenas nas etapas marcadas com hasSprint: true
//  - pontos sprint: (8,7,6,5,4,3,2,1)
//  - polePosition, voltaRapida, corridaLimpa: nome do piloto
//  - Deixe resultado: [] e sprint: [] quando ainda não aconteceu
// ═══════════════════════════════════════════════════════════════

const PILOTOS = [
  { nome: "Lando",   equipe: "McLaren",      cor: "#ff8000" },
  { nome: "Oscar",   equipe: "McLaren",      cor: "#ff8000" },
  { nome: "Lewis",   equipe: "Ferrari",      cor: "#e8002d" },
  { nome: "Charles", equipe: "Ferrari",      cor: "#e8002d" },
  { nome: "Lucas.B", equipe: "Mercedes",     cor: "#00d2be" },
  { nome: "Lucas.H", equipe: "Mercedes",     cor: "#00d2be" },
  { nome: "Exodo",   equipe: "Aston Martin", cor: "#006f62" },
  { nome: "Cleber",  equipe: "Aston Martin", cor: "#006f62" },
  { nome: "Marcio",  equipe: "Kick Sauber",  cor: "#b4dc00" },
  { nome: "Denis",   equipe: "Kick Sauber",  cor: "#b4dc00" },
];

const resultados = [

  // ── ETAPA 01 ────────────────────────────────────────────────
  {
    etapa: "01",
    gp: "GP da Austrália",
    circuito: "Melbourne",
    bandeira: "🦘",
    data: "08/03",
    hasSprint: false,
    resultado: [
      // Preencha após a corrida:
      // { pos: 1, piloto: "Lando",   equipe: "McLaren",      pontos: 25 },
      // { pos: 2, piloto: "Oscar",   equipe: "McLaren",      pontos: 18 },
      // { pos: 3, piloto: "Lewis",   equipe: "Ferrari",      pontos: 15 },
      // { pos: 4, piloto: "Charles", equipe: "Ferrari",      pontos: 12 },
      // { pos: 5, piloto: "Lucas.B", equipe: "Mercedes",     pontos: 10 },
      // { pos: 6, piloto: "Lucas.H", equipe: "Mercedes",     pontos:  8 },
      // { pos: 7, piloto: "Exodo",   equipe: "Aston Martin", pontos:  6 },
      // { pos: 8, piloto: "Cleber",  equipe: "Aston Martin", pontos:  4 },
      // { pos: 9, piloto: "Marcio",  equipe: "Kick Sauber",  pontos:  2 },
      // { pos:10, piloto: "Denis",   equipe: "Kick Sauber",  pontos:  1 },
    ],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 02 ────────────────────────────────────────────────
  {
    etapa: "02",
    gp: "GP da China",
    circuito: "Xangai",
    bandeira: "🐉",
    data: "22/03",
    hasSprint: true,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 03 ────────────────────────────────────────────────
  {
    etapa: "03",
    gp: "GP do Japão",
    circuito: "Suzuka",
    bandeira: "🗾",
    data: "05/04",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 04 ────────────────────────────────────────────────
  {
    etapa: "04",
    gp: "GP do Bahrein",
    circuito: "Sakhir",
    bandeira: "🇧🇭",
    data: "19/04",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 05 ────────────────────────────────────────────────
  {
    etapa: "05",
    gp: "GP da Arábia Saudita",
    circuito: "Jeddah",
    bandeira: "🌙",
    data: "26/04",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 06 ────────────────────────────────────────────────
  {
    etapa: "06",
    gp: "GP de Miami",
    circuito: "Miami",
    bandeira: "🌴",
    data: "03/05",
    hasSprint: true,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 07 ────────────────────────────────────────────────
  {
    etapa: "07",
    gp: "GP do Canadá",
    circuito: "Montreal",
    bandeira: "🍁",
    data: "24/05",
    hasSprint: true,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 08 ────────────────────────────────────────────────
  {
    etapa: "08",
    gp: "GP de Mônaco",
    circuito: "Monte Carlo",
    bandeira: "🎲",
    data: "07/06",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 09 ────────────────────────────────────────────────
  {
    etapa: "09",
    gp: "GP da Espanha",
    circuito: "Barcelona",
    bandeira: "🐂",
    data: "21/06",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 10 ────────────────────────────────────────────────
  {
    etapa: "10",
    gp: "GP da Áustria",
    circuito: "Spielberg",
    bandeira: "⛰️",
    data: "28/06",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 11 ────────────────────────────────────────────────
  {
    etapa: "11",
    gp: "GP da Grã-Bretanha",
    circuito: "Silverstone",
    bandeira: "👑",
    data: "05/07",
    hasSprint: true,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 12 ────────────────────────────────────────────────
  {
    etapa: "12",
    gp: "GP da Bélgica",
    circuito: "Spa-Francorchamps",
    bandeira: "🍺",
    data: "26/07",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 13 ────────────────────────────────────────────────
  {
    etapa: "13",
    gp: "GP da Hungria",
    circuito: "Budapeste",
    bandeira: "🌶️",
    data: "02/08",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 14 ────────────────────────────────────────────────
  {
    etapa: "14",
    gp: "GP da Holanda",
    circuito: "Zandvoort",
    bandeira: "🌷",
    data: "23/08",
    hasSprint: true,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 15 ────────────────────────────────────────────────
  {
    etapa: "15",
    gp: "GP da Itália",
    circuito: "Monza",
    bandeira: "🍕",
    data: "06/09",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 16 ────────────────────────────────────────────────
  {
    etapa: "16",
    gp: "GP do Azerbaijão",
    circuito: "Baku",
    bandeira: "🔥",
    data: "20/09",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 17 ────────────────────────────────────────────────
  {
    etapa: "17",
    gp: "GP de Singapura",
    circuito: "Marina Bay",
    bandeira: "🦁",
    data: "04/10",  // corrida domingo, sprint sábado
    hasSprint: true,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 18 ────────────────────────────────────────────────
  {
    etapa: "18",
    gp: "GP dos EUA",
    circuito: "Austin",
    bandeira: "🤠",
    data: "18/10",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 19 ────────────────────────────────────────────────
  {
    etapa: "19",
    gp: "GP do México",
    circuito: "Cidade do México",
    bandeira: "🌮",
    data: "25/10",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 20 ────────────────────────────────────────────────
  {
    etapa: "20",
    gp: "GP do Brasil",
    circuito: "Interlagos",
    bandeira: "🇧🇷",
    data: "08/11",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 21 ────────────────────────────────────────────────
  {
    etapa: "21",
    gp: "GP de Las Vegas",
    circuito: "Las Vegas",
    bandeira: "🎰",
    data: "22/11",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 22 ────────────────────────────────────────────────
  {
    etapa: "22",
    gp: "GP do Catar",
    circuito: "Lusail",
    bandeira: "🐪",
    data: "29/11",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

  // ── ETAPA 23 ────────────────────────────────────────────────
  {
    etapa: "23",
    gp: "GP de Abu Dhabi",
    circuito: "Yas Marina",
    bandeira: "🏙️",
    data: "06/12",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
  },

];

// ═══════════════════════════════════════════════════════════════
//  EXEMPLO DE ETAPA PREENCHIDA (copie e cole o modelo acima):
//
//  {
//    etapa: "01",
//    gp: "GP da Austrália",
//    circuito: "Melbourne",
//    bandeira: "🦘",
//    data: "08/03",
//    hasSprint: false,
//    resultado: [
//      { pos: 1, piloto: "Lando",   equipe: "McLaren",      pontos: 25 },
//      { pos: 2, piloto: "Oscar",   equipe: "McLaren",      pontos: 18 },
//      { pos: 3, piloto: "Lewis",   equipe: "Ferrari",      pontos: 15 },
//      { pos: 4, piloto: "Charles", equipe: "Ferrari",      pontos: 12 },
//      { pos: 5, piloto: "Lucas.B", equipe: "Mercedes",     pontos: 10 },
//      { pos: 6, piloto: "Lucas.H", equipe: "Mercedes",     pontos:  8 },
//      { pos: 7, piloto: "Exodo",   equipe: "Aston Martin", pontos:  6 },
//      { pos: 8, piloto: "Cleber",  equipe: "Aston Martin", pontos:  4 },
//      { pos: 9, piloto: "Marcio",  equipe: "Kick Sauber",  pontos:  2 },
//      { pos:10, piloto: "Denis",   equipe: "Kick Sauber",  pontos:  1 },
//    ],
//    sprint: [],   // se hasSprint: true, preencha igual ao resultado mas com pontos 8,7,6,5,4,3,2,1
//    polePosition: "Lando",
//    voltaRapida:  "Oscar",
//    corridaLimpa: "Charles",
//  },
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
//  INFRAÇÕES DE SUPER LICENÇA
//  Como preencher quando um piloto receber punição:
//  { etapa: "03", gravidade: "BAIXA", descricao: "Toque imprudente", pontosLicenca: -2 }
//  gravidade pode ser: "BAIXA", "ALTA" ou "GRAVE"
//  pontosLicenca: use o valor negativo conforme as regras
// ═══════════════════════════════════════════════════════════════

const infracoes = [
  { piloto: "Lando",   ocorrencias: [] },
  { piloto: "Oscar",   ocorrencias: [] },
  { piloto: "Lewis",   ocorrencias: [] },
  { piloto: "Charles", ocorrencias: [] },
  { piloto: "Lucas.B", ocorrencias: [] },
  { piloto: "Lucas.H", ocorrencias: [] },
  { piloto: "Exodo",   ocorrencias: [] },
  { piloto: "Cleber",  ocorrencias: [] },
  { piloto: "Marcio",  ocorrencias: [] },
  { piloto: "Denis",   ocorrencias: [] },
];
