type BlogCoverProps = {
  emoji: string
  variant: 'thumb' | 'hero'
  className?: string
}

export function BlogCover({ emoji, variant, className = '' }: BlogCoverProps) {
  const size =
    variant === 'hero'
      ? 'text-[clamp(4rem,15vw,8.5rem)]'
      : 'text-5xl sm:text-6xl md:text-7xl'

  const hover =
    variant === 'thumb'
      ? 'transition-transform duration-500 group-hover:scale-[1.08]'
      : ''

  return (
    <div
      className={[
        'absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a1120] via-[#160a10] to-[#0d0608]',
        'leading-none select-none',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_50%_55%,rgba(245,94,0,0.10),transparent)]" />
      <span
        className={[size, 'relative z-10', hover].filter(Boolean).join(' ')}
        style={{ filter: 'drop-shadow(0 0 28px rgba(245,94,0,0.18))' }}
      >
        {emoji}
      </span>
    </div>
  )
}
