/**
 * Tests — Randomizer modules
 * Espaço Adventure | DcsProducer® v1.0
 *
 * Executar com Node (ESM):
 *   node --experimental-vm-modules tests/randomizer.test.js
 * ou integrar com framework de preferência (Jest, Vitest, etc.)
 */

import { sortTheme, THEME_BANK } from '../src/randomizer/theme-sorter.js';
import { matchParticipants, complementarityScore } from '../src/randomizer/participant-matcher.js';
import { startLightningRound, getRoundPhases } from '../src/randomizer/lightning-debate.js';
import { createSurpriseEncounters } from '../src/randomizer/surprise-encounter.js';

let passed = 0;
let failed = 0;

function assert(condition, msg) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${msg}`);
  } else {
    failed++;
    console.error(`  ✗ ${msg}`);
  }
}

console.log('\n=== Theme Sorter ===');
{
  const result = sortTheme();
  assert(result.theme && result.theme.id, 'sortTheme retorna tema com id');
  assert(typeof result.provocation === 'string', 'sortTheme retorna provocação');
  assert(THEME_BANK.length > 0, 'THEME_BANK não está vazio');
}

console.log('\n=== Participant Matcher ===');
{
  const participants = [
    { id: '1', area: 'design', interests: ['arte', 'ux'], experience: 5 },
    { id: '2', area: 'engenharia', interests: ['sistemas', 'dados'], experience: 8 },
    { id: '3', area: 'filosofia', interests: ['etica', 'arte'], experience: 3 },
    { id: '4', area: 'musica', interests: ['performance'], experience: 6 },
  ];
  const pairs = matchParticipants(participants);
  assert(pairs.length === 2, 'matchParticipants gera 2 pares para 4 pessoas');
  const score = complementarityScore(participants[0], participants[1]);
  assert(score >= 0 && score <= 1, 'complementarityScore entre 0 e 1');
}

console.log('\n=== Lightning Debate ===');
{
  const participants = [
    { id: 'a', name: 'Alice' },
    { id: 'b', name: 'Bob' },
  ];
  const round = startLightningRound(participants);
  assert(round.type === 'lightning-debate', 'tipo correto');
  assert(round.sides.A && round.sides.B, 'dois lados definidos');
  assert(round.durationSec >= 120 && round.durationSec <= 300, 'duração válida');
  const phases = getRoundPhases(180);
  assert(phases.length === 3, '3 fases na rodada');
}

console.log('\n=== Surprise Encounter ===');
{
  const pros = [
    { id: '1', name: 'Ana', area: 'arquitetura' },
    { id: '2', name: 'Bruno', area: 'culinaria' },
    { id: '3', name: 'Carla', area: 'tecnologia' },
    { id: '4', name: 'Diego', area: 'teatro' },
  ];
  const encounters = createSurpriseEncounters(pros, 2);
  assert(encounters.length === 2, '2 encontros para 4 profissionais');
  assert(encounters[0].scriptHint && encounters[0].scriptHint.opening, 'roteiro mínimo presente');
}

console.log(`\n--- Resultado: ${passed} passou, ${failed} falhou ---\n`);
process.exit(failed > 0 ? 1 : 0);
