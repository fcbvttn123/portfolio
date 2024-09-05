import { useState } from "react"
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
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      key={project_name}
      className="project-card flex flex-col min-[925px]:flex-row md:items-stretch md:justify-around gap-y-[20px] gap-x-[20px] mb-[100px] sm:pl-[50px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[500px] bg-gray-900 z-10">
        <div className="flex items-center gap-x-4 mb-4">
          <h2
            className={`text-2xl transition-all duration-500 fancy-text-style ${
              isHovered && "text-teal-200 drop-shadow-green"
            }`}
          >
            {project_name}
          </h2>
          <div
            className={`flex items-center transition-all duration-500 ${
              isHovered ? "gap-x-4" : "gap-x-2"
            }`}
          >
            <a href={github} target="_blank">
              <FaGithub
                className={`text-xl transition-all duration-500 fancy-text-style ${
                  isHovered && "scale-150 text-teal-200 drop-shadow-green"
                }`}
              />
            </a>
            <a href={url} target="_blank">
              <IoGlobeSharp
                className={`text-xl transition-all duration-500 fancy-text-style ${
                  isHovered && "scale-150 text-teal-200 drop-shadow-green"
                }`}
              />
            </a>
          </div>
        </div>
        <p>{project_summary}</p>
        <div className="flex items-center gap-x-4 mt-4">
          {tech_stack.map((tech) => (
            <p
              key={tech}
              className="px-3 py-1 rounded-2xl bg-[rgba(6,78,59,0.3)] text-teal-200"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
      <img
        src={`./projects-images/${img_name}`}
        className={`w-[400px] object-cover transition-all duration-500 ${
          isHovered && "scale-110 xl:scale-150"
        }`}
      />
    </div>
  )
}
