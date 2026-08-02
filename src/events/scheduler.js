/**
 * Scheduler — Espaço Adventure
 * Agendamento e utilitários de calendário.
 * DcsProducer® | v1.0
 */

/**
 * Agenda um evento para uma data/hora.
 * @param {Object} event
 * @param {string|Date} datetime
 * @returns {Object}
 */
export function scheduleEvent(event, datetime) {
  const scheduledAt = datetime instanceof Date
    ? datetime.toISOString()
    : new Date(datetime).toISOString();

  if (isNaN(Date.parse(scheduledAt))) {
    throw new Error('Data/hora inválida para agendamento.');
  }

  return {
    ...event,
    scheduledAt,
    state: event.state === 'ideacao' || event.state === 'em_formulacao'
      ? 'agendado'
      : event.state,
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Verifica se o evento está próximo (dentro de N horas).
 * @param {Object} event
 * @param {number} hours
 * @returns {boolean}
 */
export function isUpcoming(event, hours = 24) {
  if (!event.scheduledAt) return false;
  const diff = new Date(event.scheduledAt) - new Date();
  return diff > 0 && diff <= hours * 60 * 60 * 1000;
}

/**
 * Lista eventos ordenados por data.
 * @param {Array} events
 * @returns {Array}
 */
export function sortBySchedule(events) {
  return [...events].sort((a, b) => {
    if (!a.scheduledAt) return 1;
    if (!b.scheduledAt) return -1;
    return new Date(a.scheduledAt) - new Date(b.scheduledAt);
  });
}
