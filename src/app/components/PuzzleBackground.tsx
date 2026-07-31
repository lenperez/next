import { useTheme } from "../context/ThemeContext";

export interface PuzzlePieceData {
  x: string;
  y: string;
  size: number;
  rotate: number;
  opacity: number;
  mobileHidden?: boolean;
}

const ALL_PUZZLE_PIECES: PuzzlePieceData[] = [
  // Top / Hero region (0% - 20% of page)
  { x: "4%",   y: "1.5%", size: 64, rotate: 15,  opacity: 0.08, mobileHidden: false },
  { x: "82%",  y: "2.5%", size: 76, rotate: 50,  opacity: 0.08, mobileHidden: false },
  { x: "18%",  y: "6%",   size: 44, rotate: -30, opacity: 0.06, mobileHidden: true  },
  { x: "88%",  y: "10%",  size: 52, rotate: -10, opacity: 0.06, mobileHidden: true  },
  { x: "8%",   y: "14%",  size: 58, rotate: 80,  opacity: 0.07, mobileHidden: false },
  { x: "72%",  y: "18%",  size: 70, rotate: 110, opacity: 0.08, mobileHidden: false },

  // Work section region (20% - 60% of page)
  { x: "5%",   y: "24%",  size: 52, rotate: -55, opacity: 0.07, mobileHidden: false },
  { x: "88%",  y: "29%",  size: 60, rotate: 30,  opacity: 0.06, mobileHidden: false },
  { x: "12%",  y: "35%",  size: 68, rotate: 40,  opacity: 0.07, mobileHidden: false },
  { x: "78%",  y: "41%",  size: 74, rotate: 95,  opacity: 0.08, mobileHidden: false },
  { x: "3%",   y: "47%",  size: 48, rotate: -60, opacity: 0.06, mobileHidden: true  },
  { x: "85%",  y: "53%",  size: 56, rotate: 200, opacity: 0.07, mobileHidden: false },
  { x: "10%",  y: "58%",  size: 64, rotate: 85,  opacity: 0.07, mobileHidden: false },

  // About section region (60% - 85% of page)
  { x: "80%",  y: "64%",  size: 52, rotate: -40, opacity: 0.06, mobileHidden: true  },
  { x: "5%",   y: "70%",  size: 72, rotate: 130, opacity: 0.07, mobileHidden: false },
  { x: "86%",  y: "76%",  size: 46, rotate: -80, opacity: 0.06, mobileHidden: true  },
  { x: "8%",   y: "82%",  size: 58, rotate: 25,  opacity: 0.07, mobileHidden: false },

  // Contact section region (85% - 98% of page)
  { x: "85%",  y: "88%",  size: 66, rotate: 155, opacity: 0.07, mobileHidden: false },
  { x: "4%",   y: "93%",  size: 54, rotate: -45, opacity: 0.07, mobileHidden: false },
  { x: "75%",  y: "97%",  size: 60, rotate: 70,  opacity: 0.06, mobileHidden: false },
];

function PuzzlePiece({ size, stroke }: { size: number; stroke: string }) {
  const d = `
    M 10,0 L 35,0 C 38,0 41,1 43,4 C 34,10 37,27 50,27 C 63,27 66,10 57,4 C 59,1 62,0 65,0 L 90,0 C 96,0 100,4 100,10 L 100,35 C 100,38 101,41 104,43 C 110,34 127,37 127,50 C 127,63 110,66 104,57 C 101,59 100,62 100,65 L 100,90 C 100,96 96,100 90,100 L 65,100 C 62,100 59,99 57,96 C 66,90 63,73 50,73 C 37,73 34,90 43,96 C 41,99 38,100 35,100 L 10,100 C 4,100 0,96 0,90 L 0,65 C 0,62 -1,59 -4,57 C -10,66 -27,63 -27,50 C -27,37 -10,34 -4,43 C -1,41 0,38 0,35 L 0,10 C 0,4 4,0 10,0 Z
  `;
  return (
    <svg
      width={size}
      height={size}
      viewBox="-35 -10 170 120"
      fill="none"
      className="block"
    >
      <path d={d} stroke={stroke} strokeWidth={2} fill="none" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function PuzzleBackground() {
  const { isDark } = useTheme();

  return (
    <>
      {/* Subtle top ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none transition-opacity duration-500 ${
            isDark ? "bg-blue-900/15" : "bg-blue-500/10"
          }`}
          style={{ filter: "blur(80px)" }}
        />
      </div>

      {/* Document-level puzzle pieces spanning top to bottom */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {ALL_PUZZLE_PIECES.map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.mobileHidden ? "hidden md:block" : ""}`}
            style={{
              left: p.x,
              top: p.y,
              opacity: isDark ? p.opacity : p.opacity * 1.4,
              transform: `rotate(${p.rotate}deg)`,
            }}
          >
            <PuzzlePiece size={p.size} stroke={isDark ? "#ffffff" : "#000000"} />
          </div>
        ))}
      </div>
    </>
  );
}


