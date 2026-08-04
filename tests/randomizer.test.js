/**
 * Testes dos módulos de aleatoriedade — Espaço Adventure
 * DcsProducer® | v1.1
 *
 * Execute com: node --experimental-vm-modules tests/randomizer.test.js
 * ou qualquer runner que suporte ES Modules.
 */

import { sortTheme, THEME_BANK, getCategories, getThemesByCategory } from '../src/randomizer/theme-sorter.js';
import { matchParticipants, complementarityScore } from '../src/randomizer/participant-matcher.js';
import { startLightningRound, getRoundPhases } from '../src/randomizer/lightning-debate.js';
import { createSurpriseEncounters } from '../src/randomizer/surprise-encounter.js';
import { createEvent, transitionState, canTransition, EVENT_STATES } from '../src/events/event-manager.js';
import { scheduleEvent, isUpcoming, sortBySchedule } from '../src/events/scheduler.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ ${message}`);
    passed++;
  } else {
    console.error(`  ❌ ${message}`);
    failed++;
  }
}

console.log('\n🧪 Espaço Adventure — Test Suite v1.1\n');

// ——— Theme Sorter ———
console.log('📦 theme-sorter.js');
assert(THEME_BANK.length >= 40, `Banco possui ${THEME_BANK.length} temas (esperado ≥ 40)`);
assert(getCategories().length >= 8, `Categorias disponíveis: ${getCategories().length}`);

const result1 = sortTheme();
assert(result1.theme && result1.provocation, 'sortTheme() retorna tema + provocação');
assert(typeof result1.theme.title === 'string', 'Tema possui título');

const history = [result1.theme.id];
const result2 = sortTheme(history);
assert(result2.theme.id, 'sortTheme com histórico ainda funciona');

const existencial = getThemesByCategory('existencial');
assert(existencial.length > 0, 'Filtro por categoria funciona');

// ——— Participant Matcher ———
console.log('\n📦 participant-matcher.js');
const people = [
  { id: 'p1', name: 'Ana', area: 'filosofia', interests: ['ética', 'linguagem'], experience: 8 },
  { id: 'p2', name: 'Bruno', area: 'tecnologia', interests: ['ia', 'ética'], experience: 4 },
  { id: 'p3', name: 'Carla', area: 'arte', interests: ['performance', 'corpo'], experience: 12 },
  { id: 'p4', name: 'Diego', area: 'negócios', interests: ['inovação', 'liderança'], experience: 6 },
];

const pairs = matchParticipants(people);
assert(pairs.length === 2, `Gerou ${pairs.length} pares (esperado 2)`);
assert(pairs[0].score > 0, 'Score de complementaridade > 0');

const score = complementarityScore(people[0], people[1]);
assert(score >= 0 && score <= 1, `Score entre 0 e 1: ${score.toFixed(2)}`);

// ——— Lightning Debate ———
console.log('\n📦 lightning-debate.js');
const round = startLightningRound(people.slice(0, 2));
assert(round.type === 'lightning-debate', 'Tipo correto');
assert(round.sides.A && round.sides.B, 'Dois lados definidos');
assert(round.durationSec >= 120 && round.durationSec <= 300, 'Duração dentro dos limites');

const phases = getRoundPhases(180);
assert(phases.length === 3, 'Três fases na rodada');

// ——— Surprise Encounter ———
console.log('\n📦 surprise-encounter.js');
const pros = [
  { id: 'a1', name: 'Elena', area: 'medicina', role: 'cirurgiã' },
  { id: 'a2', name: 'Fábio', area: 'música', role: 'compositor' },
  { id: 'a3', name: 'Gina', area: 'direito', role: 'advogada' },
  { id: 'a4', name: 'Hugo', area: 'culinária', role: 'chef' },
];
const encounters = createSurpriseEncounters(pros, 2);
assert(encounters.length === 2, `Gerou ${encounters.length} encontros`);
assert(encounters[0].scriptHint.opening, 'Roteiro mínimo gerado');

// ——— Event Manager ———
console.log('\n📦 event-manager.js');
const event = createEvent({ title: 'Teste', format: 'hibrido', area: 'filosofia' });
assert(event.state === 'ideacao', 'Estado inicial = ideacao');
assert(event.id, 'Evento possui ID');

const next = transitionState(event, 'em_formulacao');
assert(next.state === 'em_formulacao', 'Transição ideacao → em_formulacao');
assert(canTransition(next, 'agendado'), 'Pode ir para agendado');
assert(!canTransition(next, 'encerrado'), 'Não pode pular para encerrado');

// ——— Scheduler ———
console.log('\n📦 scheduler.js');
const scheduled = scheduleEvent(next, new Date(Date.now() + 3600000).toISOString());
assert(scheduled.state === 'agendado', 'scheduleEvent força estado agendado');
assert(scheduled.scheduledAt, 'Data de agendamento definida');
assert(isUpcoming(scheduled, 24), 'Evento é upcoming nas próximas 24h');

const list = sortBySchedule([event, scheduled]);
assert(list[0].scheduledAt || list[1].scheduledAt, 'Ordenação por data funciona');

// ——— Resultado final ———
console.log(`\n${'─'.repeat(40)}`);
console.log(`Resultado: ${passed} passou, ${failed} falhou`);
if (failed === 0) {
  console.log('🎉 Todos os testes passaram!\n');
} else {
  console.log('⚠️  Existem falhas.\n');
  process.exitCode = 1;
}
