import { useState } from "react";
import { Button, Field, Kbd, Label, Led, Panel, Readout, Rule, Scope, Tag, ThemeSwitch } from "./signal";

const REPO = "https://github.com/AliKelDev/ReactVite-Template-V2";

const GROUNDS = [
  { name: "Night", hex: "#0B0A08", role: "The ground for tools you use for hours.", swatch: "var(--night-0)", ink: "var(--bone-0)" },
  { name: "Paper", hex: "#F2EEE5", role: "The ground for reading, and for print.", swatch: "var(--paper-1)", ink: "var(--ink-0)" },
  { name: "Amber", hex: "#FF9A1F", role: "The only colour that asks for your attention.", swatch: "var(--amber)", ink: "#170d00" },
  { name: "Bone", hex: "#EFEADF", role: "Text on night. Never pure white.", swatch: "var(--bone-0)", ink: "var(--ink-0)" },
];

const FILES = [
  ["src/signal/tokens.css", "Colours, type, spacing, motion. Override a handful and the whole project changes feel."],
  ["src/signal/base.css", "A quiet reset, the instrument grid, type defaults, reduced motion."],
  ["src/signal/components.css", "Panels, buttons, fields, LEDs, readouts, tags, code, all prefixed sg-."],
  ["src/signal/components.tsx", "The same parts as React components, typed."],
  ["src/signal/theme.ts", "Night and paper, remembered, with no flash on load."],
];

function BootDemo() {
  const [run, setRun] = useState(0);
  return (
    <div className="board-demo">
      <div key={run} className="board-boot">
        {["Power", "Clock", "Memory", "Signal"].map((step, i) => (
          <div key={step} className="board-boot__line sg-boot" style={{ ["--i" as string]: i * 2 }}>
            <Led state={i === 3 ? "signal" : "go"} />
            <span>{step}</span>
            <span className="sg-muted">{i === 3 ? "ready" : "ok"}</span>
          </div>
        ))}
      </div>
      <Button size="sm" onClick={() => setRun((n) => n + 1)}>
        Replay
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="board-bar">
        <div className="sg-page board-bar__inner">
          <a className="board-mark" href="#top" aria-label="Alikel Signal, home">
            <span className="board-mark__glyph" aria-hidden>
              <span />
            </span>
            <span className="board-mark__name">Alikel</span>
            <span className="board-mark__sub">/ Signal</span>
          </a>
          <nav className="board-bar__nav" aria-label="Sections">
            <a href="#grounds">Grounds</a>
            <a href="#type">Type</a>
            <a href="#controls">Controls</a>
            <a href="#start">Start</a>
          </nav>
          <div className="sg-row">
            <Tag>v1.0</Tag>
            <ThemeSwitch />
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------------------------------------------------------------- hero */}
        <section className="sg-page board-hero">
          <div className="board-hero__copy">
            <span className="sg-boot" style={{ ["--i" as string]: 0 }}>
              <Label index="00" line>
                House style
              </Label>
            </span>
            <h1 className="sg-display sg-boot" style={{ ["--i" as string]: 1 }}>
              Built like <em>instruments.</em>
            </h1>
            <p className="sg-lede sg-boot" style={{ ["--i" as string]: 2 }}>
              Signal is the house style for everything Alikel makes: warm paper and deep night, one amber signal, hairlines,
              mono labels, and motion that takes its time. It is also this starter. Clone it, and a new project looks like it
              belongs from the first commit.
            </p>
            <div className="sg-row sg-boot" style={{ ["--i" as string]: 3 }}>
              <a className="sg-btn sg-btn--signal sg-btn--lg" href="#start">
                Start a project
              </a>
              <a className="sg-btn sg-btn--lg" href={REPO}>
                View the source
              </a>
            </div>
          </div>

          <Panel marks className="board-scope sg-boot" style={{ ["--i" as string]: 4 }}>
            <div className="sg-panel__head">
              <Label index="CH1">Trace</Label>
              <span className="sg-row" style={{ ["--gap" as string]: "8px" }}>
                <Led live />
                <span className="sg-kicker">Sweep</span>
              </span>
            </div>
            <div className="board-scope__screen">
              <Scope />
            </div>
            <div className="board-scope__readouts">
              <Readout label="Freq" value="1.20" unit="kHz" />
              <Readout label="Ampl" value="0.42" unit="V" />
              <Readout label="Phase" value="090" unit="deg" />
            </div>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- grounds */}
        <section id="grounds" className="sg-page board-section">
          <div className="board-section__head">
            <Label index="01" line>
              Grounds
            </Label>
            <h2 className="board-h2">Two grounds, one signal.</h2>
            <p className="sg-prose">
              Night for tools, paper for reading. Amber is used once per screen, for the thing that matters most: the main
              action, a live indicator, the index of a section. Everything else stays quiet.
            </p>
          </div>
          <div className="board-grounds">
            {GROUNDS.map((g) => (
              <Panel key={g.name} variant="flat" className="board-ground">
                <div className="board-ground__swatch" style={{ background: g.swatch, color: g.ink }}>
                  <span className="board-ground__hex">{g.hex}</span>
                </div>
                <div className="board-ground__meta">
                  <h3 className="board-h3">{g.name}</h3>
                  <p className="sg-muted">{g.role}</p>
                </div>
              </Panel>
            ))}
          </div>
          <div className="board-states">
            <span className="sg-row">
              <Led state="go" /> Go
            </span>
            <span className="sg-row">
              <Led /> Signal
            </span>
            <span className="sg-row">
              <Led state="stop" /> Stop
            </span>
            <span className="sg-row">
              <Led state="off" /> Off
            </span>
            <span className="sg-muted">Status colours appear as lights, never as decoration.</span>
          </div>
        </section>

        {/* ---------------------------------------------------------------- type */}
        <section id="type" className="sg-page board-section">
          <div className="board-section__head">
            <Label index="02" line>
              Type
            </Label>
            <h2 className="board-h2">Wide for headlines, mono for labels.</h2>
          </div>
          <div className="board-type">
            <Panel variant="flat" className="board-specimen board-specimen--wide">
              <Label>Archivo, expanded 640</Label>
              <div className="board-specimen__big">Aa Signal</div>
              <p className="sg-muted">Headlines and names. The extra width is where the retro-futurism lives.</p>
            </Panel>
            <Panel variant="flat" className="board-specimen">
              <Label>Archivo, normal 400</Label>
              <p className="board-specimen__text">
                Body text stays at its natural width, generous line height, short measure. Reading should feel like nothing at
                all.
              </p>
            </Panel>
            <Panel variant="flat" className="board-specimen">
              <Label>IBM Plex Mono 500</Label>
              <p className="board-specimen__mono">01&nbsp;&nbsp;INPUT&nbsp;&nbsp;/&nbsp;&nbsp;READY</p>
              <p className="sg-muted">Labels, values, code. Always in capitals when it is a label.</p>
            </Panel>
            <Panel variant="flat" className="board-specimen">
              <Label>VT323</Label>
              <Readout value="00:42:17" />
              <p className="sg-muted">Readouts only: counters, timers, scores. A small 8-bit wink.</p>
            </Panel>
          </div>
        </section>

        {/* ---------------------------------------------------------------- controls */}
        <section id="controls" className="sg-page board-section">
          <div className="board-section__head">
            <Label index="03" line>
              Controls
            </Label>
            <h2 className="board-h2">A control surface.</h2>
          </div>
          <Panel marks className="board-surface">
            <div className="sg-panel__head">
              <Label index="A">Input</Label>
              <span className="sg-row" style={{ ["--gap" as string]: "8px" }}>
                <span className="sg-kicker">Focus</span>
                <Kbd>Ctrl</Kbd>
                <Kbd>K</Kbd>
              </span>
            </div>
            <div className="sg-panel__body board-surface__grid">
              <div className="sg-stack">
                <Field label="Domain" htmlFor="demo-domain" hint="One per line, or comma separated.">
                  <input id="demo-domain" className="sg-input" placeholder="company.com" />
                </Field>
                <Field label="Notes" htmlFor="demo-notes">
                  <textarea id="demo-notes" className="sg-textarea" placeholder="> paste anything here" />
                </Field>
              </div>
              <div className="sg-stack" style={{ ["--gap" as string]: "24px" }}>
                <div className="sg-stack" style={{ ["--gap" as string]: "10px" }}>
                  <Label>Buttons</Label>
                  <div className="sg-row">
                    <Button variant="signal">Generate</Button>
                    <Button>Export</Button>
                    <Button variant="ghost">Clear</Button>
                    <Button size="sm">Small</Button>
                  </div>
                </div>
                <div className="sg-stack" style={{ ["--gap" as string]: "10px" }}>
                  <Label>Tags</Label>
                  <div className="sg-row">
                    <Tag signal>Live</Tag>
                    <Tag>Draft</Tag>
                    <Tag>v1.0</Tag>
                  </div>
                </div>
                <div className="board-surface__readouts">
                  <Readout label="Links" value="128" />
                  <Readout label="Time" value="0.4" unit="s" />
                  <Readout label="Errors" value="0" />
                </div>
              </div>
            </div>
          </Panel>
        </section>

        {/* ---------------------------------------------------------------- motion */}
        <section className="sg-page board-section">
          <div className="board-section__head">
            <Label index="04" line>
              Motion
            </Label>
            <h2 className="board-h2">Things arrive. They never bounce.</h2>
            <p className="sg-prose">
              One easing curve that decelerates, durations a little slower than fashionable, and everything stops for people
              who ask their system for less motion.
            </p>
          </div>
          <div className="board-motion">
            <Panel variant="flat" className="board-motion__tile">
              <Label>Boot</Label>
              <BootDemo />
            </Panel>
            <Panel variant="flat" className="board-motion__tile">
              <Label>Cursor</Label>
              <p className="board-terminal">
                <span className="sg-muted">signal@alikel</span> ready
                <span className="sg-cursor" aria-hidden />
              </p>
            </Panel>
            <Panel variant="flat" className="board-motion__tile">
              <Label>Live</Label>
              <div className="sg-stack" style={{ ["--gap" as string]: "12px" }}>
                <span className="sg-row">
                  <Led live /> Recording
                </span>
                <span className="sg-row">
                  <Led state="go" live /> Connected
                </span>
              </div>
            </Panel>
          </div>
        </section>

        {/* ---------------------------------------------------------------- start */}
        <section id="start" className="sg-page board-section">
          <div className="board-section__head">
            <Label index="05" line>
              Start
            </Label>
            <h2 className="board-h2">Four commands.</h2>
          </div>
          <div className="board-start">
            <pre className="sg-code">
              <span className="sg-comment"># a new project, already in the house style</span>
              {"\n"}
              <span className="sg-prompt">$ </span>npx degit AliKelDev/ReactVite-Template-V2 my-app
              {"\n"}
              <span className="sg-prompt">$ </span>cd my-app
              {"\n"}
              <span className="sg-prompt">$ </span>npm install
              {"\n"}
              <span className="sg-prompt">$ </span>npm run dev
            </pre>
            <ul className="board-files">
              {FILES.map(([file, what]) => (
                <li key={file}>
                  <code>{file}</code>
                  <span className="sg-muted">{what}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="sg-page board-footer">
        <Rule>Alikel Studio</Rule>
        <div className="board-footer__row">
          <span className="sg-kicker">Signal 1.0 / React, Vite, TypeScript</span>
          <a className="sg-kicker" href="https://github.com/AliKelDev">
            github.com/AliKelDev
          </a>
        </div>
      </footer>
    </>
  );
}
