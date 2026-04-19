'use client'

import Reveal from '@/components/ui/Reveal'
import { fixWidows } from '@/lib/fixWidows'

const services = [
  {
    number: '01',
    title: 'Дизайн сайтов',
    text: 'Лендинги, портфолио, коммерческие сайты и визуально сильные digital-страницы.',
  },
  {
    number: '02',
    title: 'Айдентика',
    text: 'Логотипы, фирменный стиль, визуальные системы, типографика и общий образ бренда.',
  },
  {
    number: '03',
    title: 'Интерфейсы',
    text: 'Дизайн экранов, интерфейсных решений и digital-продуктов с чистой структурой.',
  },
  {
    number: '04',
    title: 'Презентации',
    text: 'Стильные презентации, кейсы, коммерческие материалы и визуальная подача идей.',
  },
  {
    number: '05',
    title: 'Креативная концепция',
    text: 'Поиск визуального направления, moodboard, композиция, подача и общий арт-вектор.',
  },
  {
    number: '06',
    title: 'Логотипы',
    text: 'Разработка логотипов и знаков, которые выглядят чисто, уверенно и запоминаются.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#020202] text-white">
      <div className="mx-auto max-w-[1500px] px-4 py-16 md:px-8 md:py-24 xl:px-12">
        <Reveal>
          <div className="border-t border-white/10 pt-6 md:pt-8">
            <div className="relative">
              <h2 className="pr-0 text-[clamp(42px,12vw,132px)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-white md:tracking-[-0.08em] xl:pr-[180px]">
                Services
              </h2>

              <div className="mt-6 text-left leading-none xl:absolute xl:right-0 xl:top-0 xl:mt-0 xl:text-right">
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/30">
                  Section
                </div>
                <div className="mt-2 text-[clamp(28px,8vw,72px)] font-black tracking-[-0.08em] text-[#ff160d]">
                  004
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-12 gap-4 md:mt-12 md:gap-6">
  {services.map((service, index) => (
    <Reveal
      key={service.number}
      delay={0.04 + index * 0.05}
      y={26}
      blur={8}
      className="col-span-12 md:col-span-6"
    >
      <article
        className="group relative h-full overflow-hidden border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-white/20 md:p-8"
      >
        <div className="pointer-events-none absolute right-4 top-4 md:right-6 md:top-6">
          <div className="relative flex justify-end pb-3 md:pb-4">
            <div className="text-[52px] font-black leading-none tracking-[-0.08em] text-white/6 md:text-[84px]">
              {service.number}
            </div>

            <div className="absolute bottom-0 right-0 h-[2px] w-8 bg-white/10 transition-all duration-300 group-hover:w-16 group-hover:bg-[#ff160d] md:w-10" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/34">
            Service
          </div>
        </div>

        <h3 className="mt-8 max-w-[85%] text-[clamp(24px,8vw,56px)] font-black leading-[0.92] tracking-[-0.06em] text-white md:mt-10 md:max-w-none">
          {fixWidows(service.title)}
        </h3>

        <p className="mt-4 max-w-[520px] text-[15px] leading-7 text-white/58 md:mt-5 md:text-[16px] md:leading-8">
          {fixWidows(service.text)}
        </p>

        <div className="mt-8 flex items-center gap-4 md:mt-10">
          <div className="h-[3px] w-10 bg-[#ff160d] md:w-12" />
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40 md:text-[11px]">
            premium output
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,22,13,0.08),transparent_60%)]" />
        </div>
      </article>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  )
}