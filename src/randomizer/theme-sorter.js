/**
 * Theme Sorter — Espaço Adventure
 * Sorteio de tema filosófico com seleção aleatória ponderada.
 * DcsProducer® | v1.1 — Banco expandido (40 temas)
 */

/**
 * Banco de temas filosóficos
 * weight: relevância relativa (1-10)
 */
const THEME_BANK = [
  // Existencial
  { id: 't01', category: 'existencial', title: 'O sentido do encontro', provocation: 'O que torna um encontro memorável além do acaso?', weight: 9 },
  { id: 't02', category: 'existencial', title: 'A finitude como convite', provocation: 'Se soubéssemos que este é o último encontro, o que diríamos de diferente?', weight: 8 },
  { id: 't03', category: 'existencial', title: 'O vazio que nos une', provocation: 'Há algo que todos carregamos em silêncio e que, se nomeado, mudaria tudo?', weight: 7 },
  { id: 't04', category: 'existencial', title: 'Ser ou parecer', provocation: 'Quanto de nós mesmos estamos dispostos a revelar em um espaço seguro?', weight: 8 },

  // Linguagem
  { id: 't05', category: 'linguagem', title: 'A palavra que transforma', provocation: 'Como uma única frase pode mudar o rumo de uma conversa — ou de uma vida?', weight: 9 },
  { id: 't06', category: 'linguagem', title: 'O não-dito', provocation: 'O que as pausas e os silêncios revelam que as palavras escondem?', weight: 8 },
  { id: 't07', category: 'linguagem', title: 'Nomes e poderes', provocation: 'Quem tem o direito de nomear a experiência do outro?', weight: 7 },
  { id: 't08', category: 'linguagem', title: 'Metáforas que aprisionam', provocation: 'Quais imagens mentais limitam a forma como enxergamos possibilidades?', weight: 7 },

  // Tempo
  { id: 't09', category: 'tempo', title: 'O instante decisivo', provocation: 'Existe um momento em que tudo se resolve — ou apenas construímos essa narrativa?', weight: 8 },
  { id: 't10', category: 'tempo', title: 'Presente expandido', provocation: 'É possível estar completamente aqui sem antecipar o que vem depois?', weight: 7 },
  { id: 't11', category: 'tempo', title: 'Memória seletiva', provocation: 'O que escolhemos lembrar e o que preferimos esquecer molda quem somos agora?', weight: 7 },
  { id: 't12', category: 'tempo', title: 'Urgência fabricada', provocation: 'Quanto da nossa pressa é real e quanto é impostura coletiva?', weight: 6 },

  // Identidade
  { id: 't13', category: 'identidade', title: 'Máscaras e revelações', provocation: 'Quem somos quando ninguém está olhando — e quem fingimos ser quando todos olham?', weight: 9 },
  { id: 't14', category: 'identidade', title: 'O eu em relação', provocation: 'Existimos de forma autêntica ou somos sempre o reflexo do olhar do outro?', weight: 8 },
  { id: 't15', category: 'identidade', title: 'Papéis que herdamos', provocation: 'Quais papéis sociais ainda performamos sem perceber?', weight: 7 },
  { id: 't16', category: 'identidade', title: 'Mudança de pele', provocation: 'É possível se reinventar sem trair quem fomos?', weight: 7 },

  // Comunidade
  { id: 't17', category: 'comunidade', title: 'O nós improvisado', provocation: 'Como estranhos se tornam cúmplices em poucos minutos?', weight: 8 },
  { id: 't18', category: 'comunidade', title: 'Pertencimento frágil', provocation: 'O que faz alguém se sentir parte de algo — e o que faz se sentir de fora?', weight: 7 },
  { id: 't19', category: 'comunidade', title: 'Conflito gerativo', provocation: 'Pode o desacordo ser a forma mais honesta de cuidado?', weight: 7 },
  { id: 't20', category: 'comunidade', title: 'Hospitalidade radical', provocation: 'O que significa realmente acolher o outro sem tentar mudá-lo?', weight: 6 },

  // Ética & Valores
  { id: 't21', category: 'etica', title: 'Os sete pecados do cotidiano', provocation: 'Quais pequenos vícios diários corroem nossas relações sem que percebamos?', weight: 8 },
  { id: 't22', category: 'etica', title: 'Verdade inconveniente', provocation: 'Até que ponto a honestidade absoluta é um ato de amor ou de violência?', weight: 8 },
  { id: 't23', category: 'etica', title: 'Responsabilidade pelo olhar', provocation: 'Temos responsabilidade sobre o que vemos e escolhemos não ver?', weight: 7 },
  { id: 't24', category: 'etica', title: 'Perdão e memória', provocation: 'É possível perdoar sem esquecer — e vale a pena?', weight: 7 },

  // Amor & Relação
  { id: 't25', category: 'amor', title: 'Amor como prática', provocation: 'O amor é sentimento ou disciplina diária?', weight: 8 },
  { id: 't26', category: 'amor', title: 'A solidão a dois', provocation: 'Como duas pessoas podem estar juntas e ainda assim profundamente sozinhas?', weight: 7 },
  { id: 't27', category: 'amor', title: 'Desejo e liberdade', provocation: 'É possível desejar alguém sem querer possuí-lo?', weight: 7 },
  { id: 't28', category: 'amor', title: 'Cuidado sem salvação', provocation: 'Como cuidar do outro sem cair na armadilha de querer salvá-lo?', weight: 7 },

  // Dor & Resiliência
  { id: 't29', category: 'dor', title: 'A dor que ensina', provocation: 'Existe sabedoria que só se alcança atravessando o sofrimento?', weight: 8 },
  { id: 't30', category: 'dor', title: 'Feridas invisíveis', provocation: 'Quais dores carregamos que o mundo não vê — e que ainda assim moldam nossos gestos?', weight: 7 },
  { id: 't31', category: 'dor', title: 'Resiliência ou resignação', provocation: 'Quando a capacidade de aguentar se torna incapacidade de mudar?', weight: 7 },
  { id: 't32', category: 'dor', title: 'Luto pelo possível', provocation: 'Como elaboramos a perda daquilo que nunca existiu, mas que imaginamos?', weight: 6 },

  // Poder & Liberdade
  { id: 't33', category: 'poder', title: 'Micro-poderes cotidianos', provocation: 'De que formas sutis exercemos poder sobre os outros sem perceber?', weight: 7 },
  { id: 't34', category: 'poder', title: 'Liberdade como fardo', provocation: 'A liberdade assusta mais do que a prisão confortável?', weight: 7 },
  { id: 't35', category: 'poder', title: 'Consentimento real', provocation: 'O que torna um sim verdadeiramente livre?', weight: 8 },
  { id: 't36', category: 'poder', title: 'Voz e silêncio', provocation: 'Quem tem o direito de falar — e quem é obrigado a escutar?', weight: 7 },

  // Natureza & Existência
  { id: 't37', category: 'natureza', title: 'Arquitetos de charadas', provocation: 'Somos eternos arquitetos de enigmas ou apenas intérpretes da natureza singela?', weight: 8 },
  { id: 't38', category: 'natureza', title: 'O ciclo e a ilusão linear', provocation: 'Vivemos em círculos ou apenas preferimos a ilusão da linha reta?', weight: 6 },
  { id: 't39', category: 'natureza', title: 'Pertencer à terra', provocation: 'O que significa estar enraizado em um mundo em constante movimento?', weight: 6 },
  { id: 't40', category: 'natureza', title: 'Beleza e impermanência', provocation: 'A beleza existe apesar da impermanência ou justamente por causa dela?', weight: 7 },
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

/**
 * Retorna temas filtrados por categoria
 */
export function getThemesByCategory(category) {
  return THEME_BANK.filter(t => t.category === category);
}

/**
 * Lista todas as categorias disponíveis
 */
export function getCategories() {
  return [...new Set(THEME_BANK.map(t => t.category))];
}

export { THEME_BANK };
