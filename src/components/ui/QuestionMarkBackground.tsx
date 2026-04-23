const marks = [
  // large anchors
  { char: '?', x: '10%', y: '8%', size: '9rem', opacity: 0.05, rotate: -14 },
  { char: '?', x: '78%', y: '6%', size: '11rem', opacity: 0.038, rotate: 12 },
  { char: '?', x: '90%', y: '34%', size: '8rem', opacity: 0.056, rotate: -8 },
  { char: '?', x: '82%', y: '64%', size: '12rem', opacity: 0.03, rotate: -6 },
  { char: '?', x: '46%', y: '70%', size: '9rem', opacity: 0.04, rotate: 9 },
  { char: '?', x: '66%', y: '84%', size: '8rem', opacity: 0.036, rotate: 7 },
  { char: '?', x: '54%', y: '44%', size: '10rem', opacity: 0.03, rotate: 15 },
  { char: '?', x: '3%', y: '54%', size: '10rem', opacity: 0.036, rotate: 20 },
  { char: '?', x: '40%', y: '22%', size: '7.5rem', opacity: 0.034, rotate: 24 },
  { char: '?', x: '95%', y: '76%', size: '6.5rem', opacity: 0.038, rotate: -12 },
  // medium
  { char: '?', x: '60%', y: '16%', size: '5.5rem', opacity: 0.048, rotate: 6 },
  { char: '?', x: '20%', y: '78%', size: '6rem', opacity: 0.048, rotate: -18 },
  { char: '?', x: '14%', y: '28%', size: '6.5rem', opacity: 0.042, rotate: -12 },
  { char: '?', x: '92%', y: '12%', size: '6rem', opacity: 0.048, rotate: -20 },
  { char: '?', x: '33%', y: '90%', size: '7rem', opacity: 0.034, rotate: 5 },
  { char: '?', x: '5%', y: '86%', size: '5.5rem', opacity: 0.05, rotate: -8 },
  { char: '?', x: '26%', y: '8%', size: '6.5rem', opacity: 0.038, rotate: 18 },
  { char: '?', x: '42%', y: '56%', size: '7.5rem', opacity: 0.03, rotate: -22 },
  { char: '?', x: '70%', y: '48%', size: '6rem', opacity: 0.036, rotate: 9 },
  { char: '?', x: '57%', y: '88%', size: '6.5rem', opacity: 0.04, rotate: -6 },
  { char: '?', x: '17%', y: '44%', size: '5.5rem', opacity: 0.045, rotate: 30 },
  { char: '?', x: '84%', y: '92%', size: '7.5rem', opacity: 0.03, rotate: -10 },
  { char: '?', x: '96%', y: '50%', size: '6rem', opacity: 0.04, rotate: 16 },
  { char: '?', x: '28%', y: '60%', size: '5rem', opacity: 0.048, rotate: -28 },
  { char: '?', x: '10%', y: '70%', size: '7rem', opacity: 0.034, rotate: 12 },
  { char: '?', x: '50%', y: '30%', size: '5.5rem', opacity: 0.036, rotate: -5 },
  { char: '?', x: '74%', y: '25%', size: '6.5rem', opacity: 0.03, rotate: 22 },
  { char: '?', x: '35%', y: '75%', size: '6rem', opacity: 0.038, rotate: -15 },
  // small accents
  { char: '?', x: '64%', y: '60%', size: '4.25rem', opacity: 0.042, rotate: 7 },
  { char: '?', x: '2%', y: '20%', size: '4.75rem', opacity: 0.038, rotate: -32 },
  { char: '?', x: '48%', y: '95%', size: '4.25rem', opacity: 0.048, rotate: 18 },
  { char: '?', x: '87%', y: '80%', size: '4.75rem', opacity: 0.036, rotate: -8 },
  { char: '?', x: '22%', y: '95%', size: '4.25rem', opacity: 0.042, rotate: 5 },
  { char: '?', x: '6%', y: '37%', size: '4.75rem', opacity: 0.038, rotate: -18 },
]

const floatParams = marks.map((_, i) => ({
  duration: 4 + (i * 0.9) % 5,
  delay: (i * 1.3) % 6,
  name: i % 3 === 0 ? 'mark-float-a' : i % 3 === 1 ? 'mark-float-b' : 'mark-float-c',
}))

interface QuestionMarkBackgroundProps {
  vignetteBg?: string
  color?: string
  fontFamily?: string
}

export function QuestionMarkBackground({
  vignetteBg = 'var(--c-bg)',
  color = '#F55E00',
  fontFamily = 'var(--font-sans)',
}: QuestionMarkBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes mark-float-a {
          0%, 100% { transform: var(--base-rotate) translateY(0px); }
          50%       { transform: var(--base-rotate) translateY(-18px); }
        }
        @keyframes mark-float-b {
          0%, 100% { transform: var(--base-rotate) translate(0px, 0px); }
          33%       { transform: var(--base-rotate) translate(10px, -14px); }
          66%       { transform: var(--base-rotate) translate(-8px, -8px); }
        }
        @keyframes mark-float-c {
          0%, 100% { transform: var(--base-rotate) translateY(0px) scale(1); }
          50%       { transform: var(--base-rotate) translateY(-12px) scale(1.04); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes mark-float-a { 0%, 100% { transform: var(--base-rotate); } }
          @keyframes mark-float-b { 0%, 100% { transform: var(--base-rotate); } }
          @keyframes mark-float-c { 0%, 100% { transform: var(--base-rotate); } }
        }
      `}</style>

      {marks.map((g, i) => (
        <span
          key={i}
          className="absolute leading-none"
          style={{
            fontFamily,
            left: g.x,
            top: g.y,
            fontSize: g.size,
            opacity: g.opacity,
            color,
            filter: 'blur(0.8px)',
            lineHeight: 1,
            ['--base-rotate' as string]: `rotate(${g.rotate}deg)`,
            transform: `rotate(${g.rotate}deg)`,
            animation: `${floatParams[i].name} ${floatParams[i].duration}s ease-in-out ${floatParams[i].delay}s infinite`,
          }}
        >
          {g.char}
        </span>
      ))}

      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, ${vignetteBg} 100%)`,
        }}
      />
    </div>
  )
}

