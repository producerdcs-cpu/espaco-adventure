/**
 * Participant Matcher — Espaço Adventure
 * Algoritmo de complementaridade cruzada para pares/grupos.
 * DcsProducer® | v1.0
 */

/**
 * Calcula score de complementaridade entre dois participantes.
 * Prioriza diversidade de área e interesses complementares.
 * @param {Object} a - { area, interests[], experience }
 * @param {Object} b - { area, interests[], experience }
 * @returns {number} score 0-1
 */
function complementarityScore(a, b) {
  let score = 0;

  // Áreas diferentes = bonus
  if (a.area !== b.area) score += 0.4;

  // Interesses: overlap moderado é ideal (nem zero nem total)
  const setA = new Set(a.interests || []);
  const setB = new Set(b.interests || []);
  const intersection = [...setA].filter(x => setB.has(x)).length;
  const union = new Set([...setA, ...setB]).size || 1;
  const jaccard = intersection / union;
  // Prefer overlap around 0.2-0.4
  score += 0.3 * (1 - Math.abs(jaccard - 0.3) / 0.7);

  // Experiência: diferença moderada
  const expDiff = Math.abs((a.experience || 0) - (b.experience || 0));
  score += 0.3 * Math.min(1, expDiff / 10);

  return Math.min(1, score);
}

/**
 * Gera pares otimizados para diversidade.
 * @param {Array} participants - lista de perfis
 * @returns {Array<{ pair: [Object, Object], score: number }>}
 */
export function matchParticipants(participants) {
  if (!participants || participants.length < 2) return [];

  const used = new Set();
  const pairs = [];
  const sorted = [...participants];

  while (sorted.filter(p => !used.has(p.id)).length >= 2) {
    let best = null;
    let bestScore = -1;

    for (let i = 0; i < sorted.length; i++) {
      if (used.has(sorted[i].id)) continue;
      for (let j = i + 1; j < sorted.length; j++) {
        if (used.has(sorted[j].id)) continue;
        const s = complementarityScore(sorted[i], sorted[j]);
        if (s > bestScore) {
          bestScore = s;
          best = [sorted[i], sorted[j]];
        }
      }
    }

    if (!best) break;
    used.add(best[0].id);
    used.add(best[1].id);
    pairs.push({ pair: best, score: bestScore });
  }

  return pairs;
}

export { complementarityScore };
