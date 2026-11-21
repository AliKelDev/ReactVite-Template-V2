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
| `src/signal/tokens.css` | Colours, type, spacing, radii, motion, and the key materials for each ground. Override a handful of variables and the whole project changes feel. |
| `src/signal/base.css` | A quiet reset, the instrument grid, type defaults, reduced motion. |
| `src/signal/components.css` | Panels with registration marks, keys, fields, the switch, LEDs, pixel readouts, tags, rules, code, the oscilloscope. Every class starts with `sg-`. |
| `src/signal/components.tsx` | The same parts as typed React components: `Panel`, `Button`, `ButtonLink`, `Field`, `Label`, `Led`, `Readout`, `Tag`, `Kbd`, `ReturnGlyph`, `Rule`, `ThemeSwitch`, `Scope`, `Orbit`, `Wordmark`. |
| `src/signal/theme.ts` | Night and paper, remembered between visits. `index.html` sets the theme before the first paint, so there is no flash. |

## Buttons are keys

Every button is a keycap standing on a 3px base. Resting the pointer on one sinks it 1px; pressing pushes it 2px down onto a 1px base, with a soft shadow inside. Keyboard focus draws a crisp 2px ring, 4px out from the cap, in the text colour: physical, never a glow.

| | Paper | Night |
| --- | --- | --- |
| The main action, `variant="signal"` | A violet key with a white label | An ivory key with a small lit violet LED |
| Every other button | An ivory key | A graphite key |
| `variant="ghost"` | Flush with the panel; a shallow well on hover | The same |
| `disabled` | Flat and quiet; it does not move | Flat, the LED unlit; it does not move |

On night there are no violet fills: the violet is only the lit dot.

```tsx
import { Button, ButtonLink } from "./signal";

<Button variant="signal" legend onClick={save}>Save changes</Button>
<Button onClick={close}>Cancel</Button>
<Button icon aria-label="Copy the link" onClick={copy}><CopyIcon /></Button>
<ButtonLink href="#start" variant="signal" size="lg" legend>Start a project</ButtonLink>
```

- `size`: `sm` is 34px, `md` 42px (the default), `lg` 50px.
- `legend` prints a chip after the label, built on `Kbd`. `true` prints the return symbol; a short string prints that instead (`legend="Esc"`). It is decorative, so screen readers skip it. If it names a real shortcut, wire the shortcut up and add `aria-keyshortcuts`.
- `icon` makes a square key for one icon. TypeScript asks for `aria-label` (or `aria-labelledby`) whenever `icon` is set.
- `ButtonLink` is the same key as a link, for actions that go somewhere.
- Without React: `<button class="sg-btn sg-btn--signal sg-btn--lg">`. The class `is-pressed` shows the pressed state, for example while the key's keyboard shortcut is held.
- With reduced motion, keys change state without animating.

**Tokens.** Each ground sets the key materials as `--signal-key-*` variables in `tokens.css`, so a product can reuse them or override them per ground:

| Tokens | What they set |
| --- | --- |
| `-face`, `-face-pressed`, `-border`, `-ink`, `-base`, `-legend`, `-legend-edge` | The plain key: its gradient, outline, label colour, the base it stands on, the legend chip |
| `-edge`, `-sink`, `-drop` | Light and shadow: the edge is two inset shadows (lit top, darker bottom), the sink is the one inset shadow of a pressed key, the drop is one outer shadow |
| `--signal-key-primary-*` | The same set for the main key, plus `-ink-shadow` |
| `--signal-key-led-display`, `-led`, `-led-halo`, `-led-lit`, `-led-lit-halo` | The LED: `block` on night, `none` on paper; brighter while the key is held |
| `--signal-key-off-*`, `--signal-key-ring` | The disabled key, and the focus ring |
| `--signal-key-pad`, `--signal-key-gap` | Density at full size: night keys sit a little tighter (20px and 8px) than paper keys (22px and 12px) |
| `--signal-key-radius`, `--signal-key-depth`, `--signal-key-depth-pressed`, `--signal-key-led-size` | The shared shape: 11px corners, a 3px base, 1px left when pressed, a 7px LED |

```css
/* Squarer keys everywhere */
:root {
  --signal-key-radius: 6px;
}
```

Keep the edge as two inset shadows, the sink as one and the drop as one outer shadow, so keys glide between states. Check the label contrast again whenever you change a face.

**Contrast, measured** in Chromium on every pixel of every label against the face directly behind it: the violet key's white label is at least 4.6:1 (its middle gradient stop sits at 46%, so the tops of the letters stay on the deeper violet at every size), ivory and graphite keys are 13:1 or more, legend chips 7:1 or more. Disabled keys are exempt but still readable: 3.2:1 on paper, 3.4:1 on night.

## The rules of the house

- **One signal per screen.** Violet is for the thing that matters most: the main action, a live light, the index of a section. On night the main key is ivory and the violet is its lit LED. Amber is only a warning light.
- **Wide for headlines, mono for labels.** Archivo at 125% width carries the retro-futurism; IBM Plex Mono in capitals labels things; VT323 is only for readouts.
- **Status is a light.** Green, amber and red appear as LEDs, never as decoration.
- **The orbit.** A thin glowing arc with an orb drifting along it is the quiet background motif, after the Alikel channel banner.
- **Things arrive, they never bounce.** One decelerating curve, unhurried durations, and every animation stops for people who ask their system for less motion.
- **Contrast is not optional.** Violet text on paper uses `--signal-text` (an ink violet, 6:1); the violet key keeps its white label at 4.6:1 or better across its whole gradient.

## Fonts

Archivo (variable, width and weight), IBM Plex Mono and VT323, self-hosted through Fontsource under the SIL Open Font License.

MIT licensed.
