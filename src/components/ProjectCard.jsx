export function ProjectCard({ className }) {
  return (
    <div
      className={`bg-[#fff2] w-[450px] h-[340px] overflow-hidden px-5 py-2 text-gray-300 rounded-xl ${className}`}
    >
      <div className="h-[30px] w-[20%] flex items-center gap-[8px]">
        <div className="w-[9px] aspect-square rounded-full bg-red-600"></div>
        <div className="w-[9px] aspect-square rounded-full bg-yellow-600"></div>
        <div className="w-[9px] aspect-square rounded-full bg-green-700"></div>
      </div>
      <div className="mt-4 flex gap-x-4">
        <div>
          <div className="w-[180px] h-[180px] bg-gray-900 rounded-xl"></div>
          <div className="w-[180px] h-[50px] bg-gray-900 rounded-xl mt-6"></div>
        </div>
        <div className="h-[254px] w-[100%] bg-gray-900 rounded-xl"></div>
      </div>
    </div>
  )
}
