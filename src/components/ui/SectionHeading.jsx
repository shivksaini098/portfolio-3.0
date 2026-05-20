const alignmentClasses = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignmentClasses[align] ?? alignmentClasses.left}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
