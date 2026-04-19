'use client'

import { motion } from 'framer-motion'

export default function EditorialBreak() {
  return (
    <section className="bg-[#020202] text-white">
      <div className="mx-auto max-w-[1500px] px-4 py-14 md:px-8 md:py-20 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden border border-white/10 bg-[#0a0a0a]"
        >
          <div className="relative aspect-[16/9] w-full">
            <img
              src="/keyboard.png"
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 xl:p-10">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Process
            </div>

            <div className="mt-4 max-w-[720px] text-[clamp(28px,3.6vw,56px)] font-black leading-[0.92] tracking-[-0.06em] text-white">
              Чистая типографика, структура
              <br />
              и визуальный ритм
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-[3px] w-14 bg-[#ff160d]" />
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                digital craft
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}