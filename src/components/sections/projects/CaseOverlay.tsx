'use client'

import { useEffect } from 'react'
import TypographyText from '@/components/ui/TypographyText'
import { caseArticles } from './projectData'

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

export default function CaseOverlay({
  projectId,
  onClose,
}: {
  projectId: number
  onClose: () => void
}) {
  const article = caseArticles[projectId]

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  if (!article) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md">
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full bg-[#020202] text-white">
          <div className="sticky top-0 z-20 border-b border-white/10 bg-[#020202]/85 backdrop-blur-xl">
            <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 md:px-8 xl:px-12">
              <div className="pr-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/38 md:text-[11px] md:tracking-[0.24em]">
                  {article.category}
                </div>
                <div className="mt-2 text-sm text-white/62">{article.year}</div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Закрыть кейс"
                data-cursor="hover"
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] text-white transition duration-200 hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.96] md:h-12 md:w-12"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8 md:py-10 xl:px-12 xl:py-12">
            <div className="max-w-[1100px]">
              <h2 className="text-[clamp(34px,11vw,120px)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-white md:tracking-[-0.08em]">
                <TypographyText as="span">{article.title}</TypographyText>
              </h2>

              {article.intro && (
                <TypographyText
                  as="p"
                  className="mt-6 max-w-[760px] text-[15px] leading-[1.75] text-white/68 md:mt-8 md:text-[18px] md:leading-[1.7]"
                >
                  {article.intro}
                </TypographyText>
              )}
            </div>

            {article.heroImage && (
              <div className="relative mt-10 overflow-hidden border border-white/10 bg-[#0a0a0a] md:mt-12">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}

            <div className="mt-12 space-y-12 md:mt-16 md:space-y-20">
              {article.sections.map((section, index) => (
                <section
                  key={index}
                  className="border-t border-white/10 pt-8 md:pt-10"
                >
                  {section.title && (
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 md:text-[11px] md:tracking-[0.24em]">
                      {section.title}
                    </h3>
                  )}

                  {section.text && (
                    <TypographyText
                      as="p"
                      className="mt-5 max-w-[900px] text-[15px] leading-[1.8] text-white/72 md:text-[18px]"
                    >
                      {section.text}
                    </TypographyText>
                  )}

                  {section.images && section.images.length > 0 && (
                    <div className="mt-8 columns-1 gap-4 md:columns-2 xl:columns-3">
                      {section.images.map((src, imageIndex) => (
                        <div
                          key={`${src}-${imageIndex}`}
                          className="group relative mb-4 break-inside-avoid overflow-hidden border border-white/10 bg-[#0a0a0a]"
                        >
                          <img
                            src={src}
                            alt=""
                            className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                          />

                          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-black/20" />
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Закрыть кейс по затемненному фону"
        onClick={onClose}
        className="absolute inset-0 -z-10"
      />
    </div>
  )
}