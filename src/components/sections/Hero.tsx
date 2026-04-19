'use client'

import { motion } from 'framer-motion'
import Magnetic from '@/components/ui/Magnetic'

export default function Hero() {
  const services = [
    'Айдентика',
    'Логотипы',
    'Дизайн сайтов',
    'Интерфейсы',
    'Презентации',
    'Визуальные системы',
  ]

  const marqueeItems = [...services, ...services]

  return (
    <section
      id="home"
      className="relative overflow-x-hidden bg-[#020202] text-white"
    >
      {/* ВИДЕО ФОН */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ЗАТЕМНЕНИЕ */}
      <div className="absolute inset-0 bg-black/1" />

      {/* КОНТЕНТ */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 pt-5 pb-8 sm:px-5 md:px-8 md:pt-10 md:pb-14 xl:px-12 xl:pt-12 xl:pb-16">
        {/* NAV */}
        <motion.header
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <nav className="flex flex-wrap justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] sm:text-[10px] md:gap-4 md:tracking-[0.18em]">
            {[
              { label: 'Проекты', href: '#projects' },
              { label: 'Обо мне', href: '#about' },
              { label: 'Контакты', href: '#contact' },
            ].map((item) => (
              <Magnetic key={item.href} strength={0.16}>
                <a
                  href={item.href}
                  data-cursor="hover"
                  className="
                    group relative inline-flex h-9 items-center justify-center overflow-hidden
                    border border-white/35 px-4
                    transition duration-300
                    hover:border-white
                    hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]
                    md:h-11 md:px-6
                  "
                >
                  <span className="absolute inset-0 scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="relative z-10 group-hover:text-black">
                    {item.label}
                  </span>
                </a>
              </Magnetic>
            ))}
          </nav>
        </motion.header>

        {/* TITLE */}
        <div className="relative pt-12 md:pt-20 xl:pt-24">
          <div
            className="pointer-events-none absolute left-1/2 top-[55%] -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-38"
            style={{
              width: 'min(68vw, 720px)',
              height: 'min(24vw, 240px)',
              background:
                'radial-gradient(circle, rgba(255,22,13,0.3) 0%, rgba(255,22,13,0.1) 45%, transparent 72%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto flex w-full justify-center"
          >
            <img
              src="/hero-title.png"
              alt=""
              className="w-full max-w-[1430px] object-contain select-none pointer-events-none md:max-w-[1600px] xl:max-w-[1700px]"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* MARQUEE */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 md:mt-8"
        >
          <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#f10a0a] py-3 md:py-7">
            <div className="hero-marquee-track flex w-max items-center">
              {marqueeItems.map((item, index) => (
                <div key={index} className="flex shrink-0 items-center">
                  <span className="px-3 text-[13px] font-extrabold uppercase text-black sm:px-4 sm:text-[15px] md:px-6 md:text-[clamp(22px,3.2vw,56px)]">
                    {item}
                  </span>
                  <span className="px-1.5 text-[13px] font-extrabold text-black sm:px-2 sm:text-[15px] md:text-[clamp(22px,3.2vw,56px)]">
                    ·
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-marquee-track {
          animation: hero-marquee 26s linear infinite;
        }

        @keyframes hero-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}