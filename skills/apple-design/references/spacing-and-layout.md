# Spacing and Layout

## Spacing scale

Base unit of 4px, used consistently for padding, margins, and gaps. Prefer sticking to this scale over arbitrary values — consistency is what reads as "designed" rather than "assembled."

| Token | Value | Typical use |
|---|---|---|
| `space-1` | 4px | Icon-to-label gaps, tight inline spacing |
| `space-2` | 8px | Compact control padding |
| `space-3` | 12px | Default control padding, small gaps |
| `space-4` | 16px | Card padding, standard gaps |
| `space-5` | 24px | Section-internal spacing |
| `space-6` | 32px | Between related sections |
| `space-8` | 48px | Between major sections |
| `space-10` | 64px | Section vertical padding (desktop) |
| `space-12` | 96px | Hero/marketing section vertical padding |

## Page structure

- **Content max-width**: cap body/marketing content at ~980–1200px so lines don't stretch full-width on large screens; hero text often narrower (max-width ~40–60ch).
- **Side margins**: minimum 20px on mobile, scaling to 5–8% of viewport width on desktop rather than a fixed pixel value — Apple pages "breathe" more as the viewport grows, they don't just center a fixed-width column with dead space.
- **Vertical rhythm**: err toward more space between sections than feels natural at first. A common mistake when approximating Apple design is under-spacing; if two sections feel connected when they should feel distinct, add space before adding a divider line.

## Grid

- Use CSS Grid or Flexbox with consistent gaps from the spacing scale (`gap: var(--space-4)` etc.), not mismatched ad hoc margins on children.
- Card grids: 2–4 columns depending on content density, minimum card width ~260–320px, equal gaps horizontally and vertically.

## Breakpoints (approximate, adjust to content)

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 734px | Single column, larger touch targets (min 44px), reduced hero type size |
| Tablet | 734–1068px | 2-column grids begin |
| Desktop | > 1068px | Full multi-column layouts, max content width applies |

## Safe targets

- Minimum interactive target size: 44×44px (Apple's HIG minimum tap target) — apply even on web/desktop for touch-friendly and accessible design.
- Keep line length for body text between 50–75 characters for readability.
