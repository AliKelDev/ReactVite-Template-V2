import { useCallback, useEffect, useState } from "react";

export type Theme = "night" | "paper";

const KEY = "sg-theme";

/** The theme a first visit should get: what was chosen before, else what the system prefers. */
export function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "night" || saved === "paper") return saved;
  } catch {
    /* storage can be blocked; fall through to the system preference */
  }
  if (typeof matchMedia === "function" && matchMedia("(prefers-color-scheme: light)").matches) return "paper";
  return "night";
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

/** Current theme, a setter that remembers it, and a toggle. */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "paper" ? "paper" : initialTheme(),
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* remembered for this visit only */
    }
  }, []);

  const toggle = useCallback(() => setTheme(theme === "night" ? "paper" : "night"), [theme, setTheme]);

  return { theme, setTheme, toggle };
}
