'use client'

import Reveal from '@/components/ui/Reveal'
import TypographyText from '@/components/ui/TypographyText'
import Magnetic from '@/components/ui/Magnetic'

export default function Contact() {
  const contactItems = [
    {
      label: 'Email',
      value: 'nurumburum2003@mail.ru',
      href: 'mailto:nurumburum2003@mail.ru',
    },
    {
      label: 'Telegram',
      value: '@praymski',
      href: 'https://t.me/praymski',
    },
    {
      label: 'Vkontakte',
      value: 'vk.com/talesnottherapper',
      href: 'https://vk.com/talesnottherapper',
    },
  ]

  const workItems = [
    'Сайты',
    'Айдентика',
    'Интерфейсы',
    'Презентации',
    'Арт-направление',
  ]

  return (
    <section id="contact" className="bg-[#020202] text-white">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-16 md:px-8 md:py-24 xl:px-12">
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="grid grid-cols-12 items-start gap-8 md:gap-8 xl:gap-10">
           <Reveal delay={0.05} className="col-span-12 xl:col-span-7">
  <div className="max-w-[900px]">
    <h2 className="text-[clamp(40px,11vw,132px)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-white md:tracking-[-0.08em]">
      <TypographyText as="span">
        Обсудим проект
        <br />
        и соберём
        <br />
        сильный визуал
      </TypographyText>
    </h2>

    <div className="mt-6 h-[3px] w-16 bg-[#ff160d] md:mt-8 md:w-28" />

    <div className="mt-8 border-t border-white/10 pt-6 md:mt-12 md:pt-8">
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/34">
        Старт проекта
      </div>

      <div className="mt-4 flex flex-col gap-5 md:mt-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[640px] text-[clamp(28px,8vw,64px)] font-black leading-[0.92] tracking-[-0.055em] text-white">
          <TypographyText as="span">
            Напиши мне в Telegram
          </TypographyText>
        </div>

        <Magnetic strength={0.14}>
          <a
            href="https://t.me/praymski"
            target="_blank"
            rel="noreferrer"
            data-cursor="accent"
            className="
              inline-flex min-h-[64px] w-full items-center justify-center
              bg-[#ff160d]
              px-6
              text-center
              text-[12px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-black
              transition duration-200
              hover:brightness-110
              hover:shadow-[0_0_28px_rgba(255,22,13,0.35),0_10px_30px_rgba(255,22,13,0.25)]
              active:scale-[0.98]
              sm:w-auto sm:px-10 sm:text-[13px]
              md:min-h-[88px] md:px-14 md:text-[14px] md:tracking-[0.2em]
            "
          >
            Обсудить проект
          </a>
        </Magnetic>
      </div>
    </div>
  </div>
</Reveal>

            <Reveal delay={0.14} className="col-span-12 xl:col-span-5">
              <div className="flex flex-col items-start xl:items-end">
                <div className="text-left leading-none xl:text-right">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/30">
                    Section
                  </div>
                  <div className="mt-2 text-[clamp(28px,8vw,72px)] font-black tracking-[-0.08em] text-[#ff160d]">
                    005
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:gap-5">
                <article className="border border-white/10 bg-white/[0.02] p-5 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/34">
                      Связь
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff160d]">
                      Direct
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    {contactItems.map((item, index) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target={
                          item.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          item.href.startsWith('http') ? 'noreferrer' : undefined
                        }
                        className={`group block py-4 transition duration-200 ${
                          index !== contactItems.length - 1
                            ? 'border-b border-white/10 hover:border-white/20'
                            : ''
                        }`}
                      >
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/34">
                          {item.label}
                        </div>
                        <div className="mt-2 break-words text-[20px] font-black leading-[0.95] tracking-[-0.04em] text-white transition duration-200 group-hover:text-[#ff160d] md:text-[28px]">
                          <TypographyText as="span">{item.value}</TypographyText>
                        </div>
                      </a>
                    ))}
                  </div>
                </article>

                <article className="border border-white/10 bg-white/[0.02] p-5 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/34">
                      Формат
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff160d]">
                      Work
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1">
                      {workItems.map((item) => (
                        <div
                          key={item}
                          className="text-[22px] font-black leading-[0.95] tracking-[-0.045em] text-white md:text-[28px]"
                        >
                          <TypographyText as="span">{item}</TypographyText>
                        </div>
                      ))}
                    </div>

                    <TypographyText
                      as="p"
                      className="mt-6 max-w-[520px] text-[15px] leading-7 text-white/58 md:text-[16px] md:leading-8"
                    >
                      Можно написать с задачей, идеей или просто с сырым
                      запросом. Дальше помогу понять, в каком формате лучше
                      собрать работу.
                    </TypographyText>
                  </div>
                </article>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}