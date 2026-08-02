/**
 * Surprise Encounter — Espaço Adventure
 * Combinação cross-industry inesperada com roteiro mínimo.
 * DcsProducer® | v1.0
 */

/**
 * Combina profissionais de áreas distintas de forma inesperada.
 * @param {Array} professionals - [{ id, name, area, role }]
 * @param {number} groupSize - tamanho do grupo (default 2)
 * @returns {Array<{ group: Array, areas: string[] }>}
 */
export function createSurpriseEncounters(professionals, groupSize = 2) {
  if (!professionals || professionals.length < groupSize) {
    return [];
  }

  // Agrupa por área
  const byArea = {};
  for (const p of professionals) {
    const area = p.area || 'geral';
    if (!byArea[area]) byArea[area] = [];
    byArea[area].push(p);
  }

  const areas = Object.keys(byArea);
  const used = new Set();
  const encounters = [];

  // Prefer grupos com áreas diferentes
  const pool = [...professionals].sort(() => Math.random() - 0.5);

  while (pool.filter(p => !used.has(p.id)).length >= groupSize) {
    const group = [];
    const usedAreas = new Set();

    for (const p of pool) {
      if (used.has(p.id)) continue;
      if (group.length > 0 && usedAreas.has(p.area) && areas.length > 1) continue;

      group.push(p);
      usedAreas.add(p.area);
      used.add(p.id);

      if (group.length === groupSize) break;
    }

    // Se não conseguiu preencher com áreas distintas, completa com qualquer um
    if (group.length < groupSize) {
      for (const p of pool) {
        if (used.has(p.id)) continue;
        group.push(p);
        used.add(p.id);
        if (group.length === groupSize) break;
      }
    }

    if (group.length === groupSize) {
      encounters.push({
        group,
        areas: [...new Set(group.map(g => g.area))],
        scriptHint: generateMinimalScript(group),
      });
    } else {
      break;
    }
  }

  return encounters;
}

/**
 * Roteiro mínimo de facilitação para o encontro.
 */
function generateMinimalScript(group) {
  const names = group.map(g => g.name).join(' e ');
  const areas = [...new Set(group.map(g => g.area))].join(' / ');
  return {
    opening: `Vocês dois vêm de mundos diferentes (${areas}). Em 3 minutos: o que um poderia ensinar ao outro que o outro jamais esperaria?`,
    prompt: `Pergunta-gatilho: "Se eu passasse um dia no seu trabalho, o que mais me surpreenderia?"`,
    closing: `Compartilhem uma palavra que resume o encontro.`,
  };
}

export { generateMinimalScript };
