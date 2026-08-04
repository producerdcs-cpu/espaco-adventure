# Changelog — Espaço Adventure

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.1.0] - 2026-08-03

### Added
- **ClickUp Client** (`src/core/clickup-client.js`) — Integração completa com a API do ClickUp
  - Criação automática de tarefas a partir de eventos
  - Sincronização de status (Ideação → Encerrado)
  - Suporte a Custom Fields mapeáveis
  - Due date automática no agendamento
- **Banco de Temas expandido** — de 5 para **40 temas filosóficos** em 10 categorias
  - Existencial, Linguagem, Tempo, Identidade, Comunidade, Ética, Amor, Dor, Poder, Natureza
- **Deck de apresentação v1.1** — 9 slides (antes 6)
  - Novos slides: Arquitetura de Módulos, Banco de Temas, Integração ClickUp
  - Contador de slides e fluxo visual melhorado
- **Testes reais** (`tests/randomizer.test.js`) — cobertura dos principais módulos

### Changed
- `theme-sorter.js` agora exporta `getThemesByCategory()` e `getCategories()`
- Melhorias de documentação e estrutura

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
