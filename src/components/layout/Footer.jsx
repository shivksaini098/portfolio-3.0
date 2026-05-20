function Footer({ brand, links, footerMessage, socialLinks }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-lg font-bold text-white">{brand.name}</p>
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">{brand.role}</p>
          <p className="text-sm leading-7 text-slate-400">{footerMessage}</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <a href={`mailto:${socialLinks.email}`} className="transition hover:text-white">
              {socialLinks.email}
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
              LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
              GitHub
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="transition hover:text-white">
              X
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-600">
            Copyright {new Date().getFullYear()} all rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
