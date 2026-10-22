# Refined Scroll-Based Parallax Motion

Add subtle, high-craft scroll parallax depth to the Hero section and Project Cards, elevating the portfolio's visual polish while preserving strict legibility, accessibility, and compositor performance.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following parameters were confirmed during the interactive interview:
> - **Motion Scope**: Hero section and Project Cards on scroll.
> - **Interaction Style**: Smooth scroll-based vertical depth movement (no erratic cursor tilt).
> - **Prominence & Tone**: Subtle and refined for a senior UX / product designer portfolio (small translation ranges, non-distracting, zero layout shifts).
> - **Accessibility**: Automatic fallback to standard layout when `prefers-reduced-motion` is active.

- **Confirmed Decision 1**: Apply scroll-linked differential vertical movement to the Hero headline, kicker, and supporting text so foreground elements peel back gracefully as the user scrolls into the work section.
- **Confirmed Decision 2**: Introduce window-depth parallax to Project Cards by gently translating the thumbnail imagery inside its `overflow-hidden` container relative to the card's scroll progress (`[-18px, 18px]` delta), creating tactile dimensionality without moving text or breaking reading flow.
- **Confirmed Decision 3 (Accordion Viewport Positioning & Click Activation)**: Accordions activate strictly on user click (all hover/rollover triggers removed for deliberate interaction). When any accordion opens (via user click or by clicking "View Work" / "Work" in nav), the page smoothly scrolls using requestAnimationFrame tracking with cubic ease-out so that the opened accordion card lands directly beneath the fixed header at `HEADER_TARGET_TOP = 80px` (64px fixed header + 16px breathing room matching `gap-4`). Manual wheel or touch gestures immediately yield control back to the user.

---

## 1. Overview & Core Concept

- **What It Does**: Enhances Len Perez's portfolio with silky, scroll-driven vertical parallax depth and smooth top-of-viewport accordion navigation:
  - The **Accordion Sections** activate intentionally on user click and automatically glide smoothly to the top of the viewport (80px, directly beneath the fixed 64px header with 16px top spacing) upon opening, providing immediate focus on the expanded case study or work gallery.
  - The **Hero Section** separates into subtle depth planes: the ambient background elements stay anchored, the large "Pieces" title glides upward at an offset rate, and the descriptive lead copy gently floats, giving an architectural sense of space.
  - The **Project Cards** gain a tactile "window into the work" effect: as each card scrolls past the viewport, the showcase artwork/vector diagram moves smoothly within its frame, rewarding scroll discovery with fluid physical depth.
- **Target Audience / Persona**: Design directors, hiring managers, and prospective clients reviewing high-level UX and product design work who appreciate understated, production-grade micro-craft over gaudy effects.
- **Key Value**: Demonstrates mastery of interaction design and spatial hierarchy through restraint and fluidity without hurting performance or accessibility.

---

## 2. User Experience & Visual Design

### Key User Flows & Motion Feel
1. **Hero Entry & Departure**:
   - The user loads the page and sees the staggered entrance animation already in place.
   - Upon scrolling down toward `#work`, the Hero elements separate naturally: the prominent title ("Pieces") glides at a gentle differential velocity ($\approx 0.18\times$), while the kicker and paragraph float with a gentle opacity fade.
   - As the user reaches the featured projects accordion, the hero has transitioned smoothly out of view without sudden pops or layout jumps.
2. **Project Card Window Parallax**:
   - As each project card (e.g., Purchasing Platform, Grainger, American Family Insurance) enters the viewport, its thumbnail image tracks viewport scroll progress.
   - The image container maintains its crisp, rounded bounds while the inner media element gently shifts vertically on the compositor thread (`transform: translateY(...)`), creating a camera-lens window depth.
   - Text content (titles, tags, synopses, and expand buttons) remains 100% stationary relative to the card frame, guaranteeing effortless reading and click target stability.

### Visual Identity & Theme Integration
- **Aesthetic Direction**: Editorial, clean, and restrained. Fits seamlessly with both Light mode (`bg-white` / neutral slate) and Dark mode (`#0b0d11` / deep obsidian).
- **Zero Layout Thrashing**: All parallax translations use CSS `transform: translate3d(0, y, 0)` via Framer Motion's `useScroll` and `useTransform`, keeping calculations strictly on the GPU compositor thread.
- **Reduced Motion Support**: Integrated with `useReducedMotion()`. When reduced motion is preferred by the OS/browser, all parallax offsets evaluate to `0px` with no overhead.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Interior Image Window Parallax vs Whole-Card Movement**
  - *Chosen Approach*: Parallax is applied to the image element inside the card's fixed bounds (`overflow-hidden`), rather than translating entire cards at different speeds.
  - *Why*: Moving entire cards at different speeds in an accordion/list causes awkward spacing collapses, overlapping borders, and misaligned buttons. Interior window parallax provides clean visual depth while keeping the grid rock-solid.
  - *Alternatives Considered*: Staggered dual-column card drift (rejected because the current layout uses an accordion container with detailed case study walkthroughs that require unified vertical alignment).

- **Decision 2: Scroll-Linked Framer Motion (`motion/react`) vs Custom Scroll Listeners**
  - *Chosen Approach*: Leverage the installed Framer Motion v12 library (`useScroll`, `useTransform`, `useSpring`).
  - *Why*: The project already imports `motion/react`. Framer Motion's `useScroll` integrates directly with modern CSS scroll timelines and `requestAnimationFrame`, providing native smoothness, dampening springs, and automatic cleanup without window scroll listener bloat.
  - *Alternatives Considered*: Pure CSS `animation-timeline: scroll()` (insufficient cross-browser support across older Safari versions) or manual `window.addEventListener('scroll')` (higher risk of jank and reflows).

- **Decision 3: Motion Restraint on Text Copy**
  - *Chosen Approach*: Restrict aggressive parallax exclusively to visual/media layers. Keep case study synopses, tags, and clickable buttons anchored.
  - *Why*: Moving typography while someone is attempting to read causes cognitive fatigue and vestibular discomfort. Subtle hero departure and image window motion delivers 100% of the aesthetic delight with 0% usability penalty.

---

## 4. Technical Architecture & Component Interaction

### System & Motion Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                       Browser Viewport                      │
└──────────────────────────────┬──────────────────────────────┘
                               │ Scroll Offset (window / target)
                               ▼
        ┌──────────────────────────────────────────────┐
        │       Framer Motion (motion/react)           │
        │   useScroll({ target, offset })              │
        │   useReducedMotion()                         │
        └──────────────┬───────────────────────────────┘
                       │
       ┌───────────────┴────────────────────────┐
       ▼                                        ▼
┌──────────────────────────────┐ ┌──────────────────────────────┐
│        Hero Component        │ │     ProjectCard Component    │
│                              │ │                              │
│ • Container target ref       │ │ • Card container ref         │
│ • yTitle: [0, -45px]         │ │ • yImage: [-18px, 18px]      │
│ • yKicker: [0, -25px]        │ │ • Container: overflow-hidden │
│ • opacityHero: [1, 0.15]     │ │ • Inner img: scale-[1.08] & y│
│ • GPU Compositor transforms  │ │ • Static typography & clicks │
└──────────────────────────────┘ └──────────────────────────────┘
```

### Component Updates
1. **`src/app/components/Hero.tsx`**:
   - Attach a container ref to the hero section.
   - Hook up `useScroll({ target: containerRef, offset: ["start start", "end start"] })`.
   - Map progress to subtle transforms:
     - Title `"Pieces"`: `useTransform(scrollYProgress, [0, 1], [0, -45])`
     - Kicker (`UX • Product • Design`): `useTransform(scrollYProgress, [0, 1], [0, -25])`
     - Lead paragraph & CTA button: `useTransform(scrollYProgress, [0, 0.8], [0, -15])`
     - Hero overall opacity: `useTransform(scrollYProgress, [0, 0.85], [1, 0.15])`
   - Wrap transforms with `useReducedMotion()` conditional checks.
2. **`src/app/components/ProjectCard.tsx`**:
   - Attach a target ref to `motion.article`.
   - Hook up `useScroll({ target: cardRef, offset: ["start end", "end start"] })`.
   - Create a smooth spring-damped image translation:
     - `useTransform(scrollYProgress, [0, 1], [-18, 18])`
   - Apply this `y` transform to the image element inside the `<div className="w-full h-full overflow-hidden">` wrapper, slightly adjusting image scaling (`scale-[1.08]`) to ensure the translated image never reveals edge gaps.
3. **Verification**:
   - Verify smooth scrolling across Desktop and Mobile viewports.
   - Run `lint_applet` and `compile_applet` to guarantee clean build and zero regressions.
