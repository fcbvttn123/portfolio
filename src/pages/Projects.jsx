import { ProjectCard } from "../components/ProjectCard"
import { projectsArr } from "../data/projects"

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-10">
      {projectsArr.map((item) => (
        <ProjectCard
          projectImageName={item.img_name}
          techStack={item.tech_stack}
          projectName={item.project_name}
          gitHubUrl={item.github}
          demoUrl={item.url}
        />
      ))}
    </div>
  )
}
