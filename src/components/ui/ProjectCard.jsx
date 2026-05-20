import { FaArrowRight, FaPlay } from 'react-icons/fa'

function ProjectCard({ project }) {
  return (
    <article className="group grid gap-8 rounded-[34px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_90px_-60px_rgba(255,255,255,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:p-8 lg:grid-cols-[1.05fr_1fr]">
      <div className="space-y-5">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80">
          <div className="relative aspect-[16/10]">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md">
              <FaPlay className="text-[10px]" />
              {project.previewLabel}
            </div>
            <div className="absolute inset-x-5 bottom-5">
              <span className="inline-flex rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300 backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Tech stack</span>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Role</span>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm leading-7 text-slate-300">{project.role}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6">
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
            <p className="text-base leading-8 text-slate-300">{project.outcome}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                Problem
              </p>
              <p className="text-sm leading-7 text-slate-300">{project.problem}</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                Solution
              </p>
              <p className="text-sm leading-7 text-slate-300">{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="cta-primary gap-2 px-5 py-3"
          >
            Visit Live Project
            <FaArrowRight className="text-xs" />
          </a>
          <a
            href="#contact"
            className="cta-secondary gap-2 px-5 py-3"
          >
            Discuss Similar Work
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
