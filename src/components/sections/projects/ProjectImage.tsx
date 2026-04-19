'use client'

import { useState } from 'react'
import Image from 'next/image'

type ProjectImageProps = {
  src: string
  alt: string
  active: boolean
  empty?: boolean
  offsetX?: number
  offsetY?: number
}

export default function ProjectImage({
  src,
  alt,
  active,
  empty,
  offsetX = 0,
  offsetY = 0,
}: ProjectImageProps) {
  const [errored, setErrored] = useState(false)

  if (empty || !src || errored) {
    return (
      <div
        className={`absolute inset-0 transition-transform duration-300 ease-out ${
          active
            ? 'scale-[1.01] bg-[radial-gradient(circle_at_30%_30%,#1b1b1b_0%,#0d0d0d_60%,#000_100%)]'
            : 'bg-[#0a0a0a]'
        }`}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      quality={100}
      sizes="(max-width: 768px) 100vw, 80vw"
      onError={() => setErrored(true)}
      className="object-cover transition-transform duration-300 ease-out"
      style={{
        transform: active
          ? `scale(1.04) translate3d(${offsetX}px, ${offsetY}px, 0)`
          : 'scale(1.01)',
      }}
    />
  )
}