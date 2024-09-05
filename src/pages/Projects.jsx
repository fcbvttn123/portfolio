import { projectsArr } from "../data/projects"
import { ProjectCard } from "../components/ProjectCard"

export function Projects() {
  return (
    <div className="text-color sm:border-l-2 sm:border-gray-300 mt-8">
      <h1 className="mb-[60px] text-4xl font-bold sm:pl-5">Projects</h1>
      <div>
        {projectsArr.map((project) => (
          <ProjectCard
            key={project.project_name}
            project_name={project.project_name}
            github={project.github}
            url={project.url}
            project_summary={project.project_summary}
            tech_stack={project.tech_stack}
            img_name={project.img_name}
          />
        ))}
      </div>
    </div>
  )
}
