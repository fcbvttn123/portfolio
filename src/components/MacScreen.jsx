export function MacScreen({ children, className }) {
  return (
    <div
      className={`bg-gray-300 overflow-hidden px-3 py-1 text-gray-900 border-2 h-full ${className}`}
    >
      <div className="h-[30px] w-[20%] flex items-center gap-[8px]">
        <div className="w-[9px] aspect-square rounded-full bg-red-600"></div>
        <div className="w-[9px] aspect-square rounded-full bg-yellow-600"></div>
        <div className="w-[9px] aspect-square rounded-full bg-green-700"></div>
      </div>
      <code>{children}</code>
    </div>
  )
}
