/**
 * Config — Espaço Adventure
 * Configurações globais do projeto.
 * DcsProducer® | v1.0
 */

export const CONFIG = {
  appName: 'Espaço Adventure',
  version: '1.0.0',
  brand: 'DcsProducer®',
  year: 2026,

  formats: ['presencial', 'online', 'hibrido'],

  randomizer: {
    defaultRoundDurationSec: 180,
    minRoundDurationSec: 120,
    maxRoundDurationSec: 300,
    defaultGroupSize: 2,
  },

  eventStates: [
    'ideacao',
    'em_formulacao',
    'agendado',
    'em_andamento',
    'realizado',
    'encerrado',
  ],
};

export default CONFIG;
