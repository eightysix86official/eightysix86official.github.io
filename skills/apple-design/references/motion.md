# Motion

Apple motion exists to explain, not decorate: it shows where something came from or where it's going. It is fast, purposeful, and never draws attention to itself.

## Timing and easing

| Interaction | Duration | Easing |
|---|---|---|
| Hover/press feedback | 100–150ms | `ease-out` |
| Small UI transitions (toggle, tab switch) | 200–250ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` (standard ease) |
| Sheet/modal enter | 300–400ms | `cubic-bezier(0.32, 0.72, 0, 1)` (spring-like decel) |
| Sheet/modal exit | 200–250ms | `ease-in` |
| Page/section scroll reveal | 400–600ms | `ease-out`, combined with slight translate-Y (16–24px) + fade |

As a CSS default when nothing more specific applies:
```css
transition: all 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
```

## Common patterns

- **Press feedback**: scale element to 0.96–0.98 on `:active`, back to 1 on release — never rely on color change alone.
- **Modal/sheet entrance**: fade in background scrim + translate the sheet up from 100% (mobile-style) or scale up from 0.95→1 with fade (desktop popover/modal).
- **Scroll-triggered reveal**: elements fade + translate up slightly as they enter viewport (use `IntersectionObserver`, not scroll-position math). Stagger multiple items by 40–80ms each, don't animate everything simultaneously.
- **Hover on cards/images**: subtle scale (1.0→1.02–1.04) or shadow deepening, not both at full intensity — pick one primary hover cue per component type.

## What to avoid

- Bouncy/elastic overshoot on anything except explicitly playful contexts — Apple's default feel is a confident decelerate, not a bounce.
- Long animations (>600ms) on frequent interactions (buttons, toggles) — motion should never make the UI feel slow.
- Animating too many properties at once (position + color + size + opacity together) — pick 1–2 properties per transition so the motion reads clearly.
- `prefers-reduced-motion`: always respect it — disable non-essential motion (parallax, scroll reveals) when set, keep only functional state transitions.

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```
