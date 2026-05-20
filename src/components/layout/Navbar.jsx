import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar({ brand, links, resumeUrl }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition duration-300 sm:px-6 ${
          isScrolled
            ? 'border-white/15 bg-slate-950/80 shadow-[0_22px_60px_-35px_rgba(15,23,42,0.95)] backdrop-blur-2xl'
            : 'border-white/10 bg-slate-950/45 backdrop-blur-xl'
        }`}
      >
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-white to-slate-300 text-sm font-extrabold text-slate-950">
            {brand.initials}
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{brand.name}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{brand.role}</p>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="cta-secondary px-4 py-2"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="cta-primary px-5 py-2"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-white/20 hover:bg-white/[0.08] lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/10 bg-slate-950/95 p-5 shadow-[0_30px_90px_-45px_rgba(2,6,23,0.95)] backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-white/10 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="cta-secondary rounded-2xl px-4 py-3"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="cta-primary rounded-2xl px-4 py-3"
            >
              Hire Me
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
