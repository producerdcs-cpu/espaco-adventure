# GitHub Pages — Espaço Adventure

**DcsProducer® | v1.3 | Agosto 2026**

---

## Links públicos (após ativar Pages)

| Recurso | URL esperada |
|---------|--------------|
| **Landing** | https://producerdcs-cpu.github.io/espaco-adventure/ |
| **Protótipo** | https://producerdcs-cpu.github.io/espaco-adventure/prototype/ |
| **Deck** | https://producerdcs-cpu.github.io/espaco-adventure/presentation/espaco-adventure-deck.html |

---

## Como ativar (1 vez — 30 segundos)

1. Abra o repositório: https://github.com/producerdcs-cpu/espaco-adventure
2. Vá em **Settings → Pages**
3. Em **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. Clique em **Save**
5. Aguarde 1–2 minutos e abra o link da Landing

O arquivo `.nojekyll` já está no repositório para o GitHub não processar como Jekyll (necessário para ES Modules).

---

## O que é funcional de verdade?

| Parte | Tipo |
|-------|------|
| Sorteio de Tema | **Funcional real** (módulo JS) |
| Match de Participantes | **Funcional real** |
| Debate Relâmpago | **Funcional real** |
| Encontro Surpresa | **Funcional real** |
| UI ClickUp (salvar config) | **Funcional** (localStorage) |
| Envio ClickUp no navegador | **Tenta real** — pode falhar por CORS; use Node se necessário |
| Landing + visual de marca | **Estático + links** |

---

## Download local

```bash
git clone https://github.com/producerdcs-cpu/espaco-adventure.git
cd espaco-adventure
npx serve .
```

Acesse `http://localhost:3000/` (landing) ou `/prototype/`.

---

© 2026 DcsProducer® — Todos os direitos reservados.
