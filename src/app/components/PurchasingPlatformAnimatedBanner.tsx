import { motion } from "motion/react";

export function PurchasingPlatformAnimatedBanner() {
  const transitionCurve = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#131518]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full block object-cover object-top lg:rounded-t-2xl"
        style={{
          background: "#131518",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <defs>
          {/* Background Radial Gradient */}
          <radialGradient id="bgGlow" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#1e222a" />
            <stop offset="60%" stopColor="#14161a" />
            <stop offset="100%" stopColor="#0b0c0e" />
          </radialGradient>
          {/* Drop Shadow for Desktop Paper */}
          <filter id="paperShadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="-10" dy="25" stdDeviation="30" floodColor="#000000" floodOpacity="0.75" />
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.4" />
          </filter>
          {/* Drop Shadow for Mobile Wireframe */}
          <filter id="mobileShadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="-8" dy="20" stdDeviation="22" floodColor="#000000" floodOpacity="0.7" />
          </filter>
          {/* Chalk sketch pattern / filter */}
          <filter id="chalkGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* LAYER 1: BACKGROUND CANVAS & CHALKBOARD UX DIAGRAMS (0ms - 250ms) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <rect width="1200" height="900" fill="url(#bgGlow)" />

          {/* Background Chalkboard UX Wireframe Diagrams */}
          <g opacity="0.35" stroke="#d1d5db" strokeWidth="1.2" fill="none" filter="url(#chalkGlow)">
            {/* Top Left Flowchart */}
            <g transform="translate(45, 75)">
              <text x="0" y="16" fontSize="18" fill="#e5e7eb" fontFamily="monospace" fontWeight="bold" stroke="none">
                Home → Appliances → Kitchen
              </text>
              <line x1="18" y1="26" x2="18" y2="58" stroke="#9ca3af" strokeWidth="1.5" />
              <path d="M 18,58 L 13,50 M 18,58 L 23,50" stroke="#9ca3af" strokeWidth="1.5" />

              <text x="0" y="80" fontSize="16" fill="#e5e7eb" fontFamily="monospace" stroke="none">
                Range → Range Top
              </text>
              <rect x="0" y="130" width="70" height="46" rx="2" />
              <line x1="0" y1="130" x2="70" y2="176" strokeDasharray="2,2" />
              <line x1="0" y1="176" x2="70" y2="130" strokeDasharray="2,2" />
              <line x1="70" y1="153" x2="100" y2="153" />
              <path d="M 100,153 L 94,149 M 100,153 L 94,157" />
              <rect x="100" y="130" width="80" height="46" rx="2" />
              <text x="105" y="157" fontSize="10" fill="#9ca3af" stroke="none">
                Product Details
              </text>

              <text x="0" y="270" fontSize="16" fill="#e5e7eb" fontFamily="monospace" stroke="none">
                Site → Appliances
              </text>
              <line x1="18" y1="280" x2="18" y2="310" />
              <path d="M 18,310 L 14,302 M 18,310 L 22,302" />

              <g transform="translate(0, 320)">
                <rect x="0" y="0" width="60" height="45" rx="1" />
                <line x1="0" y1="0" x2="60" y2="45" />
                <line x1="0" y1="45" x2="60" y2="0" />
                <rect x="70" y="0" width="60" height="45" rx="1" />
                <line x1="70" y1="0" x2="130" y2="45" />
                <line x1="70" y1="45" x2="130" y2="0" />
                <rect x="140" y="0" width="60" height="45" rx="1" />
                <line x1="140" y1="0" x2="200" y2="45" />
                <line x1="140" y1="45" x2="200" y2="0" />
                <rect x="0" y="55" width="80" height="24" rx="2" />
                <text x="8" y="71" fontSize="10" fill="#e5e7eb" stroke="none">
                  Quantity: [ 1 ]
                </text>
                <rect x="90" y="55" width="90" height="24" rx="2" />
                <text x="96" y="71" fontSize="10" fill="#e5e7eb" stroke="none">
                  Add to Cart 4
                </text>
              </g>

              <g transform="translate(0, 480)">
                <rect x="0" y="0" width="160" height="85" rx="3" />
                <line x1="0" y1="24" x2="160" y2="24" />
                <text x="10" y="17" fontSize="11" fill="#9ca3af" stroke="none">
                  Similar Info &amp; Specs
                </text>
                <line x1="20" y1="42" x2="140" y2="42" strokeDasharray="3,3" />
                <line x1="20" y1="56" x2="110" y2="56" strokeDasharray="3,3" />
                <line x1="20" y1="70" x2="130" y2="70" strokeDasharray="3,3" />
                <text x="0" y="115" fontSize="13" fill="#e5e7eb" stroke="none" fontWeight="bold">
                  Services similar delivery
                </text>
                <rect x="0" y="130" width="45" height="45" />
                <line x1="0" y1="130" x2="45" y2="175" />
                <line x1="0" y1="175" x2="45" y2="130" />
                <text x="0" y="190" fontSize="9" fill="#9ca3af" stroke="none">
                  Whirlpool 30"
                </text>
                <text x="0" y="202" fontSize="9" fill="#9ca3af" stroke="none">
                  $14.66
                </text>
                <rect x="55" y="130" width="45" height="45" />
                <line x1="55" y1="130" x2="100" y2="175" />
                <line x1="55" y1="175" x2="100" y2="130" />
                <text x="55" y="190" fontSize="9" fill="#9ca3af" stroke="none">
                  Standard 2BF
                </text>
                <text x="55" y="202" fontSize="9" fill="#9ca3af" stroke="none">
                  $22.60
                </text>
              </g>
            </g>

            {/* Right Side Chalkboard Diagrams */}
            <g transform="translate(980, 100)">
              <text x="0" y="20" fontSize="15" fill="#e5e7eb" stroke="none" fontFamily="monospace">
                Whirlpool 30" Black, Gas
              </text>
              <text x="0" y="38" fontSize="13" fill="#9ca3af" stroke="none" fontFamily="monospace">
                Range / Stove
              </text>
              <text x="0" y="65" fontSize="11" fill="#60a5fa" stroke="none">
                Qty 1 · $498.99
              </text>
              <rect x="0" y="75" width="85" height="22" rx="2" />
              <text x="42.5" y="90" textAnchor="middle" fontSize="10" fill="#e5e7eb" stroke="none">
                Add to Cart
              </text>

              <g transform="translate(0, 160)">
                <text x="0" y="0" fontSize="14" fill="#e5e7eb" stroke="none" fontWeight="bold">
                  Product Details
                </text>
                <rect x="0" y="10" width="180" height="170" rx="2" />
                <line x1="0" y1="35" x2="180" y2="35" />
                <line x1="0" y1="65" x2="180" y2="65" />
                <line x1="0" y1="95" x2="180" y2="95" />
                <line x1="0" y1="125" x2="180" y2="125" />
                <line x1="0" y1="155" x2="180" y2="155" />
                <line x1="75" y1="10" x2="75" y2="180" />
                <text x="8" y="26" fontSize="9" fill="#9ca3af" stroke="none">
                  Product C Details
                </text>
                <text x="85" y="26" fontSize="9" fill="#9ca3af" stroke="none">
                  Color / Specs
                </text>
                <text x="8" y="52" fontSize="9" fill="#9ca3af" stroke="none">
                  Label
                </text>
                <rect x="90" y="44" width="20" height="12" rx="1" />
                <text x="8" y="82" fontSize="9" fill="#9ca3af" stroke="none">
                  Color
                </text>
                <line x1="85" y1="80" x2="140" y2="80" />
                <text x="8" y="112" fontSize="9" fill="#9ca3af" stroke="none">
                  Vendor
                </text>
                <rect x="85" y="104" width="70" height="12" rx="1" />
                <text x="8" y="142" fontSize="9" fill="#9ca3af" stroke="none">
                  Product Details
                </text>
                <line x1="85" y1="140" x2="160" y2="140" />
                <text x="8" y="172" fontSize="9" fill="#9ca3af" stroke="none">
                  Selected Info
                </text>
              </g>

              <g transform="translate(0, 420)">
                <text x="0" y="0" fontSize="14" fill="#e5e7eb" stroke="none" fontWeight="bold">
                  Frequently Bought Together
                </text>
                <g transform="translate(0, 15)">
                  <rect x="0" y="0" width="48" height="48" />
                  <line x1="0" y1="0" x2="48" y2="48" />
                  <line x1="0" y1="48" x2="48" y2="0" />
                  <text x="0" y="62" fontSize="9" fill="#9ca3af" stroke="none">
                    Whirlpool 20"
                  </text>
                  <text x="0" y="73" fontSize="9" fill="#e5e7eb" stroke="none">
                    $12.86
                  </text>
                </g>
                <g transform="translate(58, 15)">
                  <rect x="0" y="0" width="48" height="48" />
                  <line x1="0" y1="0" x2="48" y2="48" />
                  <line x1="0" y1="48" x2="48" y2="0" />
                  <text x="0" y="62" fontSize="9" fill="#9ca3af" stroke="none">
                    Black Cable
                  </text>
                  <text x="0" y="73" fontSize="9" fill="#e5e7eb" stroke="none">
                    $19.60
                  </text>
                </g>
                <g transform="translate(116, 15)">
                  <rect x="0" y="0" width="48" height="48" />
                  <line x1="0" y1="0" x2="48" y2="48" />
                  <line x1="0" y1="48" x2="48" y2="0" />
                  <text x="0" y="62" fontSize="9" fill="#9ca3af" stroke="none">
                    Whirlpool Range
                  </text>
                  <text x="0" y="73" fontSize="9" fill="#e5e7eb" stroke="none">
                    $11.80
                  </text>
                </g>
              </g>
            </g>
          </g>
        </motion.g>

        {/* LAYER 2: DESKTOP PAPER SHEET & HEADER */}
        {/* Outer static SVG group preserves exact coordinate translation and rotation */}
        <g transform="translate(180, 20) rotate(-1.2)" filter="url(#paperShadow)">
          {/* Base Paper Artboard */}
          <motion.rect
            width="700"
            height="920"
            rx="3"
            fill="#FFFFFF"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: transitionCurve }}
          />

          {/* Top Header Bar */}
          <g transform="translate(25, 20)">
            <motion.g
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease: transitionCurve }}
            >
              <line x1="2" y1="8" x2="20" y2="8" stroke="#4b5563" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="2" y1="15" x2="20" y2="15" stroke="#4b5563" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="2" y1="22" x2="20" y2="22" stroke="#4b5563" strokeWidth="2.5" strokeLinecap="round" />
              <rect x="36" y="2" width="28" height="28" rx="3" fill="#0284c7" />
              <text x="44" y="22" fontSize="18" fontWeight="900" fill="#FFFFFF">
                P
              </text>
              <rect x="80" y="2" width="460" height="28" rx="2" fill="#FFFFFF" stroke="#d1d5db" strokeWidth="1.2" />
              <rect x="460" y="4" width="76" height="24" rx="1" fill="#e5e7eb" />
              <text x="476" y="20" fontSize="10.5" fontWeight="bold" fill="#6b7280" letterSpacing="0.5">
                SEARCH
              </text>
              <circle cx="566" cy="16" r="7" fill="none" stroke="#9ca3af" strokeWidth="1.5" />
              <path d="M 558,28 C 558,22 574,22 574,28" fill="none" stroke="#9ca3af" strokeWidth="1.5" />
              <rect x="588" y="10" width="16" height="14" rx="2" fill="none" stroke="#9ca3af" strokeWidth="1.5" />
              <path d="M 592,10 L 592,7 C 592,5 600,5 600,7 L 600,10" fill="none" stroke="#9ca3af" strokeWidth="1.5" />
            </motion.g>
          </g>

          {/* Breadcrumbs */}
          <g transform="translate(25, 68)">
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.24 }}
            >
              <text fontSize="10" fill="#6b7280" fontWeight="500">
                Home &gt; Appliances &gt; Kitchen
              </text>
            </motion.g>
          </g>

          {/* LAYER 3: PRODUCT HERO BOX & CTA */}
          <g transform="translate(25, 90)">
            <motion.g
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28, ease: transitionCurve }}
            >
              {/* Gallery Placeholder */}
              <g>
                <rect x="0" y="0" width="210" height="190" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
                <line x1="0" y1="0" x2="210" y2="190" stroke="#d1d5db" strokeWidth="1.5" />
                <line x1="0" y1="190" x2="210" y2="0" stroke="#d1d5db" strokeWidth="1.5" />
                <circle cx="24" cy="166" r="10" fill="#ffffff" stroke="#9ca3af" strokeWidth="1.2" />
                <line x1="31" y1="173" x2="38" y2="180" stroke="#9ca3af" strokeWidth="1.5" />
              </g>

              {/* Title & Buy Box */}
              <g transform="translate(230, 5)">
                <text x="0" y="18" fontSize="16" fontWeight="bold" fill="#111827">
                  Whirlpool 30" Black, Gas, Standard Clean
                </text>
                <text x="0" y="38" fontSize="16" fontWeight="bold" fill="#111827">
                  Range / Stove
                </text>
                <g transform="translate(0, 50)">
                  <text fontSize="9" fill="#9ca3af">
                    Item # 871092 | ★★★★☆ (4.7) 128 Reviews
                  </text>
                </g>
                <g transform="translate(0, 68)">
                  <circle cx="3" cy="3" r="2" fill="#9ca3af" />
                  <text x="10" y="6" fontSize="8.5" fill="#6b7280">
                    SpeedHeat™ Burner delivers up to 15,000 BTUs for rapid boiling
                  </text>
                  <circle cx="3" cy="17" r="2" fill="#9ca3af" />
                  <text x="10" y="20" fontSize="8.5" fill="#6b7280">
                    Cast-iron grates are dishwasher safe for easy cleanups
                  </text>
                  <circle cx="3" cy="31" r="2" fill="#9ca3af" />
                  <text x="10" y="34" fontSize="8.5" fill="#6b7280">
                    Large oven capacity accommodates multiple dishes with ease
                  </text>
                </g>

                {/* Price & Green CTA */}
                <g transform="translate(265, -5)">
                  <text x="0" y="14" fontSize="10" fill="#6b7280">
                    Qty:
                  </text>
                  <rect x="25" y="2" width="28" height="18" rx="2" fill="#ffffff" stroke="#d1d5db" />
                  <text x="34" y="15" fontSize="10" fill="#111827" fontWeight="bold">
                    1
                  </text>
                  <path d="M 46,9 L 49,12 L 52,9" fill="none" stroke="#6b7280" strokeWidth="1.2" />
                  <text x="75" y="18" fontSize="18" fontWeight="bold" fill="#111827">
                    $466.99
                  </text>
                  <rect x="0" y="28" width="150" height="28" rx="3" fill="#15803d" />
                  <text x="32" y="46" fontSize="11.5" fontWeight="bold" fill="#FFFFFF">
                    Add to Cart ▶
                  </text>
                  <g transform="translate(0, 66)">
                    <rect x="18" y="0" width="11" height="11" rx="2" fill="#ffffff" stroke="#9ca3af" />
                    <text x="34" y="9" fontSize="9" fill="#6b7280">
                      Compare
                    </text>
                    <path
                      d="M 98,4 C 98,1 103,1 105,4 C 107,1 112,1 112,4 C 112,8 105,11 105,11 C 105,11 98,8 98,4 Z"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="1.2"
                    />
                    <text x="116" y="9" fontSize="9" fill="#60a5fa">
                      Wishlist
                    </text>
                  </g>
                </g>
              </g>
            </motion.g>
          </g>

          {/* LAYER 4: PRODUCT DETAILS SPECIFICATIONS TABLE */}
          <g transform="translate(25, 305)">
            <motion.g
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35, ease: transitionCurve }}
            >
              <text x="0" y="14" fontSize="12" fontWeight="bold" fill="#111827">
                Product Details
              </text>
              <rect x="0" y="24" width="650" height="84" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="0" y1="45" x2="650" y2="45" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="0" y1="66" x2="650" y2="66" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="0" y1="87" x2="650" y2="87" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="160" y1="24" x2="160" y2="108" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="325" y1="24" x2="325" y2="108" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="485" y1="24" x2="485" y2="108" stroke="#f3f4f6" strokeWidth="1" />
              <text x="12" y="39" fontSize="9" fontWeight="bold" fill="#4b5563">
                Product (#)
              </text>
              <text x="172" y="39" fontSize="9" fill="#6b7280">
                871092-B
              </text>
              <text x="337" y="39" fontSize="9" fontWeight="bold" fill="#4b5563">
                Type
              </text>
              <text x="497" y="39" fontSize="9" fill="#6b7280">
                Freestanding Gas Range
              </text>
              <text x="12" y="60" fontSize="9" fontWeight="bold" fill="#4b5563">
                Color
              </text>
              <text x="172" y="60" fontSize="9" fill="#6b7280">
                Black Matte / Gloss
              </text>
              <text x="337" y="60" fontSize="9" fontWeight="bold" fill="#4b5563">
                Fuel Type
              </text>
              <text x="497" y="60" fontSize="9" fill="#6b7280">
                Natural Gas / LP Convertible
              </text>
              <text x="12" y="81" fontSize="9" fontWeight="bold" fill="#4b5563">
                Height
              </text>
              <text x="172" y="81" fontSize="9" fill="#6b7280">
                46.15 in (117.2 cm)
              </text>
              <text x="337" y="81" fontSize="9" fontWeight="bold" fill="#4b5563">
                Burner Count
              </text>
              <text x="497" y="81" fontSize="9" fill="#6b7280">
                4 Sealed Burners
              </text>
              <text x="12" y="102" fontSize="9" fontWeight="bold" fill="#4b5563">
                Manufacturer
              </text>
              <text x="172" y="102" fontSize="9" fill="#6b7280">
                Whirlpool Corporation
              </text>
              <text x="337" y="102" fontSize="9" fontWeight="bold" fill="#4b5563">
                Model
              </text>
              <text x="497" y="102" fontSize="9" fill="#6b7280">
                WFG320M0MB
              </text>
            </motion.g>
          </g>

          {/* VENDOR INFORMATION TABLE */}
          <g transform="translate(25, 430)">
            <motion.g
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.38, ease: transitionCurve }}
            >
              <text x="0" y="14" fontSize="12" fontWeight="bold" fill="#111827">
                Vendor Information
              </text>
              <rect x="0" y="24" width="650" height="48" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="0" y1="48" x2="650" y2="48" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="200" y1="24" x2="200" y2="72" stroke="#f3f4f6" strokeWidth="1" />
              <text x="12" y="40" fontSize="9" fontWeight="bold" fill="#4b5563">
                Vendor Name
              </text>
              <text x="215" y="40" fontSize="9" fill="#6b7280">
                Whirlpool Direct Commercial Supply
              </text>
              <text x="12" y="64" fontSize="9" fontWeight="bold" fill="#4b5563">
                Lead Time
              </text>
              <text x="215" y="64" fontSize="9" fill="#6b7280">
                In Stock · Shipped via Freight in 2-3 Business Days
              </text>
            </motion.g>
          </g>

          {/* FREQUENTLY BOUGHT TOGETHER CARDS */}
          <g transform="translate(25, 520)">
            <motion.g
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.42, ease: transitionCurve }}
            >
              <text x="0" y="14" fontSize="12" fontWeight="bold" fill="#111827">
                Frequently bought together
              </text>
              <g transform="translate(0, 26)">
                <g transform="translate(0, 0)">
                  <rect x="0" y="0" width="145" height="110" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="10" y="8" width="55" height="55" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="10" y1="8" x2="65" y2="63" stroke="#d1d5db" />
                  <line x1="10" y1="63" x2="65" y2="8" stroke="#d1d5db" />
                  <text x="72" y="22" fontSize="8.5" fontWeight="bold" fill="#111827">
                    20' non-vented
                  </text>
                  <text x="72" y="34" fontSize="8.5" fontWeight="bold" fill="#111827">
                    range cord
                  </text>
                  <text x="72" y="55" fontSize="11" fontWeight="bold" fill="#15803d">
                    $71.99
                  </text>
                  <rect x="10" y="74" width="125" height="24" rx="2" fill="#f3f4f6" />
                  <text x="45" y="89" fontSize="8.5" fill="#4b5563" fontWeight="600">
                    + Add to Order
                  </text>
                </g>
                <g transform="translate(165, 0)">
                  <rect x="0" y="0" width="145" height="110" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="10" y="8" width="55" height="55" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="10" y1="8" x2="65" y2="63" stroke="#d1d5db" />
                  <line x1="10" y1="63" x2="65" y2="8" stroke="#d1d5db" />
                  <text x="72" y="22" fontSize="8.5" fontWeight="bold" fill="#111827">
                    Universal gas
                  </text>
                  <text x="72" y="34" fontSize="8.5" fontWeight="bold" fill="#111827">
                    connector kit
                  </text>
                  <text x="72" y="55" fontSize="11" fontWeight="bold" fill="#15803d">
                    $71.30
                  </text>
                  <rect x="10" y="74" width="125" height="24" rx="2" fill="#f3f4f6" />
                  <text x="45" y="89" fontSize="8.5" fill="#4b5563" fontWeight="600">
                    + Add to Order
                  </text>
                </g>
                <g transform="translate(330, 0)">
                  <rect x="0" y="0" width="145" height="110" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="10" y="8" width="55" height="55" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="10" y1="8" x2="65" y2="63" stroke="#d1d5db" />
                  <line x1="10" y1="63" x2="65" y2="8" stroke="#d1d5db" />
                  <text x="72" y="22" fontSize="8.5" fontWeight="bold" fill="#111827">
                    Whirlpool 2.1
                  </text>
                  <text x="72" y="34" fontSize="8.5" fontWeight="bold" fill="#111827">
                    cu ft Microwave
                  </text>
                  <text x="72" y="55" fontSize="11" fontWeight="bold" fill="#15803d">
                    $800.50
                  </text>
                  <rect x="10" y="74" width="125" height="24" rx="2" fill="#f3f4f6" />
                  <text x="45" y="89" fontSize="8.5" fill="#4b5563" fontWeight="600">
                    + Add to Order
                  </text>
                </g>
                <g transform="translate(495, 0)">
                  <rect x="0" y="0" width="155" height="110" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="10" y="8" width="55" height="55" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="10" y1="8" x2="65" y2="63" stroke="#d1d5db" />
                  <line x1="10" y1="63" x2="65" y2="8" stroke="#d1d5db" />
                  <text x="72" y="22" fontSize="8.5" fontWeight="bold" fill="#111827">
                    Whirlpool 22.1
                  </text>
                  <text x="72" y="34" fontSize="8.5" fontWeight="bold" fill="#111827">
                    Refrigerator
                  </text>
                  <text x="72" y="55" fontSize="11" fontWeight="bold" fill="#15803d">
                    $1,032.16
                  </text>
                  <rect x="10" y="74" width="135" height="24" rx="2" fill="#f3f4f6" />
                  <text x="50" y="89" fontSize="8.5" fill="#4b5563" fontWeight="600">
                    + Add to Order
                  </text>
                </g>
              </g>
            </motion.g>
          </g>

          {/* SERVICES AND CAROUSEL ROWS */}
          <g transform="translate(25, 675)">
            <motion.g
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.46, ease: transitionCurve }}
            >
              <text x="0" y="14" fontSize="12" fontWeight="bold" fill="#111827">
                Services including your delivery
              </text>
              <g transform="translate(0, 26)">
                <g transform="translate(0, 0)">
                  <rect x="0" y="0" width="150" height="70" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="8" y="8" width="30" height="30" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="8" y1="8" x2="38" y2="38" stroke="#d1d5db" />
                  <line x1="8" y1="38" x2="38" y2="8" stroke="#d1d5db" />
                  <text x="44" y="20" fontSize="8.5" fontWeight="bold" fill="#111827">
                    Gas hookup
                  </text>
                  <text x="44" y="32" fontSize="8" fill="#6b7280">
                    Pro installation
                  </text>
                  <text x="8" y="58" fontSize="10" fontWeight="bold" fill="#15803d">
                    $17.00
                  </text>
                </g>
                <g transform="translate(165, 0)">
                  <rect x="0" y="0" width="150" height="70" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="8" y="8" width="30" height="30" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="8" y1="8" x2="38" y2="38" stroke="#d1d5db" />
                  <line x1="8" y1="38" x2="38" y2="8" stroke="#d1d5db" />
                  <text x="44" y="20" fontSize="8.5" fontWeight="bold" fill="#111827">
                    New gas line
                  </text>
                  <text x="44" y="32" fontSize="8" fill="#6b7280">
                    Safety valve test
                  </text>
                  <text x="8" y="58" fontSize="10" fontWeight="bold" fill="#15803d">
                    $11.60
                  </text>
                </g>
                <g transform="translate(330, 0)">
                  <rect x="0" y="0" width="150" height="70" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="8" y="8" width="30" height="30" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="8" y1="8" x2="38" y2="38" stroke="#d1d5db" />
                  <line x1="8" y1="38" x2="38" y2="8" stroke="#d1d5db" />
                  <text x="44" y="20" fontSize="8.5" fontWeight="bold" fill="#111827">
                    Haul away old
                  </text>
                  <text x="44" y="32" fontSize="8" fill="#6b7280">
                    Recycling service
                  </text>
                  <text x="8" y="58" fontSize="10" fontWeight="bold" fill="#15803d">
                    $32.00
                  </text>
                </g>
                <g transform="translate(495, 0)">
                  <rect x="0" y="0" width="155" height="70" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="8" y="8" width="30" height="30" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="8" y1="8" x2="38" y2="38" stroke="#d1d5db" />
                  <text x="44" y="20" fontSize="8.5" fontWeight="bold" fill="#111827">
                    Door removal
                  </text>
                  <text x="44" y="32" fontSize="8" fill="#6b7280">
                    Tight entryways
                  </text>
                  <text x="8" y="58" fontSize="10" fontWeight="bold" fill="#15803d">
                    $52.00
                  </text>
                </g>
              </g>
            </motion.g>
          </g>

          {/* SIMILAR PRODUCTS CAROUSEL ROW */}
          <g transform="translate(25, 795)">
            <motion.g
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5, ease: transitionCurve }}
            >
              <text x="0" y="14" fontSize="12" fontWeight="bold" fill="#111827">
                Similar products
              </text>
              <path d="M 640,48 L 646,55 L 640,62" fill="none" stroke="#6b7280" strokeWidth="2" />
              <g transform="translate(0, 26)">
                <g transform="translate(0, 0)">
                  <rect x="0" y="0" width="110" height="80" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="8" y="6" width="40" height="40" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="8" y1="6" x2="48" y2="46" stroke="#d1d5db" />
                  <line x1="8" y1="46" x2="48" y2="6" stroke="#d1d5db" />
                  <text x="54" y="20" fontSize="8.5" fontWeight="bold" fill="#111827">
                    Whirlpool 30"
                  </text>
                  <text x="54" y="32" fontSize="9" fontWeight="bold" fill="#15803d">
                    $434.12
                  </text>
                </g>
                <g transform="translate(125, 0)">
                  <rect x="0" y="0" width="110" height="80" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="8" y="6" width="40" height="40" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="8" y1="6" x2="48" y2="46" stroke="#d1d5db" />
                  <line x1="8" y1="46" x2="48" y2="6" stroke="#d1d5db" />
                  <text x="54" y="20" fontSize="8.5" fontWeight="bold" fill="#111827">
                    Samsung 30"
                  </text>
                  <text x="54" y="32" fontSize="9" fontWeight="bold" fill="#15803d">
                    $466.96
                  </text>
                </g>
                <g transform="translate(250, 0)">
                  <rect x="0" y="0" width="110" height="80" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="8" y="6" width="40" height="40" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="8" y1="6" x2="48" y2="46" stroke="#d1d5db" />
                  <line x1="8" y1="46" x2="48" y2="6" stroke="#d1d5db" />
                  <text x="54" y="20" fontSize="8.5" fontWeight="bold" fill="#111827">
                    LG Smart Gas
                  </text>
                  <text x="54" y="32" fontSize="9" fontWeight="bold" fill="#15803d">
                    $674.40
                  </text>
                </g>
                <g transform="translate(375, 0)">
                  <rect x="0" y="0" width="110" height="80" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="8" y="6" width="40" height="40" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="8" y1="6" x2="48" y2="46" stroke="#d1d5db" />
                  <line x1="8" y1="46" x2="48" y2="6" stroke="#d1d5db" />
                  <text x="54" y="20" fontSize="8.5" fontWeight="bold" fill="#111827">
                    GE Clean 30"
                  </text>
                  <text x="54" y="32" fontSize="9" fontWeight="bold" fill="#15803d">
                    $468.19
                  </text>
                </g>
                <g transform="translate(500, 0)">
                  <rect x="0" y="0" width="110" height="80" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                  <rect x="8" y="6" width="40" height="40" fill="#f9fafb" stroke="#e5e7eb" />
                  <line x1="8" y1="6" x2="48" y2="46" stroke="#d1d5db" />
                  <line x1="8" y1="46" x2="48" y2="6" stroke="#d1d5db" />
                  <text x="54" y="20" fontSize="8.5" fontWeight="bold" fill="#111827">
                    Maytag 30"
                  </text>
                  <text x="54" y="32" fontSize="9" fontWeight="bold" fill="#15803d">
                    $582.79
                  </text>
                </g>
              </g>
            </motion.g>
          </g>
        </g>

        {/* LAYER 5: MOBILE DEVICE WIREFRAME (FLOATING RIGHT) */}
        {/* Outer static SVG group preserves exact coordinate translation and rotation */}
        <g transform="translate(745, 60) rotate(1.4)" filter="url(#mobileShadow)">
          <motion.g
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease: transitionCurve }}
          >
            {/* Device Body */}
            <rect width="240" height="740" rx="14" fill="#FFFFFF" stroke="#e5e7eb" strokeWidth="1.5" />

            {/* Status Bar */}
            <text x="18" y="22" fontSize="8.5" fontWeight="bold" fill="#111827">
              5:08 PM
            </text>
            <path d="M 205,16 L 210,16 L 210,14 L 222,14 L 222,22 L 210,22 L 210,20 L 205,20 Z" fill="#6b7280" />
            <circle cx="192" cy="18" r="2" fill="#6b7280" />
            <circle cx="186" cy="19" r="1.5" fill="#6b7280" />

            {/* Top Navigation */}
            <g transform="translate(15, 38)">
              <path d="M 12,8 L 4,16 L 12,24" fill="none" stroke="#2563eb" strokeWidth="2" />
              <text x="18" y="20" fontSize="12" fill="#2563eb" fontWeight="600">
                Kitchen
              </text>
            </g>

            {/* Mobile Product Image Placeholder */}
            <g transform="translate(20, 75)">
              <rect x="0" y="0" width="200" height="150" fill="#f9fafb" stroke="#e5e7eb" />
              <line x1="0" y1="0" x2="200" y2="150" stroke="#d1d5db" strokeWidth="1.2" />
              <line x1="0" y1="150" x2="200" y2="0" stroke="#d1d5db" strokeWidth="1.2" />
            </g>

            {/* Mobile Title & Price */}
            <g transform="translate(20, 240)">
              <text x="0" y="14" fontSize="12" fontWeight="bold" fill="#111827">
                Whirlpool 30" Black Gas,
              </text>
              <text x="0" y="28" fontSize="12" fontWeight="bold" fill="#111827">
                Standard Clean Range / Stove
              </text>
              <text x="0" y="46" fontSize="8.5" fill="#6b7280">
                Model: WFG320M0MB
              </text>
              <g transform="translate(0, 60)">
                <text x="0" y="15" fontSize="9" fill="#6b7280">
                  Qty: 1
                </text>
                <text x="60" y="16" fontSize="16" fontWeight="bold" fill="#111827">
                  $499.96
                </text>
                <rect x="0" y="26" width="200" height="30" rx="3" fill="#15803d" />
                <text x="100" y="45" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">
                  Add to Cart
                </text>
              </g>
            </g>

            {/* Mobile Specs List */}
            <g transform="translate(20, 375)">
              <text x="0" y="12" fontSize="10.5" fontWeight="bold" fill="#111827">
                Product Details
              </text>
              <rect x="0" y="18" width="200" height="75" fill="#ffffff" stroke="#e5e7eb" />
              <line x1="0" y1="36" x2="200" y2="36" stroke="#f3f4f6" />
              <line x1="0" y1="54" x2="200" y2="54" stroke="#f3f4f6" />
              <line x1="0" y1="72" x2="200" y2="72" stroke="#f3f4f6" />
              <text x="8" y="30" fontSize="8" fontWeight="bold" fill="#4b5563">
                Product (#)
              </text>
              <text x="120" y="30" fontSize="8" fill="#6b7280">
                871092
              </text>
              <text x="8" y="48" fontSize="8" fontWeight="bold" fill="#4b5563">
                Color
              </text>
              <text x="120" y="48" fontSize="8" fill="#6b7280">
                Black
              </text>
              <text x="8" y="66" fontSize="8" fontWeight="bold" fill="#4b5563">
                Burners
              </text>
              <text x="120" y="66" fontSize="8" fill="#6b7280">
                4 Sealed
              </text>
              <text x="8" y="84" fontSize="8" fontWeight="bold" fill="#4b5563">
                Type
              </text>
              <text x="120" y="84" fontSize="8" fill="#6b7280">
                Freestanding
              </text>
            </g>

            {/* Mobile Frequently Bought Together */}
            <g transform="translate(20, 485)">
              <text x="0" y="12" fontSize="10.5" fontWeight="bold" fill="#111827">
                Frequently Bought Together
              </text>
              <g transform="translate(0, 20)">
                <rect x="0" y="0" width="200" height="42" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                <rect x="6" y="6" width="30" height="30" fill="#f9fafb" stroke="#e5e7eb" />
                <line x1="6" y1="6" x2="36" y2="36" stroke="#d1d5db" />
                <line x1="6" y1="36" x2="36" y2="6" stroke="#d1d5db" />
                <text x="44" y="18" fontSize="8.5" fontWeight="bold" fill="#111827">
                  Universal Gas Range Connector
                </text>
                <text x="44" y="30" fontSize="9" fontWeight="bold" fill="#15803d">
                  $19.60
                </text>
              </g>
              <g transform="translate(0, 70)">
                <rect x="0" y="0" width="200" height="42" fill="#ffffff" stroke="#e5e7eb" rx="2" />
                <rect x="6" y="6" width="30" height="30" fill="#f9fafb" stroke="#e5e7eb" />
                <line x1="6" y1="6" x2="36" y2="36" stroke="#d1d5db" />
                <line x1="6" y1="36" x2="36" y2="6" stroke="#d1d5db" />
                <text x="44" y="18" fontSize="8.5" fontWeight="bold" fill="#111827">
                  Range Power Cord 4-Prong
                </text>
                <text x="44" y="30" fontSize="9" fontWeight="bold" fill="#15803d">
                  $22.80
                </text>
              </g>
            </g>

            {/* Sticky Bottom Sheet Bar */}
            <g transform="translate(0, 680)">
              <rect width="240" height="60" fill="#111827" />
              <text x="18" y="28" fontSize="9.5" fontWeight="bold" fill="#FFFFFF">
                Frequently Bought Together
              </text>
              <text x="18" y="42" fontSize="8" fill="#9ca3af">
                View specs &amp; add-on accessories
              </text>
              <path d="M 210,30 L 216,36 L 210,42" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            </g>
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
