import { MacScreen } from "../components/MacScreen"

export function ProjectCard() {
  return (
    <MacScreen className="max-w-[450px]">
      <div className="mt-4 flex gap-x-4">
        <div>
          <div className="w-[180px] h-[180px] bg-gray-900 rounded-xl"></div>
          <div className="w-[180px] h-[50px] bg-gray-900 rounded-xl mt-6"></div>
        </div>
        <div className="h-[254px] w-[100%] bg-gray-900 rounded-xl"></div>
      </div>
    </MacScreen>
  )
}
