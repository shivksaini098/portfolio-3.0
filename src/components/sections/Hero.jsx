import { FaArrowRight } from 'react-icons/fa'

function Hero({ hero }) {
  return (
    <section id="home" className="section-anchor relative overflow-hidden pt-32 pb-16 sm:pb-20 lg:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-4rem] top-[-3rem] h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-[-4rem] top-20 h-80 w-80 rounded-full bg-amber-200/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <div className="space-y-8">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-300">
              {hero.eyebrow}
            </span>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.7rem]">
                {hero.headline}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{hero.description}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="cta-primary gap-2 px-6 py-3.5"
            >
              {hero.primaryCta.label}
              <FaArrowRight className="text-xs" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="cta-secondary px-6 py-3.5"
            >
              {hero.secondaryCta.label}
            </a>
            <a
              href={hero.tertiaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-2 py-3.5 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {hero.tertiaryCta.label}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-white/10 bg-black/15 p-4 backdrop-blur-md">
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_35px_100px_-50px_rgba(2,6,23,0.95)] backdrop-blur-2xl">
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-900">
              <img src={hero.image} alt="Shiv Kumar Saini" className="aspect-[4/5] h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-[28px] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-300">
                  {hero.availability}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Multiplayer systems, mobile polish, and features that feel ready for production.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[26px] border border-white/10 bg-black/20 p-4 backdrop-blur-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
              Best fit for
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Founders, studios, and agencies that need a dependable game developer for feature work,
              multiplayer systems, or mobile product polish.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
