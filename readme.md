# Sembrá Evolución — Design System

Design system for the **Portal Productor** of Sembrá Evolución (a Argentine B2B ag-tech platform: license management, Hectáreas Tecnológicas purchase, invoicing, PPH precertification, cuenta granaria, cesiones). Built to support the ongoing effort to adapt the desktop portal to a mobile-first responsive experience (320–428px) without losing brand consistency across breakpoints.

## Sources

Everything in this system was derived from these read-only inputs — assume the reader does not have access; they are logged here for provenance.

- `Req Mejoras usabilidad Productor/` (local folder, mounted)
  - `Desktop prints/` — 29 desktop screens (Home, Licencias, Compra HT, Facturación, Precertificación, Cuenta granaria, Cesiones)
  - `Mobile prints/` — 84 mobile screens relevadas por Accenture en viewport 375–390px
  - `Design_System_Portal_Productor_SE.docx` — brand & DS reference (extracted to `uploads/design_system_doc.txt`)
  - `PRD_Mejora_Portal_Productor_SE.docx` — backlog of 32 hallazgos (S-01, D-01..D-15, H01..H16)
  - `Jira_Epic_Mejora_Portal_Productor.md` — épica de mejora
- `uploads/` — the same screenshots plus DS/PRD docx (also read directly from here)

Perfiles Comercio y Semillero **no fueron relevados** — quedan pendientes.

## Content fundamentals — voice & tone

The portal speaks **Spanish rioplatense with voseo**, direct and short. Copy is imperative and encouraging ("Adherite", "Gestioná", "Sembrá Evolución, donde tenés que estar"). It is not formal ("Adhiérase", "Gestione") and it is not tuteo-neutro either.

- **Sentence casing.** Titles and buttons use sentence case for verbs ("Compra HT", "Ver factura"), UPPERCASE only for module names in the nav bar, breadcrumbs, and metric card titles (CEBADA / TRIGO / SOJA).
- **Person.** Second person singular voseo ("Adherite a PPH", "Gestioná tu semilla"). Never usted; never plural nosotros.
- **Length.** Very short. CTAs are 2–3 words; H1s are 2–5 words; hero taglines are one short sentence.
- **Tone.** Confident, matter-of-fact, agronomic. No emoji outside of the campaign modal (where a small checklist emoji set is used, per the DS doc).
- **Numbers first.** Cifras clave — HT, kilos, hectáreas — are the visual protagonist and always render in verde lima on black.

## Visual foundations

### Color

- **Primario:** verde lima `#BFFF00` — action, buttons, cifras clave, active states. High visibility over both black and white.
- **Acento:** naranja `#FFA945` — destaques, warning states.
- **Negro:** `#1C1C1C` — nav bar, footer, cards oscuras, texto principal.
- **Gris claro:** `#EEF1F7` — fondo de sección, cards de apoyo, table headers.
- **Blanco:** `#FFFFFF` — surface por defecto.

Semantic palette (propuesta, per DS doc §4.1):
- success → verde lima
- warning → naranja
- danger → `#D64545` (a validar con marca — NO está en el brandbook)
- neutral → `#4A5261`

Ver `guidelines/colors-*.card.html` para el detalle.

### Type

- **Display / titulares / cifras destacadas:** Montserrat (700–800).
- **Cuerpo, forms, tables:** Roboto (400 / 500 / 700).
- Both loaded via Google Fonts CDN (`tokens/typography.css`). ⚠ If the real portal ships with `Montserrat.woff2` / `Roboto.woff2` files, drop them into `assets/fonts/` and swap the `src:` URLs.
- Escala: hero 44 / H1 32 / H2 24 / H3 20 / body 16 / body-sm 14 / caption 12 / eyebrow 11.

### Layout & spacing

- 4 px grid — tokens `--sp-1..--sp-16`.
- Container max `1200px` desktop; single column with `16px` gutters on mobile.
- Nav bar 64 px desktop / 56 px mobile.
- Touch targets never below **44 px**.

### Radii, shadows, borders

- Radii: **6 / 10 / 16 / pill (999)**. Cards use 16 px; inputs/selects 10 px; buttons and badges pill.
- Cards use a soft double shadow (`--shadow-card`), never a hard drop shadow.
- Focus is a 3 px lime halo (`--shadow-focus`) plus a lime border.
- Section backgrounds are flat `#EEF1F7` — no gradients, no textures. The only imagery is the field-photo hero on Home.

### Motion & interaction

- Hover: shift into a slightly darker lime (`--se-lime-hover`) or reveal an underline on links.
- Press: no scale transform — just a value-darker background.
- Transitions: 150 ms ease on color/border/background only.
- No parallax, no complex illustration animation, no confetti.

### Backgrounds & imagery

- Full-bleed field photography only in the Home hero. Rest of the portal is on `#FFFFFF` or `#EEF1F7`.
- No stock illustrations; no hand-drawn textures.
- No AI-generated imagery.

### Transparency & blur

- Modals use a 55 % black scrim (`rgba(28,28,28,.55)`), no backdrop-blur.
- No frosted-glass surfaces.

## Iconography

- **Brand icon set:** 8 domain icons documented in the brandbook (página 7) — Licencia, Hectárea Tecnológica, Semillas certificadas, Compra de HT, Genética, Biotecnología, Entrega de Semillas, Precertificación (PPH). All line-in-circle style, lime stroke, black glyph. Available as `assets/icons/<name>.svg` and via `<Icon name="…" />`. **These are reconstructions**, not the original vector files — swap for the official SVGs when they arrive.
- **Crop icons:** Cebada, Soja, Trigo, plus a placeholder for Maíz. Rendered inline in `CropSelector` in a compatible line-art style; formalise these as SVGs in `assets/icons/` when the brand team publishes them.
- **UI glyphs:** small inline SVGs (search, chevron, menu, mail, phone, WhatsApp). No icon font, no CDN dependency, no emoji in the UI.

## Components

Reusable primitives. Every component lives with a `.d.ts` (props contract), a `.prompt.md` (one-line usage) and a `.card.html` (thumbnail) in the same directory.

- `components/core/` — **Button**, **Badge**, **Card**
- `components/forms/` — **Input**, **Select**
- `components/navigation/` — **TopBar**, **BottomNav**, **Drawer**, **Footer**, **Breadcrumb**, **Stepper**
- `components/data/` — **DataTable**, **FilterPill**
- `components/feedback/` — **Modal**
- `components/domain/` — **CropSelector**, **MetricCard** (portal-specific)
- `components/brand/` — **Logo** (SVG asset variants: full · negativa · monocromo · monocromoBlanco · vertical · favicon) and **Icon** (8 domain icons from the brandbook)

### Intentional additions

- **MetricCard** and **CropSelector** are domain-specific — they exist in the source screens but were not named in the DS doc. Formalising them here prevents each new screen from redrawing them.

## UI kits

- `ui_kits/portal_productor/` — mobile-first click-through of the four core flows: Home, Compra HT, Licencias, Cuenta granaria. Open `index.html`.

## Manifest

```
readme.md                     ← this file
SKILL.md                      ← Claude Code skill descriptor
styles.css                    ← @import entry point
thumbnail.html                ← project tile
tokens/                       colors.css · typography.css · spacing.css
guidelines/                   colors, type, spacing, radius, shadows, logo, voice cards
components/                   core · forms · navigation · data · feedback · domain · brand
ui_kits/portal_productor/     HomeMobile / CompraHT / Licencias / CuentaGranaria + index.html
uploads/                      original source screenshots and docs (read-only inputs)
Req Mejoras usabilidad Productor/  (local mount, not copied in)
```

## Pendientes / caveats

- **Logo + 8 domain icons are reconstructions** built to match BRANDBOOK-SE.pdf (bundled at `assets/brandbook/BRANDBOOK-SE.pdf` for reference). They render at the correct sizes and colors but glyph paths are not pixel-identical to the master AI/EPS files. Swap `assets/logo/*.svg` and `assets/icons/*.svg` for the official vectors before shipping production.
- **Fonts.** Loaded via Google CDN. Confirm with the portal team whether the deployed portal actually renders Montserrat/Roboto (the DS doc notes it currently looks like a system Arial/Helvetica).
- **Danger color `#D64545`** is a proposal; not in the brandbook — needs validation.
- **Perfiles Comercio y Semillero** not relevados; kit only covers Productor.
- **Empty / loading / error states** were only observed once (empty table in Cuenta granaria Cebada); more coverage needed.
