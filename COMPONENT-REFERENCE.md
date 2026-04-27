# Referencia de componentes — Ayuda.LA Reveal.js Theme

Guía exhaustiva de todos los componentes CSS disponibles en este tema. Cada sección incluye la clase CSS, el HTML esperado y notas de uso.

---

## Estructura general del documento

```html
<!DOCTYPE html>
<html lang="es" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>TÍTULO · Ayuda.LA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/reveal.css">
  <link rel="stylesheet" href="css/ayudala-dark.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body>
  <!-- Header y footer fuera de .reveal -->
  <div class="course-header">...</div>
  <div class="course-footer">...</div>
  <div class="reveal">
    <div class="slides">
      <section data-module="0">
        <section><!-- slides aquí --></section>
      </section>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/reveal.js"></script>
  <script src="js/course.js"></script>
  <script>Reveal.initialize({...});</script>
</body>
</html>
```

---

## 1. Chrome fijo (header + footer)

### `.course-header`

Barra fija superior con branding Ayuda.LA. Va **fuera** de `<div class="reveal">`.

```html
<div class="course-header">
  <div class="brand">
    <span class="dot"></span>
    <span>Ayuda<span style="color: var(--ayl-orange);">.LA</span></span>
    <span class="tagline">· Consultoría en redes e IA para ISPs</span>
  </div>
  <div class="course-title">TÍTULO DEL CURSO EN MAYÚSCULAS</div>
</div>
```

- Altura: 48px
- Fondo: gradiente semitransparente `rgba(17,24,39,0.95)` → `rgba(17,24,39,0.7)`
- `pointer-events: none` (no bloquea clics)
- `.dot`: círculo naranja de 10px con glow
- `.tagline`: texto gris secundario, Source Sans 3, 12px

### `.course-footer`

Barra fija inferior con breadcrumb de módulo. Va **fuera** de `<div class="reveal">`.

```html
<div class="course-footer">
  <div class="module-crumb">Apertura</div>
  <div class="copy">ayuda.la · curso · v1.0</div>
</div>
```

- Altura: 32px
- `.module-crumb`: color naranja, actualizado por `course.js`
- `.copy`: color `--ayl-text-dim`
- `right: 160px` para no solapar los controles de Reveal

---

## 2. Slides especiales

### `.cover-slide` — Portada del curso

Primer slide del deck. Gradientes radiales naranja y teal.

```html
<section class="cover-slide" data-background-color="#111827">
  <div class="eyebrow">Ayuda.LA · Curso técnico</div>
  <h1>Título principal<br><span style="color: var(--ayl-orange);">con acento</span></h1>
  <p class="subtitle">Descripción en 1–2 líneas, max-width 36ch.</p>
  <div class="meta">
    <div class="meta-item">
      <span class="meta-label">Duración</span>
      <span class="meta-value">4 horas</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Nivel</span>
      <span class="meta-value">Técnico</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Versión</span>
      <span class="meta-value">1.0 · 2026</span>
    </div>
  </div>
</section>
```

- `h1`: 4.2em, max-width 14ch
- `.eyebrow`: Fira Code, 0.75em, naranja, uppercase, letter-spacing 0.2em
- `.subtitle`: Source Sans 3, 1.1em, gris muted
- `.meta`: flex con gap 48px, Fira Code, labels uppercase

### `.module-divider` — Portada de módulo

Primer slide de cada módulo (excepto el módulo 0). Gradiente radial naranja sutil.

```html
<section class="module-divider" data-background-color="#111827">
  <span class="module-num">módulo 01</span>
  <div class="accent-bar"></div>
  <h2 class="module-title">Título grande del módulo</h2>
  <p class="module-subtitle">Frase descriptiva del módulo, max-width 32ch.</p>
  <div class="module-meta">⏱ 45 minutos</div>
</section>
```

- `.module-num`: Fira Code, naranja, uppercase, letter-spacing 0.15em
- `.accent-bar`: barra naranja de 72×4px
- `.module-title`: 3.5em, max-width 14ch, Bricolage Grotesque
- `.module-meta`: posición absoluta bottom 15%, Fira Code, dim

### `.thanks-slide` — Cierre

Último slide, centrado (excepción a la regla de alineación izquierda).

```html
<section class="thanks-slide" data-background-color="#111827">
  <h1>¡Gracias!</h1>
  <p class="thanks-sub">Preguntas, comentarios y próximos pasos.</p>
  <div class="thanks-contact">
    <div class="tc-item"><strong>Web</strong> ayuda.la</div>
    <div class="tc-item"><strong>Email</strong> contacto@ayuda.la</div>
  </div>
</section>
```

---

## 3. Tarjetas (cards)

### `.card`

Tarjeta genérica con fondo surface y borde.

```html
<div class="card">
  <h4>Título de la tarjeta</h4>
  <p class="small">Contenido descriptivo.</p>
</div>
```

Variantes con borde lateral izquierdo de color:
- `.card.accent` → borde naranja
- `.card.teal` → borde teal
- `.card.danger` → borde rojo
- `.card.success` → borde verde

### `.card-grid`

Grid contenedor para cards.

```html
<div class="card-grid cols-2">
  <div class="card accent">...</div>
  <div class="card teal">...</div>
</div>
```

- `.cols-2` → 2 columnas
- `.cols-3` → 3 columnas
- `.cols-4` → 4 columnas
- Gap: 16px

### `.cap-card` — Tarjeta de capacidad

Para grids de capacidades (tipo índice).

```html
<div class="cap-grid">
  <div class="cap-card">
    <span class="cap-num">cap 01</span>
    <h4>Nombre de la capacidad</h4>
    <p>Descripción breve.</p>
    <span class="cap-icon">🔍</span>
  </div>
</div>
```

- `.cap-grid`: grid 3 columnas
- Hover: borde naranja + translateY(-2px)
- `.cap-icon`: posición absoluta top-right

---

## 4. Estadísticas

### `.stat`

Número grande con label y fuente opcional.

```html
<div class="stat">
  <span class="stat-value">73%</span>
  <span class="stat-label">Métrica principal</span>
  <span class="stat-sub">Fuente: Estudio, 2025</span>
</div>
```

- `.stat-value`: 3.2em, naranja, Bricolage Grotesque, peso 700
- `.stat-label`: 0.75em, uppercase
- `.stat-sub`: 0.65em, dim

### `.hero-num`

Número gigante independiente (7em, naranja).

```html
<span class="hero-num">42</span>
```

---

## 5. Terminal simulada

### `.terminal`

Emulador de terminal con barra de título tipo macOS.

```html
<div class="terminal">
  <div class="terminal-header">
    <span class="dot-red"></span>
    <span class="dot-yellow"></span>
    <span class="dot-green"></span>
    <span class="title">bash — user@host:~</span>
  </div>
  <div class="terminal-body">
<span class="prompt">$ </span><span class="cmd">comando --flag</span>
<span class="out">Salida normal del comando</span>
<span class="err">Error: mensaje de error</span>
<span class="warn">WARNING: advertencia</span>
<span class="info">INFO: información</span>
<span class="orange">Texto naranja destacado</span>
<span class="dim">Texto dimmed/gris</span>
  </div>
</div>
```

- Fondo body: `#0A0F1A`
- Clases de color: `.prompt` (verde), `.cmd` (blanco), `.out` (gris), `.err` (rojo), `.warn` (amarillo), `.info` (azul), `.orange`, `.dim`
- `white-space: pre` → respetar espacios y saltos de línea
- max-height: 420px con scroll

---

## 6. Callouts / Avisos

### `.callout`

Bloque de aviso con borde lateral de color.

```html
<div class="callout info">
  <span class="callout-title">Nota importante</span>
  <p class="small">Texto del aviso con información relevante.</p>
</div>
```

Variantes:
- `.callout.warn` → fondo ámbar sutil, borde amarillo
- `.callout.danger` → fondo rojo sutil, borde rojo
- `.callout.info` → fondo azul sutil, borde azul
- `.callout.success` → fondo verde sutil, borde verde

---

## 7. Agenda

### `.agenda-list`

Lista numerada de módulos con duración.

```html
<ul class="agenda-list">
  <li>
    <span class="num">01</span>
    <span class="title">Nombre del módulo
      <span class="desc">Descripción breve.</span>
    </span>
    <span class="dur">45 min</span>
  </li>
</ul>
```

- Grid de 3 columnas: `48px 1fr 80px`
- `.num`: naranja, Fira Code
- `.title`: Bricolage Grotesque, bold
- `.desc`: Source Sans 3, gris muted, 0.78em
- `.dur`: Fira Code, dim, alineado a la derecha

---

## 8. Layouts

### `.two-col`

Grid de 2 columnas iguales.

```html
<div class="two-col">
  <div>Columna izquierda</div>
  <div>Columna derecha</div>
</div>
```

Variantes:
- `.two-col.weighted-l` → `1.3fr 1fr` (izquierda más ancha)
- `.two-col.weighted-r` → `1fr 1.3fr` (derecha más ancha)

### `.compare`

Comparativa lado a lado con bordes de color.

```html
<div class="compare">
  <div class="bad">
    <h4>❌ No hacer</h4>
    <p>Descripción del antipatrón.</p>
  </div>
  <div class="good">
    <h4>✅ Hacer</h4>
    <p>Descripción de la buena práctica.</p>
  </div>
</div>
```

- `.bad`: borde izquierdo rojo, h4 rojo
- `.good`: borde izquierdo verde, h4 verde

### `.before-after`

Comparativa antes/después con flecha central.

```html
<div class="before-after">
  <div class="ba-col before">
    <div class="ba-label">Antes</div>
    <ul>
      <li>Problema 1</li>
      <li>Problema 2</li>
    </ul>
  </div>
  <div class="ba-arrow">→</div>
  <div class="ba-col after">
    <div class="ba-label">Después</div>
    <ul>
      <li>Mejora 1</li>
      <li>Mejora 2</li>
    </ul>
  </div>
</div>
```

- Grid: `1fr 56px 1fr`
- `.before`: borde superior rojo
- `.after`: borde superior verde

---

## 9. Timeline

### `.timeline`

Línea de tiempo vertical con puntos de color por tipo.

```html
<div class="timeline">
  <div class="tl-item event">
    <div class="tl-time">03:14</div>
    <div class="tl-label">Título del evento</div>
    <div class="tl-desc">Descripción de lo que sucede.</div>
  </div>
  <div class="tl-item detect">
    <div class="tl-time">03:15</div>
    <div class="tl-label">Detección</div>
    <div class="tl-desc">El sistema detecta el problema.</div>
  </div>
  <div class="tl-item action">...</div>
  <div class="tl-item resolve">...</div>
</div>
```

Tipos de punto (color del `::before`):
- `.event` → rojo con glow
- `.detect` → amarillo
- `.action` → azul
- `.resolve` → verde

---

## 10. Tags / Pills

### `.tag-pill`

Etiqueta inline tipo badge.

```html
<span class="tag-pill">Default</span>
<span class="tag-pill orange">Naranja</span>
<span class="tag-pill teal">Teal</span>
<span class="tag-pill pink">Rojo/rosa</span>
```

---

## 11. Pull Quote

### `.pull-quote`

Cita grande destacada con comilla naranja decorativa.

```html
<p class="pull-quote">
  Texto de la cita destacada, máximo ~22 caracteres por línea visual.
  <span class="attr">— Nombre del autor</span>
</p>
```

- Bricolage Grotesque, 1.6em
- `::before` agrega comilla `"` naranja

---

## 12. Diagrama de flujo de alarmas

### `.alarm-flow`

Cascada visual de alarmas con puntos de colores.

```html
<div class="alarm-flow">
  <div class="bucket">
    <div class="dots">
      <span class="dot noise"></span>
      <span class="dot noise"></span>
      <span class="dot symptom"></span>
      <span class="dot real"></span>
      <!-- ... más dots ... -->
    </div>
    <div class="count">5.000</div>
    <div class="label">Alarmas brutas</div>
  </div>
  <div class="arrow">→</div>
  <div class="bucket">
    <div class="dots">
      <span class="dot symptom"></span>
      <span class="dot real"></span>
    </div>
    <div class="count">200</div>
    <div class="label">Correladas</div>
  </div>
  <div class="arrow">→</div>
  <div class="bucket">
    <div class="dots">
      <span class="dot real"></span>
    </div>
    <div class="count real">3</div>
    <div class="label">Incidentes reales</div>
  </div>
</div>
```

Tipos de punto:
- `.noise` → gris, opacidad 0.4
- `.symptom` → amarillo, opacidad 0.9
- `.real` → rojo con glow

---

## 13. Barra de contexto (tokens)

### `.context-bar` + `.context-legend`

Barra segmentada que representa distribución de tokens/recursos.

```html
<div class="context-bar">
  <div class="seg system" style="flex: 2;">System</div>
  <div class="seg rag" style="flex: 3;">RAG</div>
  <div class="seg tools" style="flex: 1;">Tools</div>
  <div class="seg user" style="flex: 2;">User</div>
  <div class="seg free" style="flex: 4;">Free</div>
</div>
<div class="context-legend">
  <span class="lg"><span class="sw system"></span> System prompt <span class="val">2K</span></span>
  <span class="lg"><span class="sw rag"></span> RAG context <span class="val">3K</span></span>
  <span class="lg"><span class="sw tools"></span> Tool defs <span class="val">1K</span></span>
  <span class="lg"><span class="sw user"></span> User msg <span class="val">2K</span></span>
  <span class="lg"><span class="sw free"></span> Free <span class="val">4K</span></span>
</div>
```

Segmentos:
- `.system` → teal
- `.rag` → `#2B5A6B`
- `.tools` → `#5A4A2F`
- `.user` → naranja
- `.free` → bg-elevated (gris)

---

## 14. Chat multi-agente

### `.chat-ma`

Simulación de chat entre agentes/personas.

```html
<div class="chat-ma">
  <div class="msg supervisor">
    <span class="who">Supervisor</span>
    <span class="time">03:14:22</span>
    <p>Mensaje del supervisor.</p>
  </div>
  <div class="msg correlator">
    <span class="who">Correlador</span>
    <span class="time">03:14:25</span>
    <p>Respuesta del correlador.</p>
  </div>
  <div class="msg human">
    <span class="who">Operador</span>
    <span class="time">03:15:00</span>
    <p>Intervención humana.</p>
  </div>
</div>
```

Tipos de mensaje:
- `.supervisor` → borde naranja
- `.correlator` → borde azul
- `.bgp` → borde verde
- `.comms` → borde púrpura (`#B568D8`)
- `.ticketeer` → borde cyan (`#6BC5D8`)
- `.human` → borde amarillo, fondo sutil

---

## 15. Tool-Use Loop

### `.tool-loop`

Diagrama de ciclo LLM ↔ herramientas.

```html
<div class="tool-loop">
  <div class="box llm">
    <h4>LLM</h4>
    <ul>
      <li>Razona sobre el contexto</li>
      <li>Genera plan de acción</li>
    </ul>
  </div>
  <div class="arrow-v">
    <div class="a">→ tool_call</div>
    <div class="a">← result</div>
  </div>
  <div class="box tools">
    <h4>Herramientas</h4>
    <ul>
      <li>API monitoring</li>
      <li>CLI commands</li>
    </ul>
  </div>
</div>
```

---

## 16. Demo Player

### `.demo-player`

Reproductor simulado estilo IDE/Claude para demos paso a paso.

```html
<div class="demo-player">
  <div class="demo-head">
    <span class="rec-dot"></span>
    <span class="demo-title">Demo: título descriptivo</span>
    <span class="demo-tool">claude-3.5-sonnet</span>
  </div>
  <div class="demo-body">
    <div class="demo-turn user">
      <div class="turn-head">👤 USER</div>
      <div class="turn-body">Pregunta o prompt del usuario.</div>
    </div>
    <div class="demo-turn thinking">
      <div class="turn-head">💭 THINKING</div>
      <div class="turn-body">Razonamiento interno del modelo.</div>
    </div>
    <div class="demo-turn tool">
      <div class="turn-head">🔧 TOOL CALL</div>
      <div class="turn-body">
        <pre><code>query_snmp(device="router-cba-01")</code></pre>
      </div>
    </div>
    <div class="demo-turn result">
      <div class="turn-head">📋 RESULT</div>
      <div class="turn-body">Resultado de la herramienta.</div>
    </div>
    <div class="demo-turn claude">
      <div class="turn-head">🤖 ASSISTANT</div>
      <div class="turn-body">Respuesta final del asistente.</div>
    </div>
  </div>
</div>
```

Tipos de turno:
- `.user` → borde teal hover
- `.claude` → borde naranja
- `.tool` → borde azul
- `.result` → borde verde
- `.thinking` → borde gris, itálica

---

## 17. Hipótesis ranking

### `.hypo-list` + `.hypo`

Lista rankeada de hipótesis con probabilidad.

```html
<div class="hypo-list">
  <div class="hypo">
    <div class="hypo-rank">#1</div>
    <div class="hypo-text">
      <strong>Hipótesis principal</strong>
      <span class="hypo-tag">Evidencia: logs, SNMP</span>
    </div>
    <div class="hypo-prob high">87%</div>
  </div>
  <div class="hypo">
    <div class="hypo-rank">#2</div>
    <div class="hypo-text">
      <strong>Hipótesis secundaria</strong>
      <span class="hypo-tag">Evidencia: BGP</span>
    </div>
    <div class="hypo-prob med">45%</div>
  </div>
  <div class="hypo">
    <div class="hypo-rank">#3</div>
    <div class="hypo-text">
      <strong>Hipótesis poco probable</strong>
      <span class="hypo-tag">Evidencia: ninguna directa</span>
    </div>
    <div class="hypo-prob low">12%</div>
  </div>
</div>
```

Probabilidad:
- `.high` → verde
- `.med` → amarillo
- `.low` → dim

---

## 18. Comunicaciones multi-canal

### `.comms-grid` + `.comm-card`

Grid de 3 columnas para canales de comunicación.

```html
<div class="comms-grid">
  <div class="comm-card">
    <div class="comm-head">
      <span>📧 EMAIL</span>
      <span class="comm-audience">Clientes afectados</span>
    </div>
    <div class="comm-body">
      <strong>Asunto:</strong> Incidencia en servicio...
    </div>
  </div>
</div>
```

---

## 19. Capas de arquitectura

### `.layer-stack` + `.layer-row`

Pila vertical de capas con número, título, descripción y herramientas.

```html
<div class="layer-stack">
  <div class="layer-row l1">
    <div class="layer-num">1</div>
    <div>
      <div class="layer-title">Nombre de la capa</div>
      <div class="layer-desc">Descripción breve de la capa.</div>
    </div>
    <div class="layer-tools">
      <span class="layer-tool">Herramienta 1</span>
      <span class="layer-tool">Herramienta 2</span>
    </div>
  </div>
</div>
```

Colores por capa:
- `.l1` → azul (info)
- `.l2` → cyan (`#5eb9cc`)
- `.l3` → naranja
- `.l4` → violeta (`#c084fc`)
- `.l5` → verde (success)

### `.layer-detail`

Grid 2×2 para detalle de una capa específica.

```html
<div class="layer-detail">
  <div class="ld-box">
    <h4>Aspecto 1</h4>
    <ul>
      <li>Detalle técnico</li>
      <li>Otro detalle con <code>código</code></li>
    </ul>
  </div>
</div>
```

---

## 20. Adaptadores / Stack de integración

### `.adapter-grid` + `.adapter-card`

Grid de 4 columnas para tarjetas de integración.

```html
<div class="adapter-grid">
  <div class="adapter-card">
    <div class="ad-logo">Zabbix</div>
    <div class="ad-role">Monitoring &amp; alerting</div>
    <div class="ad-api">REST API v6.4</div>
  </div>
</div>
```

---

## 21. Diagrama de orquestación

### `.orch-diagram` + `.orch-legend`

Contenedor para SVG de orquestación con leyenda.

```html
<div class="orch-diagram">
  <svg class="orch-svg"><!-- SVG inline --></svg>
</div>
<div class="orch-legend">
  <span class="leg-item"><span class="leg-swatch" style="background: var(--ayl-orange);"></span> Supervisor</span>
  <span class="leg-item"><span class="leg-swatch" style="background: var(--ayl-info);"></span> Detectores</span>
</div>
```

---

## 22. Timeline de arquitectura

### `.arch-timeline`

Timeline con timestamps a la izquierda y eventos a la derecha.

```html
<div class="arch-timeline">
  <div class="at-row">
    <div class="at-time">T+0:00</div>
    <div class="at-event detect">
      <span class="agent-tag">detector</span>
      <strong>Descripción</strong> del evento.
    </div>
  </div>
  <div class="at-row">
    <div class="at-time">T+0:30</div>
    <div class="at-event diag">
      <span class="agent-tag">diagnosticador</span>
      <strong>Análisis</strong> del problema.
    </div>
  </div>
</div>
```

Tipos: `.detect` (azul), `.diag` (naranja), `.comm` (violeta), `.action` (verde).

---

## 23. Guardarraíles

### `.guardrails` + `.guardrail-card`

Grid 2×2 de reglas/constraints.

```html
<div class="guardrails">
  <div class="guardrail-card">
    <div class="gr-title">🔒 Nombre del guardrail</div>
    <div class="gr-body">Descripción de la restricción con <code>ejemplo</code>.</div>
  </div>
</div>
```

---

## 24. Tabla de costos

### `.cost-table`

Tabla estilizada para datos financieros/métricas.

```html
<table class="cost-table">
  <thead>
    <tr><th>Componente</th><th>Costo/mes</th><th>Nota</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Componente A</strong></td>
      <td class="cost-good">$50</td>
      <td>Descripción</td>
    </tr>
    <tr>
      <td><strong>Componente B</strong></td>
      <td class="cost-warn">$500</td>
      <td>Descripción</td>
    </tr>
  </tbody>
</table>
```

- `.cost-good` → verde, Fira Code
- `.cost-warn` → amarillo, Fira Code

---

## 25. Waterfall de agentes

### `.agent-waterfall` + `.wf-msg`

Flujo vertical de conversación entre agentes.

```html
<div class="agent-waterfall">
  <div class="wf-msg">
    <div class="wf-agent detect">
      <span class="wf-to">→</span> Detector
    </div>
    <div class="wf-bubble">
      <strong>Anomalía detectada</strong> en interfaz GE0/0/1.
    </div>
  </div>
  <div class="wf-msg">
    <div class="wf-agent diag">
      <span class="wf-to">→</span> Diagnosticador
    </div>
    <div class="wf-bubble">
      Ejecutando <code>show interfaces</code>...
    </div>
  </div>
</div>
```

Tipos: `.detect` (azul), `.diag` (naranja), `.comm` (violeta), `.action` (verde), `.orch` (dorado).

---

## 26. Pitfalls

### `.pitfall-slide`

Slide de pitfall individual con número grande y columnas bueno/malo.

```html
<div class="pitfall-slide">
  <div class="pitfall-num">1</div>
  <div class="pitfall-content">
    <h3 class="pitfall-title">Nombre del pitfall</h3>
    <p class="pitfall-subtitle">Frase corta que lo resume.</p>
    <div class="pitfall-body">
      <div class="pf-col bad">
        <h4>❌ El error</h4>
        <ul>
          <li>Antipatrón 1</li>
          <li>Antipatrón 2</li>
        </ul>
      </div>
      <div class="pf-col good">
        <h4>✅ La solución</h4>
        <ul>
          <li>Buena práctica 1</li>
          <li>Buena práctica 2</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

### `.pitfall-overview`

Grid de 5 columnas para resumen de pitfalls.

```html
<div class="pitfall-overview">
  <div class="po-card">
    <div class="po-num">1</div>
    <div class="po-title">Nombre corto</div>
    <div class="po-hint">Pista breve</div>
  </div>
</div>
```

---

## 27. Roadmap / Gantt

### `.roadmap`

Grid estilo Gantt con fases y meses.

```html
<div class="roadmap">
  <!-- Headers de meses -->
  <div></div>
  <div class="rm-head">Mes 1</div>
  <div class="rm-head">Mes 2</div>
  <div class="rm-head">Mes 3</div>
  <div class="rm-head">Mes 4</div>
  <div class="rm-head">Mes 5</div>
  <div class="rm-head">Mes 6</div>
  <!-- Fila de fase -->
  <div class="rm-phase">Fase 1</div>
  <div class="rm-bar active">Sprint 1</div>
  <div class="rm-bar active">Sprint 2</div>
  <div class="rm-bar empty"></div>
  <div class="rm-bar empty"></div>
  <div class="rm-bar empty"></div>
  <div class="rm-bar empty"></div>
</div>
```

Variantes de `.rm-bar.active`:
- Sin clase extra → naranja
- `.teal` → teal
- `.info` → azul
- `.success` → verde

---

## 28. Personas / Perfiles

### `.persona-grid` + `.persona-card`

Grid de 3 columnas para perfiles de stakeholders.

```html
<div class="persona-grid">
  <div class="persona-card">
    <div class="ps-name">Nombre del perfil</div>
    <div class="ps-role">Rol / cargo</div>
    <div class="ps-fears"><strong>Miedos:</strong> Descripción de resistencias.</div>
    <div class="ps-wins"><strong>Victorias:</strong> Qué los convence.</div>
  </div>
</div>
```

---

## 29. Mandamientos / Principios

### `.commandments` + `.commandment`

Grid de 3 columnas centrado para principios clave.

```html
<div class="commandments">
  <div class="commandment">
    <div class="cmd-num">I</div>
    <div class="cmd-title">Nombre del principio</div>
    <div class="cmd-desc">Explicación del principio en 2–3 líneas.</div>
  </div>
</div>
```

- Borde superior naranja de 4px
- Texto centrado (excepción a alineación izquierda)

---

## 30. Recursos / Referencias

### `.resources` + `.res-group`

Grid 2×2 de grupos temáticos de recursos.

```html
<div class="resources">
  <div class="res-group">
    <h4>📚 Categoría</h4>
    <ul>
      <li><code>recurso-1</code> <em>— descripción</em></li>
      <li><code>recurso-2</code> <em>— descripción</em></li>
    </ul>
  </div>
</div>
```

---

## 31. Checklist

### `.checklist`

Lista con checks visuales.

```html
<div class="checklist">
  <div class="check-head">Título de la checklist</div>
  <ul>
    <li>Item completado</li>
    <li class="pending">Item pendiente</li>
    <li class="warn">Item con advertencia</li>
  </ul>
</div>
```

- Default: check verde `✓`
- `.pending`: checkbox vacío
- `.warn`: signo `!` amarillo

---

## 32. Glosario

### `.glossary-slide`

Layout 2 columnas: concepto + analogía.

```html
<div class="glossary-slide">
  <div class="gs-concept">
    <span class="gs-label">Categoría</span>
    <h4 class="gs-term">Término técnico</h4>
    <p class="gs-def">Definición del concepto con <code>ejemplo</code> y <strong>énfasis</strong>.</p>
  </div>
  <div class="gs-analogy">
    <span class="gs-ana-label">Analogía NOC</span>
    <h4 class="gs-ana-title">Equivalente en redes</h4>
    <p class="gs-ana-body">Explicación de la analogía con <code>código</code> relevante.</p>
  </div>
</div>
<div class="gs-footer">
  <strong>Dato clave:</strong> Nota al pie con contexto adicional.
</div>
```

---

## 33. Cheatsheet

### `.cheatsheet` + `.cs-card`

Grid 4×N de tarjetas compactas de referencia rápida.

```html
<div class="cheatsheet">
  <div class="cs-card cs-cat-core">
    <div class="cs-term">Término <span class="cs-tag">CORE</span></div>
    <div class="cs-eq"><span class="cs-arrow">≈</span> <code>equivalente</code></div>
    <div class="cs-def">Definición breve.</div>
  </div>
  <div class="cs-card cs-cat-rag">
    <div class="cs-term">Otro término <span class="cs-tag">RAG</span></div>
    <div class="cs-eq"><span class="cs-arrow">≈</span> <code>equiv</code></div>
    <div class="cs-def">Otra definición.</div>
  </div>
</div>
<div class="cs-legend">
  <span class="cs-leg"><span class="cs-dot cs-cat-core"></span> Fundamentos</span>
  <span class="cs-leg"><span class="cs-dot cs-cat-rag"></span> Memoria/RAG</span>
  <span class="cs-leg"><span class="cs-dot cs-cat-tool"></span> Herramientas</span>
  <span class="cs-leg"><span class="cs-dot cs-cat-agent"></span> Agentes</span>
</div>
```

Categorías de color:
- `.cs-cat-core` → naranja `#fb8c23`
- `.cs-cat-rag` → celeste `#8ecfe0`
- `.cs-cat-tool` → violeta `#b89af5`
- `.cs-cat-agent` → verde `#7dd48f`

---

## 34. Permisos por agente

### `.perm-grid`

Grid de 3 columnas para tabla de permisos.

```html
<div class="perm-grid">
  <div class="head">Agente</div>
  <div class="head">Lectura</div>
  <div class="head">Escritura</div>
  <div>Supervisor</div>
  <div class="yes">✓ Sí</div>
  <div class="no">✗ No</div>
</div>
```

---

## 35. OpenClaw badge

### `.claw-badge`

Pill redondeada con emoji de langosta.

```html
<span class="claw-badge">OpenClaw NOC</span>
```

- `::before` inserta 🦞

---

## 36. Diagramas SVG

### `.diagram-frame`

Contenedor para SVG con caption.

```html
<div class="diagram-frame">
  <svg><!-- SVG inline aquí --></svg>
  <div class="diagram-caption">Descripción del diagrama</div>
</div>
```

### `.anomaly-chart`

Contenedor para gráficos de anomalías con clases SVG predefinidas.

```html
<div class="anomaly-chart">
  <svg viewBox="0 0 700 200">
    <text class="chart-label" x="10" y="15">Eje Y</text>
    <path class="chart-line-normal" d="M..." />
    <rect class="chart-band" x="..." />
    <path class="chart-line-actual" d="M..." />
    <circle class="chart-anomaly" cx="..." cy="..." r="4" />
  </svg>
</div>
```

Clases SVG:
- `.chart-label` → fill dim
- `.chart-line-normal` → stroke azul
- `.chart-line-actual` → stroke naranja
- `.chart-band` → fill azul, 12% opacidad
- `.chart-anomaly` → fill rojo

---

## 37. Utilidades CSS

| Clase | Efecto |
|---|---|
| `.text-orange` | Color naranja |
| `.text-teal` | Color teal claro (`#6BC5D8`) |
| `.text-muted` | Color gris muted |
| `.text-dim` | Color gris dim |
| `.text-danger` | Color rojo |
| `.text-warning` | Color amarillo |
| `.text-success` | Color verde |
| `.font-mono` | Fira Code |
| `.small` | 0.8em |
| `.xsmall` | 0.7em |
| `.mt-sm` | margin-top 12px |
| `.mt-md` | margin-top 24px |
| `.mt-lg` | margin-top 40px |

---

## Notas de anti-overflow

El CSS incluye reglas de compactación para evitar que el contenido se salga de las slides (1280×800). Si un slide tiene demasiado contenido:

1. Usar clases `.small` y `.xsmall` para reducir tipografía.
2. Reducir paddings en cards con CSS inline si es necesario.
3. Los componentes como `.glossary-slide`, `.agenda-list`, `.alarm-flow`, `.demo-player`, etc. ya tienen reglas de compactación integradas.
4. No agregar más de 6 items en un grid de 3 columnas sin reducir tamaños.
5. Los `.terminal-body` tienen max-height 420px con scroll automático.
