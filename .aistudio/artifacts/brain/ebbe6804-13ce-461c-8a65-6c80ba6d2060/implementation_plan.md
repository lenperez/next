# Modal Thumbnail Build-In Animation: Grainger

An architectural and technical plan for implementing a **Staggered Wireframe-to-Hi-Fi Dual Screen Assembly** build-in animation for the top banner thumbnail when opening the Grainger modal.

---

## Critical Fix & Resolution: Right Screen Column Layout

### Issue Diagnosed
- In `GraingerAnimatedBanner.tsx`, the right screen's Left Sidebar (`transform="translate(20, 18)"`) and Main Content section (`transform="translate(225, 18)"`) had their SVG `transform` attributes placed directly on `<motion.g>` elements.
- When Framer Motion animated relative properties (`x` and `y`), its inline CSS `style="transform: ..."` overrode the XML SVG `transform` attribute, collapsing both the sidebar and the main content to `x = 0`.
- This caused all elements from both columns (the location/contact sidebar, the catalog groupings, the SKU input forms, and the current selection cards) to superimpose directly over each other in the left column.

### Solution Applied
- **Isolated Static Transform Containers**:
  - Wrapped the Left Sidebar in an outer static `<g transform="translate(20, 18)">` containing an inner `<motion.g>` for entrance transitions.
  - Wrapped the Main Content section in an outer static `<g transform="translate(225, 18)">` containing an inner `<motion.g>` for entrance transitions.
- **Result**:
  - The Left Sidebar remains anchored at its dedicated column from x=20 to x=205.
  - The vertical dividing rule separates the columns at x=205.
  - The Main Content and Catalog Groupings accordion start cleanly at x=225, extending across the right half of the 860px window with balanced proportions.
  - The two-column layout inside the accordion (grouping inputs on the left, SKU chips card on the right) is clearly readable and unjumbled.

---

## Verification
- TypeScript validated with 0 errors (`lint_applet`).
- Full bundle build verified via `compile_applet`.
- Server verified active on port 3000.
