import { motion, useScroll, useTransform } from "motion/react";
import { useTheme } from "../context/ThemeContext";

// Pieces are distributed across ~300vh of vertical space so some are always
// in the viewport as the user scrolls. mobileHidden halves the count on small screens.
const PUZZLE_PIECES = [
  // — Hero band (0–100vh) —
  { x: "5%",   y: "8vh",   size: 72, rotate: 15,  opacity: 0.07, mobileHidden: false },
  { x: "18%",  y: "22vh",  size: 48, rotate: -30, opacity: 0.05, mobileHidden: true  },
  { x: "80%",  y: "8vh",   size: 88, rotate: 50,  opacity: 0.07, mobileHidden: false },
  { x: "88%",  y: "38vh",  size: 52, rotate: -10, opacity: 0.05, mobileHidden: true  },
  { x: "68%",  y: "72vh",  size: 96, rotate: 110, opacity: 0.07, mobileHidden: false },
  { x: "10%",  y: "65vh",  size: 64, rotate: 80,  opacity: 0.06, mobileHidden: true  },
  { x: "52%",  y: "85vh",  size: 56, rotate: -55, opacity: 0.05, mobileHidden: false },
  { x: "38%",  y: "4vh",   size: 44, rotate: 120, opacity: 0.05, mobileHidden: true  },
  { x: "91%",  y: "78vh",  size: 60, rotate: 30,  opacity: 0.05, mobileHidden: false },
  { x: "2%",   y: "42vh",  size: 80, rotate: -70, opacity: 0.06, mobileHidden: true  },
  { x: "58%",  y: "20vh",  size: 40, rotate: 170, opacity: 0.05, mobileHidden: false },
  { x: "28%",  y: "78vh",  size: 50, rotate: -20, opacity: 0.06, mobileHidden: true  },
  // — Work band (100–200vh) —
  { x: "7%",   y: "115vh", size: 60, rotate: 40,  opacity: 0.06, mobileHidden: false },
  { x: "45%",  y: "105vh", size: 48, rotate: -15, opacity: 0.05, mobileHidden: true  },
  { x: "75%",  y: "130vh", size: 76, rotate: 95,  opacity: 0.07, mobileHidden: false },
  { x: "20%",  y: "160vh", size: 52, rotate: -60, opacity: 0.05, mobileHidden: true  },
  { x: "85%",  y: "175vh", size: 44, rotate: 200, opacity: 0.05, mobileHidden: false },
  { x: "55%",  y: "148vh", size: 68, rotate: -35, opacity: 0.06, mobileHidden: true  },
  // — About / Contact band (200–300vh) —
  { x: "12%",  y: "215vh", size: 80, rotate: 130, opacity: 0.06, mobileHidden: false },
  { x: "70%",  y: "205vh", size: 50, rotate: -80, opacity: 0.05, mobileHidden: true  },
  { x: "40%",  y: "240vh", size: 64, rotate: 25,  opacity: 0.07, mobileHidden: false },
  { x: "88%",  y: "260vh", size: 44, rotate: 155, opacity: 0.05, mobileHidden: true  },
  { x: "5%",   y: "280vh", size: 56, rotate: -45, opacity: 0.06, mobileHidden: false },
  { x: "60%",  y: "270vh", size: 72, rotate: 70,  opacity: 0.06, mobileHidden: true  },
];

function PuzzlePiece({ size, stroke }: { size: number; stroke: string }) {
  const d = `
    M 0,0 L 33,0
    C 36,0 38,-1 38,-9 C 38,-18 43,-27 50,-27
    C 57,-27 62,-18 62,-9 C 62,-1 64,0 67,0
    L 100,0 L 100,33
    C 100,36 101,38 109,38 C 118,38 127,43 127,50
    C 127,57 118,62 109,62 C 101,62 100,64 100,67
    L 100,100 L 67,100
    C 64,100 62,101 62,109 C 62,118 57,127 50,127
    C 43,127 38,118 38,109 C 38,101 36,100 33,100
    L 0,100 L 0,67
    C 0,64 -1,62 -9,62 C -18,62 -27,57 -27,50
    C -27,43 -18,38 -9,38 C -1,38 0,36 0,33 Z
  `;
  return (
    <svg width={size * 1.6} height={size * 1.6} viewBox="-30 -30 160 160" fill="none">
      <path d={d} stroke={stroke} strokeWidth={140 / size} fill="none" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function PuzzleBackground() {
  const { scrollY } = useScroll();
  const { isDark } = useTheme();

  // Pieces drift upward at 0.5× scroll speed — parallax depth effect
  const puzzleY = useTransform(scrollY, v => -v * 0.5);

  return (
    <>
      {/* Orbs — truly static */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-800/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-900/15 blur-[100px]" />
      </div>

      {/* Puzzle pieces — 0.5× parallax */}
      <motion.div
        className="fixed inset-0 pointer-events-none overflow-visible"
        style={{ zIndex: 0, y: puzzleY }}
      >
        {PUZZLE_PIECES.map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.mobileHidden ? "hidden md:block" : ""}`}
            style={{
              left: p.x,
              top: p.y,
              opacity: isDark ? p.opacity : p.opacity * 1.5,
              transform: `rotate(${p.rotate}deg)`,
            }}
          >
            <PuzzlePiece size={p.size} stroke={isDark ? "white" : "#000000"} />
          </div>
        ))}
      </motion.div>
    </>
  );
}

