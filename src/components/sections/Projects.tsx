'use client'

import { useMemo, useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import TypographyText from '@/components/ui/TypographyText'
import Magnetic from '@/components/ui/Magnetic'
import ProjectImage from '@/components/sections/projects/ProjectImage'
import CaseOverlay from '@/components/sections/projects/CaseOverlay'
import {
  projects,
  caseArticles,
} from '@/components/sections/projects/projectData'

function ArrowLeftIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

const VISIBLE_COUNT = 5

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [openedProjectId, setOpenedProjectId] = useState<number | null>(null)
  const [parallax, setParallax] = useState<
    Record<number, { x: number; y: number }>
  >({})

  const startIndex = Math.floor(activeIndex / VISIBLE_COUNT) * VISIBLE_COUNT

  const visibleProjects = useMemo(() => {
    return projects.slice(startIndex, startIndex + VISIBLE_COUNT)
  }, [startIndex])

  const mobileProject = projects[activeIndex]

  const activeId =
    hoveredId ??
    projects[activeIndex]?.id ??
    visibleProjects[0]?.id ??
    null

  const goNext = () => {
    setHoveredId(null)
    setActiveIndex((prev) => Math.min(prev + 1, projects.length - 1))
  }

  const goPrev = () => {
    setHoveredId(null)
    setActiveIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleProjectMove = (
    e: React.MouseEvent<HTMLElement>,
    projectId: number,
    isActive: boolean
  ) => {
    if (!isActive) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    const moveX = (x - 0.5) * 18
    const moveY = (y - 0.5) * 18

    setParallax((prev) => ({
      ...prev,
      [projectId]: { x: moveX, y: moveY },
    }))
  }

  const resetProjectMove = (projectId: number) => {
    setParallax((prev) => ({
      ...prev,
      [projectId]: { x: 0, y: 0 },
    }))
  }

  return (
    <>
      <section id="projects" className="bg-[#020202] text-white">
        <div className="mx-auto max-w-[1500px] px-4 py-16 md:px-8 md:py-24 xl:px-12">
          <Reveal>
            <div className="border-t border-white/10 pt-6 md:pt-8">
              <div className="relative">
                <h2 className="pr-0 text-[clamp(42px,12vw,132px)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-white md:tracking-[-0.08em] xl:pr-[180px]">
                  Projects
                </h2>

                <div className="mt-6 text-left leading-none xl:absolute xl:right-0 xl:top-0 xl:mt-0 xl:text-right">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/30">
                    Section
                  </div>
                  <div className="mt-2 text-[clamp(28px,8vw,72px)] font-black tracking-[-0.08em] text-[#ff160d]">
                    003
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 mb-5 flex items-center justify-between gap-3 md:mb-6 md:justify-end">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42 md:hidden">
                {activeIndex + 1} / {projects.length}
              </div>

              <div className="flex gap-3">
                <Magnetic strength={0.18}>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Предыдущие проекты"
                    data-cursor="hover"
                    disabled={activeIndex === 0}
                    className="
                      hide-native-cursor
                      flex h-11 w-11 items-center justify-center
                      border border-white/10
                      text-white
                      transition duration-200
                      hover:border-white/20
                      hover:bg-white/[0.04]
                      hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]
                      active:scale-[0.96]
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                      md:h-12 md:w-12
                    "
                  >
                    <ArrowLeftIcon />
                  </button>
                </Magnetic>

                <Magnetic strength={0.18}>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Следующие проекты"
                    data-cursor="accent"
                    disabled={activeIndex === projects.length - 1}
                    className="
                      hide-native-cursor
                      flex h-11 w-11 items-center justify-center
                      border border-white/10
                      bg-[#ff160d]
                      text-black
                      transition duration-200
                      hover:brightness-110
                      hover:shadow-[0_0_24px_rgba(255,22,13,0.28)]
                      active:scale-[0.96]
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                      md:h-12 md:w-12
                    "
                  >
                    <ArrowRightIcon />
                  </button>
                </Magnetic>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <>
              <div className="md:hidden">
                <article
                  onClick={() => {
                    if (!mobileProject?.empty && caseArticles[mobileProject.id]) {
                      setOpenedProjectId(mobileProject.id)
                    }
                  }}
                  className="relative overflow-hidden border border-white/10 bg-[#0a0a0a]"
                >
                  <div className="relative aspect-[4/5] w-full">
                    {mobileProject && (
                      <ProjectImage
                        src={mobileProject.image}
                        alt={mobileProject.title}
                        active
                        empty={mobileProject.empty}
                      />
                    )}

                    <div className="absolute inset-0 bg-black/18" />

                    <div className="absolute inset-x-0 bottom-0">
                      <div className="h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    </div>

                    {mobileProject?.empty ? (
                      <div className="absolute right-4 top-4 rounded-full border border-white/14 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72">
                        Soon
                      </div>
                    ) : mobileProject && caseArticles[mobileProject.id] ? (
                      <div className="absolute right-4 top-4 rounded-full border border-white/14 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72">
                        Open case
                      </div>
                    ) : null}

                    {mobileProject && (
                      <div className="absolute bottom-0 left-0 w-full p-5">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/62">
                          {mobileProject.category}
                        </div>

                        <h3 className="mt-4 max-w-[90%] text-[clamp(28px,9vw,52px)] font-black leading-[0.92] tracking-[-0.06em] text-white">
                          <TypographyText as="span">
                            {mobileProject.title}
                          </TypographyText>
                        </h3>

                        <div className="mt-5 flex items-center gap-4">
                          <div className="h-[3px] w-12 bg-[#ff160d]" />
                          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/52">
                            {mobileProject.year}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </div>

              <div
                data-cursor-hide
                className="hidden h-[420px] gap-3 md:flex md:h-[560px] xl:h-[720px]"
              >
                {visibleProjects.map((project, localIndex) => {
                  const globalIndex = startIndex + localIndex
                  const isActive = activeId === project.id
                  const isClickable = !project.empty && !!caseArticles[project.id]

                  return (
                    <article
                      key={project.id}
                      onMouseEnter={() => {
                        setHoveredId(project.id)
                        setActiveIndex(globalIndex)
                      }}
                      onMouseMove={(e) =>
                        handleProjectMove(e, project.id, isActive)
                      }
                      onMouseLeave={() => {
                        setHoveredId(null)
                        resetProjectMove(project.id)
                      }}
                      onClick={() => {
                        if (isClickable) setOpenedProjectId(project.id)
                      }}
                      data-cursor={isClickable ? 'hover' : undefined}
                      className="hide-native-cursor relative h-full min-w-0 overflow-hidden border border-white/10 bg-[#0a0a0a]"
                      style={{
                        flexGrow: isActive ? 4 : 1,
                        flexBasis: 0,
                        transition: 'flex-grow 0.42s cubic-bezier(0.22,1,0.36,1)',
                      }}
                    >
                      <ProjectImage
                        src={project.image}
                        alt={project.title}
                        active={isActive}
                        empty={project.empty}
                        offsetX={parallax[project.id]?.x ?? 0}
                        offsetY={parallax[project.id]?.y ?? 0}
                      />

                      <div
                        className={`absolute inset-0 transition-colors duration-300 ${
                          isActive ? 'bg-black/12' : 'bg-black/46'
                        }`}
                      />

                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          isClickable && isActive
                            ? 'opacity-100'
                            : 'pointer-events-none opacity-0'
                        }`}
                      >
                        <div className="absolute right-5 top-5 rounded-full border border-white/14 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72 md:right-7 md:top-7">
                          Open case
                        </div>
                      </div>

                      <div
                        className={`absolute inset-x-0 bottom-0 transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <div className="h-40 bg-gradient-to-t from-black via-black/70 to-transparent md:h-52 xl:h-64" />
                      </div>

                      {project.empty && !isActive && (
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                            Soon
                          </div>
                        </div>
                      )}

                      {project.empty && isActive && (
                        <div className="absolute right-5 top-5 rounded-full border border-white/14 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72 md:right-7 md:top-7">
                          Soon
                        </div>
                      )}

                      <div
                        className={`absolute bottom-0 left-0 w-full p-5 transition-[opacity,transform] duration-300 md:p-8 xl:p-10 ${
                          isActive
                            ? 'translate-y-0 opacity-100'
                            : 'pointer-events-none translate-y-3 opacity-0'
                        }`}
                      >
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/62">
                          {project.category}
                        </div>

                        <h3 className="mt-4 max-w-[720px] text-[clamp(34px,4vw,72px)] font-black leading-[0.9] tracking-[-0.065em] text-white">
                          <TypographyText as="span">
                            {project.title}
                          </TypographyText>
                        </h3>

                        <div className="mt-6 flex items-center gap-4">
                          <div className="h-[3px] w-14 bg-[#ff160d] md:w-16" />
                          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/52">
                            {project.year}
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </>
          </Reveal>
        </div>
      </section>

      {openedProjectId !== null && (
        <CaseOverlay
          projectId={openedProjectId}
          onClose={() => setOpenedProjectId(null)}
        />
      )}
    </>
  )
}