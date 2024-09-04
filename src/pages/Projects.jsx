import { projectsArr } from "../data/projects"
import { FaGithub } from "react-icons/fa"
import { IoGlobeSharp } from "react-icons/io5"

export function Projects() {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-4 gap-y-10">
    <div className="text-color">
      <h1 className="mb-[60px] text-4xl font-bold">Projects</h1>
      <div>
        {projectsArr.map((project) => (
          <div
            key={project.project_name}
            className="flex items-stretch justify-between gap-x-[20px] mb-[100px]"
          >
            <div className="max-w-[500px]">
              <div className="flex items-center gap-x-4 mb-4">
                <h2 className="text-2xl">{project.project_name}</h2>
                <div className="flex items-center gap-x-2">
                  <a href={project.github} target="_blank">
                    <FaGithub className="text-xl" />
                  </a>
                  <a href={project.url} target="_blank">
                    <IoGlobeSharp className="text-xl" />
                  </a>
                </div>
              </div>
              <p>{project.project_summary}</p>
              <div className="flex items-center gap-x-4 mt-4">
                {project.tech_stack.map((tech) => (
                  <p
                    key={tech}
                    className="px-3 py-1 rounded-2xl bg-[rgba(6,78,59,0.6)] text-teal-100"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
            <img
              src={`./projects-images/${project.img_name}`}
              className="w-[400px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
