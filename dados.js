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

var PILOTOS = [
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
  { nome: "Max",     equipe: "Red Bull",     cor: "#0600ef" },
  { nome: "Carlos",  equipe: "Red Bull",     cor: "#0600ef" },
];

var resultados = [

  // ── ETAPA 01 ────────────────────────────────────────────────
  {
    etapa: "01",
    gp: "GP da Austrália",
    circuito: "Melbourne",
    bandeira: "🦘",
    data: "08/03",
    hasSprint: false,
    resultado: [
      { pos:  1, piloto: "Lucas.B", equipe: "Mercedes",     pontos: 25 },
      { pos:  2, piloto: "Marcio",  equipe: "Kick Sauber",  pontos: 18 },
      { pos:  3, piloto: "Charles", equipe: "Ferrari",      pontos: 15 },
      { pos:  4, piloto: "Oscar",   equipe: "McLaren",      pontos: 12 },
      { pos:  5, piloto: "Exodo",   equipe: "Aston Martin", pontos: 10 },
      { pos:  6, piloto: "Lando",   equipe: "McLaren",      pontos:  8 },
      { pos:  7, piloto: "Denis",   equipe: "Kick Sauber",  pontos:  6 },
      { pos:  8, piloto: "Lucas.H", equipe: "Mercedes",     pontos:  4 },
      { pos:  9, piloto: "Cleber",  equipe: "Aston Martin", pontos:  2 },
      { pos: 10, piloto: "Lewis",   equipe: "Ferrari",      pontos:  0 },
    ],
    sprint: [],
    polePosition: "Lucas.B",
    voltaRapida:  "Lucas.B",
    corridaLimpa: "Marcio",
    pilotoDia:    "Exodo",
  },

  // ── ETAPA 02 ────────────────────────────────────────────────
  {
    etapa: "02",
    gp: "GP da China",
    circuito: "Xangai",
    bandeira: "🐉",
    data: "15/03",
    hasSprint: true,
    resultado: [
      { pos:  1, piloto: "Marcio",  equipe: "Kick Sauber",  pontos: 25 },
      { pos:  2, piloto: "Lucas.B", equipe: "Mercedes",     pontos: 18 },
      { pos:  3, piloto: "Exodo",   equipe: "Aston Martin", pontos: 15 },
      { pos:  4, piloto: "Lucas.H", equipe: "Mercedes",     pontos: 12 },
      { pos:  5, piloto: "Lewis",   equipe: "Ferrari",      pontos: 10 },
      { pos:  6, piloto: "Charles", equipe: "Ferrari",      pontos:  8 },
      { pos:  7, piloto: "Lando",   equipe: "McLaren",      pontos:  6 },
      { pos:  8, piloto: "Denis",   equipe: "Kick Sauber",  pontos:  4 },
      { pos:  9, piloto: "Cleber",  equipe: "Aston Martin", pontos:  2 },
      { pos: 10, piloto: "Oscar",   equipe: "McLaren",      pontos:  0 },
    ],
    sprint: [
      { pos: 1, piloto: "Marcio",  equipe: "Kick Sauber",  pontos: 8 },
      { pos: 2, piloto: "Lucas.B", equipe: "Mercedes",     pontos: 7 },
      { pos: 3, piloto: "Exodo",   equipe: "Aston Martin", pontos: 6 },
      { pos: 4, piloto: "Denis",   equipe: "Kick Sauber",  pontos: 5 },
      { pos: 5, piloto: "Lewis",   equipe: "Ferrari",      pontos: 4 },
      { pos: 6, piloto: "Charles", equipe: "Ferrari",      pontos: 3 },
      { pos: 7, piloto: "Lando",   equipe: "McLaren",      pontos: 2 },
      { pos: 8, piloto: "Oscar",   equipe: "McLaren",      pontos: 1 },
      { pos: 9, piloto: "Cleber",  equipe: "Aston Martin", pontos: 0 },
      { pos:10, piloto: "Lucas.H", equipe: "Mercedes",     pontos: 0, dsq: true },
    ],
    polePosition: "Exodo",
    voltaRapida:  "Marcio",
    corridaLimpa: "Marcio",
    pilotoDia:    "Charles",
    polePositionSprint: "Marcio",
    voltaRapidaSprint:  "Marcio",
    corridaLimpaSprint: "Exodo",
    pilotoDiaSprint:    "Denis",
  },

  // ── ETAPA 03 ────────────────────────────────────────────────
  {
    etapa: "03",
    gp: "GP do Japão",
    circuito: "Suzuka",
    bandeira: "🗾",
    data: "29/03",
    hasSprint: false,
    resultado: [
      { pos:  1, piloto: "Lucas.B", equipe: "Mercedes",     pontos: 25 },
      { pos:  2, piloto: "Exodo",   equipe: "Aston Martin", pontos: 18 },
      { pos:  3, piloto: "Marcio",  equipe: "Kick Sauber",  pontos: 15 },
      { pos:  4, piloto: "Lewis",   equipe: "Ferrari",      pontos: 12 },
      { pos:  5, piloto: "Lucas.H", equipe: "Mercedes",     pontos: 10 },
      { pos:  6, piloto: "Max",     equipe: "Red Bull",     pontos:  8 },
      { pos:  7, piloto: "Lando",   equipe: "McLaren",      pontos:  6 },
      { pos:  8, piloto: "Denis",   equipe: "Kick Sauber",  pontos:  4 },
      { pos:  9, piloto: "Oscar",   equipe: "McLaren",      pontos:  2 },
      { pos: 10, piloto: "Charles", equipe: "Ferrari",      pontos:  1 },
      { pos: 11, piloto: "Carlos",  equipe: "Red Bull",     pontos:  0 },
      { pos: 12, piloto: "Cleber",  equipe: "Aston Martin", pontos:  0 },
    ],
    sprint: [],
    polePosition: "Lucas.B",
    voltaRapida:  "Marcio",
    corridaLimpa: "Lucas.B",
    pilotoDia:    "Lucas.H",
  },

  // ── ETAPA 04 ────────────────────────────────────────────────
  {
    etapa: "04",
    gp: "GP do Bahrein",
    circuito: "Sakhir",
    bandeira: "🇧🇭",
    data: "12/04",
    hasSprint: false,
    resultado: [
      { pos:  1, piloto: "Lucas.B", equipe: "Mercedes",     pontos: 25 },
      { pos:  2, piloto: "Marcio",  equipe: "Kick Sauber",  pontos: 18 },
      { pos:  3, piloto: "Exodo",   equipe: "Aston Martin", pontos: 15 },
      { pos:  4, piloto: "Lucas.H", equipe: "Mercedes",     pontos: 12 },
      { pos:  5, piloto: "Denis",   equipe: "Kick Sauber",  pontos: 10 },
      { pos:  6, piloto: "Lewis",   equipe: "Ferrari",      pontos:  8 },
      { pos:  7, piloto: "Max",     equipe: "Red Bull",     pontos:  6 },
      { pos:  8, piloto: "Lando",   equipe: "McLaren",      pontos:  4 },
      { pos:  9, piloto: "Carlos",  equipe: "Red Bull",     pontos:  2 },
      { pos: 10, piloto: "Oscar",   equipe: "McLaren",      pontos:  1 },
      { pos: 11, piloto: "Charles", equipe: "Ferrari",      pontos:  0 },
      { pos: 12, piloto: "Cleber",  equipe: "Aston Martin", pontos:  0 },
    ],
    sprint: [],
    polePosition: "Lucas.B",
    voltaRapida:  "Lucas.B",
    corridaLimpa: "Lucas.B",
    pilotoDia:    "Max",
  },

  // ── ETAPA 05 ────────────────────────────────────────────────
  {
    etapa: "05",
    gp: "GP da Arábia Saudita",
    circuito: "Jeddah",
    bandeira: "🌙",
    data: "19/04",
    hasSprint: false,
    resultado: [
      { pos:  1, piloto: "Marcio",  equipe: "Kick Sauber",  pontos: 25 },
      { pos:  2, piloto: "Lucas.B", equipe: "Mercedes",     pontos: 18 },
      { pos:  3, piloto: "Lucas.H", equipe: "Mercedes",     pontos: 15 },
      { pos:  4, piloto: "Carlos",  equipe: "Red Bull",     pontos: 12 },
      { pos:  5, piloto: "Denis",   equipe: "Kick Sauber",  pontos: 10 },
      { pos:  6, piloto: "Charles", equipe: "Ferrari",      pontos:  8 },
      { pos:  7, piloto: "Max",     equipe: "Red Bull",     pontos:  6 },
      { pos:  8, piloto: "Oscar",   equipe: "McLaren",      pontos:  4 },
      { pos:  9, piloto: "Lewis",   equipe: "Ferrari",      pontos:  2 },
      { pos: 10, piloto: "Cleber",  equipe: "Aston Martin", pontos:  1 },
      { pos: 11, piloto: "Exodo",   equipe: "Aston Martin", pontos:  0 },
      { pos: 12, piloto: "Lando",   equipe: "McLaren",      pontos:  0 },
    ],
    sprint: [],
    polePosition: "Marcio",
    voltaRapida:  "Lucas.B",
    corridaLimpa: "Marcio",
    pilotoDia:    "Lucas.H",
  },

  // ── ETAPA 06 ────────────────────────────────────────────────
  {
    etapa: "06",
    gp: "GP de Miami",
    circuito: "Miami",
    bandeira: "🌴",
    data: "03/05",
    hasSprint: true,
    resultado: [
      { pos:  1, piloto: "Lewis",   equipe: "Ferrari",      pontos: 25 },
      { pos:  2, piloto: "Marcio",  equipe: "Kick Sauber",  pontos: 18 },
      { pos:  3, piloto: "Max",     equipe: "Red Bull",     pontos: 15 },
      { pos:  4, piloto: "Charles", equipe: "Ferrari",      pontos: 12 },
      { pos:  5, piloto: "Lando",   equipe: "McLaren",      pontos: 10 },
      { pos:  6, piloto: "Lucas.H", equipe: "Mercedes",     pontos:  8 },
      { pos:  7, piloto: "Carlos",  equipe: "Red Bull",     pontos:  6 },
      { pos:  8, piloto: "Lucas.B", equipe: "Mercedes",     pontos:  4 },
      { pos:  9, piloto: "Oscar",   equipe: "McLaren",      pontos:  2 },
      { pos: 10, piloto: "Cleber",  equipe: "Aston Martin", pontos:  1 },
      { pos: 11, piloto: "Denis",   equipe: "Kick Sauber",  pontos:  0 },
      { pos: 12, piloto: "Exodo",   equipe: "Aston Martin", pontos:  0 },
    ],
    sprint: [
      { pos: 1, piloto: "Marcio",  equipe: "Kick Sauber",  pontos: 8 },
      { pos: 2, piloto: "Max",     equipe: "Red Bull",     pontos: 7 },
      { pos: 3, piloto: "Charles", equipe: "Ferrari",      pontos: 6 },
      { pos: 4, piloto: "Oscar",   equipe: "McLaren",      pontos: 5 },
      { pos: 5, piloto: "Lando",   equipe: "McLaren",      pontos: 4 },
      { pos: 6, piloto: "Lewis",   equipe: "Ferrari",      pontos: 3 },
      { pos: 7, piloto: "Lucas.B", equipe: "Mercedes",     pontos: 2 },
      { pos: 8, piloto: "Carlos",  equipe: "Red Bull",     pontos: 1 },
      { pos: 9, piloto: "Denis",   equipe: "Kick Sauber",  pontos: 0 },
      { pos:10, piloto: "Cleber",  equipe: "Aston Martin", pontos: 0 },
      { pos:11, piloto: "Lucas.H", equipe: "Mercedes",     pontos: 0 },
      { pos:12, piloto: "Exodo",   equipe: "Aston Martin", pontos: 0 },
    ],
    polePosition: "Cleber",
    voltaRapida:  "Cleber",
    corridaLimpa: "Marcio",
    pilotoDia:    "Lando",
    polePositionSprint: "Max",
    voltaRapidaSprint:  "Marcio",
    corridaLimpaSprint: null,
    pilotoDiaSprint:    null,
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
    pilotoDia:    null,
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
    pilotoDia:    null,
  },

  // ── ETAPA 09 ────────────────────────────────────────────────
  {
    etapa: "09",
    gp: "GP da Espanha",
    circuito: "Barcelona-Catalunha",
    bandeira: "🐂",
    data: "14/06",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
    pilotoDia:    null,
  },

  // ── ETAPA 10 ────────────────────────────────────────────────
  {
    etapa: "10",
    gp: "GP da Áustria",
    circuito: "Red Bull Ring",
    bandeira: "⛰️",
    data: "28/06",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
    pilotoDia:    null,
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
    pilotoDia:    null,
  },

  // ── ETAPA 12 ────────────────────────────────────────────────
  {
    etapa: "12",
    gp: "GP da Bélgica",
    circuito: "Spa-Francorchamps",
    bandeira: "🍺",
    data: "19/07",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
    pilotoDia:    null,
  },

  // ── ETAPA 13 ────────────────────────────────────────────────
  {
    etapa: "13",
    gp: "GP da Hungria",
    circuito: "Hungaroring",
    bandeira: "🌶️",
    data: "26/07",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
    pilotoDia:    null,
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
    pilotoDia:    null,
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
    pilotoDia:    null,
  },

  // ── ETAPA 16 ────────────────────────────────────────────────
  {
    etapa: "16",
    gp: "GP da Espanha (Madrid)",
    circuito: "Novo Circuito de Madrid",
    bandeira: "🏟️",
    data: "13/09",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
    pilotoDia:    null,
  },

  // ── ETAPA 17 ────────────────────────────────────────────────
  {
    etapa: "17",
    gp: "GP do Azerbaijão",
    circuito: "Baku",
    bandeira: "🔥",
    data: "26/09",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
    pilotoDia:    null,
  },

  // ── ETAPA 18 ────────────────────────────────────────────────
  {
    etapa: "18",
    gp: "GP de Singapura",
    circuito: "Marina Bay",
    bandeira: "🦁",
    data: "11/10",
    hasSprint: true,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
    pilotoDia:    null,
  },

  // ── ETAPA 19 ────────────────────────────────────────────────
  {
    etapa: "19",
    gp: "GP dos EUA",
    circuito: "Austin (COTA)",
    bandeira: "🤠",
    data: "25/10",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
    pilotoDia:    null,
  },

  // ── ETAPA 20 ────────────────────────────────────────────────
  {
    etapa: "20",
    gp: "GP do México",
    circuito: "Hermanos Rodríguez",
    bandeira: "💀",
    data: "01/11",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
    pilotoDia:    null,
  },

  // ── ETAPA 21 ────────────────────────────────────────────────
  {
    etapa: "21",
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
    pilotoDia:    null,
  },

  // ── ETAPA 22 ────────────────────────────────────────────────
  {
    etapa: "22",
    gp: "GP de Las Vegas",
    circuito: "Las Vegas Strip",
    bandeira: "🎰",
    data: "21/11",
    hasSprint: false,
    resultado: [],
    sprint: [],
    polePosition: null,
    voltaRapida:  null,
    corridaLimpa: null,
    pilotoDia:    null,
  },

  // ── ETAPA 23 ────────────────────────────────────────────────
  {
    etapa: "23",
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
    pilotoDia:    null,
  },

  // ── ETAPA 24 ────────────────────────────────────────────────
  {
    etapa: "24",
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
    pilotoDia:    null,
  },

];

var infracoes = [
  { piloto: "Lando",   ocorrencias: [
    { etapa: "05", gravidade: "GRAVE", descricao: "Infração — GP da Arábia Saudita", pontosLicenca: -3 }
  ] },
  { piloto: "Oscar",   ocorrencias: [
    { etapa: "04", gravidade: "GRAVE", descricao: "Infração — GP do Bahrein", pontosLicenca: -3 }
  ] },
  { piloto: "Lewis",   ocorrencias: [] },
  { piloto: "Charles", ocorrencias: [
    { etapa: "04", gravidade: "GRAVE", descricao: "Infração — GP do Bahrein", pontosLicenca: -3 }
  ] },
  { piloto: "Lucas.B", ocorrencias: [] },
  { piloto: "Lucas.H", ocorrencias: [
    { etapa: "02", gravidade: "GRAVE", descricao: "DSQ — Sprint da China", pontosLicenca: -3 }
  ] },
  { piloto: "Exodo",   ocorrencias: [
    { etapa: "05", gravidade: "GRAVE", descricao: "Infração — GP da Arábia Saudita", pontosLicenca: -3 }
  ] },
  { piloto: "Cleber",  ocorrencias: [] },
  { piloto: "Marcio",  ocorrencias: [] },
  { piloto: "Denis",   ocorrencias: [] },
  { piloto: "Max",     ocorrencias: [] },
  { piloto: "Carlos",  ocorrencias: [] },
];
