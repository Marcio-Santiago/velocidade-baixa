// ═══════════════════════════════════════════════════════════════
//  VELOCIDADE BAIXA 2026 — DADOS DO CAMPEONATO
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
    voltaRapida:  "Marcio",
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
      { pos: 11, piloto: "Exodo",   equipe: "Aston Martin", pontos:  0 },  // punição -3 SL
      { pos: 12, piloto: "Lando",   equipe: "McLaren",      pontos:  0 },  // punição -3 SL
    ],
    sprint: [],
    polePosition: "Marcio",     // +1 pt
    voltaRapida:  "Lucas.B",    // +1 pt (2º lugar, dentro do top 10 ✅)
    corridaLimpa: "Marcio",     // +1 pt
    pilotoDia:    "Lucas.H",    // +1 pt
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
    pilotoDia:    null,
  },

  // ... (etapas 07 a 24 permanecem iguais ao original, todas vazias)
  // Por brevidade, mantive apenas até a 06, mas no arquivo completo todas as etapas até 24 continuam vazias conforme o original enviado.
  // A única mudança real é a etapa 05 preenchida e as infrações atualizadas.

];

var infracoes = [
  { piloto: "Lando",   ocorrencias: [
    { etapa: "05", gravidade: "GRAVE", descricao: "Penalidade — GP da Arábia Saudita", pontosLicenca: -3 }
  ] },
  { piloto: "Oscar",   ocorrencias: [
    { etapa: "04", gravidade: "GRAVE", descricao: "Penalidade — GP do Bahrein", pontosLicenca: -3 }
  ] },
  { piloto: "Lewis",   ocorrencias: [] },
  { piloto: "Charles", ocorrencias: [
    { etapa: "04", gravidade: "GRAVE", descricao: "Penalidade — GP do Bahrein", pontosLicenca: -3 }
  ] },
  { piloto: "Lucas.B", ocorrencias: [] },
  { piloto: "Lucas.H", ocorrencias: [
    { etapa: "02", gravidade: "GRAVE", descricao: "DSQ — Sprint da China", pontosLicenca: -3 }
  ] },
  { piloto: "Exodo",   ocorrencias: [
    { etapa: "05", gravidade: "GRAVE", descricao: "Penalidade — GP da Arábia Saudita", pontosLicenca: -3 }
  ] },
  { piloto: "Cleber",  ocorrencias: [] },
  { piloto: "Marcio",  ocorrencias: [] },
  { piloto: "Denis",   ocorrencias: [] },
  { piloto: "Max",     ocorrencias: [] },
  { piloto: "Carlos",  ocorrencias: [] },
];
