import { motion } from 'framer-motion'

export default function RingReveal({ open = true, glow = true }) {
  return (
    <div className="ring-container">
      <svg
        viewBox="0 0 260 250"
        className="ring"
        role="img"
        aria-label="A sparkling diamond ring in an open velvet proposal box"
      >
        <defs>
          {/* Golden metallic gradient for band */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff6d1" />
            <stop offset="25%" stopColor="#eec366" />
            <stop offset="50%" stopColor="#c5922e" />
            <stop offset="75%" stopColor="#f3d589" />
            <stop offset="100%" stopColor="#9a6e1a" />
          </linearGradient>

          {/* Diamond shine gradient */}
          <linearGradient id="diamondWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#d2eeff" />
          </linearGradient>

          <linearGradient id="diamondBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e1f3ff" />
            <stop offset="50%" stopColor="#b4e1fc" />
            <stop offset="100%" stopColor="#7ac2f5" />
          </linearGradient>

          <linearGradient id="diamondFacet" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#b8e4ff" stopOpacity="0.4" />
          </linearGradient>

          {/* Velvet box colors */}
          <linearGradient id="boxVelvet" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#780d22" />
            <stop offset="40%" stopColor="#530816" />
            <stop offset="100%" stopColor="#2c030b" />
          </linearGradient>

          <linearGradient id="lidInterior" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3d0510" />
            <stop offset="70%" stopColor="#5e091b" />
            <stop offset="100%" stopColor="#87122b" />
          </linearGradient>

          {/* Radial light glow behind the ring */}
          <radialGradient id="divineGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff8e7" stopOpacity="1" />
            <stop offset="35%" stopColor="#ffd875" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#e28ca0" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#e28ca0" stopOpacity="0" />
          </radialGradient>

          {/* Shadow filter */}
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ── 1. BOX LID (Drawn in background so it never covers the ring) ── */}
        <motion.g
          initial={false}
          animate={{
            originY: '175px',
            originX: '130px',
            scaleY: open ? 0.72 : 1,
            y: open ? -62 : 0,
            opacity: 1,
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Lid outer shell */}
          <path
            d="M 68 175 L 60 115 Q 60 102 74 102 L 186 102 Q 200 102 200 115 L 192 175 Z"
            fill="url(#lidInterior)"
            stroke="#d4a34b"
            strokeWidth="1.5"
          />
          {/* Inner satin lining fold */}
          <path
            d="M 75 168 L 70 116 L 190 116 L 185 168 Z"
            fill="#3a040d"
            opacity="0.8"
          />
          {/* Gold rim on lid */}
          <path
            d="M 68 174 L 192 174"
            stroke="url(#goldGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.g>

        {/* ── 2. BOX CUSHION & BASE INTERIOR ── */}
        <ellipse cx="130" cy="176" rx="60" ry="16" fill="#1e0207" />
        <ellipse cx="130" cy="175" rx="56" ry="13" fill="#3f0612" />
        {/* Cushion ring slot */}
        <ellipse cx="130" cy="175" rx="20" ry="3.5" fill="#120104" />

        {/* ── 3. AURA GLOW BEHIND THE RING ── */}
        <motion.circle
          cx="130"
          cy="92"
          r="68"
          fill="url(#divineGlow)"
          animate={{
            opacity: open ? (glow ? [0.65, 1, 0.65] : 0.85) : 0,
            scale: open ? [0.95, 1.08, 0.95] : 0.5,
          }}
          transition={{
            duration: 3,
            repeat: glow ? Infinity : 0,
            ease: 'easeInOut',
          }}
        />

        {/* ── 4. THE RING & DIAMOND (Elevates high into full view) ── */}
        <motion.g
          initial={false}
          animate={{
            y: open ? -72 : 0,
            scale: open ? 1.08 : 0.92,
          }}
          transition={{
            delay: open ? 0.35 : 0,
            duration: 1.6,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          {/* Golden Ring Band */}
          <g filter="url(#softGlow)">
            {/* Outer ring loop */}
            <ellipse
              cx="130"
              cy="166"
              rx="30"
              ry="30"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="7"
            />
            {/* Inner rim highlight */}
            <ellipse
              cx="130"
              cy="166"
              rx="27"
              ry="27"
              fill="none"
              stroke="#fff9e0"
              strokeWidth="1.2"
              opacity="0.75"
            />
            {/* 3D shadow on bottom edge of band */}
            <path
              d="M 103 172 A 30 30 0 0 0 157 172"
              fill="none"
              stroke="#734f12"
              strokeWidth="2.5"
              opacity="0.6"
            />
          </g>

          {/* Gold Prongs Setting */}
          <g>
            <path
              d="M 119 140 L 123 128 M 141 140 L 137 128 M 125 141 L 127 127 M 135 141 L 133 127"
              stroke="url(#goldGrad)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Prong tips */}
            <circle cx="123" cy="127" r="1.8" fill="#fff5cc" />
            <circle cx="137" cy="127" r="1.8" fill="#fff5cc" />
          </g>

          {/* Solitaire Brilliant Cut Diamond */}
          <g>
            {/* Diamond silhouette / base */}
            <polygon
              points="130,143 113,124 120,113 140,113 147,124"
              fill="url(#diamondWhite)"
              stroke="#a6d5f7"
              strokeWidth="1"
            />

            {/* Facets - Pavilion (lower triangle points) */}
            <polygon points="130,143 122,124 130,124" fill="url(#diamondBlue)" opacity="0.85" />
            <polygon points="130,143 130,124 138,124" fill="#a0d5f8" opacity="0.9" />
            <polygon points="130,143 113,124 122,124" fill="#6cb9ec" opacity="0.7" />
            <polygon points="130,143 138,124 147,124" fill="#c3e7fc" opacity="0.95" />

            {/* Facets - Crown (upper geometry) */}
            <polygon points="120,113 140,113 136,124 124,124" fill="url(#diamondWhite)" />
            <polygon points="120,113 124,124 113,124" fill="#d3ecfc" opacity="0.8" />
            <polygon points="140,113 147,124 136,124" fill="#e8f6ff" opacity="0.9" />

            {/* Central Table Facet (top shine) */}
            <polygon points="123,115 137,115 134,121 126,121" fill="#ffffff" />

            {/* Diagonal shimmer highlight */}
            <line
              x1="120"
              y1="114"
              x2="131"
              y2="142"
              stroke="#ffffff"
              strokeWidth="1.8"
              opacity="0.85"
            />
          </g>

          {/* ✦ Diamond Sparkles (Twinkles on diamond facets) */}
          {open && (
            <>
              {/* Primary Star Sparkle (Top-Right) */}
              <motion.g
                animate={{
                  scale: [0.7, 1.35, 0.7],
                  rotate: [0, 90, 180],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ originX: '143px', originY: '114px' }}
              >
                <path
                  d="M 143 106 Q 143 114 151 114 Q 143 114 143 122 Q 143 114 135 114 Q 143 114 143 106 Z"
                  fill="#ffffff"
                />
                <circle cx="143" cy="114" r="1.5" fill="#fffab8" />
              </motion.g>

              {/* Secondary Star Sparkle (Top-Left) */}
              <motion.g
                animate={{
                  scale: [1.2, 0.6, 1.2],
                  rotate: [180, 90, 0],
                  opacity: [0.9, 0.4, 0.9],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
                style={{ originX: '116px', originY: '118px' }}
              >
                <path
                  d="M 116 112 Q 116 118 122 118 Q 116 118 116 124 Q 116 118 110 118 Q 116 118 116 112 Z"
                  fill="#ffffff"
                />
              </motion.g>

              {/* Bottom Heart Shimmer */}
              <motion.g
                animate={{
                  scale: [0.8, 1.25, 0.8],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.4,
                }}
                style={{ originX: '130px', originY: '144px' }}
              >
                <circle cx="130" cy="144" r="2.2" fill="#ffffff" />
              </motion.g>
            </>
          )}
        </motion.g>

        {/* ── 5. BOX BASE FRONT (Never covers elevated ring) ── */}
        <g>
          {/* Main front velvet container */}
          <rect
            x="58"
            y="174"
            width="144"
            height="56"
            rx="10"
            fill="url(#boxVelvet)"
            stroke="#530816"
            strokeWidth="1.5"
          />

          {/* Front velvet highlights */}
          <path
            d="M 64 178 L 196 178"
            stroke="#941830"
            strokeWidth="2"
            opacity="0.7"
          />
          <rect
            x="60"
            y="180"
            width="140"
            height="46"
            rx="8"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
          />

          {/* Luxury Gold Rim along opening seam */}
          <rect
            x="56"
            y="172"
            width="148"
            height="5"
            rx="2.5"
            fill="url(#goldGrad)"
            stroke="#a17520"
            strokeWidth="0.8"
          />

          {/* Front Golden Lock / Clasp */}
          <rect
            x="123"
            y="174"
            width="14"
            height="11"
            rx="3"
            fill="url(#goldGrad)"
            stroke="#754f0e"
            strokeWidth="1"
          />
          <circle cx="130" cy="179" r="1.8" fill="#4d0510" />
        </g>
      </svg>
    </div>
  )
}
