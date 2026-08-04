# 🚀 Espaço Adventure

> Onde a filosofia da palavra encontra o poder de transformar eventos.

**DcsProducer®** | Produção Criativa de Eventos | **v1.3**

---

## Links públicos (GitHub Pages)

> Ative em **Settings → Pages → Branch `main` / root** (uma vez). Detalhes em [docs/GITHUB-PAGES.md](docs/GITHUB-PAGES.md).

| Recurso | URL |
|---------|-----|
| **Landing** | https://producerdcs-cpu.github.io/espaco-adventure/ |
| **Protótipo interativo** | https://producerdcs-cpu.github.io/espaco-adventure/prototype/ |
| **Deck de slides** | https://producerdcs-cpu.github.io/espaco-adventure/presentation/espaco-adventure-deck.html |
| **Código** | https://github.com/producerdcs-cpu/espaco-adventure |

---

## Sobre

Plataforma de produção de eventos que une o poder filosófico da linguagem com sistemas reais de formulação de encontros aleatórios e entretenimento profissional.

## Features

* 🎲 **4 modos de aleatoriedade** (40 temas filosóficos)
* 🤝 Match de participantes por complementaridade
* ⚡ Debate relâmpago + ✨ Encontro surpresa
* 🔗 Integração ClickUp (cliente + UI no protótipo)
* 🖥️ Landing visual + protótipo com marca DcsProducer®

---

## O que é estático vs funcional real

| Parte | Status |
|-------|--------|
| Randomizers (tema, match, debate, surpresa) | **Funcional real** |
| Protótipo no navegador | **Funcional real** (ES Modules) |
| Config ClickUp (localStorage) | **Funcional** |
| Envio ClickUp pelo browser | **Tenta real** — pode bloquear por CORS; Node funciona 100% |
| Landing / Deck | Visual + navegação |

---

## Rodar local / Download

```bash
git clone https://github.com/producerdcs-cpu/espaco-adventure.git
cd espaco-adventure
npx serve .
```

- Landing: http://localhost:3000/
- Protótipo: http://localhost:3000/prototype/

Guia completo: [docs/DOWNLOAD.md](docs/DOWNLOAD.md)

---

## Documentação

| Doc | Descrição |
|-----|-----------|
| [TECHNICAL.md](docs/TECHNICAL.md) | Arquitetura |
| [FUNCTIONAL.md](docs/FUNCTIONAL.md) | Regras de negócio |
| [CLICKUP.md](docs/CLICKUP.md) | Integração ClickUp |
| [GITHUB-PAGES.md](docs/GITHUB-PAGES.md) | Publicar link permanente |
| [DOWNLOAD.md](docs/DOWNLOAD.md) | Clone / ZIP / uso local |
| [CHANGELOG.md](docs/CHANGELOG.md) | Versões |

---

## Quick Start — ClickUp (Node)

```js
import { ClickUpClient } from './src/core/clickup-client.js';
import { createEvent } from './src/events/event-manager.js';

const clickup = new ClickUpClient('pk_SEU_TOKEN', 'LIST_ID');
const event = createEvent({ title: 'Encontro #1', format: 'hibrido' });
const task = await clickup.createEventTask(event);
```

---

## Licença

© 2026 DcsProducer®. Todos os direitos reservados.
