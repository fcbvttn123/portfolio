import { MacScreen } from "../components/MacScreen"
import { FaGithub } from "react-icons/fa"
import { AiOutlineGlobal } from "react-icons/ai"
import { projectsArr } from "../data/projects"

export function ProjectCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6">
      {projectsArr.map((item) => (
        <MacScreen className="max-w-[530px] w-full cursor-pointer transition-all duration-500 hover:scale-105">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-5">
            <div className="bg-gray-900 rounded-xl p-3 flex flex-wrap gap-x-2 justify-between">
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
              <img
                src="./images/react-blw.png"
                className="w-7 h-7 object-cover"
              />
            </div>
            <div
              className="bg-gray-900 rounded-xl row-span-2 p-3 overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url("./projects-images/${item.img_name}")`,
              }}
            ></div>
            <div className="bg-gray-900 rounded-xl px-4 py-3">
              <p className="text-lg font-extrabold mb-4">{item.project_name}</p>
              <div className="flex items-center gap-x-2 mt-2">
                <a href="https://github.com/fcbvttn123" target="_blank">
                  <FaGithub className="text-3xl cursor-pointer transition-all duration-500 hover:scale-110" />
                </a>
                <a href={item.url} target="_blank">
                  <AiOutlineGlobal className="text-3xl cursor-pointer transition-all duration-500 hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </MacScreen>
      ))}
    </div>
  )
}
