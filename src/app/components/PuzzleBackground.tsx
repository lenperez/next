import { useTheme } from "../context/ThemeContext";

const PUZZLE_PIECES = [
  // — Hero section (0–100vh) —
  { x: "5%",   y: "8vh",   size: 64, rotate: 15,  opacity: 0.07, mobileHidden: false },
  { x: "18%",  y: "22vh",  size: 44, rotate: -30, opacity: 0.05, mobileHidden: true  },
  { x: "80%",  y: "12vh",  size: 80, rotate: 50,  opacity: 0.07, mobileHidden: false },
  { x: "88%",  y: "38vh",  size: 48, rotate: -10, opacity: 0.05, mobileHidden: true  },
  { x: "68%",  y: "65vh",  size: 88, rotate: 110, opacity: 0.07, mobileHidden: false },
  { x: "10%",  y: "55vh",  size: 58, rotate: 80,  opacity: 0.06, mobileHidden: true  },
  { x: "52%",  y: "85vh",  size: 52, rotate: -55, opacity: 0.05, mobileHidden: false },
  { x: "38%",  y: "5vh",   size: 40, rotate: 120, opacity: 0.05, mobileHidden: true  },
  { x: "91%",  y: "78vh",  size: 54, rotate: 30,  opacity: 0.05, mobileHidden: false },
  { x: "2%",   y: "42vh",  size: 72, rotate: -70, opacity: 0.06, mobileHidden: true  },
  { x: "58%",  y: "28vh",  size: 36, rotate: 170, opacity: 0.05, mobileHidden: false },
  { x: "28%",  y: "70vh",  size: 46, rotate: -20, opacity: 0.06, mobileHidden: true  },

  // — Work section (100vh–280vh) —
  { x: "7%",   y: "115vh", size: 54, rotate: 40,  opacity: 0.06, mobileHidden: false },
  { x: "45%",  y: "105vh", size: 44, rotate: -15, opacity: 0.05, mobileHidden: true  },
  { x: "75%",  y: "140vh", size: 70, rotate: 95,  opacity: 0.07, mobileHidden: false },
  { x: "20%",  y: "175vh", size: 48, rotate: -60, opacity: 0.05, mobileHidden: true  },
  { x: "85%",  y: "210vh", size: 40, rotate: 200, opacity: 0.05, mobileHidden: false },
  { x: "55%",  y: "190vh", size: 60, rotate: -35, opacity: 0.06, mobileHidden: true  },
  { x: "12%",  y: "240vh", size: 64, rotate: 85,  opacity: 0.06, mobileHidden: false },
  { x: "78%",  y: "265vh", size: 52, rotate: -40, opacity: 0.05, mobileHidden: true  },

  // — About & Contact section (280vh–450vh) —
  { x: "10%",  y: "300vh", size: 72, rotate: 130, opacity: 0.06, mobileHidden: false },
  { x: "70%",  y: "320vh", size: 46, rotate: -80, opacity: 0.05, mobileHidden: true  },
  { x: "40%",  y: "360vh", size: 58, rotate: 25,  opacity: 0.07, mobileHidden: false },
  { x: "88%",  y: "390vh", size: 40, rotate: 155, opacity: 0.05, mobileHidden: true  },
  { x: "5%",   y: "420vh", size: 50, rotate: -45, opacity: 0.06, mobileHidden: false },
  { x: "60%",  y: "440vh", size: 64, rotate: 70,  opacity: 0.06, mobileHidden: true  },
];

function PuzzlePiece({ size, stroke }: { size: number; stroke: string }) {
  const d = `
    M 10,0 L 35,0 C 38,0 41,1 43,4 C 34,10 37,27 50,27 C 63,27 66,10 57,4 C 59,1 62,0 65,0 L 90,0 C 96,0 100,4 100,10 L 100,35 C 100,38 101,41 104,43 C 110,34 127,37 127,50 C 127,63 110,66 104,57 C 101,59 100,62 100,65 L 100,90 C 100,96 96,100 90,100 L 65,100 C 62,100 59,99 57,96 C 66,90 63,73 50,73 C 37,73 34,90 43,96 C 41,99 38,100 35,100 L 10,100 C 4,100 0,96 0,90 L 0,65 C 0,62 -1,59 -4,57 C -10,66 -27,63 -27,50 C -27,37 -10,34 -4,43 C -1,41 0,38 0,35 L 0,10 C 0,4 4,0 10,0 Z
  `;
  return (
    <svg
      width={size * 1.3}
      height={size * 1.3}
      viewBox="-35 -10 170 120"
      fill="none"
      className="block max-w-full"
    >
      <path d={d} stroke={stroke} strokeWidth={1.8} fill="none" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function PuzzleBackground() {
  const { isDark } = useTheme();

  return (
    <>
      {/* Fixed GPU-accelerated ambient orbs */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0, transform: "translateZ(0)" }}
      >
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-800/15 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-900/15 blur-[70px]" />
      </div>

      {/* Absolute container matching full document bounds for puzzle pieces */}
      <div
        className="absolute inset-0 w-full pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {PUZZLE_PIECES.map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.mobileHidden ? "hidden md:block" : ""}`}
            style={{
              left: p.x,
              top: p.y,
              opacity: (isDark ? p.opacity : p.opacity * 1.5) * 0.5,
              transform: `rotate(${p.rotate}deg)`,
            }}
          >
            <PuzzlePiece size={p.size} stroke={isDark ? "white" : "#000000"} />
          </div>
        ))}
      </div>
    </>
  );
}
