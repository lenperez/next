import { motion } from "motion/react";

export function GraingerAnimatedBanner() {
  const transitionCurve = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#173d72]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full block object-cover object-top lg:rounded-t-2xl"
        style={{
          background: "#173d72",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <defs>
          {/* Background Radial Gradient (Blue #173d72) */}
          <radialGradient id="graingerBgGlow" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#2d66bd" />
            <stop offset="50%" stopColor="#1e4a87" />
            <stop offset="100%" stopColor="#122e57" />
          </radialGradient>
          <radialGradient id="graingerNavyAmbient" cx="48%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#122e57" stopOpacity="0" />
          </radialGradient>

          {/* Deep Drop Shadows for Sheets */}
          <filter id="graingerWireframeShadow" x="-15%" y="-15%" width="130%" height="135%">
            <feDropShadow dx="-8" dy="16" stdDeviation="20" floodColor="#000000" floodOpacity="0.65" />
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.3" />
          </filter>

          <filter id="graingerHifiShadow" x="-15%" y="-15%" width="130%" height="135%">
            <feDropShadow dx="12" dy="24" stdDeviation="28" floodColor="#000000" floodOpacity="0.8" />
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000000" floodOpacity="0.4" />
          </filter>

          {/* Clip Paths */}
          <clipPath id="graingerWireframeClip">
            <rect width="760" height="820" rx="6" />
          </clipPath>
          <clipPath id="graingerHifiClip">
            <rect width="860" height="840" rx="6" />
          </clipPath>

          {/* Grainger Brand Red Badge Component */}
          <linearGradient id="graingerRedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>

        {/* LAYER 1: BACKGROUND CANVAS & ARCHITECTURAL GRID (0ms - 200ms) */}
        <motion.rect
          width="1600"
          height="1000"
          fill="url(#graingerBgGlow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
        <motion.rect
          width="1600"
          height="1000"
          fill="url(#graingerNavyAmbient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />

        {/* SUBTLE ARCHITECTURAL GRID BACKGROUND */}
        <motion.g
          stroke="#ffffff"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <line x1="0" y1="200" x2="1600" y2="200" />
          <line x1="0" y1="400" x2="1600" y2="400" />
          <line x1="0" y1="600" x2="1600" y2="600" />
          <line x1="0" y1="800" x2="1600" y2="800" />
          <line x1="400" y1="0" x2="400" y2="1000" />
          <line x1="800" y1="0" x2="800" y2="1000" />
          <line x1="1200" y1="0" x2="1200" y2="1000" />
        </motion.g>

        {/* ======================================================== */}
        {/* LAYER 2: LO-FI WIREFRAME SPECIFICATION SHEET (LEFT LAYER) */}
        {/* ======================================================== */}
        <g transform="translate(80, 100) rotate(-2 380 410)" filter="url(#graingerWireframeShadow)">
          <motion.g
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.1, ease: transitionCurve }}
          >
            {/* White Paper Sheet */}
            <rect width="760" height="820" rx="6" fill="#ffffff" stroke="#d1d5db" strokeWidth="1" />

            <g clipPath="url(#graingerWireframeClip)">
              {/* Top Label Ribbon */}
              <rect width="760" height="28" fill="#f8fafc" />
              <text x="20" y="18" fontSize="10" fontWeight="700" fill="#64748b" letterSpacing="0.5">
                SYSTEM ARCHITECTURE &amp; INTERACTION WIREFRAME
              </text>
              <line x1="0" y1="28" x2="760" y2="28" stroke="#e2e8f0" strokeWidth="1" />

              <g transform="translate(30, 48)">
                {/* Customer & Ship To Inputs */}
                <g>
                  <text x="0" y="12" fontSize="11" fontWeight="600" fill="#1e293b">Customer</text>
                  <rect x="0" y="18" width="180" height="26" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
                  <text x="10" y="35" fontSize="11" fontFamily="monospace" fill="#334155">#########</text>
                  <rect x="190" y="18" width="26" height="26" rx="3" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
                  <circle cx="201" cy="29" r="4" fill="none" stroke="#1e293b" strokeWidth="1.5" />
                  <line x1="204" y1="32" x2="209" y2="37" stroke="#1e293b" strokeWidth="1.5" />
                  <text x="228" y="35" fontSize="11" fill="#334155">Customer Name</text>
                </g>

                <g transform="translate(360, 0)">
                  <text x="0" y="12" fontSize="11" fontWeight="600" fill="#1e293b">Ship To:</text>
                  <rect x="0" y="18" width="180" height="26" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
                  <text x="10" y="35" fontSize="11" fill="#64748b">Location Code</text>
                  <rect x="190" y="18" width="26" height="26" rx="3" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
                  <circle cx="201" cy="29" r="4" fill="none" stroke="#1e293b" strokeWidth="1.5" />
                  <line x1="204" y1="32" x2="209" y2="37" stroke="#1e293b" strokeWidth="1.5" />
                  <text x="228" y="35" fontSize="11" fill="#334155">Location Name</text>
                </g>

                {/* Staggered Wireframe Details */}
                <motion.g
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.38, delay: 0.22, ease: transitionCurve }}
                >
                  {/* Navigation Tabs: [ Main ] [ Subsidy ] [ Shoes ] */}
                  <g transform="translate(0, 68)">
                    {/* Main Tab (Active with bold top line) */}
                    <rect x="0" y="0" width="125" height="36" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
                    <rect x="0" y="0" width="125" height="4" fill="#0f172a" />
                    <text x="62" y="22" fontSize="12" fontWeight="700" fill="#0f172a" textAnchor="middle">
                      Main
                    </text>

                    <rect x="132" y="8" width="125" height="28" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                    <text x="194" y="26" fontSize="11.5" fill="#334155" textAnchor="middle">
                      Subsidy
                    </text>

                    <rect x="264" y="8" width="125" height="28" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                    <text x="326" y="26" fontSize="11.5" fill="#334155" textAnchor="middle">
                      Shoes
                    </text>
                  </g>

                  {/* Company Info Section */}
                  <g transform="translate(0, 125)">
                    <text x="0" y="15" fontSize="14" fontWeight="800" fill="#0f172a">Company Info</text>
                    <rect x="550" y="0" width="18" height="18" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                    <path d="M 554,9 L 558,13 L 565,5" fill="none" stroke="#1e293b" strokeWidth="2" />
                    <text x="578" y="14" fontSize="11" fill="#1e293b">Same as Shipping</text>

                    {/* Input Grid */}
                    <g transform="translate(0, 26)" fontSize="10" fill="#334155">
                      <text x="0" y="10">Name</text>
                      <rect x="0" y="16" width="170" height="24" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="10" y="32" fill="#64748b">company name</text>

                      <text x="190" y="10">City</text>
                      <rect x="190" y="16" width="170" height="24" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="200" y="32" fill="#64748b">City</text>

                      <text x="380" y="10">State</text>
                      <rect x="380" y="16" width="170" height="24" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="390" y="32" fill="#64748b">drop down</text>
                      <path d="M 535,28 L 540,33 L 545,28" fill="none" stroke="#1e293b" strokeWidth="1.5" />

                      {/* Address lines */}
                      <text x="0" y="56">Address</text>
                      <rect x="0" y="62" width="170" height="20" fill="#ffffff" stroke="#334155" strokeWidth="0.8" />
                      <text x="10" y="76" fontSize="9" fill="#64748b">Address Line 1</text>
                      <rect x="0" y="86" width="170" height="20" fill="#ffffff" stroke="#334155" strokeWidth="0.8" />
                      <text x="10" y="100" fontSize="9" fill="#64748b">Address Line 2</text>
                      <rect x="0" y="110" width="170" height="20" fill="#ffffff" stroke="#334155" strokeWidth="0.8" />
                      <text x="10" y="124" fontSize="9" fill="#64748b">Address Line 3</text>

                      <text x="190" y="56">ZIP Code</text>
                      <rect x="190" y="62" width="170" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="200" y="77" fontFamily="monospace" fill="#64748b">######-####</text>

                      <text x="190" y="98">Tax Code</text>
                      <rect x="190" y="104" width="170" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="200" y="119" fill="#64748b">Code</text>
                      <rect x="370" y="104" width="22" height="22" rx="2" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <circle cx="379" cy="113" r="3.5" fill="none" stroke="#1e293b" strokeWidth="1.2" />
                      <line x1="381.5" y1="115.5" x2="386" y2="120" stroke="#1e293b" strokeWidth="1.2" />
                      <text x="402" y="119" fontSize="10.5" fill="#334155">Tax Rate #</text>
                    </g>
                  </g>

                  {/* Divider line */}
                  <line x1="0" y1="295" x2="700" y2="295" stroke="#334155" strokeWidth="1" />

                  {/* Contact Info & Shipping Info */}
                  <g transform="translate(0, 310)">
                    <text x="0" y="15" fontSize="14" fontWeight="800" fill="#0f172a">Contact Info</text>
                    <text x="360" y="15" fontSize="14" fontWeight="800" fill="#0f172a">Shipping Info</text>

                    <g transform="translate(0, 26)" fontSize="10" fill="#334155">
                      <text x="0" y="10">Sched</text>
                      <text x="160" y="10">Phone</text>
                      <rect x="0" y="16" width="145" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="10" y="30" fill="#64748b">employee name</text>
                      <rect x="160" y="16" width="145" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="170" y="30" fill="#64748b">text field</text>

                      <text x="0" y="50">Arrival</text>
                      <text x="160" y="50">Phone</text>
                      <rect x="0" y="56" width="145" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="10" y="70" fill="#64748b">employee name</text>
                      <rect x="160" y="56" width="145" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="170" y="70" fill="#64748b">text field</text>

                      <text x="0" y="90">Billing</text>
                      <text x="160" y="90">Phone</text>
                      <rect x="0" y="96" width="145" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="10" y="110" fill="#64748b">employee name</text>
                      <rect x="160" y="96" width="145" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="170" y="110" fill="#64748b">text field</text>
                    </g>

                    <g transform="translate(360, 26)" fontSize="10" fill="#334155">
                      <text x="0" y="10">Sent to</text>
                      <text x="160" y="10">Attention</text>
                      <rect x="0" y="16" width="145" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="10" y="30" fill="#64748b">drop down</text>
                      <path d="M 132,28 L 137,33 L 142,28" fill="none" stroke="#1e293b" strokeWidth="1.5" />
                      <rect x="160" y="16" width="155" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="170" y="30" fill="#64748b">text field</text>
                    </g>
                  </g>

                  {/* Divider line */}
                  <line x1="0" y1="460" x2="700" y2="460" stroke="#334155" strokeWidth="1" />

                  {/* What is Required Section */}
                  <g transform="translate(0, 480)">
                    <text x="0" y="15" fontSize="14" fontWeight="800" fill="#0f172a">What is Required?</text>

                    {/* Checkbox grid */}
                    <g transform="translate(0, 26)" fontSize="9.5" fill="#334155">
                      <g transform="translate(0, 0)">
                        <rect width="16" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M 3,8 L 7,12 L 13,4" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <text x="24" y="12">check box</text>
                      </g>
                      <g transform="translate(115, 0)">
                        <rect width="16" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M 3,8 L 7,12 L 13,4" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <text x="24" y="12">check box</text>
                      </g>
                      <g transform="translate(230, 0)">
                        <rect width="16" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M 3,8 L 7,12 L 13,4" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <text x="24" y="12">check box</text>
                      </g>
                      <g transform="translate(345, 0)">
                        <rect width="16" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M 3,8 L 7,12 L 13,4" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <text x="24" y="12">check box</text>
                      </g>
                      <g transform="translate(460, 0)">
                        <rect width="16" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M 3,8 L 7,12 L 13,4" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <text x="24" y="12">check box</text>
                      </g>

                      {/* Row 2 */}
                      <g transform="translate(0, 26)">
                        <rect width="16" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M 3,8 L 7,12 L 13,4" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <text x="24" y="12">check box</text>
                      </g>
                      <g transform="translate(115, 26)">
                        <rect width="16" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M 3,8 L 7,12 L 13,4" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <text x="24" y="12">check box</text>
                      </g>
                      <g transform="translate(230, 26)">
                        <rect width="16" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M 3,8 L 7,12 L 13,4" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <text x="24" y="12">check box</text>
                      </g>
                      <g transform="translate(345, 26)">
                        <rect width="16" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M 3,8 L 7,12 L 13,4" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <text x="24" y="12">check box</text>
                      </g>
                      <g transform="translate(460, 26)">
                        <rect width="16" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M 3,8 L 7,12 L 13,4" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <text x="24" y="12">check box</text>
                      </g>
                    </g>

                    {/* Customer PO & Fulfillment DC */}
                    <g transform="translate(0, 95)" fontSize="10" fill="#334155">
                      <text x="0" y="10">Customer PO</text>
                      <rect x="0" y="16" width="155" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="10" y="30" fill="#64748b">Code</text>

                      <text x="180" y="10">Fulfillment DC</text>
                      <rect x="180" y="16" width="155" height="22" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <text x="190" y="30" fill="#64748b">Code</text>
                      <rect x="345" y="16" width="22" height="22" rx="2" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                      <circle cx="354" cy="25" r="3.5" fill="none" stroke="#1e293b" strokeWidth="1.2" />
                      <line x1="356.5" y1="27.5" x2="361" y2="32" stroke="#1e293b" strokeWidth="1.2" />
                      <text x="377" y="30" fontSize="10.5" fill="#334155">Company Name</text>
                    </g>
                  </g>
                </motion.g>
              </g>
            </g>
          </motion.g>
        </g>

        {/* ======================================================== */}
        {/* LAYER 3: HI-FI PRODUCTION UI COMP (ELEVATED FOREGROUND)  */}
        {/* ======================================================== */}
        <g transform="translate(670, 90)" filter="url(#graingerHifiShadow)">
          <motion.g
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.44, delay: 0.28, ease: transitionCurve }}
          >
            {/* Browser Window Frame */}
            <rect width="860" height="840" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />

            <g clipPath="url(#graingerHifiClip)">
              {/* Top Grainger Header Bar (Black with Red Logo) */}
              <rect width="860" height="52" fill="#1c1917" />
              <rect y="50" width="860" height="3" fill="#dc2626" />

              {/* GRAINGER Logo */}
              <g transform="translate(25, 12)">
                {/* Grainger Bold White Lettermark */}
                <text x="0" y="20" fontSize="22" fontWeight="900" fontStyle="italic" fill="#ffffff" letterSpacing="1">
                  GRAINGER
                </text>
                <rect x="0" y="23" width="125" height="8" rx="1" fill="#dc2626" />
                <text x="62" y="29" fontSize="5" fontWeight="800" fill="#ffffff" textAnchor="middle" letterSpacing="0.3">
                  FOR THE ONES WHO GET IT DONE
                </text>
              </g>

              {/* Right Header: Benefits Management System */}
              <g transform="translate(600, 16)" textAnchor="end">
                <text x="235" y="13" fontSize="14" fontWeight="700" fill="#ffffff">
                  Benefits Management System
                </text>
                <text x="235" y="27" fontSize="9.5" fill="#a8a29e">
                  Welcome <tspan fill="#ffffff" fontWeight="700">Len Perez</tspan> | <tspan fill="#0284c7">Sign Out</tspan>
                </text>
              </g>

              {/* Breadcrumbs & Account Search Bar */}
              <g transform="translate(0, 53)">
                <rect width="860" height="32" fill="#ffffff" />
                <line x1="0" y1="32" x2="860" y2="32" stroke="#e2e8f0" strokeWidth="1" />
                <text x="25" y="20" fontSize="9.5" fill="#0284c7">
                  Home <tspan fill="#94a3b8">/</tspan> Account #083748596 <tspan fill="#94a3b8">/</tspan> Location <tspan fill="#94a3b8">/</tspan>{" "}
                  <tspan fill="#64748b">Catalog</tspan>
                </text>

                {/* Search input right */}
                <g transform="translate(620, 4)">
                  <rect width="170" height="24" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="8" y="15" fontSize="8.5" fill="#94a3b8">
                    Search for an Account Number
                  </text>
                  <rect x="170" y="0" width="45" height="24" fill="#0284c7" />
                  <circle cx="190" cy="11" r="3.5" fill="none" stroke="#ffffff" strokeWidth="1.4" />
                  <line x1="192.5" y1="13.5" x2="196.5" y2="17.5" stroke="#ffffff" strokeWidth="1.4" />
                </g>
              </g>

              {/* Account Header Bar (Light Grey) */}
              <g transform="translate(0, 85)">
                <rect width="860" height="44" fill="#f5f5f4" />
                <line x1="0" y1="44" x2="860" y2="44" stroke="#e7e5e4" strokeWidth="1" />
                <text x="25" y="19" fontSize="12" fontWeight="800" fill="#1c1917">
                  Honda Manufacturing of America, Inc.
                </text>
                <text x="25" y="33" fontSize="9.5" fill="#78716c">
                  123 Primary Address, Ctiy, ST 12345-6789
                </text>
                <text x="835" y="26" fontSize="11.5" fontWeight="600" fill="#44403c" textAnchor="end">
                  Account <tspan fontWeight="800" fill="#1c1917">#083748596</tspan>
                </text>
              </g>

              {/* MAIN APP BODY: SIDEBAR + CONTENT */}
              <g transform="translate(0, 129)">
                {/* Sidebar Border */}
                <line x1="205" y1="0" x2="205" y2="710" stroke="#e7e5e4" strokeWidth="1" />

                {/* ============================================== */}
                {/* LEFT SIDEBAR (Staggered Animation)             */}
                {/* ============================================== */}
                <g transform="translate(20, 18)">
                  <motion.g
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.36, delay: 0.38, ease: transitionCurve }}
                  >
                  {/* Shoe of Gary Location */}
                  <g>
                    <text x="0" y="12" fontSize="12" fontWeight="800" fill="#1c1917">
                      📍 Shoe of Gary
                    </text>
                    <text x="150" y="12" fontSize="9.5" fontWeight="700" fill="#0284c7">
                      Edit
                    </text>
                    <text x="16" y="25" fontSize="8.5" fill="#78716c">
                      456 Secondary Address
                    </text>
                    <text x="16" y="35" fontSize="8.5" fill="#78716c">
                      Suite 1300
                    </text>
                    <text x="16" y="45" fontSize="8.5" fill="#78716c">
                      Gary, IN 12345-6789
                    </text>
                  </g>

                  <g transform="translate(0, 58)">
                    <text x="0" y="12" fontSize="10" fontWeight="700" fill="#1c1917">
                      Ship Order To
                    </text>
                    <text x="150" y="12" fontSize="9.5" fontWeight="700" fill="#0284c7">
                      Edit
                    </text>
                    <text x="0" y="24" fontSize="8.5" fill="#78716c">
                      Location
                    </text>
                  </g>

                  <g transform="translate(0, 92)">
                    <text x="0" y="12" fontSize="10" fontWeight="700" fill="#1c1917">
                      Billing Options
                    </text>
                    <text x="150" y="12" fontSize="9.5" fontWeight="700" fill="#0284c7">
                      Edit
                    </text>
                    <text x="0" y="24" fontSize="8.5" fill="#78716c">
                      Combine Invoices
                    </text>
                  </g>

                  {/* Add A Location Button */}
                  <g transform="translate(0, 126)">
                    <rect width="135" height="28" rx="3" fill="#57534e" />
                    <text x="67" y="18" fontSize="9.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
                      Add A Location
                    </text>
                  </g>

                  {/* Safety Program Navigation Menu */}
                  <g transform="translate(0, 172)">
                    <text x="20" y="15" fontSize="11.5" fontWeight="800" fill="#1c1917">
                      Safety Program
                    </text>
                    <line x1="0" y1="24" x2="185" y2="24" stroke="#e7e5e4" strokeWidth="1" />

                    {/* Active Catalog Tab with pointer chevron */}
                    <g transform="translate(0, 32)">
                      <rect x="-10" y="-5" width="195" height="30" fill="#f5f5f4" />
                      {/* Chevron pointer sticking into main content */}
                      <path d="M 185,0 L 195,10 L 185,20" fill="#ffffff" stroke="#e7e5e4" strokeWidth="1" />
                      {/* Box icon */}
                      <rect x="15" y="2" width="12" height="12" rx="1" fill="none" stroke="#0284c7" strokeWidth="1.4" />
                      <text x="36" y="12" fontSize="11" fontWeight="700" fill="#0284c7">
                        Catalog
                      </text>
                    </g>

                    {/* Roster Tab */}
                    <g transform="translate(0, 68)">
                      {/* User icon */}
                      <circle cx="21" cy="6" r="4" fill="#78716c" />
                      <path d="M 15,16 C 15,12 27,12 27,16 z" fill="#78716c" />
                      <text x="36" y="12" fontSize="11" fill="#44403c">
                        Roster
                      </text>
                    </g>
                  </g>

                  {/* Contacts Section */}
                  <g transform="translate(0, 275)">
                    <text x="40" y="15" fontSize="11.5" fontWeight="800" fill="#1c1917">
                      Contacts
                    </text>
                    <line x1="0" y1="24" x2="185" y2="24" stroke="#e7e5e4" strokeWidth="1" />

                    <g transform="translate(0, 32)" fontSize="8.5">
                      <text x="0" y="10" fontWeight="700" fill="#1c1917">Scheduler</text>
                      <text x="150" y="10" fontWeight="700" fill="#0284c7">Edit</text>
                      <text x="0" y="20" fill="#78716c">Len Perez</text>
                      <text x="0" y="30" fill="#0284c7">len.perez@company.com</text>
                      <text x="0" y="40" fill="#78716c">+1 (888) 888 - 8888</text>
                    </g>

                    <g transform="translate(0, 84)" fontSize="8.5">
                      <text x="0" y="10" fontWeight="700" fill="#1c1917">Arrival</text>
                      <text x="150" y="10" fontWeight="700" fill="#0284c7">Edit</text>
                      <text x="0" y="20" fill="#78716c">Dan Ertman</text>
                      <text x="0" y="30" fill="#0284c7">dan.ertman@company.com</text>
                      <text x="0" y="40" fill="#78716c">+1 (888) 888 - 8888</text>
                    </g>

                    <g transform="translate(0, 136)" fontSize="8.5">
                      <text x="0" y="10" fontWeight="700" fill="#1c1917">Roster</text>
                      <text x="150" y="10" fontWeight="700" fill="#0284c7">Edit</text>
                      <text x="0" y="20" fill="#78716c">Susan Arnold</text>
                      <text x="0" y="30" fill="#0284c7">susan.arnold@company...</text>
                      <text x="0" y="40" fill="#78716c">+1 (888) 888 - 8888</text>
                    </g>
                  </g>
                </motion.g>
              </g>

                {/* ============================================== */}
                {/* MAIN CONTENT: CATALOG GROUPINGS               */}
                {/* ============================================== */}
                <g transform="translate(225, 18)">
                  <motion.g
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.38, delay: 0.44, ease: transitionCurve }}
                  >
                    <text x="0" y="18" fontSize="18" fontWeight="700" fill="#1c1917">
                      Catalog
                    </text>

                  {/* Section Subheader */}
                  <g transform="translate(0, 32)">
                    <text x="0" y="12" fontSize="12" fontWeight="800" fill="#b91c1c">
                      Catalog Groupings
                    </text>
                    <text x="595" y="12" fontSize="10" fontWeight="700" fill="#0284c7" textAnchor="end">
                      + Create a New Grouping
                    </text>
                  </g>

                  {/* Expandable Grouping Accordion: Safety Boots [-] */}
                  <g transform="translate(0, 52)">
                    <rect width="600" height="28" rx="2" fill="#e7e5e4" />
                    <text x="15" y="18" fontSize="11" fontWeight="800" fill="#1c1917">
                      Safety Boots
                    </text>
                    <rect x="570" y="7" width="14" height="14" rx="1" fill="#44403c" />
                    <line x1="573" y1="14" x2="581" y2="14" stroke="#ffffff" strokeWidth="1.5" />

                    {/* Form Content Box */}
                    <g transform="translate(0, 36)">
                      {/* Left: Grouping Inputs */}
                      <g>
                        <text x="0" y="12" fontSize="10" fontWeight="700" fill="#44403c">
                          Grouping Name
                        </text>
                        <rect x="0" y="18" width="255" height="26" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                        <text x="10" y="35" fontSize="10" fill="#1c1917">
                          Safety Boots
                        </text>

                        {/* Select Products */}
                        <text x="0" y="68" fontSize="12" fontWeight="700" fill="#1c1917">
                          Select Product(s)
                        </text>
                        <text x="0" y="86" fontSize="9" fontWeight="700" fill="#44403c">
                          Product Selection "Type"
                        </text>
                        <rect x="0" y="92" width="150" height="26" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                        <text x="10" y="109" fontSize="9.5" fill="#0284c7">
                          SKU(s)
                        </text>
                        <path d="M 135,103 L 140,108 L 145,103" fill="none" stroke="#0284c7" strokeWidth="1.4" />

                        <text x="0" y="136" fontSize="9" fontWeight="700" fill="#44403c">
                          Enter SKU(s)
                        </text>
                        <text x="0" y="148" fontSize="8" fill="#78716c">
                          Separate SKU(s) with a SEMI-COLON
                        </text>
                        <rect x="0" y="154" width="255" height="85" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />

                        {/* Add Selection Button */}
                        <rect x="0" y="248" width="95" height="22" rx="2" fill="#f5f5f4" stroke="#cbd5e1" strokeWidth="1" />
                        <text x="47" y="263" fontSize="9" fontWeight="700" fill="#44403c" textAnchor="middle">
                          Add Selection
                        </text>
                      </g>

                      {/* Right: Current Grouping Selection(s) Card */}
                      <g transform="translate(280, 18)">
                        <rect width="280" height="200" rx="2" fill="#fafaf9" stroke="#f5f5f4" strokeWidth="1" />
                        <g transform="translate(15, 20)">
                          <text x="0" y="0" fontSize="11.5" fontWeight="700" fill="#1c1917">
                            Current Grouping Selection(s)
                          </text>

                          <text x="0" y="24" fontSize="9" fontWeight="700" fill="#44403c">
                            Category:
                          </text>
                          <g transform="translate(0, 32)">
                            <rect x="0" y="0" width="9" height="9" rx="1" fill="#44403c" />
                            <text x="4.5" y="7.5" fontSize="7" fill="#ffffff" textAnchor="middle">
                              ✕
                            </text>
                            <text x="14" y="8" fontSize="8" fill="#0284c7">
                              Safety &gt; Footwear and Footwear
                            </text>
                            <text x="14" y="18" fontSize="8" fill="#0284c7">
                              Accessories &gt; Steel-Toe Work Boots and Shoes
                            </text>
                          </g>

                          <text x="0" y="72" fontSize="9" fontWeight="700" fill="#44403c">
                            SKU(s):
                          </text>
                          <g transform="translate(0, 80)">
                            <rect x="0" y="0" width="9" height="9" rx="1" fill="#44403c" />
                            <text x="4.5" y="7.5" fontSize="7" fill="#ffffff" textAnchor="middle">
                              ✕
                            </text>
                            <text x="14" y="8" fontSize="8.5" fill="#0284c7">
                              12K427
                            </text>

                            <rect x="65" y="0" width="9" height="9" rx="1" fill="#44403c" />
                            <text x="69.5" y="7.5" fontSize="7" fill="#ffffff" textAnchor="middle">
                              ✕
                            </text>
                            <text x="79" y="8" fontSize="8.5" fill="#0284c7">
                              12K435
                            </text>
                          </g>

                          <text x="0" y="110" fontSize="9" fontWeight="700" fill="#44403c">
                            Manufacturer Model #(s):
                          </text>
                          <g transform="translate(0, 118)">
                            <rect x="0" y="0" width="9" height="9" rx="1" fill="#44403c" />
                            <text x="4.5" y="7.5" fontSize="7" fill="#ffffff" textAnchor="middle">
                              ✕
                            </text>
                            <text x="14" y="8" fontSize="8" fill="#44403c">
                              G0019-10M
                            </text>

                            <rect x="85" y="0" width="9" height="9" rx="1" fill="#44403c" />
                            <text x="89.5" y="7.5" fontSize="7" fill="#ffffff" textAnchor="middle">
                              ✕
                            </text>
                            <text x="99" y="8" fontSize="8" fill="#44403c">
                              IA0103-10M
                            </text>
                          </g>
                        </g>
                      </g>

                      {/* Divider and CTA Buttons */}
                      <g transform="translate(0, 285)">
                        <line x1="0" y1="0" x2="600" y2="0" stroke="#e7e5e4" strokeWidth="1" strokeDasharray="2,2" />
                        <rect x="0" y="14" width="130" height="30" rx="2" fill="#0284c7" />
                        <text x="65" y="33" fontSize="10.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
                          Update Grouping
                        </text>
                        <text x="150" y="33" fontSize="10" fill="#0284c7">
                          Cancel
                        </text>
                        <text x="595" y="33" fontSize="10" fill="#0284c7" textAnchor="end">
                          Delete Grouping
                        </text>
                      </g>

                      {/* Grouping Row 2: Socks [+] */}
                      <g transform="translate(0, 345)">
                        <rect width="600" height="28" rx="2" fill="#e7e5e4" />
                        <text x="15" y="18" fontSize="11" fontWeight="800" fill="#1c1917">
                          Socks
                        </text>
                        <rect x="570" y="7" width="14" height="14" rx="1" fill="#0284c7" />
                        <text x="577" y="18" fontSize="12" fontWeight="700" fill="#ffffff" textAnchor="middle">
                          +
                        </text>
                      </g>
                    </g>
                  </g>
                </motion.g>
              </g>
              </g>
            </g>
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
