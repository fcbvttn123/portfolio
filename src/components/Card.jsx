import { FaGithub } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { DiMongodb } from "react-icons/di"
import { DiMysql } from "react-icons/di"

export function Card() {
  return (
    <div>
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
      <div className="mt-8 flex items-center justify-center gap-2">
        <FaReact className="text-3xl text-color" />
        <FaNodeJs className="text-3xl text-color" />
        <DiMongodb className="text-3xl text-color" />
        <DiMysql className="text-3xl text-color" />
      </div>
    </div>
  )
}
