import { FaGithub } from "react-icons/fa"

export function Card() {
  return (
    <div className="card-container">
      {/* <button
        data-text="Tech Stack"
        style={{ "--r": "-15" }}
        className="card-glass"
        onClick={(e) => console.log("Tech Stack")}
      ></button> */}
      <button
        data-text="GitHub"
        // style={{ "--r": "5" }}
        style={{ "--r": "-15" }}
        className="card-glass"
        onClick={(e) => console.log("GitHub")}
      >
        <FaGithub className="text-3xl" />
      </button>
      <button
        data-text="Demo"
        style={{ "--r": "25" }}
        className="card-glass"
        onClick={(e) => console.log("Demo")}
      ></button>
    </div>
  )
}
