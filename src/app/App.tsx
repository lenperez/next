import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ProjectCard } from "./components/ProjectCard";
import type { Project } from "./components/ProjectCard";
import { PuzzleBackground } from "./components/PuzzleBackground";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const mainProjects: Project[] = [

  {
    id: "purchasing-platform",
    title: "Purchasing Platform",
    subtitle: "eProcurement Redesign — End-to-End",
    tag: "UX / Product Design",
    year: "Case Study",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    synopsis:
      "Tasked with redesigning a complete eProcurement platform from search & browse through to checkout. The process starts with an understanding of timing and resources needed to completion with KPIs and strategic goals in place. Understanding the current site's pain-points and technical (development) challenges is key in setting the correct approach to interaction design and overall page structure.",
    steps: [
      {
        label: "Timeline Development",
        description:
          "Established project timeline with KPIs and strategic goals. Mapped resource requirements and development constraints to set a realistic scope.",
      },
      {
        label: "Heuristic Analysis",
        description:
          "Identified current site pain-points and technical challenges. Evaluated usability against established heuristics to surface interaction gaps.",
      },
      {
        label: "Competitive / Comparative Analysis",
        description:
          "Gathered insights from market competitors and like-minded establishments to glean best practices and proof-in-practice methodologies.",
      },
      {
        label: "Persona Development",
        description:
          "Built evolving personas to understand different user groups' needs. These informed reasoning behind interaction and layout decisions.",
      },
      {
        label: "Storymapping",
        description:
          "Created storymaps showing streamlined user-flows through the site, indicating which back-end components would be needed at each step.",
      },
      {
        label: "Heat Mapping",
        description:
          "Used heat maps to see how users navigated the current structure — what was most used and what portions were essential for task completion.",
      },
      {
        label: "Analytics",
        description:
          "Dove into numbers to inform decisions: screen sizes in use, bounce rates, drop-off points, and purchasing habits for marketing optimization.",
      },
      {
        label: "User Flow",
        description:
          "Generated user flows highlighting challenges and identifying where processes could be streamlined for the quickest route to conversion.",
      },
      {
        label: "Whiteboarding",
        description:
          "Heavy use of whiteboard sketching to rapidly iterate through ideas, facilitating group discussion around design decisions.",
      },
      {
        label: "Lo-Fi Wireframing",
        description:
          "Created lo-fidelity wireframes and prototypes to understand page structure and user interactions, hammering out limitations early.",
      },
      {
        label: "Hi-Fi Comps",
        description:
          "Produced high-fidelity comps using the established style-guide, giving the team a real feel for look and behavior across platforms.",
      },
    ],
  },
  {
    id: "grainger",
    title: "Grainger",
    subtitle: "Benefit Management Tool — Scalability Upgrade",
    tag: "Enterprise UX",
    year: "Case Study",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    synopsis:
      "Grainger had recently acquired a proprietary benefit management tool that handled a specific channel for their clients. They needed to upgrade its scalability to handle a variety of additional channels to cover all of the company's offerings.",
    steps: [
      {
        label: "Heuristic Review",
        description:
          "Got a thorough understanding of the system's components and the purpose each item served in completing the process.",
      },
      {
        label: "Extrapolation & Simplification",
        description:
          "Whiteboarding sessions iterated through restructuring components so they could be interchangeable while simplifying the interactions.",
      },
      {
        label: "Basic Wireframes",
        description:
          "Created initial wireframes for testing simple interactions with the team and stakeholders to ensure all scenarios were being addressed.",
      },
      {
        label: "Advanced Wireframes",
        description:
          "Once the basic structure was agreed upon, detailed wireframes were created with annotations and variants for all edge cases.",
      },
      {
        label: "Hi-Fi Comps",
        description:
          "In conjunction with advanced wireframes, hi-fi comps provided a 'real-world' view of visual hierarchy, ensuring information clarity.",
      },
    ],
  },
];

const graphicProjects: Project[] = [
  {
    id: "coffee-table-book",
    title: "Coffee Table Book",
    subtitle: "Personal Project — Editorial & Print Design",
    tag: "Print Design",
    year: "Case Study",
    image:
      "https://images.unsplash.com/photo-1651013542393-ced26a8bf656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    synopsis:
      "A personal project — designed a 16\" × 10\" hardcover coffee-table book inspired by a favorite furniture design company. Built around the principle of \"form follows function,\" the layout makes efficient use of every spread while maintaining a sharp, considered aesthetic.",
    steps: [
      {
        label: "Concept & Direction",
        description:
          "Grounded the entire book in the \"form follows function\" principle — every layout decision driven by purpose, with no decorative element without intention.",
      },
      {
        label: "Editorial Layout Design",
        description:
          "Designed a 16\" × 10\" hardcover format, optimizing each spread for spatial efficiency while preserving a clean, gallery-quality aesthetic throughout.",
      },
    ],
  },
  {
    id: "baker-mckenzie",
    title: "Baker & McKenzie",
    subtitle: "Law Firm Rebrand — Print & Collateral",
    tag: "Brand Design",
    year: "Case Study",
    image:
      "https://images.unsplash.com/photo-1636247499180-13285c86be9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    synopsis:
      "While at Zün Partners, tasked with creating the look and feel of a rebrand for the law firm Baker & McKenzie. Centered on the theme of \"flow of motion,\" the system used a restrained color palette and \"energy bars\" to convey the ever-evolving nature of the legal world they operated in.",
    steps: [
      {
        label: "Brand Concept",
        description:
          "Developed the \"flow of motion\" creative direction — translating a dynamic, global law firm's identity into a visual language built around movement and energy.",
      },
      {
        label: "Folders, Brochures & Posters",
        description:
          "Designed a suite of print collateral including folders, brochures, and posters, all unified by the energy bar motif and a consistent color palette.",
      },
    ],
  },
];

const otherProjects: Project[] = [
  {
    id: "american-family-insurance",
    title: "American Family Insurance",
    subtitle: "Mobile App — UX Redesign",
    tag: "Mobile UX",
    year: "Case Study",
    image:
      "https://images.unsplash.com/photo-1541560052-3744e48ab80b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    synopsis:
      "Create a user-friendly interface to handle some of the more complex portions of the Check-out process and Registration on the mobile app.",
    steps: [
      {
        label: "Timeline Development",
        description:
          "Established a project timeline with key milestones and resource allocation to guide the redesign from discovery through to final delivery.",
      },
      {
        label: "Heuristic Analysis",
        description:
          "Audited the existing mobile experience against usability heuristics to identify friction points in the checkout and registration flows.",
      },
      {
        label: "Competitive / Comparative Analysis",
        description:
          "Benchmarked against competing insurance apps and analogous mobile experiences to surface best practices for complex form-based interactions.",
      },
    ],
  },
  {
    id: "associated-bank",
    title: "Associated Bank",
    subtitle: "Homepage Redesign — Web",
    tag: "UI Design",
    year: "Case Study",
    image:
      "https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    synopsis:
      "Tasked with creating a homepage comp for a redesign of the Associated Bank website. Given a pre-set amount of information, the goal was to highlight new marketing initiatives while showcasing the bank's existing offerings — guided by their established color system.",
    steps: [
      {
        label: "Wireframe",
        description:
          "Created a quick set of wireframes to establish information hierarchy and page layout before committing to visual design.",
      },
      {
        label: "Homepage Comps",
        description:
          "Using Associated Bank's color guides as a foundation, designed high-fidelity homepage comps that balanced new marketing initiatives with existing product offerings.",
      },
    ],
  },
  {
    id: "loislaw",
    title: "Loislaw",
    subtitle: "Mobile App — Checkout & Registration UX",
    tag: "Mobile UX",
    year: "Case Study",
    image:
      "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    synopsis:
      "Create a user-friendly interface to handle some of the more complex portions of the Check-out process and Registration on the mobile app.",
    steps: [
      {
        label: "Timeline Development",
        description:
          "Established a project timeline aligned with business goals, mapping out resource requirements and key milestones for the mobile experience.",
      },
      {
        label: "Heuristic Analysis",
        description:
          "Evaluated the existing checkout and registration flows against usability heuristics to surface friction points and opportunities for simplification.",
      },
      {
        label: "Competitive / Comparative Analysis",
        description:
          "Researched competitor mobile checkout and registration experiences to identify best practices and benchmark interaction patterns.",
      },
    ],
  },
  {
    id: "medtronic",
    title: "Medtronic",
    subtitle: "Insulin Pump Instructional — Flash-Based Interactive App",
    tag: "UI / Interaction Design",
    year: "Case Study",
    image:
      "https://images.unsplash.com/photo-1624454002429-40ed87a5ec04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    synopsis:
      "Tasked with redesigning the Medtronic Insulin Pump instructional DVD given to all patients receiving the updated Paradigm Insulin Pump — transforming it into a Flash-based interactive application.",
    steps: [
      {
        label: "Wireframe & User Flow",
        description:
          "Working with IAs, created a basic site structure that closely followed the existing app while allowing for a new interactive timeline at the bottom for advanced navigation.",
      },
      {
        label: "Ideation",
        description:
          "Went through multiple rounds of ideation, ultimately settling on a minimal gray theme that kept the Pump itself as the visual highlight of each page.",
      },
      {
        label: "Flash-Based Interactive App",
        description:
          "Designed and built a fully interactive Flash application allowing patients to navigate instructions freely, with an advanced timeline for non-linear exploration.",
      },
    ],
  },
  {
    id: "press-ganey",
    title: "Press Ganey",
    subtitle: "Dashboard & Medical Community Suite",
    tag: "Design Systems",
    year: "Case Study",
    image:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    synopsis:
      "Press Ganey needed a Style Guide and Specification Document for their second-generation user dashboard and medical community web software suite. Using the corporate style guide as a starting point, a secondary color palette and grid system were created for the suite of applications.",
    steps: [
      {
        label: "Style Guide",
        description:
          "Using the corporate style guide as a starting point, created a secondary color palette for the suite. Worked with UXAs to establish a grid system for all components.",
      },
      {
        label: "Spec. Documentation",
        description:
          "Designed the look and feel of the widget creator, dashboard, widgets, and web pages. Working with UXAs and Development to produce thorough specification docs.",
      },
      {
        label: "Dashboard Widgets",
        description:
          "Designed widgets to be distinctive, crisp, and clear — displaying an abundant amount of information concisely and in quick bites.",
      },
      {
        label: "Community Web Pages",
        description:
          "The Communities portion followed a more traditional layout but remained flexible enough to handle a variety of components and scalable scenarios.",
      },
    ],
  },
];

function PortfolioContent() {
  const [openSection, setOpenSection] = useState<string>("case-studies");
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const additionalRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  const toggle = (id: string, ref: React.RefObject<HTMLDivElement>) => {
    setOpenSection(prev => prev === id ? "" : id);
    setTimeout(() => {
      if (ref.current) {
        ref.current.style.scrollMarginTop = "64px";
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 420);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? "bg-[#0a0a0a] text-white" : "bg-[#F5F5F5] text-black"
    }`}>
      <PuzzleBackground />
      <Nav />
      <Hero />

      <section id="work" className="py-28 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-4">

          {/* Case Studies panel */}
          <motion.div
            ref={caseStudiesRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl overflow-hidden backdrop-blur-[30px] border transition-colors ${
              isDark
                ? "border-white/[0.06] bg-black/50"
                : "border-black/[0.08] bg-white/80 shadow-sm"
            }`}
          >
            <button
              onClick={() => toggle("case-studies", caseStudiesRef)}
              className={`w-full flex items-center justify-between px-8 py-6 transition-colors ${
                isDark ? "hover:bg-white/[0.02]" : "hover:bg-black/[0.02]"
              }`}
            >
              <h2
                className={`${isDark ? "text-white" : "text-black"} transition-colors`}
                style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                Case Studies
              </h2>
              <motion.div animate={{ rotate: openSection === "case-studies" ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={20} className={isDark ? "text-white/40" : "text-black/40"} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openSection === "case-studies" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-6 px-8 pb-8">
                    {mainProjects.map((project, i) => (
                      <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Additional Interactive Designs panel */}
          <motion.div
            ref={additionalRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`rounded-2xl overflow-hidden backdrop-blur-[30px] border transition-colors ${
              isDark
                ? "border-white/[0.06] bg-black/50"
                : "border-black/[0.08] bg-white/80 shadow-sm"
            }`}
          >
            <button
              onClick={() => toggle("additional", additionalRef)}
              className={`w-full flex items-center justify-between px-8 py-6 transition-colors ${
                isDark ? "hover:bg-white/[0.02]" : "hover:bg-black/[0.02]"
              }`}
            >
              <h2
                className={`${isDark ? "text-white" : "text-black"} transition-colors`}
                style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                Interactive Pieces
              </h2>
              <motion.div animate={{ rotate: openSection === "additional" ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={20} className={isDark ? "text-white/40" : "text-black/40"} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openSection === "additional" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-6 px-8 pb-8">
                    {otherProjects.map((project, i) => (
                      <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Graphic Designs panel */}
          <motion.div
            ref={graphicRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`rounded-2xl overflow-hidden backdrop-blur-[30px] border transition-colors ${
              isDark
                ? "border-white/[0.06] bg-black/50"
                : "border-black/[0.08] bg-white/80 shadow-sm"
            }`}
          >
            <button
              onClick={() => toggle("graphic", graphicRef)}
              className={`w-full flex items-center justify-between px-8 py-6 transition-colors ${
                isDark ? "hover:bg-white/[0.02]" : "hover:bg-black/[0.02]"
              }`}
            >
              <h2
                className={`${isDark ? "text-white" : "text-black"} transition-colors`}
                style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                Visual Design Pieces
              </h2>
              <motion.div animate={{ rotate: openSection === "graphic" ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={20} className={isDark ? "text-white/40" : "text-black/40"} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openSection === "graphic" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-6 px-8 pb-8">
                    {graphicProjects.map((project, i) => (
                      <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <About />
      <Contact />

      {/* Footer */}
      <footer className={`border-t py-8 px-6 relative ${isDark ? "border-white/[0.05]" : "border-black/[0.08]"}`} style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`${isDark ? "text-white/20" : "text-black/40"} text-sm tracking-wider`}>
            Len Perez — UX Designer
          </p>
          <p className={`${isDark ? "text-white/20" : "text-black/40"} text-xs`}>
            Pieces — A Collection of Work
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

