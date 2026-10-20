import { motion } from "motion/react";

export function AmericanFamilyInsuranceAnimatedBanner() {
  const transitionCurve = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#173d72]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full block object-cover object-center lg:rounded-t-2xl"
        style={{
          background: "#173d72",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <defs>
          {/* Background Radial Gradients (Blue #173d72) */}
          <radialGradient id="afi_anim_bg" cx="50%" cy="46%" r="65%">
            <stop offset="0%" stopColor="#2d66bd" />
            <stop offset="50%" stopColor="#1e4a87" />
            <stop offset="100%" stopColor="#122e57" />
          </radialGradient>

          {/* American Family Blue Ambient Glow */}
          <radialGradient id="afi_anim_blueGlow" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#122e57" stopOpacity="0" />
          </radialGradient>

          {/* Subtle Red Accent Glow */}
          <radialGradient id="afi_anim_redGlow" cx="22%" cy="28%" r="35%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
          </radialGradient>

          {/* Drop Shadows */}
          <filter id="afi_anim_laptopShadow" x="-20%" y="-15%" width="140%" height="145%">
            <feDropShadow dx="0" dy="36" stdDeviation="40" floodColor="#000000" floodOpacity="0.85" />
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.60" />
          </filter>

          <filter id="afi_anim_groundShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="22" />
          </filter>

          <filter id="afi_anim_contactShadow" x="-10%" y="-20%" width="120%" height="150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>

          {/* Display Screen Clip Path */}
          <clipPath id="afi_anim_screenClip">
            <rect x="252" y="142" width="1096" height="654" rx="4" />
          </clipPath>

          {/* Metallic Gradients */}
          <linearGradient id="afi_anim_lidMetal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#343844" />
            <stop offset="50%" stopColor="#23262f" />
            <stop offset="100%" stopColor="#181a20" />
          </linearGradient>

          <linearGradient id="afi_anim_baseDeck" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2c2f38" />
            <stop offset="40%" stopColor="#22252c" />
            <stop offset="100%" stopColor="#16181d" />
          </linearGradient>

          <linearGradient id="afi_anim_lipHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#474b57" />
            <stop offset="20%" stopColor="#7e8597" />
            <stop offset="50%" stopColor="#a4abbd" />
            <stop offset="80%" stopColor="#7e8597" />
            <stop offset="100%" stopColor="#474b57" />
          </linearGradient>

          <linearGradient id="afi_anim_glassSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.02" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* 1. BACKGROUND & AMBIENT ATMOSPHERE (0ms - 250ms) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <rect width="1600" height="1000" fill="url(#afi_anim_bg)" />
          <rect width="1600" height="1000" fill="url(#afi_anim_blueGlow)" />
          <rect width="1600" height="1000" fill="url(#afi_anim_redGlow)" />

          {/* Coordinate Grid */}
          <g opacity="0.04" stroke="#ffffff" strokeWidth="0.8">
            <line x1="0" y1="150" x2="1600" y2="150" />
            <line x1="0" y1="350" x2="1600" y2="350" />
            <line x1="0" y1="550" x2="1600" y2="550" />
            <line x1="0" y1="750" x2="1600" y2="750" />
            <line x1="0" y1="900" x2="1600" y2="900" />
            <line x1="200" y1="0" x2="200" y2="1000" />
            <line x1="500" y1="0" x2="500" y2="1000" />
            <line x1="800" y1="0" x2="800" y2="1000" />
            <line x1="1100" y1="0" x2="1100" y2="1000" />
            <line x1="1400" y1="0" x2="1400" y2="1000" />
          </g>
        </motion.g>

        {/* 2. AMBIENT & CONTACT DROP SHADOWS (100ms - 450ms) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        >
          <ellipse cx="800" cy="880" rx="640" ry="48" fill="#000000" opacity="0.75" filter="url(#afi_anim_groundShadow)" />
          <ellipse cx="800" cy="860" rx="570" ry="18" fill="#000000" opacity="0.95" filter="url(#afi_anim_contactShadow)" />
        </motion.g>

        {/* 3. LAPTOP DISPLAY CHASSIS & BEZEL (180ms - 650ms) */}
        <g filter="url(#afi_anim_laptopShadow)">
          <motion.g
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.18, ease: transitionCurve }}
          >
            {/* Top Display Lid Chassis */}
            <rect x="230" y="96" width="1140" height="722" rx="18" fill="url(#afi_anim_lidMetal)" stroke="#4a5061" strokeWidth="1.6" />
            <rect x="231" y="97" width="1138" height="720" rx="17" fill="none" stroke="#687187" strokeWidth="0.8" opacity="0.5" />

            {/* Inner Display Glass Bezel */}
            <rect x="242" y="108" width="1116" height="698" rx="12" fill="#0b0c10" stroke="#1c1f26" strokeWidth="1.2" />

            {/* Web Camera Assembly */}
            <g transform="translate(800, 126)">
              <circle cx="0" cy="0" r="4.5" fill="#14171f" stroke="#2a2e3b" strokeWidth="1" />
              <circle cx="0" cy="0" r="2.2" fill="#091b29" />
              <circle cx="-0.8" cy="-0.8" r="0.8" fill="#38bdf8" opacity="0.6" />
              <circle cx="-16" cy="0" r="1.8" fill="#14171f" opacity="0.8" />
              <circle cx="16" cy="0" r="1.5" fill="#22c55e" opacity="0.9" />
            </g>

            {/* 4. ACTIVE SCREEN: AMERICAN FAMILY INSURANCE MOCKUP (280ms - 750ms) */}
            <g>
              <rect x="252" y="142" width="1096" height="654" rx="4" fill="#ffffff" />
              <image
                href="/assets/aistudio/8_AFI_Assessment_FINAL_010510_Auto2_b36dacbf.jpg"
                xlinkHref="/assets/aistudio/8_AFI_Assessment_FINAL_010510_Auto2_b36dacbf.jpg"
                x="252"
                y="142"
                width="1096"
                height="654"
                preserveAspectRatio="xMidYMid meet"
                clipPath="url(#afi_anim_screenClip)"
              />
              <rect x="252" y="142" width="1096" height="654" rx="4" fill="none" stroke="#1e222a" strokeWidth="1" opacity="0.4" />
              <polygon points="252,142 660,142 420,796 252,796" fill="url(#afi_anim_glassSheen)" clipPath="url(#afi_anim_screenClip)" />
              <text x="800" y="808" fontSize="9" fontWeight="700" fill="#475569" textAnchor="middle" letterSpacing="2.5" opacity="0.6">
                AMERICAN FAMILY INSURANCE
              </text>
            </g>
          </motion.g>
        </g>

        {/* 5. LAPTOP HINGE & UNIBODY CHASSIS BASE (120ms - 550ms) */}
        <motion.g
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.44, delay: 0.12, ease: transitionCurve }}
        >
          {/* Center Screen Hinge */}
          <g transform="translate(630, 814)">
            <rect width="340" height="12" rx="3" fill="#121419" stroke="#252933" strokeWidth="1" />
            <line x1="10" y1="6" x2="330" y2="6" stroke="#2c303c" strokeWidth="1" />
          </g>

          {/* Lower Base Unibody Deck */}
          <g>
            <polygon
              points="230,818 1370,818 1410,850 190,850"
              fill="url(#afi_anim_baseDeck)"
              stroke="#3b404d"
              strokeWidth="1.2"
            />
            <line x1="240" y1="819" x2="1360" y2="819" stroke="#0a0c10" strokeWidth="2" />
            <rect x="190" y="850" width="1220" height="12" rx="2" fill="#1c1e24" stroke="#323642" strokeWidth="1" />
            <line x1="192" y1="850.5" x2="1408" y2="850.5" stroke="url(#afi_anim_lipHighlight)" strokeWidth="1.5" />

            {/* Center Thumb Notch */}
            <g transform="translate(740, 850)">
              <rect x="0" y="0" width="120" height="6" rx="2" fill="#0f1014" stroke="#282b36" strokeWidth="0.8" />
              <line x1="10" y1="0.5" x2="110" y2="0.5" stroke="#525765" strokeWidth="0.8" />
            </g>

            <line x1="192" y1="862" x2="1408" y2="862" stroke="#08090d" strokeWidth="1.2" />
          </g>
        </motion.g>
      </svg>
    </div>
  );
}
