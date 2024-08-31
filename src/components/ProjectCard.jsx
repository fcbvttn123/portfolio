import { MacScreen } from "../components/MacScreen"
import { FaGithub } from "react-icons/fa"
import { AiOutlineGlobal } from "react-icons/ai"

export function ProjectCard() {
  return (
    <MacScreen className="max-w-[500px] cursor-pointer transition-all duration-500 hover:scale-105">
      <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-5">
        <div className="bg-gray-900 rounded-xl p-3 flex flex-wrap gap-x-2 justify-between">
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
          <img src="./images/react-blw.png" className="w-7 h-7 object-cover" />
        </div>
        <div className=" bg-gray-900 rounded-xl row-span-2 p-3"></div>
        <div className="bg-gray-900 rounded-xl px-4 py-3">
          <p className="text-lg font-extrabold mb-4">Recipe Sharing App</p>
          <div className="flex items-center gap-x-2 mt-2">
            <a href="https://github.com/fcbvttn123" target="_blank">
              <FaGithub className="text-3xl cursor-pointer transition-all duration-500 hover:scale-110" />
            </a>
            <a href="https://www.google.ca/" target="_blank">
              <AiOutlineGlobal className="text-3xl cursor-pointer transition-all duration-500 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </MacScreen>
  )
}
