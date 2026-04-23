import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  duration?: number
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 0.6,
  className,
}: FadeInProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-72px' })
  const reduced = useReducedMotion()

  const initial = {
    opacity: 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
  }

  return (
    <motion.div
      ref={ref}
      initial={reduced ? {} : initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : reduced ? {} : initial}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
