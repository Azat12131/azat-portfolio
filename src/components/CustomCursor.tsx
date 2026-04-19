'use client'

import { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
}

const TAIL_LENGTH = 10

export default function CustomCursor() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)
  const trailRefs = useRef<HTMLDivElement[]>([])
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (isCoarsePointer) return

    const root = rootRef.current
    const dot = dotRef.current
    const trail = trailRefs.current

    if (!root || !dot || trail.length === 0) return

    let visible = false
    let hoveringInteractive = false

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2

    let currentX = targetX
    let currentY = targetY

    let lastMouseX = targetX
    let lastMouseY = targetY
    let velocity = 0

    const points: Point[] = Array.from({ length: TAIL_LENGTH }, () => ({
      x: targetX,
      y: targetY,
    }))

    const setVisible = (next: boolean) => {
      visible = next
      root.style.opacity = next ? '1' : '0'
    }

    const setInteractiveState = (next: boolean) => {
      hoveringInteractive = next

      if (next) {
        dot.style.width = '26px'
        dot.style.height = '26px'
        dot.style.background = '#ffffff'
        dot.style.borderColor = 'transparent'
      } else {
        dot.style.width = '14px'
        dot.style.height = '14px'
        dot.style.background = '#ffffff'
        dot.style.borderColor = 'transparent'
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY

      const dx = e.clientX - lastMouseX
      const dy = e.clientY - lastMouseY
      const distance = Math.hypot(dx, dy)

      velocity = Math.min(42, distance)

      lastMouseX = e.clientX
      lastMouseY = e.clientY

      if (!visible) setVisible(true)

      const target = e.target as HTMLElement | null
      const clickable = target?.closest(
        'a, button, [role="button"], input, textarea, select, label'
      )

      setInteractiveState(Boolean(clickable))
    }

    const onMouseLeave = () => setVisible(false)
    const onMouseEnter = () => setVisible(true)

    const animate = () => {
      currentX += (targetX - currentX) * 0.28
      currentY += (targetY - currentY) * 0.28

      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`

      points[0].x += (currentX - points[0].x) * 0.38
      points[0].y += (currentY - points[0].y) * 0.38

      for (let i = 1; i < points.length; i += 1) {
        const leader = points[i - 1]
        const follower = points[i]

        const followStrength = 0.18 - i * 0.01
        follower.x += (leader.x - follower.x) * followStrength
        follower.y += (leader.y - follower.y) * followStrength
      }

      velocity *= 0.88

      for (let i = 0; i < trail.length; i += 1) {
        const el = trail[i]
        const p = points[i]

        const t = i / (trail.length - 1)
        const baseSize = hoveringInteractive ? 20 : 14
        const extraStretch = velocity * (1 - t) * 0.9
        const size = Math.max(4, baseSize - i * 1.1 + extraStretch * 0.18)
        const opacity = Math.max(0.06, 0.34 - i * 0.028 + velocity * 0.0035)

        el.style.width = `${size}px`
        el.style.height = `${size}px`
        el.style.opacity = `${Math.min(opacity, 0.55)}`
        el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    root.style.opacity = '0'
    root.style.transition = 'opacity 180ms ease'
    dot.style.width = '14px'
    dot.style.height = '14px'
    dot.style.background = '#ffffff'

    rafRef.current = requestAnimationFrame(animate)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)

      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      aria-hidden="true"
    >
      {Array.from({ length: TAIL_LENGTH }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) trailRefs.current[index] = el
          }}
          className="absolute left-0 top-0 rounded-full bg-white"
          style={{
            width: 14,
            height: 14,
            opacity: 0.2,
            transform: 'translate3d(-100px,-100px,0)',
            willChange: 'transform, width, height, opacity',
            filter: 'blur(0.4px)',
          }}
        />
      ))}

      <div
        ref={dotRef}
        className="absolute left-0 top-0 rounded-full bg-white mix-blend-difference"
        style={{
          width: 14,
          height: 14,
          transform: 'translate3d(-100px,-100px,0)',
          willChange: 'transform, width, height, background',
          transition:
            'width 160ms ease, height 160ms ease, background 160ms ease',
        }}
      />
    </div>
  )
}