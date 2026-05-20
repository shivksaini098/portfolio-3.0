import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'

const initialForm = {
  name: '',
  email: '',
  projectType: '',
  details: '',
}

function Contact({ contact }) {
  const [formState, setFormState] = useState(initialForm)
  const [hasOpenedEmail, setHasOpenedEmail] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = formState.projectType
      ? `${formState.projectType} inquiry from ${formState.name || 'a potential client'}`
      : `Project inquiry from ${formState.name || 'a potential client'}`

    const body = [
      `Name: ${formState.name || '-'}`,
      `Email: ${formState.email || '-'}`,
      `Project type: ${formState.projectType || '-'}`,
      '',
      'Project details:',
      formState.details || '-',
    ].join('\n')

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setHasOpenedEmail(true)
  }

  return (
    <section id="contact" className="section-anchor section-shell">
      <div className="section-container space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Start with a clear brief and let the rest feel easy"
          description="I simplified the contact area too: fewer boxes, one clear form, and direct details that feel professional instead of busy."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_28px_80px_-60px_rgba(255,255,255,0.18)] backdrop-blur-xl">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Direct contact</p>
              <h3 className="text-2xl font-bold text-white">Open to Upwork contracts, freelance sprints, and long-term collaboration</h3>
              <p className="text-base leading-8 text-slate-300">
                Share your feature scope, current stack, and delivery timeline. I can jump into an active project or help plan a new game feature from scratch.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="rounded-[24px] border border-white/10 bg-black/20 p-5 transition hover:border-white/20"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-white">
                    <FaEnvelope />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Email</p>
                    <p className="mt-2 text-base text-white">{contact.email}</p>
                  </div>
                </div>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="rounded-[24px] border border-white/10 bg-black/20 p-5 transition hover:border-white/20"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-white">
                    <FaPhone />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Phone</p>
                    <p className="mt-2 text-base text-white">{contact.phone}</p>
                  </div>
                </div>
              </a>

              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-white">
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Location</p>
                    <p className="mt-2 text-base text-white">{contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Best projects to bring</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Multiplayer features, mobile game production support, UI polish, live product fixes,
                and scoped feature sprints for active teams.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
            <div className="mb-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Quick inquiry form</p>
              <h3 className="text-2xl font-bold text-white">Send a brief and open a pre-filled email draft</h3>
              <p className="text-base leading-8 text-slate-300">
                This keeps contact friction low while preserving your existing Vite-only setup without adding backend form handling.
              </p>
            </div>

            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-300">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/20"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/20"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-300">Project type</span>
                <input
                  type="text"
                  name="projectType"
                  value={formState.projectType}
                  onChange={handleChange}
                  placeholder="Multiplayer feature, mobile optimization, live game support..."
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/20"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-300">Project details</span>
                <textarea
                  name="details"
                  rows="6"
                  value={formState.details}
                  onChange={handleChange}
                  placeholder="Tell me what you need built, the current stack, and your target timeline."
                  className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/20"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="cta-primary px-6 py-3.5"
                >
                  Open Email Draft
                </button>
                <a
                  href={contact.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-secondary px-6 py-3.5"
                >
                  View Resume
                </a>
              </div>
            </form>

            {hasOpenedEmail ? (
              <p className="mt-5 text-sm leading-7 text-emerald-200">
                Your email client should open with the project details pre-filled. If it does not, use the direct email link on the left.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
