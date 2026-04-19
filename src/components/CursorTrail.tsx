'use client'

import { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
}

type CursorMode = 'default' | 'hover' | 'accent'

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const isSmallScreen = window.innerWidth < 1024
    const lowCpu =
      typeof navigator !== 'undefined' &&
      'hardwareConcurrency' in navigator &&
      navigator.hardwareConcurrency <= 4

    if (isTouch || reducedMotion || isSmallScreen || lowCpu) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let raf = 0
    let visible = document.visibilityState === 'visible'
    let isRunning = false

    const dpr = 1

    const pointer = { x: width / 2, y: height / 2 }
    const head = { x: width / 2, y: height / 2 }

    const trail: Point[] = []
    const maxTrail = 12

    let cursorMode: CursorMode = 'default'
    let targetScale = 1
    let currentScale = 1

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const start = () => {
      if (!visible || isRunning) return
      isRunning = true
      raf = requestAnimationFrame(draw)
    }

    const stop = () => {
      isRunning = false
      cancelAnimationFrame(raf)
      raf = 0
    }

    const onMove = (e: MouseEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      start()
    }

    const onVisibility = () => {
      visible = document.visibilityState === 'visible'
      if (!visible) {
        stop()
        return
      }
      start()
    }

    const setModeFromTarget = (target: EventTarget | null) => {
      const el = target as HTMLElement | null
      const interactive = el?.closest?.('[data-cursor]') as HTMLElement | null

      const mode = interactive?.dataset.cursor as CursorMode | undefined

      if (mode === 'accent') {
        cursorMode = 'accent'
        targetScale = 1.45
        return
      }

      if (mode === 'hover') {
        cursorMode = 'hover'
        targetScale = 1.28
        return
      }

      cursorMode = 'default'
      targetScale = 1
    }

    const onPointerOver = (e: MouseEvent) => {
      setModeFromTarget(e.target)
      start()
    }

    const onPointerOut = (e: MouseEvent) => {
      const nextTarget = e.relatedTarget as HTMLElement | null
      setModeFromTarget(nextTarget)
      start()
    }

    const drawSmoothTrail = () => {
      if (trail.length < 3) return

      for (let i = 0; i < trail.length - 2; i++) {
        const p0 = trail[i]
        const p1 = trail[i + 1]
        const p2 = trail[i + 2]

        const t = 1 - i / trail.length

        let alpha = 0.58 * t
        let lineWidth = Math.max(0.8, 4.4 * t)

        if (cursorMode === 'hover') {
          alpha = 0.46 * t
          lineWidth = Math.max(0.8, 4.9 * t)
        }

        if (cursorMode === 'accent') {
          alpha = 0.68 * t
          lineWidth = Math.max(1, 5.4 * t)
        }

        ctx.beginPath()
        ctx.moveTo(p0.x, p0.y)

        const cx = (p1.x + p2.x) / 2
        const cy = (p1.y + p2.y) / 2

        ctx.quadraticCurveTo(p1.x, p1.y, cx, cy)
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.lineWidth = lineWidth

        if (cursorMode === 'accent') {
          ctx.strokeStyle = `rgba(255, 30, 20, ${alpha})`
        } else {
          ctx.strokeStyle = `rgba(255, 55, 30, ${alpha})`
        }

        ctx.stroke()
      }
    }

    const drawHead = () => {
      currentScale += (targetScale - currentScale) * 0.14

      const glowRadius =
        cursorMode === 'accent'
          ? 22 * currentScale
          : cursorMode === 'hover'
            ? 18 * currentScale
            : 16 * currentScale

      const coreRadius =
        cursorMode === 'accent'
          ? 3.1 * currentScale
          : cursorMode === 'hover'
            ? 3 * currentScale
            : 2.8 * currentScale

      const ringRadius =
        cursorMode === 'accent'
          ? 8.5 * currentScale
          : cursorMode === 'hover'
            ? 6.8 * currentScale
            : 5.8 * currentScale

      const glow = ctx.createRadialGradient(
        head.x,
        head.y,
        0,
        head.x,
        head.y,
        glowRadius
      )

      if (cursorMode === 'accent') {
        glow.addColorStop(0, 'rgba(255,255,255,1)')
        glow.addColorStop(0.18, 'rgba(255,130,95,0.98)')
        glow.addColorStop(0.48, 'rgba(255,22,13,0.34)')
        glow.addColorStop(1, 'rgba(255,22,13,0)')
      } else if (cursorMode === 'hover') {
        glow.addColorStop(0, 'rgba(255,255,255,0.98)')
        glow.addColorStop(0.22, 'rgba(255,145,115,0.92)')
        glow.addColorStop(0.55, 'rgba(255,90,60,0.18)')
        glow.addColorStop(1, 'rgba(255,50,20,0)')
      } else {
        glow.addColorStop(0, 'rgba(255,255,255,0.98)')
        glow.addColorStop(0.22, 'rgba(255,120,90,0.9)')
        glow.addColorStop(0.55, 'rgba(255,50,20,0.24)')
        glow.addColorStop(1, 'rgba(255,50,20,0)')
      }

      ctx.beginPath()
      ctx.fillStyle = glow
      ctx.arc(head.x, head.y, glowRadius, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.fillStyle = '#ffffff'
      ctx.arc(head.x, head.y, coreRadius, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.strokeStyle =
        cursorMode === 'accent'
          ? 'rgba(255,60,40,0.45)'
          : 'rgba(255,90,60,0.34)'
      ctx.lineWidth = 1
      ctx.arc(head.x, head.y, ringRadius, 0, Math.PI * 2)
      ctx.stroke()
    }

    const draw = () => {
      if (!visible) {
        stop()
        return
      }

      ctx.clearRect(0, 0, width, height)

      head.x += (pointer.x - head.x) * 0.18
      head.y += (pointer.y - head.y) * 0.18

      trail.unshift({ x: head.x, y: head.y })
      if (trail.length > maxTrail) trail.pop()

      drawSmoothTrail()
      drawHead()

      const dx = pointer.x - head.x
      const dy = pointer.y - head.y
      const distance = Math.hypot(dx, dy)
      const scaleDelta = Math.abs(targetScale - currentScale)

      if (distance < 0.15 && scaleDelta < 0.01) {
        stop()
        return
      }

      raf = requestAnimationFrame(draw)
    }

    resize()

    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onPointerOver, { passive: true })
    window.addEventListener('mouseout', onPointerOut, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onPointerOver)
      window.removeEventListener('mouseout', onPointerOut)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block"
      aria-hidden="true"
    />
  )
}