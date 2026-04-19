export default function SectionHeader({ title, number }) {
  return (
    <div className="mb-10 flex items-start justify-between gap-6 border-t border-white/10 pt-6 md:mb-14 md:pt-8">
      
      {title && (
        <h2 className="text-[clamp(52px,8vw,132px)] font-black uppercase leading-[0.9] tracking-[-0.08em] text-white">
          {title}
        </h2>
      )}

      <div className="ml-auto text-right leading-none">
        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/30">
          Section
        </div>
        <div className="mt-2 text-[clamp(30px,5vw,72px)] font-black tracking-[-0.08em] text-[#ff160d]">
          {number}
        </div>
      </div>
    </div>
  )
}