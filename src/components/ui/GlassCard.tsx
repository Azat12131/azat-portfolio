import type { ReactNode } from "react"

type GlassCardProps = {
  children: ReactNode
  className?: string
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={[
        "rounded-[28px] border border-white/[0.07]",
        "bg-[linear-gradient(180deg,rgba(16,20,37,0.84),rgba(9,12,24,0.72))] backdrop-blur-2xl",
        "shadow-[0_18px_70px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.05)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}
