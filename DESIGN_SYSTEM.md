# DESIGN_SYSTEM.md
> **Portfolio: Muhammad Rafli Nugrahasyach** — Data Scientist & ML Engineer
> Vibe: **Technical · Data-Centric · Enterprise-Grade · Minimalist · High-Contrast**
> Anti-slop compliance: No purple/gradient backgrounds, no glassmorphism, no radii >6px on cards, no sparkle icons.
> Last updated: 2026-09-14

---

## 1. Design Principles

| Principle | Implementation |
|-----------|----------------|
| **Restraint** | Every element earns its place. No decoration for decoration's sake. |
| **Legibility** | Data-dense but scannable. Hierarchy via weight, size, and whitespace — not color alone. |
| **Deliberate Contrast** | All text pairs pass WCAG AA (≥4.5:1 body, ≥3:1 large text) in both light and dark mode. |
| **No-Slop Compliance** | Zero purple. Zero glassmorphism. Zero radius >6px on surfaces. Zero sparkle icons. Zero gradient text. |
| **Systematic** | All spacing, color, and type decisions reference this document only. |

**Reference aesthetics:** Linear, Stripe, GitHub — functional, honest, restrained.

---

## 2. Color Palette

All tokens are HSL CSS custom properties in `src/index.css`.

### Light Mode
| Token | HSL | Hex (approx) | Role |
|-------|-----|-------------|------|
| `--background` | `220 20% 97%` | `#F5F6F9` | Page background |
| `--foreground` | `220 15% 12%` | `#19202E` | Primary text |
| `--card` | `0 0% 100%` | `#FFFFFF` | Card/surface |
| `--muted` | `220 14% 94%` | `#EEF0F5` | Subtle fill |
| `--muted-foreground` | `220 10% 44%` | `#6A7387` | Secondary text |
| `--border` | `220 13% 88%` | `#D8DCE8` | 1px borders |
| `--primary` | `220 15% 12%` | `#19202E` | CTA buttons |
| `--accent` | `213 85% 48%` | `#1167E0` | Links, active |
| `--success` | `145 63% 32%` | `#1E8741` | Status green |

### Dark Mode
| Token | HSL | Role |
|-------|-----|------|
| `--background` | `220 16% 9%` | Dark page bg |
| `--foreground` | `210 20% 93%` | Light text |
| `--card` | `220 14% 12%` | Dark surface |
| `--muted-foreground` | `215 14% 58%` | Secondary text |
| `--border` | `220 12% 20%` | Subtle borders |
| `--accent` | `213 85% 60%` | Brighter blue in dark |

**Hard bans:** `#000000`, `#ffffff` as defaults; any purple/violet gradient; background-clip text.

---

## 3. Typography

**Font family:** Inter (Google Fonts) → `ui-sans-serif`, `system-ui` fallback.

| Level | Size | Weight | Tracking | Usage |
|-------|------|--------|----------|-------|
| Display | `clamp(2.5rem, 6vw, 4.5rem)` | 700 | −0.02em | Hero headline |
| H1/Section | `clamp(1.75rem, 3.5vw, 2.5rem)` | 700 | −0.015em | Section headings |
| H2 | `clamp(1.25rem, 2.5vw, 1.75rem)` | 600 | −0.01em | Sub-headings |
| Eyebrow | 11px | 600 | +0.1em | Section labels (UPPERCASE) |
| Body | 16px | 400 | 0 | Body copy |
| Small | 14px | 400/500 | 0 | Card text, descriptions |
| Mono/Tag | 12–13px | 400/500 | 0 | Metrics, tags, dates |

**Rules:**
- Eyebrow labels must be real category names (PORTFOLIO, BACKGROUND, HONORS). No decorative text.
- No mixed type families. Inter only.
- No gradient text (`background-clip: text`).

---

## 4. Spacing Scale

**Base:** 4px. All spacing from this scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px`.

- Section vertical padding: `py-20` (80px)
- Container max-width: `max-w-6xl` (1152px), `max-w-5xl` for text-heavy sections
- Card internal padding: `p-5` (20px)
- Gap between cards: `gap-4` (16px)

---

## 5. Border Radius

**Global rule:** `--radius: 0.375rem` (6px) — applied to cards, inputs, badges, buttons.

- Cards/surfaces: `rounded-md` (6px)
- Buttons/CTAs: `rounded` (4px from default) or `rounded-md` (6px)
- Tags/badges: `rounded` (4px)
- **BANNED:** `rounded-xl` (12px+) on cards, `rounded-full` on square buttons

---

## 6. Component Patterns

### Cards
```css
/* Anti-slop card: 1px border, no shadow escalation, no floating */
border: 1px solid hsl(var(--border));
border-radius: 6px;
background: hsl(var(--card));
/* Hover: border color shift only — no glow, no lift shadow */
```

### Buttons
- **Primary:** solid `bg-primary text-primary-foreground`, `hover:opacity-90`
- **Ghost/Outline:** `border border-border text-foreground hover:bg-muted`
- **Size:** h-10 (default), h-8 (compact)
- **No:** gradient fills, pill shape, glow on hover

### Form Inputs
- `border border-input rounded px-3 py-2 text-sm`
- Focus: `focus-visible:ring-2 focus-visible:ring-ring` (keyboard only via `:focus-visible`)
- Labels: above fields, 12px 500-weight

### Navigation
- Fixed, `bg-background/95 backdrop-blur-sm` on scroll
- Tab underlines for active state (not pill backgrounds)
- Language toggle: `border border-border` segmented control, 2 buttons

---

## 7. Animation Rules

- **Property:** `opacity` and `transform` ONLY. Never `width`, `height`, `color`.
- **Duration:** 150–350ms
- **Easing:** `ease-out` for entrances
- **Stagger:** max 0.04–0.06s per item
- **Library:** Framer Motion (`whileInView`, once: true)
- **No:** bouncy springs, 3D transforms, parallax scroll effects

---

## 8. Section Layout Families

| Section | Layout | Notes |
|---------|--------|-------|
| Hero | Centered editorial | Full viewport, text-centered, social icon row |
| Projects | 3-col grid | Featured 6 → expand to all with filter tabs |
| Tech Stack | 6-col horizontal grid | Category → items list |
| Experience | Left-rail timeline | Tab-switched: Work/Education/Certs/Orgs |
| Awards | Publications + 3-col grid | Competitions, Grants, Delegations |
| Contact | 3+2 column grid | Form left, socials right |

---

## 9. Anti-Slop Checklist

Before any PR:
- [ ] No colors outside the approved palette
- [ ] No `rounded-xl`/`rounded-2xl` on surfaces
- [ ] No gradient backgrounds or gradient text
- [ ] No decorative glass panels
- [ ] Eyebrows are real labels, no sparkle prefix
- [ ] All text pairs ≥4.5:1 contrast in both modes
- [ ] Focus rings: `:focus-visible` only (never mouse-click visible)
- [ ] All interactive elements have hover + focus + disabled states
- [ ] Async actions: loading + success/error feedback
- [ ] No inline one-off size values — use scale steps only
