# Unified Header Navigation Segmented Control

An architectural and design blueprint for unifying the top navigation links ("Work", "About", "Contact") into a cohesive inset segmented capsule component, with seamless dark/light styling, subtle hairline dividers, and rollover cues consistent with the hero section.

---

## Status: Completed

All planned features and styling requirements have been implemented and verified:
- Unified navigation links (**Work**, **About**, **Contact**) into an inset segmented capsule component.
- Inner segment buttons have no individual borders or outlines.
- Subtle hairline dividers separate each segment, smoothly fading out adjacent dividers when hovering or focusing a segment.
- Hover rollover adopts the hero styling: light blue background (`bg-blue-100`), dark blue text (`text-blue-900`), and dark blue icon (`text-blue-900`).
- **Résumé** action button and **Theme Toggle** remain complementary standalone controls alongside the segmented track.
- Mobile dropdown menu reflects the unified segmented container styling.
- Passed full TypeScript validation (`lint_applet`) and production compilation (`compile_applet`).

---

## User Review & Critical Decisions

- **Unified Scope**: The segmented control includes the core navigation links (**Work**, **About**, **Contact**). The **Résumé** action button and **Theme Toggle** remain complementary standalone controls alongside the segmented track to preserve their distinct visual hierarchy.
- **Track & Container Architecture**: An **inset capsule track** container with an outer border, subtle inner background surface, and vertical hairline dividers between segments that fade gracefully during hover/active states.
- **Styling Cues & Rollover**:
  - **No outlines on individual segments**: The inner segment buttons ("Work", "About", "Contact") have no individual borders or outlines.
  - **Hero-matching hover cues**: Hovering over any segment renders a light blue background (`bg-blue-100`), dark blue text (`text-blue-900`), and dark blue icon (`text-blue-900`).
  - **Dark / Light mode adaptation**: In dark mode, the track uses a subtle translucent dark backdrop (`bg-white/[0.04]` with `border-white/20`) with muted text that shifts to crisp `bg-blue-100 text-blue-900` on rollover. In light mode, the track uses `bg-black/[0.03]` with `border-black/15`.

---

## 1. Overview & Core Concept

- **What It Does**: Replaces the loose cluster of pill navigation buttons in the desktop and mobile navigation header with a single, unified segmented button component. The component groups the primary sections of Len Perez's portfolio into an architectural track while retaining clear interaction affordances and accessibility.
- **Target Audience / Persona**: Design directors, hiring managers, and prospective clients reviewing the UX portfolio who value meticulous craftsmanship, tactile micro-interactions, and visual harmony across the interface.
- **Key Value**: Eliminates repetitive button borders, reduces visual noise in the header, reinforces visual hierarchy by contrasting navigational wayfinding from external action CTAs (Résumé), and establishes 1:1 aesthetic consistency with hero button rollovers.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Initial Header Presentation**: As visitors land or scroll through the portfolio, the header showcases a single unified capsule containing "Work", "About", and "Contact" separated by subtle vertical dividers.
2. **Hover & Focus Interactions**: Hovering over a segment smoothly illuminates it with `bg-blue-100`, shifting the label and icon to `text-blue-900`, while adjacent hairline dividers tuck into the background for a clean spotlight effect.
3. **Smooth In-Page Wayfinding**: Clicking any segment smoothly scrolls to the corresponding section (`#work`, `#about`, `#contact`) with active focus rings conforming to the segmented segment geometry.
4. **Mobile Presentation**: On mobile viewports, the navigation drawer similarly groups the items into a structured segmented capsule list that matches the same aesthetic cues.

### Visual Identity & Theme
- **Segmented Track Styling**:
  - `rounded-full p-1 border` geometry.
  - Light mode: `bg-black/[0.03] border-black/15`.
  - Dark mode: `bg-white/[0.04] border-white/20`.
- **Segment Items ("Work", "About", "Contact")**:
  - `rounded-full px-4 py-2 text-sm font-medium tracking-wider uppercase` with no individual borders.
  - Light mode idle: `text-neutral-700`.
  - Dark mode idle: `text-white/80`.
  - Hover / Focus state: `bg-blue-100 text-blue-900` with icons transitioning to `text-blue-900`.
- **Hairline Dividers**:
  - Vertical 14px height rules (`w-px h-3.5 my-auto transition-opacity duration-200`).
  - Light mode: `bg-black/15`.
  - Dark mode: `bg-white/20`.
  - Dynamically fades (`opacity-0`) when an adjacent segment is hovered or focused to prevent visual crowding.
- **Typography**: Clean, uppercase tracking (`text-sm tracking-wider font-medium font-sans`) paired with 15px Lucide icons (`Briefcase`, `User`, `Mail`).

---

## 3. Key Product Decisions & Trade-Offs

### Decision 1: Segmented Track vs Individual Floating Buttons
- **Chosen Approach**: A single container track (`<div role="group" aria-label="Portfolio navigation">` containing an unordered list with segments separated by hairline dividers).
- **Why**: Cleanly organizes navigational links as a single cognitive unit, removes distracting per-button borders, and satisfies the user's specific request for a unified segmented control.

### Decision 2: Exclusion of Résumé and Theme Switcher from the Track
- **Chosen Approach**: Position the Segmented Control as the central navigation unit, with the **Résumé** link and **Theme Switcher** placed immediately adjacent to the right.
- **Why**: Résumé is an external document download (`target="_blank"` PDF action), not an in-page section jump. Combining it inside the segmented section track would violate standard UI mental models where segmented controls represent mutually exclusive navigation/modes.

### Decision 3: Dynamic Divider Suppression
- **Chosen Approach**: Hide dividers adjacent to the currently hovered segment index using simple React state tracking (`hoveredIndex`).
- **Why**: Standard macOS and iOS segmented controls tuck inner dividers away when a segment segment is highlighted, ensuring crisp border-to-fill contrast.

---

## 4. Technical Architecture & Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             <header> / <Nav>                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [Logo / Brand Mark]                                                        │
│  "Len Perez"                                                                │
│                                                                             │
│                 ┌──────────────────────────────────────────────┐            │
│                 │          Unified Segmented Control           │            │
│                 ├──────────────┬───┬──────────────┬───┬────────┤   [RÉSUMÉ] │
│                 │  💼 WORK     │ │ │   👤 ABOUT   │ │ │ ✉️ CONT │   [THEME]  │
│                 └──────────────┴───┴──────────────┴───┴────────┘            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```
