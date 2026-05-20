import SectionHeading from '../ui/SectionHeading'

function Services({ services }) {
  return (
    <section id="services" className="section-anchor section-shell">
      <div className="section-container space-y-12">
        <SectionHeading
          eyebrow="Services"
          title="Simple offers clients can understand fast"
          description="I trimmed this down to the work areas most likely to convert: multiplayer systems, mobile production, and focused feature sprints."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_28px_80px_-60px_rgba(255,255,255,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Icon className="text-xl" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-base leading-8 text-slate-300">{service.description}</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
