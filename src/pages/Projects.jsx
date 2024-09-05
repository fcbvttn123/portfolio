import { projectsArr } from "../data/projects"
import { ProjectCard } from "../components/ProjectCard"

export function Projects() {
  return (
    <div className="text-color border-l-2 border-gray-300 pl-5">
      <h1 className="mb-[60px] text-4xl font-bold">Projects</h1>
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
