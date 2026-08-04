# 🚀 Espaço Adventure

> Onde a filosofia da palavra encontra o poder de transformar eventos.

**DcsProducer®** | Produção Criativa de Eventos | **v1.1**

## Sobre

Plataforma de produção de eventos que une o poder filosófico da linguagem com sistemas reais de formulação de encontros aleatórios e entretenimento profissional.

## Features

* 🎲 **Sistema de Aleatoriedade (4 modos)**
  - Sorteio de Tema (40 temas filosóficos ponderados)
  - Match de Participantes (complementaridade cruzada)
  - Debate Relâmpago (tempo real)
  - Encontro Surpresa (cross-industry)
* 🎭 6 Áreas de Entretenimento
* 📡 Formatos: Presencial, Online, Híbrido
* 💬 Filosofia da Palavra como motor criativo
* 🔗 **Integração nativa com ClickUp API**

## Tech Stack

* HTML5 / CSS3 / JavaScript (Vanilla ES Modules)
* ClickUp (Project Management + API)
* GitHub Actions (CI/CD previsto)

## Estrutura do Projeto

```
espaco-adventure/
├── README.md
├── LICENSE
├── docs/
│   ├── TECHNICAL.md
│   ├── FUNCTIONAL.md
│   └── CHANGELOG.md
├── presentation/
│   └── espaco-adventure-deck.html      # Deck 9 slides
├── src/
│   ├── randomizer/
│   │   ├── theme-sorter.js             # 40 temas
│   │   ├── participant-matcher.js
│   │   ├── lightning-debate.js
│   │   └── surprise-encounter.js
│   ├── events/
│   │   ├── event-manager.js
│   │   └── scheduler.js
│   └── core/
│       ├── config.js
│       ├── utils.js
│       └── clickup-client.js           # NOVO em v1.1
├── assets/
│   ├── brand/
│   │   └── dcsproducer-logo.svg
│   └── styles/
│       └── theme.css
└── tests/
    └── randomizer.test.js              # Testes reais
```

## Quick Start — ClickUp

```js
import { ClickUpClient } from './src/core/clickup-client.js';
import { createEvent, transitionState } from './src/events/event-manager.js';

const clickup = new ClickUpClient('pk_SEU_TOKEN', 'LIST_ID');

// Criar evento + tarefa no ClickUp
const event = createEvent({ title: 'Encontro Filosófico #1', format: 'hibrido' });
const task = await clickup.createEventTask(event);

// Mudar estado
const updated = transitionState(event, 'agendado');
await clickup.updateEventStatus(task.id, updated.state);
```

## Rodar os testes

```bash
node tests/randomizer.test.js
```

## Licença

© 2026 DcsProducer®. Todos os direitos reservados.
