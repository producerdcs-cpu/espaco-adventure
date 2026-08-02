/**
 * Lightning Debate — Espaço Adventure
 * Debate relâmpago: tema sorteado em tempo real, sem preparação prévia.
 * DcsProducer® | v1.0
 */

import { sortTheme } from './theme-sorter.js';

const DEFAULT_ROUND_DURATION_SEC = 180; // 3 min
const MIN_ROUND = 120;
const MAX_ROUND = 300;

/**
 * Inicia uma rodada de debate relâmpago.
 * @param {Array} participants - participantes confirmados [{ id, name }]
 * @param {Object} options - { roundDurationSec, history }
 * @returns {Object} estrutura da rodada
 */
export function startLightningRound(participants, options = {}) {
  if (!participants || participants.length < 2) {
    throw new Error('Lightning Debate requer pelo menos 2 participantes.');
  }

  const duration = Math.min(
    MAX_ROUND,
    Math.max(MIN_ROUND, options.roundDurationSec || DEFAULT_ROUND_DURATION_SEC)
  );

  const { theme, provocation } = sortTheme(options.history || []);

  // Embaralha e pega os dois primeiros para o confronto
  const shuffled = [...participants].sort(() => Math.random() - 0.5);
  const [sideA, sideB] = shuffled.slice(0, 2);

  return {
    type: 'lightning-debate',
    theme,
    provocation,
    sides: {
      A: { participant: sideA, stance: 'defender' },
      B: { participant: sideB, stance: 'desafiar' },
    },
    durationSec: duration,
    startedAt: new Date().toISOString(),
    status: 'ready',
  };
}

/**
 * Estrutura de fases sugerida para a rodada.
 */
export function getRoundPhases(durationSec = DEFAULT_ROUND_DURATION_SEC) {
  const third = Math.floor(durationSec / 3);
  return [
    { name: 'Abertura A', durationSec: third, speaker: 'A' },
    { name: 'Resposta B', durationSec: third, speaker: 'B' },
    { name: 'Réplica livre', durationSec: durationSec - 2 * third, speaker: 'both' },
  ];
}
