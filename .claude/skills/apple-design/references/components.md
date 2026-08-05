# Components

## Corner radii

Apple uses "continuous" (squircle-like) corner curvature, not simple circular arcs. CSS can't do true continuous curvature, but `border-radius` with generous values plus smooth shadows gets close enough for web use.

| Element | Radius |
|---|---|
| Small controls (chips, small buttons, inputs) | 8px |
| Buttons (standard) | 10–12px |
| Cards | 16–20px |
| Large surfaces / hero panels / app icons-style tiles | 24–28px |
| Sheets / modals | 20px (top corners at minimum on mobile-style sheets) |

Keep radii consistent within a component family — don't mix an 8px button next to a 20px card in the same row without visual reason.

## Buttons

```css
.btn-primary {
  background: var(--accent);
  color: white;
  font-weight: 500;
  padding: 12px 22px;
  border-radius: 980px; /* fully pill-shaped, common for marketing CTAs */
  border: none;
  transition: background-color 150ms ease, transform 150ms ease;
}
.btn-primary:hover { background: var(--accent-hover); }
.btn-primary:active { transform: scale(0.97); }

.btn-secondary {
  background: var(--background-secondary);
  color: var(--label-primary);
  border-radius: 980px;
  padding: 12px 22px;
  border: 1px solid var(--separator);
}
```

Notes:
- Marketing CTAs: fully rounded ("pill") buttons are a strong Apple signature (`border-radius: 980px` or `9999px`).
- App-style UI buttons (inside a settings panel, toolbar): smaller radius (10–12px) rather than full pill, to match denser UI chrome.
- Press states use a slight scale-down (0.96–0.98), not a color-only change — this reads as tactile.

## Cards

```css
.card {
  background: var(--background-elevated);
  border-radius: 18px;
  padding: var(--space-5);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
}
```

Avoid visible borders on cards when a background-color difference from the page already separates them; add a hairline border only when card and page background are the same color.

## Navigation bars / toolbars

- Fixed/sticky, translucent glass background (`references/materials-and-depth.md`), hairline bottom border.
- Height: 44–52px (compact) for app-style, up to 64px+ for marketing site headers.
- Center or left-align the logo/title depending on whether it's app-style (left) or marketing (often center on mobile, left on desktop).

## Lists / rows

- Rows separated by hairline dividers (`--separator`) inset from the leading edge to align with text, not full-bleed, when nested inside a card.
- Generous vertical padding per row (12–16px minimum) — list density should still feel touchable (44px min height).
- Trailing chevron (`›`) for rows that navigate further, matching iOS list conventions.

## Form controls

- Inputs: light background fill (`--background-secondary`), no visible border by default, border/ring appears on focus using the accent color.
- Toggles/switches: pill-shaped track, accent color when on, neutral gray when off, smooth 150–200ms transition — mirror the native iOS switch, don't reinvent it as a checkbox.
- Segmented controls: pill-shaped container, sliding selected-segment background, used for 2–5 mutually exclusive options instead of a dropdown when space allows.
