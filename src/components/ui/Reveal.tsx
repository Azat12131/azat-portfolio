'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  blur?: number
  once?: boolean
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  blur = 10,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, {
    once,
    margin: '-10% 0px -10% 0px',
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y,
        filter: `blur(${blur}px)`,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }
          : {}
      }
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}