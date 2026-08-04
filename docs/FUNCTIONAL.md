# Documentação Funcional — Espaço Adventure

**DcsProducer® | v1.1 | Agosto 2026**

---

## 1. Sistemas de Aleatoriedade

### 1.1 Sorteio de Tema

| Item | Descrição |
|------|-----------|
| **Input** | Banco de 40 temas filosóficos categorizados + histórico |
| **Processo** | Seleção aleatória ponderada (peso reduzido para temas já usados) |
| **Output** | Tema + provocação textual para o evento |
| **Categorias** | Existencial, Linguagem, Tempo, Identidade, Comunidade, Ética, Amor, Dor, Poder, Natureza |

### 1.2 Match de Participantes

| Item | Descrição |
|------|-----------|
| **Input** | Perfis dos participantes (área, interesses[], experiência) |
| **Processo** | Algoritmo de complementaridade cruzada (score 0-1) |
| **Output** | Pares ou grupos otimizados para diversidade |

**Critérios do score:**
- Áreas diferentes → +0.4
- Overlap moderado de interesses (Jaccard ~0.3) → até +0.3
- Diferença de experiência → até +0.3

### 1.3 Debate Relâmpago

| Item | Descrição |
|------|-----------|
| **Input** | Participantes confirmados + pool de temas |
| **Processo** | Sorteio de tema em tempo real + definição de lados A/B |
| **Output** | Confronto estruturado (2-5 min) com fases: Abertura A → Resposta B → Réplica livre |

### 1.4 Encontro Surpresa

| Item | Descrição |
|------|-----------|
| **Input** | Lista de profissionais de diferentes áreas |
| **Processo** | Combinação cross-industry priorizando áreas distintas |
| **Output** | Grupos + roteiro mínimo de facilitação (abertura, pergunta-gatilho, fechamento) |

---

## 2. Workflow de Eventos

```
Ideação → Em Formulação → Agendado → Em Andamento → Realizado → Encerrado
```

### Estados

1. **Ideação** — Conceito inicial do evento
2. **Em Formulação** — Detalhamento de formato, público e logística
3. **Agendado** — Data, local e participantes confirmados
4. **Em Andamento** — Evento em execução (randomizers ativos)
5. **Realizado** — Evento concluído, aguardando feedback
6. **Encerrado** — Documentação final e arquivamento

### Transições permitidas

| De | Para |
|----|------|
| ideacao | em_formulacao |
| em_formulacao | agendado, ideacao |
| agendado | em_andamento, em_formulacao |
| em_andamento | realizado |
| realizado | encerrado |
| encerrado | — |

---

## 3. Custom Fields sugeridos (ClickUp)

- Tipo de Evento (Presencial / Online / Híbrido)
- Área de Entretenimento
- Status do Workflow
- Tema Sorteado
- Participantes Confirmados
- Formato de Aleatoriedade
- Data Prevista
- Facilitador

---

## 4. Formatos de Evento

- **Presencial** — Encontros físicos com dinâmicas ao vivo
- **Online** — Sessões remotas via plataformas digitais
- **Híbrido** — Combinação de presencial e online

---

© 2026 DcsProducer® — Todos os direitos reservados.
