# Documentação Técnica — Espaço Adventure

**DcsProducer® | v1.0 | Agosto 2026**

## 1. Visão Geral do Projeto

Espaço Adventure é uma plataforma de produção de eventos que combina filosofia da palavra, sistemas de aleatoriedade e entretenimento profissional. Desenvolvido por DcsProducer®.

### Stack Tecnológico

| Camada | Tecnologia |
|--------|------------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Apresentação | Slide Deck responsivo (1920×1080 scaled) |
| Gestão | ClickUp (Lists, Custom Fields, Automations) |
| Versionamento | GitHub |

## 2. Arquitetura do Sistema

### 2.1 Estrutura de Diretórios

```
espaco-adventure/
├── README.md
├── LICENSE
├── docs/
│   ├── TECHNICAL.md
│   ├── FUNCTIONAL.md
│   └── CHANGELOG.md
├── presentation/
│   └── espaco-adventure-deck.html
├── src/
│   ├── randomizer/
│   │   ├── theme-sorter.js
│   │   ├── participant-matcher.js
│   │   ├── lightning-debate.js
│   │   └── surprise-encounter.js
│   ├── events/
│   │   ├── event-manager.js
│   │   └── scheduler.js
│   └── core/
│       ├── config.js
│       └── utils.js
├── assets/
│   ├── brand/
│   │   └── dcsproducer-logo.svg
│   └── styles/
│       └── theme.css
└── tests/
    └── randomizer.test.js
```

### 2.2 Módulos Principais

#### Randomizer (`src/randomizer/`)
- **theme-sorter.js** — Sorteio de tema filosófico ponderado
- **participant-matcher.js** — Algoritmo de complementaridade cruzada
- **lightning-debate.js** — Debate relâmpago em tempo real
- **surprise-encounter.js** — Combinação cross-industry

#### Events (`src/events/`)
- **event-manager.js** — Ciclo de vida do evento
- **scheduler.js** — Agendamento e workflow

#### Core (`src/core/`)
- **config.js** — Configurações globais
- **utils.js** — Funções utilitárias

## 3. Convenções de Código

- JavaScript Vanilla (ES6+)
- Módulos com export/import
- Comentários JSDoc
- Testes em `tests/`

## 4. Branching Strategy

| Branch | Uso |
|--------|-----|
| `main` | Produção estável |
| `develop` | Integração contínua |
| `feature/*` | Novas features |
| `hotfix/*` | Correções urgentes |

## 5. Convenção de Commits

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` atualização de documentação
- `style:` formatação, sem mudança de lógica
- `refactor:` reestruturação de código
- `test:` adição de testes

---

© 2026 DcsProducer® — Todos os direitos reservados.
