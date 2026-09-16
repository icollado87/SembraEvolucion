---
name: sembra-evolucion-design
description: Use this skill to generate well-branded interfaces and assets for Sembrá Evolución (Portal Productor and adjacent surfaces), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files: `styles.css` (token entry point), `tokens/`, `components/`, `ui_kits/portal_productor/`, and `guidelines/` specimen cards.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (target device, flow, whether it's for Productor / Comercio / Semillero — noting that only Productor is documented here), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key rules to enforce:

- Voseo rioplatense in all copy. "Adherite" / "Gestioná" — never "adhiérase".
- Verde lima `#BFFF00` is the single primary; one primary button per screen.
- Cifras clave render in verde lima on black (`MetricCard` pattern).
- Status badges use the unified 4-tone palette (success / warning / danger / neutral), not the "only Aprobada has a badge" legacy pattern.
- Never invent a logo — the current `Logo.jsx` is a schematic; ask the user for the real vector before shipping.
