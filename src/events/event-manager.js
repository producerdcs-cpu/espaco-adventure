/**
 * Event Manager — Espaço Adventure
 * Gerencia o ciclo de vida dos eventos.
 * DcsProducer® | v1.0
 */

export const EVENT_STATES = [
  'ideacao',
  'em_formulacao',
  'agendado',
  'em_andamento',
  'realizado',
  'encerrado',
];

const TRANSITIONS = {
  ideacao: ['em_formulacao'],
  em_formulacao: ['agendado', 'ideacao'],
  agendado: ['em_andamento', 'em_formulacao'],
  em_andamento: ['realizado'],
  realizado: ['encerrado'],
  encerrado: [],
};

/**
 * Cria um novo evento.
 * @param {Object} data - { title, format, area, ... }
 * @returns {Object}
 */
export function createEvent(data = {}) {
  return {
    id: crypto.randomUUID?.() || `evt-${Date.now()}`,
    title: data.title || 'Novo Evento',
    format: data.format || 'presencial', // presencial | online | hibrido
    area: data.area || null,
    state: 'ideacao',
    theme: null,
    participants: [],
    scheduledAt: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    metadata: data.metadata || {},
  };
}

/**
 * Transiciona o estado do evento.
 * @param {Object} event
 * @param {string} newState
 * @returns {Object} evento atualizado
 */
export function transitionState(event, newState) {
  const allowed = TRANSITIONS[event.state] || [];
  if (!allowed.includes(newState)) {
    throw new Error(`Transição inválida: ${event.state} → ${newState}`);
  }
  return {
    ...event,
    state: newState,
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Verifica se uma transição é válida.
 */
export function canTransition(event, newState) {
  return (TRANSITIONS[event.state] || []).includes(newState);
}
