import { MacScreen } from "../components/MacScreen"
import { FaGithub } from "react-icons/fa"
import { AiOutlineGlobal } from "react-icons/ai"

export function ProjectCard() {
  return (
    <MacScreen className="max-w-[480px]">
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
          <p>Project Name</p>
          <div className="flex items-center gap-x-2 mt-2">
            <FaGithub className="text-xl" />
            <AiOutlineGlobal className="text-xl" />
          </div>
        </div>
      </div>
    </MacScreen>
  )
}
