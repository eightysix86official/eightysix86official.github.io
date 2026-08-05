# Color

## Philosophy

Apple UIs are ~90% neutral (grays, white/black) and ~10% color, and that color is almost always one accent used consistently. Resist the urge to color-code every category or section — use type hierarchy and spacing to differentiate content, and save color for interactive/primary elements.

## Neutral palette

| Token | Light mode | Dark mode | Use |
|---|---|---|---|
| `--label-primary` | `#1d1d1f` | `#f5f5f7` | Headlines, primary text |
| `--label-secondary` | `#6e6e73` | `#a1a1a6` | Body copy, secondary text |
| `--label-tertiary` | `#86868b` | `#8e8e93` | Captions, disabled/meta text |
| `--background-primary` | `#ffffff` | `#000000` | Page background |
| `--background-secondary` | `#f5f5f7` | `#1d1d1f` | Section/card background |
| `--background-elevated` | `#ffffff` | `#2c2c2e` | Cards/sheets sitting above background |
| `--separator` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.12)` | Hairline dividers, borders |

Never use pure `#000000` text on `#ffffff` (or vice versa) — always use the off-black/off-white values above.

## Accent color

Pick exactly one accent for interactive elements (primary buttons, links, active states, selection). Apple's system default is:

- **System Blue**: `#0071e3` (light mode CTA blue used on apple.com) / `#2997ff` (dark mode)

But the accent should match brand context if one exists — the rule is *one* accent, applied consistently, not that it must be blue.

## Semantic colors (use sparingly, only for real status)

| Meaning | Color |
|---|---|
| Success | `#34c759` |
| Warning | `#ff9500` |
| Error/destructive | `#ff3b30` |

## Applying color

- Primary buttons: solid accent background, white text.
- Secondary buttons: neutral background (`--background-secondary`) with `--label-primary` text, or an outline with `--separator`.
- Links/inline actions: accent-colored text, no underline until hover/focus.
- Never use color as the *only* differentiator for state (accessibility) — pair with icon, weight, or position changes too.

## Dark mode

Don't invert light mode — dark mode uses true near-black backgrounds (`#000000` or `#1d1d1f`) with desaturated/lighter text, and the accent color often shifts slightly brighter/lighter for sufficient contrast (e.g., blue `#0071e3` → `#2997ff`). Implement with `prefers-color-scheme: dark` or a `[data-theme="dark"]` override — see `assets/apple-design-tokens.css` for a ready-made implementation of this table.
