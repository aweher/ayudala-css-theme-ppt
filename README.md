# Ayuda.LA — Tema CSS para presentaciones Reveal.js

Kit de tema visual completo para generar presentaciones con la identidad de **Ayuda.LA**. Diseñado para que un agente de IA pueda producir nuevas presentaciones que conserven exactamente los mismos colores, tipografía, componentes y estilo visual del proyecto original.

## Requisitos

| Dependencia | Versión | Carga |
|---|---|---|
| **Reveal.js** | 5.1.0 | CDN (`cdn.jsdelivr.net`) |
| **Bricolage Grotesque** | 400–800 | Google Fonts |
| **Source Sans 3** | 300–700 + italic | Google Fonts |
| **Fira Code** | 400–600 | Google Fonts |
| **Conexión a internet** | — | Obligatoria (CDN + fonts) |

No hay build step, bundler ni `package.json`. Es HTML/CSS/JS puro.

## Inicio rápido

```bash
# Opción 1 — Docker (recomendado)
docker compose up
# → http://localhost:38333

# Opción 2 — Python
python3 -m http.server 8000 --directory course
# → http://localhost:8000

# Opción 3 — Abrir directamente
open course/index.html
```

## Estructura del proyecto resultante

Al crear una nueva presentación, copiar este kit y respetar esta estructura:

```
mi-nueva-presentacion/
├── course/
│   ├── index.html          ← toda la presentación (un solo archivo)
│   ├── css/
│   │   ├── ayudala-dark.css  ← tema base (NO modificar)
│   │   └── components.css    ← componentes del curso (NO modificar)
│   └── js/
│       └── course.js         ← breadcrumb + lógica (adaptar MODULES)
├── Caddyfile               ← configuración Caddy para producción
├── docker-compose.yml      ← docker compose up
└── README.md               ← documentación del curso específico
```

## Cómo crear una nueva presentación

### 1. Copiar el kit

```bash
cp -r ayudala-css-theme-ppt/ mi-nuevo-curso/
cd mi-nuevo-curso/
# Renombrar template.html
mkdir -p course
cp template.html course/index.html
cp -r css/ course/css/
cp -r js/ course/js/
```

### 2. Editar `course/js/course.js`

Ajustar el mapa `MODULES` con los títulos de los módulos de tu presentación:

```javascript
const MODULES = {
  0: 'Apertura',
  1: 'Módulo 1 · Título del primer módulo',
  2: 'Módulo 2 · Título del segundo módulo',
  3: 'Módulo 3 · Título del tercer módulo',
};
```

### 3. Editar `course/index.html`

- Cambiar el `<title>` del documento.
- Cambiar el texto en `.course-header .course-title`.
- Cambiar el texto en `.course-footer .copy`.
- Agregar slides dentro de `<div class="slides">`.

### 4. Agregar slides

Cada módulo va en un `<section data-module="N">` horizontal. Dentro, cada slide es un `<section>` vertical anidado. Ver `template.html` para ejemplos de todos los componentes disponibles.

## Configuración de Reveal.js

Estos son los parámetros exactos de inicialización. **No cambiarlos** para mantener la coherencia visual:

```javascript
Reveal.initialize({
  hash: true,
  slideNumber: 'c/t',
  controls: true,
  progress: true,
  history: true,
  transition: 'fade',
  transitionSpeed: 'fast',
  backgroundTransition: 'fade',
  width: 1280,
  height: 800,
  margin: 0.06,
  minScale: 0.2,
  maxScale: 1.6,
  center: false,
  pdfSeparateFragments: false
});
```

Puntos clave:
- **Dimensiones**: 1280 × 800 px (ratio 16:10). Todo el CSS está calibrado para este tamaño.
- **`center: false`**: el texto se alinea arriba-izquierda, no centrado.
- **Transición**: `fade` rápida. No usar `slide`, `convex` ni `zoom`.

## Paleta de colores

### Fondos
| Token | Hex | Uso |
|---|---|---|
| `--ayl-bg-primary` | `#111827` | Fondo principal (gray-900) |
| `--ayl-bg-surface` | `#1F2937` | Tarjetas, paneles (gray-800) |
| `--ayl-bg-elevated` | `#374151` | Code blocks, tags (gray-700) |

### Texto
| Token | Hex | Uso |
|---|---|---|
| `--ayl-text-primary` | `#F3F4F6` | Texto principal (gray-100) |
| `--ayl-text-muted` | `#9CA3AF` | Texto secundario (gray-400) |
| `--ayl-text-dim` | `#6B7280` | Meta, captions (gray-500) |

### Acentos marca
| Token | Hex | Uso |
|---|---|---|
| `--ayl-orange` | `#FB8C23` | CTA principal, logo, enlaces |
| `--ayl-orange-hover` | `#FFA24D` | Hover sobre naranja |
| `--ayl-orange-ink` | `#373435` | Texto sobre fondo naranja |
| `--ayl-teal` | `#114C5C` | CTA secundario |
| `--ayl-teal-hover` | `#1A6B80` | Hover sobre teal |

### Estados semánticos
| Token | Hex | Uso |
|---|---|---|
| `--ayl-success` | `#10B981` | OK, completado, mejora |
| `--ayl-warning` | `#F59E0B` | Advertencia, atención |
| `--ayl-danger` | `#EF4444` | Error, problema, riesgo |
| `--ayl-info` | `#3B82F6` | Información, nota, herramienta |

### Bordes
| Token | Hex | Uso |
|---|---|---|
| `--ayl-border` | `#374151` | Borde sutil por defecto |
| `--ayl-border-strong` | `#4B5563` | Borde más visible |

### Colores adicionales usados en componentes
| Hex | Uso |
|---|---|
| `#6BC5D8` | Teal claro (ticketeer, tags teal) |
| `#B568D8` | Púrpura (agente comms) |
| `#c084fc` | Violeta claro (capa 4, comm) |
| `#5eb9cc` | Cyan (capa 2, analogías) |
| `#8ecfe0` | Cyan claro (código en analogías) |
| `#7dd48f` | Verde claro (categoría agentes cheatsheet) |
| `#b89af5` | Violeta (categoría herramientas cheatsheet) |
| `#fbbf24` | Amarillo dorado (orquestador) |
| `#0A0F1A` | Negro azulado (fondo terminal) |

## Tipografía

| Variable | Fuente | Pesos | Uso |
|---|---|---|---|
| `--ayl-font-display` | Bricolage Grotesque | 400–800 | Títulos, headings, labels de módulo |
| `--ayl-font-body` | Source Sans 3 | 300–700, italic | Cuerpo de texto, descripciones |
| `--ayl-font-mono` | Fira Code | 400–600 | Código, terminales, timestamps, badges |

Reglas tipográficas:
- `h1`–`h3`: `--ayl-font-display`, peso 700, `letter-spacing: -0.02em`
- `h4`: `--ayl-font-display`, color `--ayl-orange`
- Párrafos: `32px` base, `line-height: 1.5`
- Listas: marker color `--ayl-orange`
- Inline `code`: fondo `--ayl-bg-elevated`, color `--ayl-orange`

## Radios y sombras

| Token | Valor |
|---|---|
| `--ayl-radius-sm` | `6px` |
| `--ayl-radius` | `8px` |
| `--ayl-radius-lg` | `12px` |
| `--ayl-shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` |
| `--ayl-shadow` | `0 4px 12px rgba(0,0,0,0.4)` |
| `--ayl-shadow-lg` | `0 12px 32px rgba(0,0,0,0.5)` |

## Notas para agentes IA

Ver **`COMPONENT-REFERENCE.md`** para la referencia completa de todos los componentes CSS disponibles con su HTML esperado.

### Reglas de oro

1. **Nunca modificar `ayudala-dark.css` ni `components.css`**. Estos archivos definen la identidad visual. Solo agregar CSS adicional si es estrictamente necesario.
2. **Siempre usar variables CSS** (`var(--ayl-*)`) en lugar de valores hex hardcodeados.
3. **Dimensiones de slide: 1280 × 800**. No exceder el contenido visible. Si un slide tiene mucho contenido, reducir `font-size` con clases `.small` (0.8em) o `.xsmall` (0.7em).
4. **Estructura de módulos**: cada módulo va en un `<section data-module="N">` con sub-slides `<section>` anidados.
5. **Primer slide de cada módulo**: usar la clase `.module-divider` para la portada del módulo.
6. **Primer slide global**: usar `.cover-slide` para la portada del curso.
7. **Último slide global**: usar `.thanks-slide` para el cierre.
8. **Texto alineado a la izquierda**, no centrado (excepto `.thanks-slide` y `.commandments`).
9. **Gradientes en portadas**: usar `radial-gradient` con `rgba(251,140,35,0.12–0.15)` para naranja y `rgba(17,76,92,0.30)` para teal.
10. **Sin imágenes**: el diseño es tipográfico + CSS puro. Usar emojis, SVG inline o CSS para elementos visuales.
11. **Speaker notes**: usar `<aside class="notes">` dentro de cada `<section>` de slide.
12. **Tags/pills para metadata**: usar `.tag-pill` con variantes `.orange`, `.teal`, `.pink`.
13. **Bloques de código en slides**: usar `<pre><code>` dentro del markup Reveal.js estándar.
