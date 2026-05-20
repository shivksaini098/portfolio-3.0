import SectionHeading from '../ui/SectionHeading'

function WhyHireMe({ points, proofStrip }) {
  return (
    <section id="why-hire-me" className="section-anchor section-shell">
      <div className="section-container space-y-12">
        <SectionHeading
          eyebrow="Why Hire Me"
          title="Less noise. More trust."
          description="This section is now doing one job: helping a client feel confident that you can join a real product team and deliver without drama."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {points.map((point) => {
            const Icon = point.icon

            return (
              <article
                key={point.title}
                className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">{point.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{point.description}</p>
              </article>
            )
          })}
        </div>

        <div className="rounded-[30px] border border-white/10 bg-black/20 px-6 py-5 backdrop-blur-md">
          <div className="grid gap-4 lg:grid-cols-3">
            {proofStrip.map((item) => (
              <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-sm font-medium text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyHireMe
