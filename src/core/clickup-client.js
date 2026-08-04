/**
 * ClickUp Client — Espaço Adventure
 * Integração completa com a API do ClickUp para gestão de eventos.
 * DcsProducer® | v1.1
 *
 * Uso:
 *   const clickup = new ClickUpClient('pk_SEU_TOKEN', 'LIST_ID');
 *   const task = await clickup.createEventTask(event);
 */

const CLICKUP_API = 'https://api.clickup.com/api/v2';

export class ClickUpClient {
  /**
   * @param {string} token - Personal API Token do ClickUp (pk_...)
   * @param {string} listId - ID da List onde os eventos serão criados
   * @param {Object} [fieldMap] - Mapeamento opcional de Custom Field IDs
   */
  constructor(token, listId, fieldMap = {}) {
    if (!token || !listId) {
      throw new Error('ClickUpClient requer token e listId');
    }
    this.token = token;
    this.listId = listId;
    this.fieldMap = fieldMap; // { format: 'field_id', area: 'field_id', theme: 'field_id', ... }
  }

  async _request(method, path, body = null) {
    const options = {
      method,
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json',
      },
    };
    if (body) options.body = JSON.stringify(body);

    const res = await fetch(`${CLICKUP_API}${path}`, options);

    if (!res.ok) {
      let errMsg = res.statusText;
      try {
        const err = await res.json();
        errMsg = err.err || err.error || JSON.stringify(err);
      } catch {}
      throw new Error(`ClickUp API ${res.status}: ${errMsg}`);
    }

    // Alguns endpoints retornam 204 No Content
    if (res.status === 204) return null;
    return res.json();
  }

  /**
   * Cria uma tarefa no ClickUp a partir de um evento do Espaço Adventure
   * @param {Object} event - Evento gerado por createEvent()
   * @returns {Promise<Object>} Task criada
   */
  async createEventTask(event) {
    const body = {
      name: event.title || 'Novo Evento Espaço Adventure',
      description: this._buildDescription(event),
      status: this._mapStateToStatus(event.state),
      tags: ['espaco-adventure', event.format || 'presencial'],
    };

    // Custom Fields (se mapeados)
    const customFields = this._buildCustomFields(event);
    if (customFields.length > 0) {
      body.custom_fields = customFields;
    }

    // Data agendada
    if (event.scheduledAt) {
      body.due_date = new Date(event.scheduledAt).getTime();
      body.due_date_time = true;
    }

    return this._request('POST', `/list/${this.listId}/task`, body);
  }

  /**
   * Atualiza o status de uma tarefa existente
   * @param {string} taskId
   * @param {string} newState - estado interno (ideacao, agendado, etc.)
   */
  async updateEventStatus(taskId, newState) {
    return this._request('PUT', `/task/${taskId}`, {
      status: this._mapStateToStatus(newState),
    });
  }

  /**
   * Atualiza vários campos de uma tarefa
   */
  async updateTask(taskId, updates = {}) {
    const body = {};
    if (updates.title) body.name = updates.title;
    if (updates.description) body.description = updates.description;
    if (updates.state) body.status = this._mapStateToStatus(updates.state);
    if (updates.scheduledAt) {
      body.due_date = new Date(updates.scheduledAt).getTime();
      body.due_date_time = true;
    }
    return this._request('PUT', `/task/${taskId}`, body);
  }

  /**
   * Define o valor de um Custom Field específico
   * @param {string} taskId
   * @param {string} fieldId - UUID do campo
   * @param {any} value
   */
  async setCustomField(taskId, fieldId, value) {
    return this._request('POST', `/task/${taskId}/field/${fieldId}`, { value });
  }

  /**
   * Busca os Custom Fields disponíveis na List (útil para descobrir IDs)
   */
  async getListCustomFields() {
    return this._request('GET', `/list/${this.listId}/field`);
  }

  /**
   * Busca uma tarefa pelo ID
   */
  async getTask(taskId) {
    return this._request('GET', `/task/${taskId}`);
  }

  // ——— Helpers privados ———

  _mapStateToStatus(state) {
    const map = {
      ideacao: 'ideação',
      em_formulacao: 'em formulação',
      agendado: 'agendado',
      em_andamento: 'em andamento',
      realizado: 'realizado',
      encerrado: 'encerrado',
    };
    return map[state] || state;
  }

  _buildDescription(event) {
    const lines = [
      `**Formato:** ${event.format || '—'}`,
      `**Área:** ${event.area || '—'}`,
      `**Estado:** ${event.state}`,
      `**Tema:** ${event.theme?.title || 'Ainda não sorteado'}`,
    ];

    if (event.theme?.provocation) {
      lines.push(`**Provocação:** ${event.theme.provocation}`);
    }

    if (event.participants?.length) {
      lines.push(`**Participantes:** ${event.participants.length}`);
    }

    lines.push('');
    lines.push(`---`);
    lines.push(`Criado via **Espaço Adventure** • ${new Date().toLocaleString('pt-BR')}`);
    lines.push(`DcsProducer®`);

    return lines.join('\n');
  }

  _buildCustomFields(event) {
    const fields = [];
    const map = this.fieldMap;

    if (map.format && event.format) {
      fields.push({ id: map.format, value: event.format });
    }
    if (map.area && event.area) {
      fields.push({ id: map.area, value: event.area });
    }
    if (map.theme && event.theme?.title) {
      fields.push({ id: map.theme, value: event.theme.title });
    }
    if (map.estado && event.state) {
      fields.push({ id: map.estado, value: event.state });
    }
    if (map.formato_aleatoriedade && event.metadata?.randomizerType) {
      fields.push({ id: map.formato_aleatoriedade, value: event.metadata.randomizerType });
    }

    return fields;
  }
}

export default ClickUpClient;
