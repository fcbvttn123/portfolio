import { MacScreen } from "../components/MacScreen"
import { FaGithub } from "react-icons/fa"
import { AiOutlineGlobal } from "react-icons/ai"

export function ProjectCard({
  projectName,
  projectImageName,
  techStack,
  gitHubUrl,
  demoUrl,
}) {
  return (
    <MacScreen className="max-w-[530px] w-full cursor-pointer transition-all duration-500 hover:scale-105">
      <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-5">
        <div
          className="bg-gray-900 rounded-xl flex flex-wrap gap-x-2 justify-between overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url("./projects-images/${projectImageName}")`,
          }}
        ></div>
        <div className="bg-gray-900 rounded-xl row-span-2 p-3 flex flex-wrap items-start content-start gap-3">
          {techStack.map((techName) => (
            <p
              key={techName}
              className="border-2 border-gray-300 rounded-2xl px-2 py-1 bg-[#fff2]"
            >
              {techName}
            </p>
          ))}
        </div>
        <div className="bg-gray-900 rounded-xl px-4 py-3">
          <p className="text-lg font-extrabold mb-4">{projectName}</p>
          <div className="flex items-center gap-x-2 mt-2">
            <a href={gitHubUrl} target="_blank">
              <FaGithub className="text-3xl cursor-pointer transition-all duration-500 hover:scale-110" />
            </a>
            <a href={demoUrl} target="_blank">
              <AiOutlineGlobal className="text-3xl cursor-pointer transition-all duration-500 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </MacScreen>
  )
}
