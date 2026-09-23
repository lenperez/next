# Pieces — Len Perez UX Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-lenperez.com-blue?style=flat-square)](https://lenperez.com)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **"Pieces"** is the personal portfolio of **Len Perez** — Product & UX Designer. Grounded in research, validated through data, and refined through collaboration, this site showcases end-to-end UX case studies, enterprise systems, interactive digital experiences, and visual design systems.

---

## 🌟 Features

- **Interactive Case Study Explorer**: Collapsible accordion panels organizing work into **Case Studies**, **Interactive Pieces**, and **Visual Design Pieces**.
- **Process Breakdown**: In-depth project walkthroughs detailing methodologies including heuristic analysis, competitive audits, storymapping, persona development, user flows, lo-fi wireframing, and hi-fi design systems.
- **Ambient Puzzle Motif**: Lightweight, mathematically generated SVG puzzle elements floating in the background, subtly nodding to the "Pieces" theme and identity.
- **Dark & Light Mode**: Theme toggle with automatic system preference detection, localStorage persistence, and instant theme application to prevent flash of unstyled content (FOUC).
- **Accessible & Responsive**: Built with semantic HTML5 elements, ARIA labels, smooth keyboard navigation, and custom accessible tooltips with viewport boundary collision detection.
- **Instant Resume Access**: Quick-access resume modal/dropdown supporting specialized UX and general design resumes.
- **Modern Smooth Animations**: Fluid layout transitions and interactions powered by `motion/react`.

---

## 💼 Featured Work

### 1. In-Depth Case Studies
- **Purchasing Platform (eProcurement Redesign — End-to-End)**:
  - Comprehensive redesign of a complete eProcurement platform from search and browse through to checkout.
  - *Methodology*: KPI alignment, heuristic evaluation, competitive/comparative analysis, personas, storymapping, heat mapping, analytics, user flows, whiteboarding, and design system comps.
- **Grainger (Benefit Management Tool — Scalability Upgrade)**:
  - Scaling a proprietary client benefit management tool to support diverse product channels and complex enterprise workflows.
  - *Methodology*: Component extrapolation, modular wireframing, heuristic reviews, and high-fidelity specifications.

### 2. Interactive Pieces
- **American Family Insurance**: UX redesign streamlining registration and checkout flows for mobile policyholders.
- **Associated Bank**: High-fidelity homepage comps balancing corporate branding, new marketing initiatives, and banking services.
- **Loislaw**: Complex mobile registration and legal research checkout flows.
- **Medtronic**: Interactive instructional application replacing traditional DVD manuals with a non-linear timeline navigation system for insulin pump patients.
- **Press Ganey**: Component specifications, widget creators, and secondary color systems for a second-generation medical analytics dashboard and community portal.

### 3. Visual Design Pieces
- **Coffee Table Book**: 16" × 10" hardcover editorial print design inspired by classic furniture design and the "form follows function" principle.
- **Baker & McKenzie**: Global law firm rebrand collateral revolving around a dynamic "flow of motion" theme and clean energy bar motifs.

---

## 🛠️ Tech Stack

- **Core**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Animation**: [Motion](https://motion.dev/) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Primitives**: Radix UI accessible foundation components

---

## 📁 Project Structure

```text
├── public/
│   ├── LenPerez_UXresume.pdf    # Specialized UX Resume
│   ├── LenPerez_resume.pdf      # General Design Resume
│   ├── favicon-dark.svg         # Dark-mode favicon
│   └── favicon-light.svg        # Light-mode favicon
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── About.tsx            # Philosophy, skills, and background
│   │   │   ├── Contact.tsx          # Get in touch callout and direct email link
│   │   │   ├── Hero.tsx             # Hero introduction, CTA, and resume actions
│   │   │   ├── ImageWithFallback.tsx# Resilient image loader with fallback handling
│   │   │   ├── Nav.tsx              # Sticky navigation with theme toggle & resume menu
│   │   │   ├── ProjectCard.tsx      # Case study cards with step-by-step methodologies
│   │   │   ├── PuzzleBackground.tsx # Dynamic background SVG puzzle piece graphics
│   │   │   └── Tooltip.tsx          # Accessible portaled tooltip component
│   │   ├── context/
│   │   │   └── ThemeContext.tsx     # Theme provider managing dark/light modes
│   │   └── App.tsx                  # Main portfolio layout and project data
│   ├── styles/
│   │   └── index.css                # Global stylesheet and Tailwind imports
│   └── main.tsx                     # React application entry point
├── CNAME                            # Custom domain routing (lenperez.com)
├── index.html                       # HTML5 template with theme pre-hydration
├── metadata.json                    # Application metadata
├── package.json                     # Scripts and dependencies
└── tsconfig.json                    # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `bun`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lenperez/site.git
   cd site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Production Build

Compile the production-ready static assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting & Type Checking

Validate TypeScript types across the codebase:

```bash
npm run lint
```

---

## 📬 Contact

**Len Perez**  
- Email: [me@lenperez.com](mailto:me@lenperez.com)  
- Website: [lenperez.com](https://lenperez.com)  
- Portfolio: Pieces — A Collection of UX & Product Design Work
