'use client'

import { useRef } from 'react'

type MagneticProps = {
  children: React.ReactNode
  className?: string
  strength?: number
}

export default function Magnetic({
  children,
  className = '',
  strength = 0.22,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0, 0, 0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transition: 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}