# Materials and Depth

Apple's "materials" system (frosted glass, translucent bars, layered sheets) creates depth without heavy borders or shadows. The goal is to suggest physical layering — content behind a translucent surface, subtly blurred — never a flashy glass effect.

## Translucency / "glass" (backdrop blur)

Used for navigation bars, sidebars, sheets/modals, and toolbars that float above scrolling content.

```css
.glass-surface {
  background: rgba(255, 255, 255, 0.72);  /* light mode */
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
}

@media (prefers-color-scheme: dark) {
  .glass-surface {
    background: rgba(29, 29, 31, 0.72);
  }
}
```

- Blur amount: 15–30px depending on how much of the underlying content should stay legible.
- Always pair with `saturate(150–180%)` — this is what gives Apple's glass its characteristic vibrancy rather than looking like plain gray blur.
- Add a 1px hairline border in `--separator` color at the edge that meets content, so the glass surface still reads as a distinct layer.

## Shadows

Apple shadows are soft, low-opacity, and large-radius — they suggest a gentle lift, not a hard drop.

```css
/* Resting card */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);

/* Elevated / hovering (modal, popover) */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08);
```

Rules of thumb:
- Never use a single hard-edged shadow (`0 4px 4px rgba(0,0,0,0.5)` reads as dated/Material-Design-circa-2015, not Apple).
- Stack two shadows — a tight one for contact, a soft wide one for ambient lift.
- Increase blur radius and decrease opacity together as elevation increases; don't just make shadows darker.

## Elevation layers (z-order intuition)

1. **Background** — page/app background, flat, no shadow.
2. **Content surfaces** — cards, list rows: subtle resting shadow or just a background color change, no blur needed.
3. **Floating chrome** — nav bars, tab bars, toolbars: translucent glass + blur, pinned above scroll content.
4. **Overlays** — sheets, modals, popovers, context menus: glass or solid elevated background + the "elevated" shadow, with a scale/fade-in entrance (see `references/motion.md`).

## When NOT to use glass

Don't apply backdrop blur to every surface — it's specifically for chrome that floats above other content (bars, sheets, popovers). Static content cards should usually use a plain elevated background color, not blur, or the page will feel unfocused.
