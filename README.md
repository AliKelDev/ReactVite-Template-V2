# Signal

The Alikel house style, and the starter every new project begins from.

Retro-futurist instruments: two grounds (night and paper), one signal colour (violet, the dot on the i), hairlines, mono labels, a faint instrument grid, and motion that takes its time. React, Vite and TypeScript, with no CSS framework and two runtime dependencies besides React: the fonts.

**Live style board:** https://reactvite-template-alikeldev.netlify.app

## Start a project

```bash
npx degit AliKelDev/ReactVite-Template-V2 my-app
cd my-app
npm install
npm run dev
```

The starter's own page (`src/App.tsx` and `src/app.css`) is the style board. Delete both when you start, and keep `src/signal/`.

## What's inside

| File | What it holds |
| --- | --- |
| `src/signal/tokens.css` | Colours, type, spacing, radii, motion. Override a handful of variables and the whole project changes feel. |
| `src/signal/base.css` | A quiet reset, the instrument grid, type defaults, reduced motion. |
| `src/signal/components.css` | Panels with registration marks, buttons, fields, the switch, LEDs, pixel readouts, tags, rules, code, the oscilloscope. Every class starts with `sg-`. |
| `src/signal/components.tsx` | The same parts as typed React components: `Panel`, `Button`, `Field`, `Label`, `Led`, `Readout`, `Tag`, `Kbd`, `Rule`, `ThemeSwitch`, `Scope`, `Orbit`, `Wordmark`. |
| `src/signal/theme.ts` | Night and paper, remembered between visits. `index.html` sets the theme before the first paint, so there is no flash. |

## The rules of the house

- **One signal per screen.** Violet is for the thing that matters most: the main action, a live light, the index of a section. Amber is only a warning light.
- **Wide for headlines, mono for labels.** Archivo at 125% width carries the retro-futurism; IBM Plex Mono in capitals labels things; VT323 is only for readouts.
- **Status is a light.** Green, amber and red appear as LEDs, never as decoration.
- **The orbit.** A thin glowing arc with an orb drifting along it is the quiet background motif, after the Alikel channel banner.
- **Things arrive, they never bounce.** One decelerating curve, unhurried durations, and every animation stops for people who ask their system for less motion.
- **Contrast is not optional.** Violet text on paper uses `--signal-text` (an ink violet, 6:1); buttons use `--signal-fill` with white text (5:1).

## Fonts

Archivo (variable, width and weight), IBM Plex Mono and VT323, self-hosted through Fontsource under the SIL Open Font License.

MIT licensed.
