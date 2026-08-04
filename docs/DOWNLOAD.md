# Download e uso local — Espaço Adventure

**DcsProducer® | v1.3**

---

## Opção 1 — Clone (recomendado)

```bash
git clone https://github.com/producerdcs-cpu/espaco-adventure.git
cd espaco-adventure
npx serve .
```

Abra: http://localhost:3000/

## Opção 2 — ZIP pelo GitHub

1. https://github.com/producerdcs-cpu/espaco-adventure
2. Code → **Download ZIP**
3. Extraia a pasta
4. No terminal, dentro da pasta:

```bash
npx serve .
```

> ES Modules exigem servidor HTTP. Abrir o HTML direto pelo `file://` não funciona.

---

## Estrutura principal

- `index.html` — Landing visual
- `prototype/index.html` — Protótipo interativo (4 randomizers + ClickUp)
- `presentation/espaco-adventure-deck.html` — Deck de slides
- `src/` — Código dos módulos
- `docs/` — Documentação completa

---

## ClickUp em ambiente local (sem CORS)

Crie um script Node simples:

```js
import { ClickUpClient } from './src/core/clickup-client.js';
import { createEvent } from './src/events/event-manager.js';

const clickup = new ClickUpClient(process.env.CLICKUP_TOKEN, process.env.CLICKUP_LIST_ID);
const event = createEvent({ title: 'Teste local', format: 'hibrido' });
const task = await clickup.createEventTask(event);
console.log(task.id, task.url);
```

```bash
export CLICKUP_TOKEN=pk_xxx
export CLICKUP_LIST_ID=123456
node --experimental-vm-modules seu-script.js
```

---

© 2026 DcsProducer®
