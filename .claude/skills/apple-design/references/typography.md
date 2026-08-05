# Typography

## Font stack

Use the system font stack so each platform renders its native font (SF Pro on Apple devices):

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
  "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

Never bundle or embed an actual "SF Pro" font file — it is licensed for Apple platforms only. The system stack achieves the visual effect legitimately.

## Type scale (web / landing page use)

A condensed version of Apple's marketing scale. Use `rem` so it respects user font-size settings.

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| Hero headline | 3.5–5.5rem (clamp for responsive) | 600–700 (semibold/bold) | 1.05–1.1 | -0.02em |
| Section headline | 2–2.75rem | 600 | 1.1 | -0.015em |
| Subheadline / lede | 1.25–1.5rem | 400–500 | 1.4 | normal |
| Body | 1–1.0625rem | 400 | 1.5 | normal |
| Caption / meta | 0.8125–0.875rem | 400–500 | 1.4 | 0.01em |
| Button / label | 0.9375–1rem | 500–600 | 1 | normal |

Responsive hero example:
```css
font-size: clamp(2.5rem, 6vw, 5.5rem);
```

## Weight, not decoration

- Use real font weights (`font-weight: 600`) for emphasis, never `font-style: italic` or letter-spacing tricks to fake boldness.
- Negative letter-spacing (tracking) on large headlines is a signature Apple detail — apply small negative tracking (-0.01em to -0.03em) as size increases, and neutral/slightly positive tracking on small caption text for legibility.
- Avoid more than 2 weights per surface (e.g., regular body + semibold headline). Extra weights add visual noise.

## Alignment

- Marketing hero sections: center-aligned headline + subheadline, often with a max-width (e.g., `max-width: 40ch`) so lines don't run too long.
- Body copy, lists, settings/UI text: left-aligned (or start-aligned for RTL). Centering long body text hurts readability — reserve centering for short, punchy copy.

## Color and contrast

Set headline color to the strongest neutral (near-black in light mode, near-white in dark mode) and body copy to a slightly softer secondary neutral — see `references/color.md` for exact values. Never set body text to pure black on pure white; Apple interfaces use off-black/off-white for reduced eye strain.
