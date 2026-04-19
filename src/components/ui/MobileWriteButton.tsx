'use client'

export default function MobileWriteButton() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 md:hidden"
      style={{
        paddingBottom: 'calc(14px + env(safe-area-inset-bottom))',
      }}
    >
      <a
        href="https://t.me/praymski"
        target="_blank"
        rel="noreferrer"
        data-cursor="accent"
        className="
          pointer-events-auto
          inline-flex
          min-h-[58px]
          items-center
          justify-center
          rounded-full
          border
          border-[#ff160d]/30
          bg-[#ff160d]
          px-8
          text-[13px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-black
          shadow-[0_10px_30px_rgba(255,22,13,0.28)]
          transition
          duration-200
          active:scale-[0.98]
        "
      >
        Написать
      </a>
    </div>
  )
}