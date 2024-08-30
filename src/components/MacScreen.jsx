export function MacScreen({ children, className }) {
  return (
    <div
      className={`bg-[#fff2] overflow-hidden px-5 py-4 text-gray-300 h-full rounded-xl ${className}`}
    >
      <div className="w-[20%] flex items-center gap-[8px]">
        <div className="w-[9px] aspect-square rounded-full bg-red-600"></div>
        <div className="w-[9px] aspect-square rounded-full bg-yellow-600"></div>
        <div className="w-[9px] aspect-square rounded-full bg-green-700"></div>
      </div>
      {children}
    </div>
  )
}
