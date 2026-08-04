# Documentação Técnica — Espaço Adventure

**DcsProducer® | v1.1 | Agosto 2026**

---

## 1. Visão Geral do Projeto

Espaço Adventure é uma plataforma de produção de eventos que combina filosofia da palavra, sistemas de aleatoriedade e entretenimento profissional. Desenvolvido por **DcsProducer®**.

### Stack Tecnológico

| Camada | Tecnologia |
|--------|------------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla ES Modules) |
| Apresentação | Slide Deck responsivo (1920×1080) |
| Protótipo | Interface interativa com os 4 randomizers |
| Gestão | ClickUp (Lists, Custom Fields, Automations + API) |
| Versionamento | GitHub + Conventional Commits |

---

## 2. Arquitetura do Sistema

### 2.1 Estrutura de Diretórios

```
espaco-adventure/
├── README.md
├── LICENSE
├── docs/
│   ├── TECHNICAL.md
│   ├── FUNCTIONAL.md
│   ├── CLICKUP.md
│   └── CHANGELOG.md
├── presentation/
│   └── espaco-adventure-deck.html
├── prototype/
│   └── index.html                  # Protótipo interativo
├── src/
│   ├── randomizer/
│   │   ├── theme-sorter.js         # 40 temas filosóficos
│   │   ├── participant-matcher.js
│   │   ├── lightning-debate.js
│   │   └── surprise-encounter.js
│   ├── events/
│   │   ├── event-manager.js
│   │   └── scheduler.js
│   └── core/
│       ├── config.js
│       ├── utils.js
│       └── clickup-client.js
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
- **theme-sorter.js** — Sorteio de tema filosófico ponderado (40 temas, 10 categorias)
- **participant-matcher.js** — Algoritmo de complementaridade cruzada
- **lightning-debate.js** — Debate relâmpago em tempo real
- **surprise-encounter.js** — Combinação cross-industry + roteiro mínimo

#### Events (`src/events/`)
- **event-manager.js** — Ciclo de vida do evento (state machine)
- **scheduler.js** — Agendamento e utilitários de calendário

#### Core (`src/core/`)
- **config.js** — Configurações globais
- **utils.js** — Funções utilitárias (shuffle, sample, uid, formatDate)
- **clickup-client.js** — Cliente completo da API ClickUp

---

## 3. Convenções de Código

- JavaScript Vanilla (ES6+ Modules)
- Export/import nativos
- Comentários JSDoc em todas as funções públicas
- Testes em `tests/`
- Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`)

---

## 4. Branching Strategy

| Branch | Uso |
|--------|-----|
| `main` | Produção estável |
| `develop` | Integração contínua |
| `feature/*` | Novas features |
| `hotfix/*` | Correções urgentes |

---

## 5. Como rodar

### Protótipo interativo
Abra `prototype/index.html` em um servidor local (necessário por causa dos ES Modules):

```bash
npx serve .
# ou
python -m http.server 8000
```

Depois acesse: `http://localhost:8000/prototype/`

### Testes
```bash
node tests/randomizer.test.js
```

---

© 2026 DcsProducer® — Todos os direitos reservados.
