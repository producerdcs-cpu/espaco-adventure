# Integração ClickUp — Espaço Adventure

**DcsProducer® | v1.1 | Agosto 2026**

---

## Visão Geral

O módulo `src/core/clickup-client.js` permite criar, atualizar e sincronizar eventos do Espaço Adventure diretamente no ClickUp.

---

## Pré-requisitos

1. Conta ClickUp com API habilitada
2. **Personal API Token** (Settings → Apps → API Token)
3. **List ID** da lista onde os eventos serão criados

### Como obter o List ID
- Abra a lista no ClickUp
- A URL será algo como: `https://app.clickup.com/123456/v/li/987654321`
- O número final (`987654321`) é o `list_id`

---

## Uso Básico

```js
import { ClickUpClient } from '../src/core/clickup-client.js';
import { createEvent, transitionState } from '../src/events/event-manager.js';

const clickup = new ClickUpClient(
  'pk_SEU_TOKEN_AQUI',
  'LIST_ID_AQUI',
  {
    // Opcional: mapeamento de Custom Field IDs
    format: 'campo_id_formato',
    area: 'campo_id_area',
    theme: 'campo_id_tema',
    estado: 'campo_id_estado',
  }
);

// 1. Criar evento local + tarefa no ClickUp
const event = createEvent({
  title: 'Encontro Filosófico #12',
  format: 'hibrido',
  area: 'filosofia',
});

const task = await clickup.createEventTask(event);
console.log('Task criada:', task.id);

// 2. Mudar estado e sincronizar
const updated = transitionState(event, 'agendado');
await clickup.updateEventStatus(task.id, updated.state);

// 3. Descobrir Custom Fields da lista
const fields = await clickup.getListCustomFields();
console.log(fields);
```

---

## Métodos disponíveis

| Método | Descrição |
|--------|-----------|
| `createEventTask(event)` | Cria tarefa a partir de um evento |
| `updateEventStatus(taskId, newState)` | Atualiza apenas o status |
| `updateTask(taskId, updates)` | Atualiza nome, descrição, status, due date |
| `setCustomField(taskId, fieldId, value)` | Define valor de um Custom Field |
| `getListCustomFields()` | Lista todos os Custom Fields da List |
| `getTask(taskId)` | Busca detalhes de uma tarefa |

---

## Mapeamento de Status

| Estado interno | Status sugerido no ClickUp |
|----------------|----------------------------|
| ideacao | ideação |
| em_formulacao | em formulação |
| agendado | agendado |
| em_andamento | em andamento |
| realizado | realizado |
| encerrado | encerrado |

> **Importante:** Os nomes dos status no ClickUp precisam existir na lista. Crie-os antes ou ajuste o mapa em `_mapStateToStatus()`.

---

## Custom Fields recomendados

Crie estes campos na sua List do ClickUp:

| Nome do Campo | Tipo | Uso |
|---------------|------|-----|
| Formato | Dropdown | presencial / online / hibrido |
| Área | Text / Dropdown | Área de entretenimento |
| Tema Sorteado | Text | Título do tema filosófico |
| Estado EA | Dropdown | Espelho do estado interno |
| Formato Aleatoriedade | Dropdown | theme / match / debate / surprise |

Depois use `getListCustomFields()` para pegar os IDs e passe no construtor do `ClickUpClient`.

---

## Segurança

- **Nunca** commite o token no repositório
- Use variáveis de ambiente ou configuração local não versionada
- O token tem acesso amplo: trate-o como senha

---

© 2026 DcsProducer® — Todos os direitos reservados.
