# Changelog — Espaço Adventure

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.2.0] - 2026-08-03

### Added
- **Protótipo Interativo** (`prototype/index.html`)
  - Interface completa com os 4 randomizers ao vivo
  - Abas: Sorteio de Tema, Match de Participantes, Debate Relâmpago, Encontro Surpresa
  - Histórico de temas persistido em localStorage
  - Design dark alinhado à marca DcsProducer®
- **Documentação ClickUp** (`docs/CLICKUP.md`)
  - Guia completo de integração, exemplos de código e mapeamento de Custom Fields
- Documentação Técnica e Funcional atualizadas com a nova estrutura

### Changed
- README atualizado com seção do protótipo e links para docs
- Estrutura de pastas documentada (inclusão de `prototype/` e `docs/CLICKUP.md`)

## [1.1.0] - 2026-08-03

### Added
- **ClickUp Client** (`src/core/clickup-client.js`) — Integração completa com a API do ClickUp
- **Banco de Temas expandido** — 40 temas filosóficos em 10 categorias
- **Deck de apresentação v1.1** — 9 slides
- **Testes reais** (`tests/randomizer.test.js`)

### Changed
- `theme-sorter.js` exporta `getThemesByCategory()` e `getCategories()`

## [1.0.0] - 2026-08-02

### Added
- Estrutura inicial do projeto
- Documentação técnica e funcional
- Módulos de aleatoriedade (esqueleto)
- Presentation deck HTML
- Assets de marca DcsProducer®
- README e LICENSE

---

© 2026 DcsProducer® — Todos os direitos reservados.
