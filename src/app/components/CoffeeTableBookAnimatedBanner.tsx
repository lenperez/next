import { motion } from "motion/react";

export function CoffeeTableBookAnimatedBanner() {
  const transitionCurve = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#1a1c23]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full block object-cover object-bottom lg:rounded-t-2xl"
        style={{
          background: "#1a1c23",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <defs>
          {/* ========================================== */}
          {/* FILTERS FOR SHADOWS, BLUR, AND STEAM       */}
          {/* ========================================== */}
          {/* Deep Table Drop Shadow onto Rug */}
          <filter id="ctb_tableShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="35" stdDeviation="35" floodColor="#0b0e14" floodOpacity="0.45" />
            <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#0b0e14" floodOpacity="0.30" />
          </filter>

          {/* Hardcover Book Multi-stage Drop Shadow onto Walnut Table */}
          <filter id="ctb_bookShadowOnTable" x="-15%" y="-15%" width="135%" height="145%">
            <feDropShadow dx="12" dy="22" stdDeviation="24" floodColor="#140a05" floodOpacity="0.75" />
            <feDropShadow dx="4" dy="8" stdDeviation="8" floodColor="#140a05" floodOpacity="0.55" />
            <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.80" />
          </filter>

          {/* Ceramic Saucer Drop Shadow */}
          <filter id="ctb_saucerShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="10" dy="16" stdDeviation="16" floodColor="#180e08" floodOpacity="0.65" />
            <feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.5" />
          </filter>

          {/* Subtle Depth of Field (DoF) for Living Room Background */}
          <filter id="ctb_bgDof" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>

          {/* Warm Rising Steam Blur */}
          <filter id="ctb_steamGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" />
          </filter>

          {/* ========================================== */}
          {/* LIGHTING & MATERIAL GRADIENTS              */}
          {/* ========================================== */}
          {/* Living Room Ambient Wall Light */}
          <linearGradient id="ctb_wallLighting" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dfd9cf" />
            <stop offset="40%" stopColor="#cecbbf" />
            <stop offset="100%" stopColor="#b6b1a3" />
          </linearGradient>

          {/* Window Light Streaming Across Room */}
          <linearGradient id="ctb_sunbeamGrad" x1="0%" y1="0%" x2="100%" y2="85%">
            <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#fef3c7" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#fef3c7" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.0" />
          </linearGradient>

          {/* European White Oak Hardwood Floor */}
          <linearGradient id="ctb_woodFloorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbb191" />
            <stop offset="50%" stopColor="#b89b7b" />
            <stop offset="100%" stopColor="#9f8160" />
          </linearGradient>

          {/* Textured Scandinavian Wool Rug */}
          <radialGradient id="ctb_rugGrad" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#f4f1ea" />
            <stop offset="60%" stopColor="#e8e3d8" />
            <stop offset="100%" stopColor="#dad4c5" />
          </radialGradient>

          {/* Solid American Walnut Table Surface */}
          <linearGradient id="ctb_walnutTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4e311f" />
            <stop offset="25%" stopColor="#422919" />
            <stop offset="60%" stopColor="#341e12" />
            <stop offset="100%" stopColor="#24140b" />
          </linearGradient>

          {/* Walnut Table Chamfered Edge Highlight */}
          <linearGradient id="ctb_walnutEdgeHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#805335" />
            <stop offset="40%" stopColor="#5a3821" />
            <stop offset="100%" stopColor="#22130b" />
          </linearGradient>

          {/* Walnut Table Thickness Rim */}
          <linearGradient id="ctb_tableThicknessGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2a170d" />
            <stop offset="50%" stopColor="#392214" />
            <stop offset="100%" stopColor="#1d0f08" />
          </linearGradient>

          {/* Hardcover Book Matte Sheen */}
          <linearGradient id="ctb_bookCoverSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#26282f" />
            <stop offset="30%" stopColor="#1b1d22" />
            <stop offset="70%" stopColor="#141519" />
            <stop offset="100%" stopColor="#0e0f12" />
          </linearGradient>

          {/* Book Spine Hinge Groove */}
          <linearGradient id="ctb_bookSpineGroove" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#000000" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.0" />
          </linearGradient>

          {/* Book Page Edges */}
          <linearGradient id="ctb_pageEdgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d6d1ca" />
            <stop offset="50%" stopColor="#f5f2eb" />
            <stop offset="100%" stopColor="#e2ded4" />
          </linearGradient>

          {/* Ceramic Coffee Cup Body 3D Shading */}
          <linearGradient id="ctb_cupBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#f4f1eb" />
            <stop offset="75%" stopColor="#dbd4c7" />
            <stop offset="100%" stopColor="#b8ae9e" />
          </linearGradient>

          {/* Ceramic Saucer Gradient */}
          <radialGradient id="ctb_saucerGrad" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#ede8dd" />
            <stop offset="90%" stopColor="#d8d1c0" />
            <stop offset="100%" stopColor="#beb5a2" />
          </radialGradient>

          {/* Rich Coffee Crema Liquid */}
          <radialGradient id="ctb_coffeeCremaGrad" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#693c1f" />
            <stop offset="60%" stopColor="#462512" />
            <stop offset="85%" stopColor="#31190b" />
            <stop offset="100%" stopColor="#1e0e06" />
          </radialGradient>

          {/* Steamed Milk / Latte Art Foam */}
          <linearGradient id="ctb_latteFoamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffaf0" />
            <stop offset="60%" stopColor="#faedd5" />
            <stop offset="100%" stopColor="#dfcaa6" />
          </linearGradient>

          {/* Steam Grad */}
          <linearGradient id="ctb_steamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="80%" stopColor="#ffffff" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>

          {/* Wire Mesh Plate Clip for Book Cover */}
          <clipPath id="ctb_wirePlateClip">
            <rect width="470" height="230" rx="2" />
          </clipPath>
        </defs>

        {/* ======================================================== */}
        {/* 1. LIVING ROOM BACKGROUND (ATMOSPHERE & DEPTH OF FIELD)  */}
        {/* ======================================================== */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
        >
          {/* Living Room Wall & Sunlight */}
          <rect width="1600" height="520" fill="url(#ctb_wallLighting)" />

          {/* Hardwood Floor */}
          <g transform="translate(0, 480)">
            <rect width="1600" height="520" fill="url(#ctb_woodFloorGrad)" />
            {/* Floor Planks */}
            <g stroke="#917351" strokeWidth="1.2" opacity="0.45">
              <line x1="0" y1="50" x2="1600" y2="50" />
              <line x1="0" y1="110" x2="1600" y2="110" />
              <line x1="0" y1="180" x2="1600" y2="180" />
              <line x1="0" y1="260" x2="1600" y2="260" />
              <line x1="0" y1="350" x2="1600" y2="350" />
              <line x1="0" y1="450" x2="1600" y2="450" />
              {/* Vertical Plank Joint Stagger */}
              <line x1="220" y1="0" x2="220" y2="50" />
              <line x1="720" y1="0" x2="720" y2="50" />
              <line x1="1240" y1="0" x2="1240" y2="50" />
              <line x1="440" y1="50" x2="440" y2="110" />
              <line x1="980" y1="50" x2="980" y2="110" />
              <line x1="1480" y1="50" x2="1480" y2="110" />
              <line x1="180" y1="110" x2="180" y2="180" />
              <line x1="680" y1="110" x2="680" y2="180" />
              <line x1="1160" y1="110" x2="1160" y2="180" />
              <line x1="380" y1="180" x2="380" y2="260" />
              <line x1="900" y1="180" x2="900" y2="260" />
              <line x1="1400" y1="180" x2="1400" y2="260" />
            </g>
          </g>

          {/* Living Room Background Decor (Sofa, Indoor Plant, Window Light) */}
          <g filter="url(#ctb_bgDof)" opacity="0.94">
            {/* Baseboard Molding */}
            <rect x="0" y="468" width="1600" height="16" fill="#e5dfd4" />
            <rect x="0" y="468" width="1600" height="3" fill="#bfb8ab" />

            {/* Architectural Window Casting Daylight Shading */}
            <polygon points="0,0 680,0 1100,560 0,680" fill="url(#ctb_sunbeamGrad)" />

            {/* Contemporary Designer Sofa (Midground Behind Table) */}
            <g transform="translate(240, 190)">
              {/* Sofa Backrest */}
              <rect x="0" y="0" width="1120" height="190" rx="28" fill="#2d333e" />
              {/* Sofa Cushions Line */}
              <line x1="373" y1="20" x2="373" y2="190" stroke="#1f232b" strokeWidth="3" />
              <line x1="746" y1="20" x2="746" y2="190" stroke="#1f232b" strokeWidth="3" />
              {/* Sofa Seat Cushions Depth */}
              <rect x="-20" y="150" width="1160" height="150" rx="20" fill="#363d4a" />
              <line x1="373" y1="150" x2="373" y2="290" stroke="#252a33" strokeWidth="3" />
              <line x1="746" y1="150" x2="746" y2="290" stroke="#252a33" strokeWidth="3" />
              {/* Sofa Armrests */}
              <rect x="-45" y="100" width="60" height="200" rx="16" fill="#292f39" />
              <rect x="1105" y="100" width="60" height="200" rx="16" fill="#292f39" />
              {/* Accent Cushion (Warm Terracotta Ochre) */}
              <rect x="30" y="115" width="125" height="125" rx="24" transform="rotate(-6 30 115)" fill="#c46845" />
              {/* Soft Crease on Accent Cushion */}
              <path d="M 50,150 Q 80,170 120,160" stroke="#a25132" strokeWidth="2.5" fill="none" opacity="0.6" />
              {/* Second Accent Cushion (Natural Linen) */}
              <rect x="960" y="120" width="120" height="120" rx="22" transform="rotate(8 960 120)" fill="#ece6d8" />
            </g>

            {/* Modern Minimalist Arc Floor Lamp (Left) */}
            <g transform="translate(80, 40)">
              <path d="M 40,440 Q 60,100 240,110" stroke="#1c1d22" strokeWidth="5" fill="none" />
              {/* Lamp Shade */}
              <ellipse cx="240" cy="115" rx="35" ry="18" fill="#d4af37" />
              <path d="M 205,115 C 205,80 275,80 275,115 Z" fill="#22242a" />
              {/* Warm Lamp Glow */}
              <radialGradient id="ctb_lampGlowGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#fef3c7" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.0" />
              </radialGradient>
              <circle cx="240" cy="120" r="140" fill="url(#ctb_lampGlowGrad)" />
            </g>

            {/* Indoor Fiddle-Leaf Fig / Architectural Plant (Right Corner) */}
            <g transform="translate(1380, 160)">
              {/* Fluted Ceramic Planter Pot */}
              <polygon points="50,220 150,220 135,320 65,320" fill="#ebe4d8" stroke="#d5cdbf" strokeWidth="2" />
              <ellipse cx="100" cy="220" rx="50" ry="12" fill="#4a3728" />
              {/* Stems */}
              <path d="M 100,220 Q 95,120 70,50" stroke="#3d4930" strokeWidth="4.5" fill="none" />
              <path d="M 100,210 Q 115,140 140,80" stroke="#3d4930" strokeWidth="4" fill="none" />
              <path d="M 98,160 Q 130,120 160,110" stroke="#3d4930" strokeWidth="3" fill="none" />
              {/* Lush Leaves */}
              <ellipse cx="65" cy="50" rx="38" ry="52" transform="rotate(-25 65 50)" fill="#2e4d28" />
              <ellipse cx="145" cy="80" rx="42" ry="56" transform="rotate(30 145 80)" fill="#375d30" />
              <ellipse cx="165" cy="115" rx="36" ry="46" transform="rotate(45 165 115)" fill="#446f3c" />
              <ellipse cx="50" cy="110" rx="34" ry="48" transform="rotate(-35 50 110)" fill="#355b2e" />
              <ellipse cx="100" cy="90" rx="40" ry="55" fill="#3f6a36" />
            </g>
          </g>
        </motion.g>

        {/* ======================================================== */}
        {/* 2. SCANDINAVIAN AREA RUG UNDER COFFEE TABLE              */}
        {/* ======================================================== */}
        <g transform="translate(140, 420)">
          <motion.g
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.44, delay: 0.1, ease: transitionCurve }}
          >
            {/* Rug Shadow onto Wood Floor */}
            <rect x="0" y="8" width="1320" height="540" rx="36" fill="#000000" opacity="0.18" filter="url(#ctb_bgDof)" />
            {/* Rug Body */}
            <rect x="0" y="0" width="1320" height="540" rx="36" fill="url(#ctb_rugGrad)" stroke="#c5beb0" strokeWidth="1.5" />
            {/* Subtle Woven Texture Lines */}
            <g stroke="#b8b0a0" strokeWidth="0.8" opacity="0.32" strokeDasharray="3,6">
              <line x1="30" y1="40" x2="1290" y2="40" />
              <line x1="30" y1="90" x2="1290" y2="90" />
              <line x1="30" y1="140" x2="1290" y2="140" />
              <line x1="30" y1="190" x2="1290" y2="190" />
              <line x1="30" y1="240" x2="1290" y2="240" />
              <line x1="30" y1="290" x2="1290" y2="290" />
              <line x1="30" y1="340" x2="1290" y2="340" />
              <line x1="30" y1="390" x2="1290" y2="390" />
              <line x1="30" y1="440" x2="1290" y2="440" />
              <line x1="30" y1="490" x2="1290" y2="490" />
            </g>
            {/* Fringed Border Accent */}
            <rect x="14" y="14" width="1292" height="512" rx="26" fill="none" stroke="#cec6b8" strokeWidth="1.5" strokeDasharray="8,4" />
          </motion.g>
        </g>

        {/* ======================================================== */}
        {/* 3. SOLID WALNUT MID-CENTURY MODERN COFFEE TABLE          */}
        {/* ======================================================== */}
        {/* Tapered Wooden Legs with Brass Ferrules */}
        <g transform="translate(180, 480)">
          <motion.g
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.44, delay: 0.14, ease: transitionCurve }}
          >
            {/* Rear Left Leg */}
            <polygon points="100,10 70,160 85,160 115,10" fill="#24140b" opacity="0.75" />
            <rect x="70" y="145" width="16" height="15" fill="#bfa15f" opacity="0.75" />

            {/* Rear Right Leg */}
            <polygon points="1140,10 1170,160 1155,160 1125,10" fill="#24140b" opacity="0.75" />
            <rect x="1155" y="145" width="16" height="15" fill="#bfa15f" opacity="0.75" />

            {/* Front Left Leg */}
            <polygon points="140,180 110,380 132,380 162,180" fill="#331c0f" />
            <rect x="110" y="360" width="22" height="20" fill="#cbb06d" />

            {/* Front Right Leg */}
            <polygon points="1100,180 1130,380 1108,380 1078,180" fill="#2c170d" />
            <rect x="1108" y="360" width="22" height="20" fill="#cbb06d" />
          </motion.g>
        </g>

        {/* Coffee Table Top Structure */}
        <g transform="translate(170, 470)" filter="url(#ctb_tableShadow)">
          <motion.g
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.46, delay: 0.16, ease: transitionCurve }}
          >
            {/* Table Bottom Bevel Thickness */}
            <rect x="0" y="14" width="1260" height="420" rx="32" fill="url(#ctb_tableThicknessGrad)" />

            {/* Table Top Chamfer Shadow Under Surface */}
            <rect x="2" y="6" width="1256" height="416" rx="32" fill="#1b0e07" />

            {/* Solid American Walnut Table Surface */}
            <rect x="0" y="0" width="1260" height="416" rx="30" fill="url(#ctb_walnutTopGrad)" />

            {/* Walnut Wood Grain Texture Overlays */}
            <g opacity="0.14" stroke="#ffffff" fill="none" strokeWidth="1.2">
              <path d="M 40,80 Q 400,60 800,85 T 1220,70" />
              <path d="M 60,140 Q 500,120 900,150 T 1200,135" />
              <path d="M 40,210 Q 380,195 820,215 T 1220,200" />
              <path d="M 50,280 Q 480,260 880,290 T 1210,270" />
              <path d="M 60,350 Q 420,335 840,355 T 1200,340" />
            </g>

            {/* Top Beveled Rim Highlight (Window Light Reflected on Walnut Table Edge) */}
            <rect x="1" y="1" width="1258" height="414" rx="29" fill="none" stroke="url(#ctb_walnutEdgeHighlight)" strokeWidth="2.2" />

            {/* Soft Satin Varnish Diagonal Sheen */}
            <polygon points="60,0 380,0 220,416 0,416" fill="#ffffff" opacity="0.04" />
            <polygon points="460,0 720,0 520,416 300,416" fill="#ffffff" opacity="0.02" />
          </motion.g>
        </g>

        {/* ======================================================== */}
        {/* 4. COFFEE TABLE ACCESSORIES (MINIMALIST TRAY / VASE)     */}
        {/* ======================================================== */}
        {/* Sleek Brushed Brass Tray in Upper Center-Right of Table */}
        <g transform="translate(740, 500)" opacity="0.88">
          <motion.g
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.32, ease: transitionCurve }}
          >
            <ellipse cx="60" cy="30" rx="55" ry="18" fill="#1a110a" opacity="0.6" />
            <ellipse cx="60" cy="26" rx="54" ry="16" fill="#b39355" stroke="#dbbe7e" strokeWidth="1.2" />
            <ellipse cx="60" cy="25" rx="46" ry="12" fill="#8c6f37" />
            {/* Small Minimalist Ceramic Candle / Incense Holder */}
            <circle cx="60" cy="23" r="10" fill="#f4eee4" stroke="#dfd6c6" strokeWidth="1" />
            <circle cx="60" cy="23" r="3" fill="#3a3028" />
          </motion.g>
        </g>

        {/* ======================================================== */}
        {/* 5. THE HARDCOVER COFFEE TABLE BOOK (MONOGRAPH)           */}
        {/* ======================================================== */}
        {/* Positioned prominently on the left side of the coffee table */}
        <g transform="translate(230, 510)" filter="url(#ctb_bookShadowOnTable)">
          <motion.g
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.24, ease: transitionCurve }}
          >
            {/* 5A. Hardcover Lower Base Board & High-Bulk Paper Block */}
            {/* Lower Board Base */}
            <rect x="0" y="0" width="708" height="348" rx="4" fill="#0d0e12" />

            {/* Right Exposed Page Block */}
            <path d="M 700,6 L 706,9 L 706,344 L 700,341 Z" fill="url(#ctb_pageEdgeGrad)" stroke="#a39d93" strokeWidth="0.5" />
            {/* Micro page lines on right edge */}
            <g stroke="#9c958a" strokeWidth="0.4" opacity="0.6">
              <line x1="701" y1="15" x2="705" y2="18" />
              <line x1="701" y1="50" x2="705" y2="53" />
              <line x1="701" y1="110" x2="705" y2="113" />
              <line x1="701" y1="180" x2="705" y2="183" />
              <line x1="701" y1="250" x2="705" y2="253" />
              <line x1="701" y1="310" x2="705" y2="313" />
            </g>

            {/* Bottom Exposed Page Block */}
            <path d="M 22,341 L 700,341 L 706,346 L 22,346 Z" fill="url(#ctb_pageEdgeGrad)" stroke="#a39d93" strokeWidth="0.5" />
            <g stroke="#9c958a" strokeWidth="0.4" opacity="0.6">
              <line x1="60" y1="342" x2="60" y2="345" />
              <line x1="180" y1="342" x2="180" y2="345" />
              <line x1="340" y1="342" x2="340" y2="345" />
              <line x1="500" y1="342" x2="500" y2="345" />
              <line x1="640" y1="342" x2="640" y2="345" />
            </g>

            {/* 5B. Front Hardcover Face (Rich Matte Linen Sheen) */}
            <rect x="0" y="0" width="700" height="341" rx="3" fill="url(#ctb_bookCoverSheen)" />

            {/* Outer Hardcover Beveled Rim */}
            <rect x="0.5" y="0.5" width="699" height="340" rx="3" fill="none" stroke="#333742" strokeWidth="1" opacity="0.8" />
            <line x1="0" y1="1" x2="700" y2="1" stroke="#484d5c" strokeWidth="1.2" opacity="0.6" />
            <line x1="1" y1="0" x2="1" y2="341" stroke="#484d5c" strokeWidth="1.2" opacity="0.6" />

            {/* 5C. Spine Hinge Debossed Groove (Book Joint) */}
            <g transform="translate(24, 0)">
              <rect width="6" height="341" fill="url(#ctb_bookSpineGroove)" />
              <line x1="2" y1="0" x2="2" y2="341" stroke="#050608" strokeWidth="2" />
              <line x1="5" y1="0" x2="5" y2="341" stroke="#424654" strokeWidth="1" opacity="0.5" />
            </g>

            {/* 5D. Book Cover Artwork (Classic Herman Miller wire chair design) */}
            <g id="ctb_book-cover-content">
              {/* Photo Plate: Eames Wire Chairs (Lower Left-Center) */}
              <g transform="translate(42, 145)">
                <rect width="470" height="195" fill="#000000" />
                <rect width="470" height="195" fill="none" stroke="#2a2c35" strokeWidth="1" />

                <g clipPath="url(#ctb_wirePlateClip)">
                  {/* Pure Charcoal/Black Background */}
                  <rect width="470" height="195" fill="#040405" />

                  {/* Eames Wire Chair 1 (Left Angled Perspective) */}
                  <g transform="translate(10, -5) scale(0.55)" stroke="#f1f5f9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 30,110 C 60,60 140,40 220,50 C 270,55 300,90 280,160 C 260,230 240,290 190,320 C 130,350 40,320 20,240 C 5,180 10,140 30,110 Z" strokeWidth="3.5" stroke="#ffffff" />
                    <path d="M 40,85 Q 150,55 250,75" strokeWidth="1.8" />
                    <path d="M 32,110 Q 150,75 270,105" strokeWidth="1.8" />
                    <path d="M 25,135 Q 150,100 280,135" strokeWidth="1.8" />
                    <path d="M 20,165 Q 150,125 285,165" strokeWidth="1.8" />
                    <path d="M 18,195 Q 145,155 275,200" strokeWidth="1.8" />
                    <path d="M 20,225 Q 140,190 260,235" strokeWidth="1.8" />
                    <path d="M 28,255 Q 135,225 240,265" strokeWidth="1.8" />
                    {/* Vertical Ribs */}
                    <path d="M 60,70 Q 55,180 40,270" strokeWidth="1.5" />
                    <path d="M 110,55 Q 110,180 95,315" strokeWidth="1.5" />
                    <path d="M 160,52 Q 160,180 155,325" strokeWidth="1.5" />
                    <path d="M 210,60 Q 215,180 210,305" strokeWidth="1.5" />
                    {/* Eiffel Base Struts */}
                    <g stroke="#ffffff" strokeWidth="2.6">
                      <line x1="85" y1="320" x2="35" y2="400" />
                      <line x1="165" y1="320" x2="195" y2="400" />
                      <line x1="60" y1="360" x2="180" y2="360" strokeWidth="2" />
                    </g>
                  </g>

                  {/* Eames Wire Chair 2 (Center Hero Perspective) */}
                  <g transform="translate(130, 5) scale(0.53)" stroke="#f8fafc" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 40,80 C 80,20 180,10 270,30 C 330,45 370,100 350,180 C 320,270 280,340 210,365 C 130,390 40,340 20,240 C 10,180 20,130 40,80 Z" strokeWidth="3.8" stroke="#ffffff" />
                    <path d="M 50,60 Q 180,25 295,50" strokeWidth="1.8" />
                    <path d="M 40,90 Q 185,50 325,80" strokeWidth="1.8" />
                    <path d="M 32,120 Q 190,75 345,115" strokeWidth="1.8" />
                    <path d="M 26,155 Q 195,105 355,155" strokeWidth="1.8" />
                    <path d="M 22,190 Q 195,140 350,200" strokeWidth="1.8" />
                    <path d="M 22,225 Q 190,175 330,245" strokeWidth="1.8" />
                    {/* Eiffel Base Wire Mesh */}
                    <g stroke="#ffffff" strokeWidth="2.8">
                      <path d="M 100,345 L 85,385 M 220,360 L 235,385" />
                      <line x1="90" y1="365" x2="230" y2="365" strokeWidth="2" />
                    </g>
                  </g>

                  {/* Eames Wire Chair 3 (Right Perspective) */}
                  <g transform="translate(290, 8) scale(0.53)" stroke="#cbd5e1" fill="none" strokeLinecap="round">
                    <path d="M 30,100 C 60,40 160,20 240,35 C 300,50 330,100 310,180 C 280,260 230,330 160,350 C 90,370 20,310 10,220 C 5,170 15,130 30,100 Z" strokeWidth="3.6" stroke="#ffffff" />
                    <path d="M 40,75 Q 150,35 250,55" strokeWidth="1.7" />
                    <path d="M 30,110 Q 155,65 275,95" strokeWidth="1.7" />
                    <path d="M 22,145 Q 160,95 290,140" strokeWidth="1.7" />
                    <path d="M 18,185 Q 160,130 300,185" strokeWidth="1.7" />
                    <g stroke="#ffffff" strokeWidth="2.6">
                      <line x1="85" y1="330" x2="55" y2="385" />
                      <line x1="175" y1="345" x2="205" y2="385" />
                    </g>
                  </g>
                </g>
              </g>

              {/* Typography Block (Aligned Above Artwork) */}
              <g transform="translate(270, 75)">
                {/* "CLASSIC" Tracked Small Heading */}
                <text x="50" y="16" fontSize="11" fontWeight="600" fill="#cbd5e1" letterSpacing="4.5">
                  CLASSIC
                </text>

                {/* "Herman Miller" Bold Title */}
                <text x="0" y="56" fontSize="42" fontWeight="900" fill="#ffffff" letterSpacing="-1">
                  Herman Miller
                </text>

                {/* "PAT KIRKHAM" Tracked Author Subtitle */}
                <text x="415" y="68" fontSize="9" fontWeight="700" fill="#9ca3af" letterSpacing="2.4" textAnchor="end">
                  PAT KIRKHAM
                </text>
              </g>
            </g>

            {/* Subtle Diagonal Silk/Linen Finish Wash */}
            <path d="M 30,0 L 240,0 L 0,240 L 0,30 Z" fill="#ffffff" opacity="0.025" />
            <path d="M 320,0 L 700,0 L 700,160 L 160,341 L 60,341 Z" fill="#ffffff" opacity="0.02" />
          </motion.g>
        </g>

        {/* ======================================================== */}
        {/* 6. THE CUP OF COFFEE & SAUCER (ON TABLE NEXT TO BOOK)    */}
        {/* ======================================================== */}
        {/* Placed to the right of the book on the walnut table */}
        <g transform="translate(1030, 560)">
          <motion.g
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.46, delay: 0.32, ease: transitionCurve }}
          >
            {/* 6A. Ceramic Saucer with Shadow */}
            <g filter="url(#ctb_saucerShadow)">
              {/* Saucer Outer Rim (Elliptical Perspective) */}
              <ellipse cx="140" cy="180" rx="145" ry="60" fill="url(#ctb_saucerGrad)" />
              {/* Saucer Rim Highlight Bevel */}
              <ellipse cx="140" cy="179" rx="144" ry="59" fill="none" stroke="#ffffff" strokeWidth="1.8" opacity="0.9" />
              {/* Saucer Inner Well Indentation */}
              <ellipse cx="140" cy="182" rx="95" ry="38" fill="#d2cab9" />
              <ellipse cx="140" cy="183" rx="90" ry="35" fill="#ede8dc" />
            </g>

            {/* 6B. Coffee Cup Body (3D Cylinder Shading) */}
            <g>
              {/* Cup Handle (Right Side) */}
              <g>
                {/* Outer Handle Curve */}
                <path d="M 215,100 C 275,100 275,160 210,160" fill="none" stroke="url(#ctb_cupBodyGrad)" strokeWidth="16" strokeLinecap="round" filter="url(#ctb_saucerShadow)" />
                <path d="M 215,100 C 275,100 275,160 210,160" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
              </g>

              {/* Cup Shadow Onto Saucer Well */}
              <ellipse cx="140" cy="175" rx="80" ry="28" fill="#20150d" opacity="0.45" />

              {/* Cup Body Exterior */}
              <path d="M 65,95 C 65,150 95,178 140,178 C 185,178 215,150 215,95 Z" fill="url(#ctb_cupBodyGrad)" />
              {/* Cup Base Contact */}
              <ellipse cx="140" cy="174" rx="42" ry="12" fill="#cdc5b6" />

              {/* Cup Rim (Top Lip) */}
              <ellipse cx="140" cy="95" rx="75" ry="28" fill="url(#ctb_cupBodyGrad)" />
              <ellipse cx="140" cy="94" rx="74" ry="27" fill="none" stroke="#ffffff" strokeWidth="2.2" opacity="0.95" />

              {/* Cup Interior Wall (Recessed Shading) */}
              <ellipse cx="140" cy="95" rx="68" ry="24" fill="#6e5d4c" />

              {/* 6C. Fresh Espresso / Coffee Liquid Surface */}
              <ellipse cx="140" cy="97" rx="64" ry="22" fill="url(#ctb_coffeeCremaGrad)" />
              {/* Rich Crema Rim */}
              <ellipse cx="140" cy="97" rx="63" ry="21" fill="none" stroke="#8a4b22" strokeWidth="2.5" opacity="0.85" />

              {/* 6D. Delicate Barista Latte Art (Microfoam Rosetta Heart Pattern) */}
              <g transform="translate(140, 97)">
                {/* Outer Heart Foam Layer */}
                <path d="M 0,-14 C 18,-14 26,-4 0,14 C -26,-4 -18,-14 0,-14 Z" fill="url(#ctb_latteFoamGrad)" opacity="0.95" />
                {/* Inner Petal Waves */}
                <path d="M 0,-10 C 12,-10 18,-2 0,11 C -18,-2 -12,-10 0,-10 Z" fill="#fffdfa" />
                <path d="M 0,-6 C 7,-6 10,0 0,8 C -10,0 -7,-6 0,-6 Z" fill="url(#ctb_latteFoamGrad)" />
                {/* Delicate Central Drag Line */}
                <line x1="0" y1="-15" x2="0" y2="15" stroke="#93572c" strokeWidth="1.2" opacity="0.75" />
                {/* Small Microfoam Heart Base */}
                <circle cx="0" cy="14" r="2.2" fill="#fffdfa" />
              </g>
            </g>

            {/* 6E. Realistic Rising Steam Whisps Above Hot Coffee */}
            <motion.g
              filter="url(#ctb_steamGlow)"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42, ease: "easeOut" }}
            >
              {/* Left Steam Curl */}
              <path d="M 125,75 Q 110,40 135,10 T 120,-30" stroke="url(#ctb_steamGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />
              {/* Center Steam Whisp */}
              <path d="M 142,72 Q 155,35 138,0 T 150,-45" stroke="url(#ctb_steamGrad)" strokeWidth="6.5" fill="none" strokeLinecap="round" />
              {/* Right Steam Curl */}
              <path d="M 158,76 Q 175,45 155,15 T 165,-25" stroke="url(#ctb_steamGrad)" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            </motion.g>

            {/* Warm Reflection on Saucer Rim from Window */}
            <path d="M 85,160 Q 140,190 195,160" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.7" />
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
