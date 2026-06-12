// Slate — cool blue-gray dark theme.
export function activate(api) {
  api.registerTheme({
    id: "theme-slate.theme",
    name: "Slate",
    colorScheme: "dark",
    vars: {
      "--color-surface-0": "#0d1117",
      "--color-surface-1": "#131922",
      "--color-surface-2": "#1a212c",
      "--color-surface-3": "#232c39",
      "--color-surface-4": "#2d3845",
      "--color-border": "#3a4654",
      "--color-border-subtle": "#1f2733",
      "--color-text-primary": "#dbe4ee",
      "--color-text-secondary": "#8595a8",
      "--color-text-muted": "#56657a",
      "--color-accent": "#58a6ff",
      "--color-accent-hover": "#79b8ff",
      "--color-slider-fill": "#4d5e72",
    },
  });
}
