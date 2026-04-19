import Reveal from '@/components/ui/Reveal'
import TypographyText from '@/components/ui/TypographyText'

export default function About() {
  const strengths = [
    'Сильная типографика',
    'Современный визуал',
    'Чувство вкуса',
    'Системный подход',
  ]

  const experience = ['SoundRoom', 'Korston']

  return (
    <section id="about" className="bg-[#020202] text-white">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-16 md:px-8 md:py-24 xl:px-12">
        <Reveal>
          <div className="border-t border-white/10 pt-6 md:pt-8">
            <div className="relative">
              <h2 className="max-w-[980px] pr-0 text-[clamp(40px,11vw,108px)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:tracking-[-0.075em] xl:pr-[180px]">
                <TypographyText as="span">
                  Строю визуальные
                  <br />
                  системы для брендов
                </TypographyText>
              </h2>

              <div className="mt-6 text-left leading-none xl:absolute xl:right-0 xl:top-0 xl:mt-0 xl:text-right">
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/30">
                  Section
                </div>
                <div className="mt-2 text-[clamp(28px,8vw,72px)] font-black tracking-[-0.08em] text-[#ff160d]">
                  002
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 grid grid-cols-12 gap-8 md:mt-10 md:gap-12 xl:gap-16">
            <div className="col-span-12 xl:col-span-8">
              <div className="mt-5 h-[3px] w-20 bg-[#ff160d] md:mt-8 md:w-32" />

              <TypographyText
                as="p"
                className="mt-6 max-w-[780px] text-[16px] leading-7 text-white/62 md:mt-8 md:text-[19px] md:leading-9"
              >
                Мне важен не просто красивый экран. Я смотрю, как бренд выглядит
                сейчас, как он считывается клиентом и где визуальная подача уже
                перестаёт работать. Потом собираю систему, которая делает бренд
                сильнее, современнее и понятнее.
              </TypographyText>
            </div>

            <div className="col-span-12 xl:col-span-4">
              <div className="xl:ml-auto xl:max-w-[420px]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/32">
                  Подход
                </div>

                <div className="mt-5 space-y-5 border-t border-white/10 pt-5 text-[15px] leading-7 text-white/58 md:text-[16px] md:leading-8">
                  <TypographyText as="p">
                    Сначала изучаю бренд, его среду, подачу и визуальные привычки аудитории.
                  </TypographyText>

                  <TypographyText as="p">
                    Затем выстраиваю структуру: иерархию, типографику, акценты и общее ощущение системы.
                  </TypographyText>

                  <TypographyText as="p">
                    Итогом должен быть не просто дизайн, а инструмент, который помогает бизнесу выглядеть увереннее и продавать лучше.
                  </TypographyText>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 grid grid-cols-12 gap-4 border-t border-white/10 pt-8 md:mt-16 md:gap-6 md:pt-12">
            <article className="col-span-12 xl:col-span-7 border border-white/10 bg-white/[0.02] p-5 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/32">
                  Сильные стороны
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff160d]">
                  01
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                {strengths.map((item) => (
                  <TypographyText
                    key={item}
                    as="div"
                    className="text-[24px] font-black leading-[0.95] tracking-[-0.05em] text-white md:text-[34px]"
                  >
                    {item}
                  </TypographyText>
                ))}
              </div>
            </article>

            <article className="col-span-12 xl:col-span-5 border border-white/10 bg-white/[0.02] p-5 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/32">
                  Опыт
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff160d]">
                  02
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="mt-5 space-y-3">
                  {experience.map((item) => (
                    <TypographyText
                      key={item}
                      as="div"
                      className="text-[26px] font-black leading-none tracking-[-0.05em] text-white md:text-[30px]"
                    >
                      {item}
                    </TypographyText>
                  ))}
                </div>

                <TypographyText
                  as="p"
                  className="mt-6 max-w-[520px] text-[15px] leading-7 text-white/58 md:text-[16px] md:leading-8"
                >
                  Работал с проектами в сфере музыки, сервиса и бизнеса. Помогал
                  усиливать визуальную подачу, делать образ бренда цельнее и
                  выстраивать более уверенную коммуникацию.
                </TypographyText>
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}