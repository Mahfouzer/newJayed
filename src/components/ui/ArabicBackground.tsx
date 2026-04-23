const glyphs = [
  // large anchors
  { char: 'چ',   x: '8%',   y: '10%',  size: '8rem',   opacity: 0.055, rotate: -15 },
  { char: 'ي',   x: '76%',  y: '5%',   size: '10rem',  opacity: 0.042, rotate: 12  },
  { char: 'د',   x: '88%',  y: '36%',  size: '7rem',   opacity: 0.06,  rotate: -8  },
  { char: 'ن',   x: '80%',  y: '63%',  size: '11rem',  opacity: 0.033, rotate: -5  },
  { char: 'ا',   x: '46%',  y: '70%',  size: '8.5rem', opacity: 0.042, rotate: 10  },
  { char: 'م',   x: '68%',  y: '83%',  size: '7.5rem', opacity: 0.038, rotate: 8   },
  { char: 'و',   x: '53%',  y: '43%',  size: '9rem',   opacity: 0.03,  rotate: 15  },
  { char: 'ب',   x: '2%',   y: '52%',  size: '9rem',   opacity: 0.038, rotate: 20  },
  { char: 'ل',   x: '38%',  y: '22%',  size: '7rem',   opacity: 0.035, rotate: 25  },
  { char: 'ق',   x: '94%',  y: '75%',  size: '6rem',   opacity: 0.04,  rotate: -14 },
  // medium
  { char: 'چيد', x: '60%',  y: '16%',  size: '5rem',   opacity: 0.05,  rotate: 6   },
  { char: 'ء',   x: '20%',  y: '78%',  size: '5.5rem', opacity: 0.05,  rotate: -18 },
  { char: 'ك',   x: '14%',  y: '28%',  size: '6rem',   opacity: 0.045, rotate: -12 },
  { char: 'ر',   x: '91%',  y: '12%',  size: '5.5rem', opacity: 0.05,  rotate: -20 },
  { char: 'ط',   x: '33%',  y: '90%',  size: '6.5rem', opacity: 0.036, rotate: 5   },
  { char: 'ة',   x: '4%',   y: '86%',  size: '5rem',   opacity: 0.052, rotate: -8  },
  { char: 'ص',   x: '25%',  y: '8%',   size: '6rem',   opacity: 0.04,  rotate: 18  },
  { char: 'ع',   x: '42%',  y: '55%',  size: '7rem',   opacity: 0.032, rotate: -22 },
  { char: 'غ',   x: '70%',  y: '48%',  size: '5.5rem', opacity: 0.038, rotate: 9   },
  { char: 'ف',   x: '57%',  y: '88%',  size: '6rem',   opacity: 0.042, rotate: -6  },
  { char: 'ح',   x: '17%',  y: '44%',  size: '5rem',   opacity: 0.048, rotate: 30  },
  { char: 'خ',   x: '84%',  y: '92%',  size: '7rem',   opacity: 0.033, rotate: -10 },
  { char: 'ذ',   x: '96%',  y: '50%',  size: '5.5rem', opacity: 0.044, rotate: 16  },
  { char: 'ز',   x: '28%',  y: '60%',  size: '4.5rem', opacity: 0.05,  rotate: -28 },
  { char: 'س',   x: '10%',  y: '70%',  size: '6.5rem', opacity: 0.035, rotate: 12  },
  { char: 'ش',   x: '50%',  y: '30%',  size: '5rem',   opacity: 0.038, rotate: -5  },
  { char: 'ض',   x: '74%',  y: '25%',  size: '6rem',   opacity: 0.03,  rotate: 22  },
  { char: 'ظ',   x: '35%',  y: '75%',  size: '5.5rem', opacity: 0.04,  rotate: -15 },
  // small accents
  { char: 'ت',   x: '63%',  y: '60%',  size: '4rem',   opacity: 0.045, rotate: 7   },
  { char: 'ث',   x: '1%',   y: '20%',  size: '4.5rem', opacity: 0.04,  rotate: -32 },
  { char: 'ج',   x: '48%',  y: '95%',  size: '4rem',   opacity: 0.05,  rotate: 18  },
  { char: 'ه',   x: '87%',  y: '80%',  size: '4.5rem', opacity: 0.038, rotate: -8  },
  { char: 'ى',   x: '22%',  y: '95%',  size: '4rem',   opacity: 0.045, rotate: 5   },
  { char: 'لا',  x: '6%',   y: '37%',  size: '4.5rem', opacity: 0.04,  rotate: -18 },
]

// Each glyph gets a unique float pattern - vary duration (6–14s) and delay (0–8s)
const floatParams = glyphs.map((_, i) => ({
  duration: 4 + (i * 0.9) % 5,
  delay: (i * 1.3) % 6,
  // alternate between floating up vs drifting diagonally for variety
  name: i % 3 === 0 ? 'arabic-float-a' : i % 3 === 1 ? 'arabic-float-b' : 'arabic-float-c',
}))

interface ArabicBackgroundProps {
  vignetteBg?: string
}

export function ArabicBackground({ vignetteBg = 'var(--c-bg)' }: ArabicBackgroundProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes arabic-float-a {
          0%, 100% { transform: var(--base-rotate) translateY(0px); }
          50%       { transform: var(--base-rotate) translateY(-18px); }
        }
        @keyframes arabic-float-b {
          0%, 100% { transform: var(--base-rotate) translate(0px, 0px); }
          33%       { transform: var(--base-rotate) translate(10px, -14px); }
          66%       { transform: var(--base-rotate) translate(-8px, -8px); }
        }
        @keyframes arabic-float-c {
          0%, 100% { transform: var(--base-rotate) translateY(0px) scale(1); }
          50%       { transform: var(--base-rotate) translateY(-12px) scale(1.04); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes arabic-float-a { 0%, 100% { transform: var(--base-rotate); } }
          @keyframes arabic-float-b { 0%, 100% { transform: var(--base-rotate); } }
          @keyframes arabic-float-c { 0%, 100% { transform: var(--base-rotate); } }
        }
      `}</style>

      {glyphs.map((g, i) => (
        <span
          key={i}
          className="absolute text-[#F55E00] leading-none"
          style={{
            fontFamily: 'var(--font-arabic)',
            left: g.x,
            top: g.y,
            fontSize: g.size,
            opacity: g.opacity,
            filter: 'blur(0.8px)',
            lineHeight: 1,
            // CSS custom property carries the base rotation so keyframes can compose on top
            ['--base-rotate' as string]: `rotate(${g.rotate}deg)`,
            transform: `rotate(${g.rotate}deg)`,
            animation: `${floatParams[i].name} ${floatParams[i].duration}s ease-in-out ${floatParams[i].delay}s infinite`,
          }}
        >
          {g.char}
        </span>
      ))}

      {/* Radial vignette - fades letters at edges, keeps center readable */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, ${vignetteBg} 100%)`,
        }}
      />
    </div>
  )
}
