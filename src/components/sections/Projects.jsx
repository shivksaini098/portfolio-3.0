import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'

function Projects({ projects }) {
  return (
    <section id="projects" className="section-anchor section-shell">
      <div className="section-container space-y-12">
        <SectionHeading
          eyebrow="Projects"
          title="Two focused case studies are stronger than a long gallery"
          description="Each card is intentionally shorter now, so a client can understand the product context and your contribution without reading half the page."
        />

        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
