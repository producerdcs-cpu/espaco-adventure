/**
 * Utils — Espaço Adventure
 * Funções utilitárias.
 * DcsProducer® | v1.0
 */

/**
 * Embaralha um array (Fisher-Yates).
 * @param {Array} arr
 * @returns {Array}
 */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Seleciona N elementos aleatórios de um array.
 * @param {Array} arr
 * @param {number} n
 * @returns {Array}
 */
export function sample(arr, n) {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

/**
 * Gera ID simples.
 * @param {string} prefix
 * @returns {string}
 */
export function uid(prefix = 'id') {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Formata data ISO para exibição pt-BR.
 * @param {string} iso
 * @returns {string}
 */
export function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  });
}
