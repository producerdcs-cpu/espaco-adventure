/**
 * Theme Sorter — Espaço Adventure
 * Sorteio de tema filosófico com seleção aleatória ponderada.
 * DcsProducer® | v1.0
 */

/**
 * Banco de temas (exemplo inicial — expandir conforme necessidade)
 * weight: relevância relativa (1-10)
 */
const THEME_BANK = [
  { id: 't1', category: 'existencial', title: 'O sentido do encontro', provocation: 'O que torna um encontro memorável além do acaso?', weight: 8 },
  { id: 't2', category: 'linguagem', title: 'A palavra que transforma', provocation: 'Como uma única frase pode mudar o rumo de uma conversa?', weight: 9 },
  { id: 't3', category: 'tempo', title: 'O instante decisivo', provocation: 'Existe um momento em que tudo se resolve — ou apenas construímos essa narrativa?', weight: 7 },
  { id: 't4', category: 'identidade', title: 'Máscaras e revelacões', provocation: 'Quem somos quando ninguém está olhando — e quem fingimos ser quando todos olham?', weight: 8 },
  { id: 't5', category: 'comunidade', title: 'O nós improvisado', provocation: 'Como estranhos se tornam cúmplices em poucos minutos?', weight: 6 },
];

/**
 * Seleciona um tema aleatório ponderado.
 * @param {Array} history - IDs de temas já usados (para reduzir peso)
 * @returns {{ theme: Object, provocation: string }}
 */
export function sortTheme(history = []) {
  const weighted = THEME_BANK.map(t => ({
    ...t,
    effectiveWeight: history.includes(t.id) ? Math.max(1, t.weight * 0.3) : t.weight,
  }));

  const total = weighted.reduce((sum, t) => sum + t.effectiveWeight, 0);
  let r = Math.random() * total;

  for (const theme of weighted) {
    r -= theme.effectiveWeight;
    if (r <= 0) {
      return {
        theme: { id: theme.id, category: theme.category, title: theme.title },
        provocation: theme.provocation,
      };
    }
  }

  // Fallback
  const last = weighted[weighted.length - 1];
  return {
    theme: { id: last.id, category: last.category, title: last.title },
    provocation: last.provocation,
  };
}

export { THEME_BANK };
