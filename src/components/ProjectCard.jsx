import { FaGithub } from "react-icons/fa"
import { IoGlobeSharp } from "react-icons/io5"

export function ProjectCard({
  project_name,
  github,
  url,
  project_summary,
  tech_stack,
  img_name,
}) {
  return (
    <div>
      <div
        key={project_name}
        className="flex items-stretch justify-around gap-x-[20px] mb-[100px]"
      >
        <div className="max-w-[500px]">
          <div className="flex items-center gap-x-4 mb-4">
            <h2 className="text-2xl">{project_name}</h2>
            <div className="flex items-center gap-x-2">
              <a href={github} target="_blank">
                <FaGithub className="text-xl" />
              </a>
              <a href={url} target="_blank">
                <IoGlobeSharp className="text-xl" />
              </a>
            </div>
          </div>
          <p>{project_summary}</p>
          <div className="flex items-center gap-x-4 mt-4">
            {tech_stack.map((tech) => (
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
          src={`./projects-images/${img_name}`}
          className="w-[400px] object-cover"
        />
      </div>
    </div>
  )
}
