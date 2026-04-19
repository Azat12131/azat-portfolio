const steps = [
  {
    number: "01",
    title: "Discovery",
    text: "We define goals, audience, style direction and the overall visual positioning.",
  },
  {
    number: "02",
    title: "Concept",
    text: "I build the core layout, typography mood, color atmosphere and the first visual system.",
  },
  {
    number: "03",
    title: "Refinement",
    text: "We polish hierarchy, rhythm, details, spacing, cards, sections and all key accents.",
  },
  {
    number: "04",
    title: "Delivery",
    text: "You get a ready visual result for presentation, development or further production.",
  },
]

export default function Process() {
  return (
    <section id="process" className="section-shell">
      <div className="container-shell">
        <div className="mb-12">
          <div className="section-kicker">Process</div>
          <h2 className="section-title">How I work</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-panel rounded-[28px] p-6 md:p-7"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/35">
                {step.number}
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                {step.title}
              </h3>

              <p className="mt-4 max-w-[540px] text-[15px] leading-7 text-white/62">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}