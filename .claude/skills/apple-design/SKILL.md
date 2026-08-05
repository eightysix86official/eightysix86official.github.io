---
name: apple-design
description: Applies Apple's design language (Human Interface Guidelines aesthetic) to web pages, artifacts, UI mockups, and components — clean SF Pro-style typography, generous whitespace, subtle depth via translucency/blur, soft rounded corners, restrained color, and iOS/macOS-style interaction conventions. Use this whenever the user asks for something to "look like Apple," "feel premium/minimal," wants an "iOS-style" or "macOS-style" UI, mentions Human Interface Guidelines or HIG, asks for a clean/modern/polished design without specifying a system, or is building a landing page, app mockup, settings panel, or component library that should feel native to Apple platforms. Also trigger when refining an existing design that reads as cluttered, inconsistent, or dated and the user wants it to feel more refined and Apple-like, even if they don't name Apple explicitly.
---

# Apple Design

Apply Apple's design language — the visual and interaction system behind iOS, macOS, and apple.com — to whatever is being built: a web page, an artifact, a component, or a full mini design system.

## Why this system works

Apple's design language isn't a color palette bolted onto a page — it is a discipline of *restraint*. Every element earns its place: one clear focal point per screen, type that does the heavy lifting instead of decoration, and negative space treated as a design material rather than empty leftover area. Copying the surface details (rounded corners, blur, SF-style fonts) without this discipline produces something that looks Apple-*adjacent* but not Apple. Lead with the restraint, then layer in the visual details.

## Core principles (apply in this order)

1. **Clarity over decoration.** Remove anything not serving content or the user's task — extra borders, gradients, shadows, and ornamental icons. If a line, box, or icon isn't clarifying something, cut it.
2. **One hierarchy per view.** A single dominant element (a headline, a hero image, a primary action) should be obvious in under a second. Everything else recedes.
3. **Generous whitespace.** Apple layouts breathe. Prefer under-filling a layout to cramming it. When in doubt, increase margins and padding rather than shrinking type.
4. **Typography carries the design.** Large, confident headlines; a tight but legible type scale; real font weights instead of faux-bold. See `references/typography.md`.
5. **Depth is subtle, not decorative.** Translucency (backdrop blur), soft shadows, and layering suggest physical materials (glass, paper) — they should never call attention to themselves. See `references/materials-and-depth.md`.
6. **Color is restrained.** Mostly neutral (white/black/gray) with one accent color used sparingly for actions and emphasis — not scattered across the page. See `references/color.md`.
7. **Motion is purposeful and fast.** Transitions clarify what moved where; they are quick (150–350ms), eased, and never gratuitous. See `references/motion.md`.
8. **Rounded, consistent geometry.** Continuous ("squircle") corner curvature on cards and controls, consistent corner radii across a component family. See `references/components.md`.

## Workflow

1. **Identify the surface.** Is this a marketing/landing page, an app-like UI (settings, dashboard, list/detail), or a single component? This changes which reference file matters most (a landing page leans on typography + whitespace; a UI mockup leans on components + materials).
2. **Read the relevant reference file(s) before writing code** — don't rely on memory for exact values (blur radii, spacing scale, type sizes). They're short and written to be skimmed, not memorized:
   - `references/typography.md` — type scale, font stacks, weight/tracking rules
   - `references/color.md` — light/dark palettes, accent color usage, semantic colors
   - `references/materials-and-depth.md` — blur/translucency ("glass"), shadow values, elevation layers
   - `references/spacing-and-layout.md` — spacing scale, grid, safe margins, breakpoints
   - `references/components.md` — buttons, cards, nav bars, lists, form controls, corner radii
   - `references/motion.md` — easing curves, durations, common transition patterns
3. **Build for both light and dark.** Apple interfaces are designed as light/dark pairs, not a light design with dark colors inverted. Define both from the start using the palettes in `references/color.md`.
4. **Use the starter CSS if building HTML/web output.** `assets/apple-design-tokens.css` defines the type scale, spacing scale, color variables (light + dark via `prefers-color-scheme`), radii, shadows, and blur as CSS custom properties — pull values from there instead of inventing new ones, so the design stays internally consistent.
5. **Sanity-check before finishing:** Would this look at home in Settings.app, on apple.com, or on the App Store? If it looks busy, over-decorated, or uses more than one accent color, cut back rather than add.

## Common mistakes to avoid

- **Rounding corners but keeping heavy borders/shadows.** Rounded corners alone don't read as Apple-style if the element still has a harsh 1px border and a hard drop shadow — soften both together (see `references/materials-and-depth.md`).
- **Using SF Pro's exact metrics on the web without the font available.** SF Pro is Apple-licensed; on the web use the system font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...`) so Apple devices render actual SF Pro and other platforms get a comparable system font. Never bundle or "fake" the SF font family.
- **Multiple accent colors.** Apple UIs pick one accent (usually blue, but can be brand-appropriate) and use it consistently for every interactive/primary element on a given surface.
- **Center-aligning everything.** Apple marketing pages center hero sections but usually left-align body copy and lists — check `references/typography.md` for when each applies.
- **Skipping dark mode.** If the deliverable is code (not a one-off static mock), it should support both color schemes from the start, not as an afterthought.
