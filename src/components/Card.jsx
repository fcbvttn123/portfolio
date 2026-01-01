import { forwardRef } from "react";

// export function Card({ children, className, ...props }) {
//   return (
//     <div className={`card ${className}`} {...props}>
//       <div className="card-overlay"></div>
//       <div className="card-inner">{children}</div>
//     </div>
//   );
// }

export const Card = forwardRef(function Card(
  { className = "", children, ...props },
  ref
) {
  return (
    <div ref={ref} className={`card ${className}`} {...props}>
      <div className="card-overlay"></div>
      <div className="card-inner">{children}</div>
    </div>
  );
});
