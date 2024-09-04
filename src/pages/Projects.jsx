import { ProjectCard } from "../components/ProjectCard"
import { projectsArr } from "../data/projects"

export function Projects() {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-4 gap-y-10">
    <div className="text-color">
      <h1 className="mb-20 text-4xl font-bold">Projects</h1>
      <div>
        {projectsArr.map((project) => (
          <div className="flex items-start justify-between mb-10">
            <div>
              <h2 className="text-2xl mb-4">{project.project_name}</h2>
              <ul>
                {project.project_desc.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <img
              src={`./projects-images/${project.img_name}`}
              className="w-[400px] h-[200px] object-cover"
            />
          </div>
        ))}
      </div>
      {/* {projectsArr.map((item) => (
        <ProjectCard
          key={item.img_name}
          projectImageName={item.img_name}
          techStack={item.tech_stack}
          projectName={item.project_name}
          gitHubUrl={item.github}
          demoUrl={item.url}
        />
      ))} */}
    </div>
  )
}
